import React, { useState, useEffect } from 'react';
import { Question, QuestionState, Book } from '../types/quiz';
import { soundManager } from '../utils/audio';
import { speechManager } from '../utils/speech';
import confetti from 'canvas-confetti';
import { 
  Volume2, 
  VolumeX, 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  BookMarked, 
  Lightbulb, 
  Sparkles 
} from 'lucide-react';

interface QuizCardProps {
  book: Book;
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  currentState: QuestionState;
  onUpdateState: (newState: QuestionState) => void;
  onNextQuestion: () => void;
  goldStars: number;
  silverStars: number;
  speechEnabled: boolean;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  book,
  question,
  questionIndex,
  totalQuestions,
  currentState,
  onUpdateState,
  onNextQuestion,
  goldStars,
  silverStars,
  speechEnabled,
}) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Stop speech when question changes
  useEffect(() => {
    speechManager.stop();
    setIsSpeaking(false);
  }, [questionIndex]);

  const handleReadAloud = (textToRead: string) => {
    if (isSpeaking) {
      speechManager.stop();
      setIsSpeaking(false);
      return;
    }
    setIsSpeaking(true);
    speechManager.speak(textToRead, () => setIsSpeaking(false));
  };

  const handleOptionClick = (optionIdx: number) => {
    // If already resolved, cannot click
    if (
      currentState.status === 'correct_first_try' ||
      currentState.status === 'correct_second_try' ||
      currentState.status === 'attempt2_wrong'
    ) {
      return;
    }

    // If already picked this wrong option on attempt 1, ignore
    if (currentState.wrongOptions.includes(optionIdx)) {
      return;
    }

    soundManager.playPop();

    const isCorrect = optionIdx === question.correctAnswerIndex;

    if (currentState.status === 'unanswered') {
      // First attempt
      if (isCorrect) {
        soundManager.playCorrect();
        triggerMiniConfetti();
        onUpdateState({
          status: 'correct_first_try',
          selectedOptionIndex: optionIdx,
          secondOptionIndex: null,
          wrongOptions: [],
        });
        if (speechEnabled) {
          speechManager.speak("Great job! That's correct!");
        }
      } else {
        soundManager.playTryAgain();
        onUpdateState({
          status: 'attempt1_wrong',
          selectedOptionIndex: optionIdx,
          secondOptionIndex: null,
          wrongOptions: [optionIdx],
        });
        if (speechEnabled) {
          speechManager.speak("Not quite. Take a look at the clue from the book and try again!");
        }
      }
    } else if (currentState.status === 'attempt1_wrong') {
      // Second attempt
      if (isCorrect) {
        soundManager.playCorrect();
        triggerMiniConfetti();
        onUpdateState({
          ...currentState,
          status: 'correct_second_try',
          secondOptionIndex: optionIdx,
        });
        if (speechEnabled) {
          speechManager.speak("Awesome! You figured it out using the clue!");
        }
      } else {
        soundManager.playTryAgain();
        onUpdateState({
          ...currentState,
          status: 'attempt2_wrong',
          secondOptionIndex: optionIdx,
          wrongOptions: [...currentState.wrongOptions, optionIdx],
        });
        if (speechEnabled) {
          speechManager.speak("Good effort! Here is the right answer and explanation.");
        }
      }
    }
  };

  const triggerMiniConfetti = () => {
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#6366f1', '#a855f7', '#ec4899', '#f59e0b', '#10b981'],
      });
    } catch {
      // ignore
    }
  };

  const optionLetters = ['A', 'B', 'C', 'D'];
  const isResolved =
    currentState.status === 'correct_first_try' ||
    currentState.status === 'correct_second_try' ||
    currentState.status === 'attempt2_wrong';

  const progressPercent = Math.round(((questionIndex + 1) / totalQuestions) * 100);

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 sm:py-8 animate-fadeIn">
      {/* Quiz Header: Book & Star Score & Progress */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-sm border border-indigo-100 mb-6">
        <div className="flex items-center justify-between gap-4 mb-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700">
            <span className="text-xl">{book.coverEmoji}</span>
            <span className="truncate max-w-[150px] sm:max-w-xs">{book.title}</span>
          </div>

          {/* Stars tally */}
          <div className="flex items-center gap-3 text-xs sm:text-sm font-black">
            <div className="flex items-center gap-1 text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200" title="First-Try Stars">
              <span>⭐</span>
              <span>{goldStars}</span>
            </div>
            <div className="flex items-center gap-1 text-purple-600 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200" title="Retry Stars">
              <span>🌟</span>
              <span>{silverStars}</span>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="flex items-center justify-between text-xs font-extrabold text-slate-500 mb-1.5">
          <span>Question {questionIndex + 1} of {totalQuestions}</span>
          <span>{progressPercent}% Complete</span>
        </div>
        <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden p-0.5">
          <div
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-full rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Main Question Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-indigo-100 mb-6">
        {/* Question Title Bar */}
        <div className="flex items-start justify-between gap-3 mb-6">
          <h2 className="text-lg sm:text-2xl font-black text-slate-900 leading-snug">
            {question.question}
          </h2>

          <button
            onClick={() => handleReadAloud(`${question.question}. Option A: ${question.options[0]}. Option B: ${question.options[1]}. Option C: ${question.options[2]}. Option D: ${question.options[3]}`)}
            className={`p-2.5 rounded-2xl shrink-0 transition-all active:scale-95 ${
              isSpeaking
                ? 'bg-pink-100 text-pink-700 animate-pulse'
                : 'bg-slate-100 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600'
            }`}
            title="Read Question Aloud"
            aria-label="Read Question Aloud"
          >
            {isSpeaking ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
        </div>

        {/* 4 Options Grid */}
        <div className="grid grid-cols-1 gap-3 sm:gap-3.5 mb-6">
          {question.options.map((option, idx) => {
            const letter = optionLetters[idx];
            const isPickedWrong = currentState.wrongOptions.includes(idx);
            const isCorrectOption = idx === question.correctAnswerIndex;

            let btnStyle = 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-indigo-50/70 hover:border-indigo-300';
            let badgeStyle = 'bg-white text-slate-700 border-slate-200';

            if (isResolved) {
              if (isCorrectOption) {
                // Correct answer highlighted
                btnStyle = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold shadow-sm shadow-emerald-100';
                badgeStyle = 'bg-emerald-600 text-white border-emerald-600';
              } else if (isPickedWrong) {
                // Wrong pick
                btnStyle = 'bg-rose-50/70 border-rose-200 text-rose-800 opacity-60 line-through';
                badgeStyle = 'bg-rose-500 text-white border-rose-500';
              } else {
                btnStyle = 'bg-slate-50 border-slate-100 text-slate-400 opacity-50';
                badgeStyle = 'bg-slate-200 text-slate-500 border-slate-200';
              }
            } else {
              // Not resolved yet
              if (isPickedWrong) {
                // Was picked wrong on attempt 1
                btnStyle = 'bg-rose-50 border-rose-300 text-rose-800 line-through opacity-60 cursor-not-allowed';
                badgeStyle = 'bg-rose-500 text-white border-rose-500';
              }
            }

            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleOptionClick(idx)}
                disabled={isResolved || isPickedWrong}
                className={`w-full text-left p-4 sm:p-4.5 rounded-2xl border-2 transition-all flex items-center justify-between gap-3 group active:scale-[0.99] ${btnStyle}`}
              >
                <div className="flex items-center gap-3.5 flex-1">
                  <span
                    className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs sm:text-sm border shadow-xs transition-colors shrink-0 ${badgeStyle}`}
                  >
                    {letter}
                  </span>
                  <span className="text-sm sm:text-base leading-relaxed font-semibold">
                    {option}
                  </span>
                </div>

                <div className="shrink-0">
                  {isResolved && isCorrectOption && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 animate-soft-bounce" />
                  )}
                  {isPickedWrong && (
                    <XCircle className="w-5 h-5 text-rose-500" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* FEEDBACK SECTION 1: FIRST ATTEMPT WRONG (HINT & SAMPLE TEXT TO RETRY) */}
        {currentState.status === 'attempt1_wrong' && (
          <div className="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 text-slate-800 animate-fadeIn mb-2 shadow-sm">
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2 text-amber-900 font-extrabold text-sm sm:text-base">
                <Lightbulb className="w-5 h-5 text-amber-600 animate-bounce" />
                <span>Not quite! Here is a clue from the book:</span>
              </div>
              <button
                onClick={() => handleReadAloud(`Here is a clue from the book: ${question.samplePassage}. Hint: ${question.hint}. Now try picking another answer!`)}
                className="p-1.5 rounded-xl bg-amber-100 text-amber-800 hover:bg-amber-200 transition-colors"
                title="Read clue aloud"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>

            {/* The Sample Text Excerpt from the Book */}
            <div className="bg-white/90 rounded-xl p-4 border border-amber-200/90 mb-3 shadow-xs">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 mb-1.5 uppercase tracking-wider">
                <BookMarked className="w-3.5 h-3.5" />
                Sample Text from "{book.title}":
              </div>
              <p className="text-xs sm:text-sm font-serif italic text-slate-800 leading-relaxed pl-3 border-l-4 border-amber-400">
                {question.samplePassage}
              </p>
            </div>

            {/* Kid Hint */}
            <div className="flex items-start gap-2 text-xs sm:text-sm text-amber-950 font-bold mb-3">
              <span>💡</span>
              <p>
                <span className="text-amber-700 font-black">Hint:</span> {question.hint}
              </p>
            </div>

            {/* Try Again call to action */}
            <div className="bg-amber-200/60 rounded-xl px-3.5 py-2 text-center text-xs font-extrabold text-amber-900 flex items-center justify-center gap-1.5">
              <span>👉</span>
              <span>Re-read the sample text above, then pick another answer to try again!</span>
            </div>
          </div>
        )}

        {/* FEEDBACK SECTION 2: RESOLVED (CORRECT OR SECOND MISS) -> SHOW SAMPLE TEXT & WHY */}
        {isResolved && (
          <div
            className={`rounded-2xl p-5 sm:p-6 border-2 animate-fadeIn mb-2 shadow-sm ${
              currentState.status === 'correct_first_try'
                ? 'bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-300'
                : currentState.status === 'correct_second_try'
                ? 'bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-300'
                : 'bg-gradient-to-br from-rose-50 to-orange-50 border-rose-300'
            }`}
          >
            {/* Status Heading */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2 font-black text-sm sm:text-base">
                {currentState.status === 'correct_first_try' && (
                  <span className="text-emerald-900 flex items-center gap-1.5">
                    <Sparkles className="w-5 h-5 text-emerald-600" />
                    Brilliant! You got it right on the first try! ⭐
                  </span>
                )}
                {currentState.status === 'correct_second_try' && (
                  <span className="text-purple-900 flex items-center gap-1.5">
                    <Sparkles className="w-5 h-5 text-purple-600" />
                    Fantastic job figuring it out using the clue! 🌟
                  </span>
                )}
                {currentState.status === 'attempt2_wrong' && (
                  <span className="text-rose-900 flex items-center gap-1.5">
                    <HelpCircle className="w-5 h-5 text-rose-600" />
                    Good effort! Let's see what the book says:
                  </span>
                )}
              </div>

              <button
                onClick={() => handleReadAloud(`From the book: ${question.samplePassage}. Why this is the answer: ${question.explanation}`)}
                className="p-1.5 rounded-xl bg-white/80 hover:bg-white text-slate-700 shadow-xs transition-colors"
                title="Read explanation aloud"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>

            {/* Sample Text from Book */}
            <div className="bg-white/90 rounded-xl p-4 border border-slate-200/80 mb-3 shadow-xs">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider">
                <BookMarked className="w-3.5 h-3.5 text-indigo-600" />
                Sample Text from "{book.title}":
              </div>
              <p className="text-xs sm:text-sm font-serif italic text-slate-800 leading-relaxed pl-3 border-l-4 border-indigo-400">
                {question.samplePassage}
              </p>
            </div>

            {/* Explanation of Why */}
            <div className="p-3.5 bg-white/70 rounded-xl border border-slate-200/60 mb-4 text-xs sm:text-sm text-slate-800 leading-relaxed">
              <span className="font-extrabold text-indigo-900 block mb-1">
                Why this answer is right:
              </span>
              <p>{question.explanation}</p>
            </div>

            {/* Next Question button */}
            <div className="flex justify-end">
              <button
                onClick={() => {
                  speechManager.stop();
                  onNextQuestion();
                }}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-black rounded-2xl shadow-md shadow-indigo-200 active:scale-95 transition-all text-sm group"
              >
                <span>{questionIndex + 1 === totalQuestions ? 'See Final Results' : 'Next Question'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
