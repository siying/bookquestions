import React, { useState, useMemo } from 'react';
import { Book } from '../types/quiz';
import { BookOpen, ArrowRight, Award, Sparkles, Search, X, Compass } from 'lucide-react';

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

type FilterCategory = 'all' | 'mth' | 'classics';

export const BookSelector: React.FC<BookSelectorProps> = ({
  books,
  onSelectBook,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('all');

  const mthCount = useMemo(() => books.filter(b => b.id.startsWith('mth-')).length, [books]);
  const classicsCount = useMemo(() => books.filter(b => !b.id.startsWith('mth-')).length, [books]);

  // Filtered books
  const filteredBooks = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return books.filter((book) => {
      // Category filter
      if (selectedCategory === 'mth' && !book.id.startsWith('mth-')) return false;
      if (selectedCategory === 'classics' && book.id.startsWith('mth-')) return false;

      // Search query filter
      if (!query) return true;

      // Extract book number if searching by number (e.g. "1", "#1", "book 1", "mth 1")
      const numberMatch = query.match(/\b\d+\b/);
      const targetNumber = numberMatch ? numberMatch[0] : null;

      const matchesTitle = book.title.toLowerCase().includes(query);
      const matchesAuthor = book.author.toLowerCase().includes(query);
      const matchesSynopsis = book.synopsis.toLowerCase().includes(query);
      const matchesId = book.id.toLowerCase().includes(query);

      // Also check specific number match like "book 5" or "#5"
      const matchesBookNumber = targetNumber ? (book.title.includes(`#${targetNumber}:`) || book.title.includes(`#${targetNumber} `)) : false;

      return matchesTitle || matchesAuthor || matchesSynopsis || matchesId || matchesBookNumber;
    });
  }, [books, searchQuery, selectedCategory]);

  const quickChips = [
    { label: '🦖 #1 Dinosaurs', query: '#1' },
    { label: '⚔️ #2 Knight', query: '#2' },
    { label: '🏺 #3 Mummies', query: '#3' },
    { label: '🏴‍☠️ #4 Pirates', query: '#4' },
    { label: '🥷 #5 Ninjas', query: '#5' },
    { label: '🦁 #11 Lions', query: '#11' },
    { label: '🚢 #17 Titanic', query: '#17' },
    { label: '🕷️ Charlotte', query: 'Charlotte' },
    { label: '🍫 Wonka', query: 'Chocolate' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
      {/* Hero Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 border border-purple-200 text-purple-800 text-xs font-bold mb-4 shadow-sm">
          <Sparkles className="w-4 h-4 text-purple-600 animate-pulse" />
          Interactive Reading Comprehension for Kids
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-3">
          Pick a Book to Test Your Knowledge!
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Answer 10 comprehension questions. Got one wrong? Don’t worry! We will show you a{' '}
          <strong className="text-indigo-700 font-bold">clue from the book</strong> so you can try again.
        </p>
      </div>

      {/* Search & Filter Controls */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-sm border border-indigo-100 mb-8 max-w-4xl mx-auto">
        {/* Search Input Bar */}
        <div className="relative mb-4">
          <Search className="w-5 h-5 text-indigo-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by book title, number, or keyword (e.g. 'Dinosaurs', '#5', 'Ninjas', 'Titanic')..."
            className="w-full pl-12 pr-10 py-3.5 rounded-2xl border-2 border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 outline-none text-sm sm:text-base font-semibold text-slate-800 placeholder-slate-400 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Tabs & Quick Chips */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-1">
          {/* Tabs */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-2xl w-full sm:w-auto overflow-x-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-white text-indigo-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Books ({books.length})
            </button>
            <button
              onClick={() => setSelectedCategory('mth')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedCategory === 'mth'
                  ? 'bg-white text-indigo-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🌲 Magic Tree House ({mthCount})
            </button>
            <button
              onClick={() => setSelectedCategory('classics')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedCategory === 'classics'
                  ? 'bg-white text-indigo-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🌟 Classics ({classicsCount})
            </button>
          </div>

          {/* Book Count Tally */}
          <div className="text-xs font-bold text-slate-500 shrink-0">
            Showing <span className="text-indigo-600 font-extrabold">{filteredBooks.length}</span> of {books.length} books
          </div>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 flex-wrap">
          <span className="text-xs font-bold text-slate-400 mr-1 flex items-center gap-1">
            <Compass className="w-3.5 h-3.5" /> Quick jump:
          </span>
          {quickChips.map((chip) => (
            <button
              key={chip.query}
              onClick={() => {
                setSearchQuery(chip.query);
                setSelectedCategory('all');
              }}
              className="px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-50 hover:bg-indigo-50 hover:text-indigo-700 text-slate-600 border border-slate-200/80 transition-all active:scale-95"
            >
              {chip.label}
            </button>
          ))}
        </div>
      </div>

      {/* Empty State when Search has no results */}
      {filteredBooks.length === 0 && (
        <div className="bg-white rounded-3xl p-10 text-center max-w-md mx-auto shadow-sm border border-slate-200">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-3xl mx-auto mb-3">
            🔍
          </div>
          <h3 className="text-lg font-black text-slate-800 mb-1">No Books Found</h3>
          <p className="text-xs sm:text-sm text-slate-500 mb-5">
            We couldn't find any books matching "{searchQuery}". Try searching for another keyword or check all categories.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md transition-all active:scale-95"
          >
            Clear Search &amp; Show All
          </button>
        </div>
      )}

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.map((book) => {
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
