import React, { useEffect, useState } from 'react';
import { Book, QuestionState } from '../types/quiz';
import { soundManager } from '../utils/audio';
import confetti from 'canvas-confetti';
import { 
  Trophy, 
  RotateCcw, 
  BookOpen, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  XCircle, 
  Printer, 
  BookMarked 
} from 'lucide-react';

interface QuizSummaryProps {
  book: Book;
  questionStates: Record<number, QuestionState>;
  onPlayAgain: () => void;
  onChooseAnotherBook: () => void;
}

export const QuizSummary: React.FC<QuizSummaryProps> = ({
  book,
  questionStates,
  onPlayAgain,
  onChooseAnotherBook,
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Calculate scores
  let correctFirstTry = 0;
  let correctSecondTry = 0;
  let missed = 0;

  book.questions.forEach((_, idx) => {
    const st = questionStates[idx];
    if (st?.status === 'correct_first_try') correctFirstTry++;
    else if (st?.status === 'correct_second_try') correctSecondTry++;
    else missed++;
  });

  const totalPoints = correctFirstTry * 10 + correctSecondTry * 5;
  const maxPoints = book.questions.length * 10;
  const scorePercent = Math.round((totalPoints / maxPoints) * 100);

  useEffect(() => {
    soundManager.playCompleteFanfare();
    try {
      // Big celebratory confetti cannon
      const end = Date.now() + 1500;
      const frame = () => {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#6366f1', '#ec4899', '#f59e0b'],
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#10b981', '#3b82f6', '#8b5cf6'],
        });
        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();
    } catch {
      // ignore
    }
  }, []);

  let badgeTitle = 'Book Explorer 🌟';
  let badgeSubtitle = 'Great effort exploring the story and discovering its secrets!';
  if (scorePercent >= 90) {
    badgeTitle = 'Master Bookworm 🏆';
    badgeSubtitle = 'Astonishing reading comprehension! You know this book inside and out!';
  } else if (scorePercent >= 75) {
    badgeTitle = 'Story Detective 🔍';
    badgeSubtitle = 'Super sharp reading skills! You cracked almost every clue!';
  }

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 animate-fadeIn">
      {/* Certificate / Hero Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-indigo-100 text-center relative overflow-hidden mb-8 print:shadow-none print:border-none">
        {/* Decorative background glow */}
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-pink-100 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-indigo-100 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-amber-400 to-orange-500 text-white flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-200 animate-soft-bounce">
            <Trophy className="w-10 h-10" />
          </div>

          <span className="text-xs font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            Quiz Completed!
          </span>

          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 mt-2 mb-1">
            {badgeTitle}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mb-6">
            {badgeSubtitle}
          </p>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/70 inline-block mb-6">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
              Book Tested
            </div>
            <div className="text-base sm:text-lg font-black text-slate-800 flex items-center justify-center gap-2">
              <span>{book.coverEmoji}</span>
              <span>{book.title}</span>
              <span className="text-xs font-semibold text-slate-500">by {book.author}</span>
            </div>
          </div>

          {/* Stats Badges */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-lg mx-auto mb-8">
            <div className="bg-amber-50 border border-amber-200/80 rounded-2xl p-3.5">
              <div className="text-xl sm:text-2xl font-black text-amber-700 flex items-center justify-center gap-1">
                <span>⭐</span> {correctFirstTry}
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-amber-900 mt-0.5">
                First-Try Wins
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200/80 rounded-2xl p-3.5">
              <div className="text-xl sm:text-2xl font-black text-purple-700 flex items-center justify-center gap-1">
                <span>🌟</span> {correctSecondTry}
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-purple-900 mt-0.5">
                Clue Solves
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-200/80 rounded-2xl p-3.5">
              <div className="text-xl sm:text-2xl font-black text-indigo-700">
                {scorePercent}%
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-indigo-900 mt-0.5">
                Comprehension
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 print:hidden">
            <button
              onClick={onPlayAgain}
              className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-md shadow-indigo-200 active:scale-95 transition-all text-xs sm:text-sm"
            >
              <RotateCcw className="w-4 h-4" />
              Retake This Quiz
            </button>

            <button
              onClick={onChooseAnotherBook}
              className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl shadow-md shadow-purple-200 active:scale-95 transition-all text-xs sm:text-sm"
            >
              <BookOpen className="w-4 h-4" />
              Choose Another Book
            </button>

            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl active:scale-95 transition-all text-xs sm:text-sm"
              title="Print Certificate"
            >
              <Printer className="w-4 h-4" />
              Print Report
            </button>
          </div>
        </div>
      </div>

      {/* Review Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-indigo-100">
        <h2 className="text-xl font-black text-slate-900 mb-1 flex items-center gap-2">
          <BookMarked className="w-5 h-5 text-indigo-600" />
          Review What You Learned
        </h2>
        <p className="text-xs text-slate-500 mb-6">
          Click any question below to view the book excerpt and the full explanation.
        </p>

        <div className="space-y-3">
          {book.questions.map((q, idx) => {
            const st = questionStates[idx];
            const isExpanded = expandedIndex === idx;

            return (
              <div
                key={q.id}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleExpand(idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-3 bg-slate-50/70 hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <span className="shrink-0 font-bold text-xs text-slate-400 w-6">
                      #{idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-800 truncate">
                      {q.question}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {st?.status === 'correct_first_try' && (
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> 1st Try
                      </span>
                    )}
                    {st?.status === 'correct_second_try' && (
                      <span className="text-xs font-bold text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" /> Clue Solve
                      </span>
                    )}
                    {st?.status === 'attempt2_wrong' && (
                      <span className="text-xs font-bold text-rose-700 bg-rose-100 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <XCircle className="w-3.5 h-3.5" /> Missed
                      </span>
                    )}
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="p-4 bg-white border-t border-slate-200 space-y-3 text-xs sm:text-sm">
                    {/* Correct Option */}
                    <div className="p-2.5 bg-emerald-50 text-emerald-950 rounded-xl border border-emerald-200 font-bold">
                      ✅ Correct Answer: {q.options[q.correctAnswerIndex]}
                    </div>

                    {/* Book excerpt */}
                    <div className="bg-amber-50/60 p-3.5 rounded-xl border border-amber-200">
                      <span className="font-bold text-amber-900 block mb-1">
                        Excerpt from "{book.title}":
                      </span>
                      <p className="font-serif italic text-slate-700 leading-relaxed">
                        {q.samplePassage}
                      </p>
                    </div>

                    {/* Explanation */}
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-700">
                      <span className="font-bold text-slate-900 block mb-0.5">
                        Explanation:
                      </span>
                      <p>{q.explanation}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
