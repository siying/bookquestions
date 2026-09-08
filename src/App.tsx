import React, { useState, useEffect } from 'react';
import { Book, QuestionState } from './types/quiz';
import { DEFAULT_BOOKS } from './data/defaultBooks';
import { 
  getStoredApiKey, 
  getStoredModel, 
  DEFAULT_MODEL 
} from './services/gemini';
import { soundManager } from './utils/audio';
import { speechManager } from './utils/speech';
import { Navbar } from './components/Navbar';
import { BookSelector } from './components/BookSelector';
import { QuizCard } from './components/QuizCard';
import { QuizSummary } from './components/QuizSummary';
import { SettingsModal } from './components/SettingsModal';
import { CustomBookModal } from './components/CustomBookModal';

const CUSTOM_BOOKS_STORAGE_KEY = 'bookquest_custom_books_v1';
const SOUND_STORAGE_KEY = 'bookquest_sound_enabled';
const SPEECH_STORAGE_KEY = 'bookquest_speech_enabled';

export const App: React.FC = () => {
  // Books library (default + saved custom books)
  const [books, setBooks] = useState<Book[]>(() => {
    try {
      const saved = localStorage.getItem(CUSTOM_BOOKS_STORAGE_KEY);
      if (saved) {
        const customBooks: Book[] = JSON.parse(saved);
        return [...customBooks, ...DEFAULT_BOOKS];
      }
    } catch {
      // ignore
    }
    return DEFAULT_BOOKS;
  });

  // Active quiz state
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questionStates, setQuestionStates] = useState<Record<number, QuestionState>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  // Settings & Modals state
  const [apiKey, setApiKey] = useState(getStoredApiKey());
  const [model, setModel] = useState(getStoredModel() || DEFAULT_MODEL);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isCustomBookOpen, setIsCustomBookOpen] = useState(false);

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

  // Start quiz for a book
  const handleSelectBook = (book: Book) => {
    setSelectedBook(book);
    setCurrentIndex(0);
    setIsCompleted(false);

    // Initialize blank question states
    const initialStates: Record<number, QuestionState> = {};
    book.questions.forEach((_, idx) => {
      initialStates[idx] = {
        status: 'unanswered',
        selectedOptionIndex: null,
        secondOptionIndex: null,
        wrongOptions: [],
      };
    });
    setQuestionStates(initialStates);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Restart active quiz
  const handleRestartQuiz = () => {
    if (!selectedBook) return;
    handleSelectBook(selectedBook);
  };

  // Return to books gallery
  const handleExitQuiz = () => {
    speechManager.stop();
    setSelectedBook(null);
    setCurrentIndex(0);
    setIsCompleted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Update question state when user picks an option
  const handleUpdateQuestionState = (newState: QuestionState) => {
    setQuestionStates((prev) => ({
      ...prev,
      [currentIndex]: newState,
    }));
  };

  // Move to next question or show summary
  const handleNextQuestion = () => {
    if (!selectedBook) return;
    if (currentIndex + 1 < selectedBook.questions.length) {
      setCurrentIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setIsCompleted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Add custom book generated via AI
  const handleBookCreated = (newBook: Book) => {
    setBooks((prev) => {
      const updated = [newBook, ...prev];
      const customOnly = updated.filter((b) => b.isCustom);
      try {
        localStorage.setItem(CUSTOM_BOOKS_STORAGE_KEY, JSON.stringify(customOnly));
      } catch {
        // ignore
      }
      return updated;
    });

    // Start quiz immediately
    handleSelectBook(newBook);
  };

  // Delete custom book
  const handleDeleteCustomBook = (bookId: string) => {
    setBooks((prev) => {
      const updated = prev.filter((b) => b.id !== bookId);
      const customOnly = updated.filter((b) => b.isCustom);
      try {
        localStorage.setItem(CUSTOM_BOOKS_STORAGE_KEY, JSON.stringify(customOnly));
      } catch {
        // ignore
      }
      return updated;
    });

    if (selectedBook?.id === bookId) {
      handleExitQuiz();
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
        onOpenSettings={() => setIsSettingsOpen(true)}
        onRestartQuiz={selectedBook ? handleRestartQuiz : undefined}
        hasApiKey={Boolean(apiKey)}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled((prev) => !prev)}
        speechEnabled={speechEnabled}
        onToggleSpeech={() => setSpeechEnabled((prev) => !prev)}
      />

      <main className="flex-1 pb-16">
        {!selectedBook ? (
          <BookSelector
            books={books}
            onSelectBook={handleSelectBook}
            onOpenCustomBookModal={() => setIsCustomBookOpen(true)}
            onDeleteCustomBook={handleDeleteCustomBook}
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
          </div>
          <div className="text-slate-400">
            Powered by Google Gemini AI &amp; Hosted on GitHub Pages
          </div>
        </div>
      </footer>

      {/* Settings Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        currentApiKey={apiKey}
        currentModel={model}
        onSave={(newKey, newModel) => {
          setApiKey(newKey);
          setModel(newModel);
        }}
      />

      {/* Custom Book Generator Modal */}
      <CustomBookModal
        isOpen={isCustomBookOpen}
        onClose={() => setIsCustomBookOpen(false)}
        onBookCreated={handleBookCreated}
        hasApiKey={Boolean(apiKey)}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />
    </div>
  );
};
