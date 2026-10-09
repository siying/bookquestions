import React, { useState, useEffect, useRef } from 'react';
import { Book, QuestionState } from './types/quiz';
import { DEFAULT_BOOKS } from './data/defaultBooks';
import { soundManager } from './utils/audio';
import { speechManager } from './utils/speech';
import {
  getSavedAnsweredBooks,
  saveBookAnswerProgress,
  SavedBookRecord
} from './utils/quizStorage';
import type { Player } from './utils/playerRecords';
import { Navbar } from './components/Navbar';
import { BookSelector } from './components/BookSelector';
import { QuizCard } from './components/QuizCard';
import { QuizSummary } from './components/QuizSummary';
import { NamePrompt, rememberPlayerName } from './components/NamePrompt';

const AdminPage = React.lazy(() =>
  import('./components/AdminPage').then((m) => ({ default: m.AdminPage }))
);

const SOUND_STORAGE_KEY = 'bookquest_sound_enabled';
const SPEECH_STORAGE_KEY = 'bookquest_speech_enabled';

export const App: React.FC = () => {
  // Books library
  const [books] = useState<Book[]>(DEFAULT_BOOKS);

  // Persistent answered books records
  const [savedBooks, setSavedBooks] = useState<Record<string, SavedBookRecord>>(() => getSavedAnsweredBooks());

  // Active quiz state
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questionStates, setQuestionStates] = useState<Record<number, QuestionState>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  // Player identity (asked before each quiz)
  const [pendingBook, setPendingBook] = useState<Book | null>(null);
  const [player, setPlayer] = useState<Player | null>(null);
  const [playerName, setPlayerName] = useState('');

  // Admin view
  const [showAdmin, setShowAdmin] = useState(false);

  // After a Google redirect sign-in, the browser reloads the app at the
  // main page (navigation is state-based, not URL-based). If a sign-in was
  // in progress, reopen the admin view so the pending redirect result is
  // processed and the sign-in completes instead of silently dropping.
  // (Without this, the login appears to succeed at Google but the app
  //  returns to the main page signed out, and the next visit asks to
  //  log in again.)
  useEffect(() => {
    try {
      if (sessionStorage.getItem('bookquiz:returnToAdmin') === '1') {
        sessionStorage.removeItem('bookquiz:returnToAdmin');
        setShowAdmin(true);
      }
    } catch {
      // ignore storage failures
    }
  }, []);

  // Guards the Firestore save so one completion writes exactly one record
  const savedAttemptRef = useRef<string | null>(null);
  const attemptRef = useRef(0);
  // Tracks the name of the most recent handleNameStart call, so a slow
  // player lookup for a previous name can't overwrite the current player.
  const currentNameRef = useRef('');

  // Audio toggles
  const [soundEnabled, setSoundEnabled] = useState(() => {
    const saved = localStorage.getItem(SOUND_STORAGE_KEY);
    return saved !== null ? saved === 'true' : true;
  });

  const [speechEnabled, setSpeechEnabled] = useState(() => {
    const saved = localStorage.getItem(SPEECH_STORAGE_KEY);
    return saved !== null ? saved === 'true' : true;
  });

  useEffect(() => {
    soundManager.enabled = soundEnabled;
    localStorage.setItem(SOUND_STORAGE_KEY, String(soundEnabled));
  }, [soundEnabled]);

  useEffect(() => {
    speechManager.enabled = speechEnabled;
    localStorage.setItem(SPEECH_STORAGE_KEY, String(speechEnabled));
  }, [speechEnabled]);

  // Book picked from the gallery -> ask who is answering first
  const handleSelectBook = (book: Book) => {
    setPendingBook(book);
    setShowAdmin(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Name submitted -> look up (or create) the player, then start the quiz
  const handleNameStart = (name: string) => {
    if (!pendingBook) return;
    const book = pendingBook;
    setPendingBook(null);
    setPlayerName(name);
    // Reset the cached player immediately: the previous player's object must
    // never be associated with a quiz started under a different name.
    setPlayer(null);
    currentNameRef.current = name.trim().toLowerCase();
    rememberPlayerName(name);
    // Resolve the cloud player profile in the background; the quiz starts now.
    // Guard against a slow lookup for a previous name resolving late.
    const startedName = currentNameRef.current;
    import('./utils/playerRecords').then(({ getOrCreatePlayer }) =>
      getOrCreatePlayer(name).then((p) => {
        if (p && currentNameRef.current === startedName) setPlayer(p);
      })
    );
    startQuizForBook(book);
    attemptRef.current += 1;
    savedAttemptRef.current = null;
  };

  // Start quiz for a book (shared prep logic)
  const startQuizForBook = (book: Book) => {
    // Check if book was already answered previously:
    // If so, preserve its exact questions & options ordering so it's never modified
    const savedRecord = getSavedAnsweredBooks()[book.id];
    const bookToUse: Book = savedRecord && savedRecord.questions && savedRecord.questions.length > 0
      ? { ...book, questions: savedRecord.questions }
      : book;

    setSelectedBook(bookToUse);
    setIsCompleted(false);

    let initialStates: Record<number, QuestionState> = {};
    let startIndex = 0;

    // If previously in progress (not completed), resume saved question answers
    if (savedRecord && savedRecord.questionStates && !savedRecord.isCompleted) {
      initialStates = { ...savedRecord.questionStates };
      const firstUnanswered = bookToUse.questions.findIndex((_, idx) => {
        const st = initialStates[idx];
        return !st || st.status === 'unanswered';
      });
      if (firstUnanswered !== -1) {
        startIndex = firstUnanswered;
      }
    } else {
      // Start fresh
      bookToUse.questions.forEach((_, idx) => {
        initialStates[idx] = {
          status: 'unanswered',
          selectedOptionIndex: null,
          secondOptionIndex: null,
          wrongOptions: [],
        };
      });
    }

    setQuestionStates(initialStates);
    setCurrentIndex(startIndex);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Restart active quiz
  const handleRestartQuiz = () => {
    if (!selectedBook) return;
    const initialStates: Record<number, QuestionState> = {};
    selectedBook.questions.forEach((_, idx) => {
      initialStates[idx] = {
        status: 'unanswered',
        selectedOptionIndex: null,
        secondOptionIndex: null,
        wrongOptions: [],
      };
    });
    setQuestionStates(initialStates);
    setCurrentIndex(0);
    setIsCompleted(false);
    attemptRef.current += 1;
    savedAttemptRef.current = null;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Return to books gallery
  const handleExitQuiz = () => {
    speechManager.stop();
    setSelectedBook(null);
    setCurrentIndex(0);
    setIsCompleted(false);
    setPendingBook(null);
    setShowAdmin(false);
    setSavedBooks(getSavedAnsweredBooks());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Update question state when user picks an option
  const handleUpdateQuestionState = (newState: QuestionState) => {
    if (!selectedBook) return;
    const nextStates = {
      ...questionStates,
      [currentIndex]: newState,
    };
    setQuestionStates(nextStates);

    let currentGold = 0;
    let currentSilver = 0;
    Object.values(nextStates).forEach((st) => {
      if (st.status === 'correct_first_try') currentGold++;
      if (st.status === 'correct_second_try') currentSilver++;
    });

    saveBookAnswerProgress(selectedBook, nextStates, isCompleted, currentGold, currentSilver);
    setSavedBooks(getSavedAnsweredBooks());
  };

  // Move to next question or show summary
  const handleNextQuestion = () => {
    if (!selectedBook) return;
    if (currentIndex + 1 < selectedBook.questions.length) {
      setCurrentIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setIsCompleted(true);
      saveBookAnswerProgress(selectedBook, questionStates, true, goldStars, silverStars);
      setSavedBooks(getSavedAnsweredBooks());

      // Save one cloud record for this player (best-effort, never blocks).
      const attemptKey = `${selectedBook.id}#${attemptRef.current}`;
      if (savedAttemptRef.current !== attemptKey) {
        savedAttemptRef.current = attemptKey;
        const name = playerName.trim();
        if (name) {
          const donePlayer = player;
          // Resolve the player if the lookup hasn't finished yet, then save
          // (best-effort: Firestore module loads lazily and never blocks).
          import('./utils/playerRecords').then(({ getOrCreatePlayer, saveQuizResult }) => {
            const ensurePlayer = donePlayer
              ? Promise.resolve(donePlayer)
              : getOrCreatePlayer(name);
            ensurePlayer.then((p) => {
              if (p) setPlayer(p);
              saveQuizResult({
                player: p,
                playerName: name,
                book: selectedBook,
                questionStates,
                goldStars,
                silverStars,
              });
            });
          });
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Calculate current stars
  let goldStars = 0;
  let silverStars = 0;
  Object.values(questionStates).forEach((st) => {
    if (st.status === 'correct_first_try') goldStars++;
    if (st.status === 'correct_second_try') silverStars++;
  });

  const currentQuestion = selectedBook?.questions[currentIndex];
  const currentState: QuestionState = questionStates[currentIndex] || {
    status: 'unanswered',
    selectedOptionIndex: null,
    secondOptionIndex: null,
    wrongOptions: [],
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-gradient-to-br from-indigo-50/60 via-purple-50/50 to-pink-50/50">
      <Navbar
        currentBook={selectedBook}
        onOpenBookSelector={handleExitQuiz}
        onRestartQuiz={selectedBook ? handleRestartQuiz : undefined}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled((prev) => !prev)}
        speechEnabled={speechEnabled}
        onToggleSpeech={() => setSpeechEnabled((prev) => !prev)}
      />

      <main className="flex-1 pb-16">
        {showAdmin ? (
          <React.Suspense
            fallback={
              <div className="text-center text-slate-400 py-16">
                Loading answer records…
              </div>
            }
          >
            <AdminPage onBack={() => setShowAdmin(false)} />
          </React.Suspense>
        ) : pendingBook ? (
          <NamePrompt
            bookTitle={pendingBook.title}
            onStart={handleNameStart}
            onBack={() => setPendingBook(null)}
          />
        ) : !selectedBook ? (
          <BookSelector
            books={books}
            savedBooks={savedBooks}
            onSelectBook={handleSelectBook}
          />
        ) : isCompleted ? (
          <QuizSummary
            book={selectedBook}
            questionStates={questionStates}
            onPlayAgain={handleRestartQuiz}
            onChooseAnotherBook={handleExitQuiz}
          />
        ) : currentQuestion ? (
          <QuizCard
            book={selectedBook}
            question={currentQuestion}
            questionIndex={currentIndex}
            totalQuestions={selectedBook.questions.length}
            currentState={currentState}
            onUpdateState={handleUpdateQuestionState}
            onNextQuestion={handleNextQuestion}
            goldStars={goldStars}
            silverStars={silverStars}
            speechEnabled={speechEnabled}
          />
        ) : null}
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-indigo-100/80 text-center text-xs text-slate-500 bg-white/40">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 font-bold text-slate-600">
            <span>📚 BookQuest</span>
            <span>•</span>
            <span>Fun Comprehension &amp; Clues for Kids</span>
            {playerName && !showAdmin && (
              <>
                <span>•</span>
                <span className="text-indigo-500">Playing as {playerName}</span>
              </>
            )}
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <button
              onClick={() => {
                setShowAdmin(true);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="font-semibold text-slate-400 hover:text-indigo-600 transition-colors"
            >
              Grown-ups: answer records
            </button>
            <span>•</span>
            <span>Hosted on GitHub Pages</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
