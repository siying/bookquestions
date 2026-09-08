import React, { useState, useEffect } from 'react';
import { Book, QuestionState } from './types/quiz';
import { DEFAULT_BOOKS } from './data/defaultBooks';
import { soundManager } from './utils/audio';
import { speechManager } from './utils/speech';
import { Navbar } from './components/Navbar';
import { BookSelector } from './components/BookSelector';
import { QuizCard } from './components/QuizCard';
import { QuizSummary } from './components/QuizSummary';

const SOUND_STORAGE_KEY = 'bookquest_sound_enabled';
const SPEECH_STORAGE_KEY = 'bookquest_speech_enabled';

export const App: React.FC = () => {
  // Books library
  const [books] = useState<Book[]>(DEFAULT_BOOKS);

  // Active quiz state
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questionStates, setQuestionStates] = useState<Record<number, QuestionState>>({});
  const [isCompleted, setIsCompleted] = useState(false);

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
        {!selectedBook ? (
          <BookSelector
            books={books}
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
          </div>
          <div className="text-slate-400">
            Hosted on GitHub Pages
          </div>
        </div>
      </footer>
    </div>
  );
};
