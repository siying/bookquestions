import React from 'react';
import { BookOpen, Volume2, VolumeX, RotateCcw } from 'lucide-react';
import { Book } from '../types/quiz';

interface NavbarProps {
  currentBook: Book | null;
  onOpenBookSelector: () => void;
  onRestartQuiz?: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  speechEnabled: boolean;
  onToggleSpeech: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentBook,
  onOpenBookSelector,
  onRestartQuiz,
  soundEnabled,
  onToggleSound,
  speechEnabled,
  onToggleSpeech,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-indigo-100 shadow-sm transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-2">
        {/* Brand */}
        <div 
          onClick={onOpenBookSelector}
          className="flex items-center gap-2.5 cursor-pointer group select-none"
          title="Return to Books"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white shadow-md shadow-indigo-200 group-hover:scale-105 transition-transform">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-black text-xl tracking-tight bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 bg-clip-text text-transparent">
                BookQuest
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-indigo-100 text-indigo-700 px-1.5 py-0.5 rounded-full">
                Kids Edition
              </span>
            </div>
            <p className="text-xs text-slate-500 hidden sm:block">
              Reading Comprehension &amp; Clues
            </p>
          </div>
        </div>

        {/* Center: Current book badge if active */}
        {currentBook && (
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/80 text-xs font-semibold text-slate-700 max-w-xs truncate">
            <span className="text-base">{currentBook.coverEmoji}</span>
            <span className="truncate">{currentBook.title}</span>
          </div>
        )}

        {/* Right actions */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Change Book */}
          <button
            onClick={onOpenBookSelector}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 active:scale-95 rounded-xl transition-all"
            title="Browse all books"
          >
            <BookOpen className="w-4 h-4" />
            <span className="hidden sm:inline">Books</span>
          </button>

          {/* Restart if in quiz */}
          {currentBook && onRestartQuiz && (
            <button
              onClick={onRestartQuiz}
              className="p-2 text-slate-600 hover:text-indigo-600 hover:bg-slate-100 active:scale-95 rounded-xl transition-all"
              title="Restart Quiz"
              aria-label="Restart Quiz"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}

          {/* Sound toggle */}
          <button
            onClick={onToggleSound}
            className={`p-2 rounded-xl transition-all active:scale-95 ${
              soundEnabled
                ? 'text-purple-700 bg-purple-50 hover:bg-purple-100'
                : 'text-slate-400 bg-slate-100 hover:bg-slate-200'
            }`}
            title={soundEnabled ? "Sound effects: ON" : "Sound effects: OFF"}
            aria-label="Toggle Sound Effects"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Read Aloud (Speech) toggle */}
          <button
            onClick={onToggleSpeech}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all active:scale-95 ${
              speechEnabled
                ? 'text-pink-700 bg-pink-50 hover:bg-pink-100'
                : 'text-slate-400 bg-slate-100 hover:bg-slate-200'
            }`}
            title={speechEnabled ? "Voice Read-Aloud: ON" : "Voice Read-Aloud: OFF"}
            aria-label="Toggle Voice Read Aloud"
          >
            <span>🗣️</span>
            <span className="hidden lg:inline">{speechEnabled ? "Voice ON" : "Voice OFF"}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
