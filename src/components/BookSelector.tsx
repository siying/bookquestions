import React from 'react';
import { Book } from '../types/quiz';
import { BookOpen, ArrowRight, Award, Sparkles } from 'lucide-react';

interface BookSelectorProps {
  books: Book[];
  onSelectBook: (book: Book) => void;
}

const THEME_STYLES: Record<string, { bg: string; border: string; badge: string; text: string; button: string }> = {
  amber: {
    bg: 'from-amber-500/10 to-orange-500/5',
    border: 'border-amber-200/80 hover:border-amber-400',
    badge: 'bg-amber-100 text-amber-800',
    text: 'text-amber-900',
    button: 'bg-amber-600 hover:bg-amber-700 text-white shadow-amber-200',
  },
  indigo: {
    bg: 'from-indigo-500/10 to-blue-500/5',
    border: 'border-indigo-200/80 hover:border-indigo-400',
    badge: 'bg-indigo-100 text-indigo-800',
    text: 'text-indigo-900',
    button: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-200',
  },
  emerald: {
    bg: 'from-emerald-500/10 to-teal-500/5',
    border: 'border-emerald-200/80 hover:border-emerald-400',
    badge: 'bg-emerald-100 text-emerald-800',
    text: 'text-emerald-900',
    button: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-200',
  },
  sky: {
    bg: 'from-sky-500/10 to-cyan-500/5',
    border: 'border-sky-200/80 hover:border-sky-400',
    badge: 'bg-sky-100 text-sky-800',
    text: 'text-sky-900',
    button: 'bg-sky-600 hover:bg-sky-700 text-white shadow-sky-200',
  },
  rose: {
    bg: 'from-rose-500/10 to-pink-500/5',
    border: 'border-rose-200/80 hover:border-rose-400',
    badge: 'bg-rose-100 text-rose-800',
    text: 'text-rose-900',
    button: 'bg-rose-600 hover:bg-rose-700 text-white shadow-rose-200',
  },
  purple: {
    bg: 'from-purple-500/10 to-fuchsia-500/5',
    border: 'border-purple-200/80 hover:border-purple-400',
    badge: 'bg-purple-100 text-purple-800',
    text: 'text-purple-900',
    button: 'bg-purple-600 hover:bg-purple-700 text-white shadow-purple-200',
  },
};

export const BookSelector: React.FC<BookSelectorProps> = ({
  books,
  onSelectBook,
}) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
      {/* Hero Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 border border-purple-200 text-purple-800 text-xs font-bold mb-4 shadow-sm">
          <Sparkles className="w-4 h-4 text-purple-600 animate-pulse" />
          Interactive Reading Comprehension
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-3">
          Pick a Book to Test Your Knowledge!
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Answer 10 comprehension questions. Got one wrong? Don’t worry! We will show you a{' '}
          <strong className="text-indigo-700 font-bold">clue from the book</strong> so you can try again.
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => {
          const theme = THEME_STYLES[book.themeColor] || THEME_STYLES.indigo;

          return (
            <div
              key={book.id}
              className={`group bg-gradient-to-br ${theme.bg} bg-white rounded-3xl p-6 border ${theme.border} shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative`}
            >
              <div>
                {/* Header with Emoji & Level */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                    {book.coverEmoji}
                  </div>
                  <span className={`text-[11px] font-extrabold px-2.5 py-1 rounded-full ${theme.badge}`}>
                    {book.readingLevel}
                  </span>
                </div>

                {/* Title & Author */}
                <h3 className={`font-black text-xl mb-1 ${theme.text} group-hover:text-indigo-600 transition-colors`}>
                  {book.title}
                </h3>
                <p className="text-xs font-semibold text-slate-500 mb-3">
                  by {book.author}
                </p>

                {/* Synopsis */}
                <p className="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                  {book.synopsis}
                </p>
              </div>

              {/* Bottom footer */}
              <div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-200/60 mb-3 text-xs text-slate-500 font-bold">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
                    {book.questions.length} Questions
                  </span>
                  <span className="flex items-center gap-1 text-emerald-600">
                    <Award className="w-3.5 h-3.5" /> Comprehension Set
                  </span>
                </div>

                <button
                  onClick={() => onSelectBook(book)}
                  className={`w-full py-2.5 px-4 rounded-xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 active:scale-95 shadow-md transition-all ${theme.button}`}
                >
                  Start Quiz
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
