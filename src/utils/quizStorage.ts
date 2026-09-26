import { Question, QuestionState, Book } from '../types/quiz';

const ANSWERED_BOOKS_STORAGE_KEY = 'bookquest_answered_books_v1';

export interface SavedBookRecord {
  bookId: string;
  isCompleted: boolean;
  scorePercent: number;
  goldStars: number;
  silverStars: number;
  lastUpdated: number;
  questions: Question[]; // Exact questions & option ordering as preserved when answered
  questionStates: Record<number, QuestionState>;
}

export function getSavedAnsweredBooks(): Record<string, SavedBookRecord> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(ANSWERED_BOOKS_STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to load answered books from localStorage:', err);
    return {};
  }
}

export function isBookAnswered(bookId: string): boolean {
  const records = getSavedAnsweredBooks();
  const rec = records[bookId];
  if (!rec) return false;
  if (rec.isCompleted) return true;
  // If at least one question has been answered (status is not 'unanswered')
  return Object.values(rec.questionStates || {}).some(
    (st) => st.status !== 'unanswered'
  );
}

export function isBookCompleted(bookId: string): boolean {
  const records = getSavedAnsweredBooks();
  return Boolean(records[bookId]?.isCompleted);
}

export function getBookRecord(bookId: string): SavedBookRecord | null {
  const records = getSavedAnsweredBooks();
  return records[bookId] || null;
}

export function saveBookAnswerProgress(
  book: Book,
  questionStates: Record<number, QuestionState>,
  isCompleted: boolean,
  goldStars: number,
  silverStars: number
): void {
  if (typeof window === 'undefined') return;
  try {
    const records = getSavedAnsweredBooks();
    const existing = records[book.id];

    // Compute score percentage
    const maxPoints = book.questions.length * 10;
    const totalPoints = goldStars * 10 + silverStars * 5;
    const scorePercent = maxPoints > 0 ? Math.round((totalPoints / maxPoints) * 100) : 0;

    records[book.id] = {
      bookId: book.id,
      isCompleted: isCompleted || Boolean(existing?.isCompleted),
      scorePercent: isCompleted ? scorePercent : (existing?.scorePercent || scorePercent),
      goldStars,
      silverStars,
      lastUpdated: Date.now(),
      // Preserve the questions used for this book so options/answers never change once answered
      questions: existing?.questions || book.questions,
      questionStates,
    };

    localStorage.setItem(ANSWERED_BOOKS_STORAGE_KEY, JSON.stringify(records));
  } catch (err) {
    console.error('Failed to save book progress to localStorage:', err);
  }
}

export function resetBookAnswerProgress(bookId: string): void {
  if (typeof window === 'undefined') return;
  try {
    const records = getSavedAnsweredBooks();
    delete records[bookId];
    localStorage.setItem(ANSWERED_BOOKS_STORAGE_KEY, JSON.stringify(records));
  } catch (err) {
    console.error('Failed to reset book progress:', err);
  }
}
