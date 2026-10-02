import {
  collection,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
import { Book, QuestionState } from '../types/quiz';
import { getDb } from '../config/firebase';

const PLAYERS_COLLECTION = 'bq_players';
const RESULTS_COLLECTION = 'bq_results';

export interface Player {
  id: string;
  name: string;
}

export interface AnswerDetail {
  questionId: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  selectedOptionIndex: number | null;
  secondOptionIndex: number | null;
  status: QuestionState['status'];
}

export interface QuizResultRecord {
  id: string;
  playerId: string;
  playerName: string;
  bookId: string;
  bookTitle: string;
  totalQuestions: number;
  correctFirstTry: number;
  correctSecondTry: number;
  missed: number;
  scorePercent: number;
  goldStars: number;
  silverStars: number;
  answers: AnswerDetail[];
  startedAt: unknown;
  completedAt: unknown;
}

export interface PlayerSummary extends Player {
  quizCount: number;
  lastPlayedAt: unknown;
}

/** Normalize a name for identity matching (trim + case-insensitive). */
export function normalizeName(name: string): string {
  return name.trim().toLowerCase();
}

/**
 * Find the player with this name (case-insensitive) or create one.
 * Returns null when cloud sync is unavailable — the quiz still works.
 */
export async function getOrCreatePlayer(name: string): Promise<Player | null> {
  const db = await getDb();
  const clean = name.trim();
  if (!db || !clean) return null;
  const nameLower = normalizeName(clean);
  try {
    const players = collection(db, PLAYERS_COLLECTION);
    const snap = await getDocs(
      query(players, where('nameLower', '==', nameLower), limit(1))
    );
    if (!snap.empty) {
      const found = snap.docs[0];
      try {
        await updateDoc(found.ref, { lastPlayedAt: serverTimestamp() });
      } catch {
        // non-fatal
      }
      const data = found.data();
      return { id: found.id, name: (data.name as string) || clean };
    }
    const ref = doc(players);
    await setDoc(ref, {
      name: clean,
      nameLower,
      createdAt: serverTimestamp(),
      lastPlayedAt: serverTimestamp(),
    });
    return { id: ref.id, name: clean };
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('[bookquiz] getOrCreatePlayer failed:', err);
    return null;
  }
}

export interface SaveResultInput {
  player: Player | null;
  playerName: string;
  book: Book;
  questionStates: Record<number, QuestionState>;
  goldStars: number;
  silverStars: number;
}

/** Persist one completed quiz to Firestore. Best-effort: never throws. */
export async function saveQuizResult(input: SaveResultInput): Promise<boolean> {
  const db = await getDb();
  if (!db) return false;
  const { player, playerName, book, questionStates, goldStars, silverStars } =
    input;
  try {
    let correctFirstTry = 0;
    let correctSecondTry = 0;
    let missed = 0;
    const answers: AnswerDetail[] = book.questions.map((q, idx) => {
      const st = questionStates[idx];
      const status = st?.status || 'unanswered';
      if (status === 'correct_first_try') correctFirstTry++;
      else if (status === 'correct_second_try') correctSecondTry++;
      else missed++;
      return {
        questionId: q.id,
        question: q.question,
        options: q.options,
        correctAnswerIndex: q.correctAnswerIndex,
        selectedOptionIndex: st?.selectedOptionIndex ?? null,
        secondOptionIndex: st?.secondOptionIndex ?? null,
        status,
      };
    });
    const totalQuestions = book.questions.length;
    const maxPoints = totalQuestions * 10;
    const totalPoints = goldStars * 10 + silverStars * 5;
    const scorePercent =
      maxPoints > 0 ? Math.round((totalPoints / maxPoints) * 100) : 0;

    const ref = doc(collection(db, RESULTS_COLLECTION));
    await setDoc(ref, {
      playerId: player?.id || `local:${normalizeName(playerName)}`,
      playerName: player?.name || playerName.trim(),
      bookId: book.id,
      bookTitle: book.title,
      totalQuestions,
      correctFirstTry,
      correctSecondTry,
      missed,
      scorePercent,
      goldStars,
      silverStars,
      answers,
      startedAt: serverTimestamp(),
      completedAt: serverTimestamp(),
    });
    return true;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('[bookquiz] saveQuizResult failed:', err);
    return false;
  }
}

/** All players with quiz counts, newest activity first. */
export async function listPlayers(): Promise<PlayerSummary[]> {
  const db = await getDb();
  if (!db) return [];
  const snap = await getDocs(
    query(
      collection(db, PLAYERS_COLLECTION),
      orderBy('lastPlayedAt', 'desc'),
      limit(100)
    )
  );
  const players: PlayerSummary[] = [];
  for (const d of snap.docs) {
    const data = d.data();
    let quizCount = 0;
    try {
      const rs = await getDocs(
        query(
          collection(db, RESULTS_COLLECTION),
          where('playerId', '==', d.id),
          limit(500)
        )
      );
      quizCount = rs.size;
    } catch {
      quizCount = 0;
    }
    players.push({
      id: d.id,
      name: (data.name as string) || 'Unnamed',
      quizCount,
      lastPlayedAt: data.lastPlayedAt,
    });
  }
  return players;
}

/** One player's quiz history, newest first. */
export async function getPlayerResults(
  playerId: string
): Promise<QuizResultRecord[]> {
  const db = await getDb();
  if (!db) return [];
  const snap = await getDocs(
    query(
      collection(db, RESULTS_COLLECTION),
      where('playerId', '==', playerId),
      limit(200)
    )
  );
  const toMillis = (v: unknown): number => {
    try {
      const t = v as { toMillis?: () => number } | null;
      if (t && typeof t.toMillis === 'function') return t.toMillis();
    } catch {
      // ignore
    }
    return 0;
  };
  return snap.docs
    .map((d) => {
      const data = d.data();
      return {
        id: d.id,
        playerId: data.playerId as string,
        playerName: data.playerName as string,
        bookId: data.bookId as string,
        bookTitle: data.bookTitle as string,
        totalQuestions: data.totalQuestions as number,
        correctFirstTry: data.correctFirstTry as number,
        correctSecondTry: data.correctSecondTry as number,
        missed: data.missed as number,
        scorePercent: data.scorePercent as number,
        goldStars: data.goldStars as number,
        silverStars: data.silverStars as number,
        answers: (data.answers as AnswerDetail[]) || [],
        startedAt: data.startedAt,
        completedAt: data.completedAt,
      };
    })
    .sort((a, b) => toMillis(b.completedAt) - toMillis(a.completedAt));
}

/** Best-effort count for the admin empty-state. Throws when offline. */
export async function countResults(): Promise<number> {
  const db = await getDb();
  if (!db) return 0;
  const snap = await getDocs(
    query(collection(db, RESULTS_COLLECTION), limit(1))
  );
  return snap.size;
}
