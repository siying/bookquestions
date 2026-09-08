import React, { useState } from 'react';
import { X, Sparkles, AlertCircle, Key } from 'lucide-react';
import { Book } from '../types/quiz';
import { generateQuestionsForBook } from '../services/gemini';

interface CustomBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookCreated: (newBook: Book) => void;
  hasApiKey: boolean;
  onOpenSettings: () => void;
}

export const CustomBookModal: React.FC<CustomBookModalProps> = ({
  isOpen,
  onClose,
  onBookCreated,
  hasApiKey,
  onOpenSettings,
}) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [readingLevel, setReadingLevel] = useState('Grades 3-5 (Ages 8-11)');
  const [emoji, setEmoji] = useState('📖');
  const [notes, setNotes] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const quickEmojis = ['📖', '🐉', '🚀', '🧙‍♂️', '🐾', '🏰', '🕵️‍♂️', '🌊', '🌟', '🧁'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) {
      setError('Please provide both the book title and author.');
      return;
    }

    if (!hasApiKey) {
      setError('Please configure your Google Gemini API key first to use AI generation.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const generatedQuestions = await generateQuestionsForBook(
        title.trim(),
        author.trim(),
        readingLevel,
        notes.trim()
      );

      const newBook: Book = {
        id: `custom-${Date.now()}`,
        title: title.trim(),
        author: author.trim(),
        coverEmoji: emoji,
        themeColor: 'purple',
        readingLevel,
        synopsis: notes.trim() || `An exciting reading comprehension journey through "${title.trim()}" by ${author.trim()}.`,
        questions: generatedQuestions,
        isCustom: true,
      };

      onBookCreated(newBook);
      onClose();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to generate questions. Please try again.';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-6 sm:p-8 border border-purple-100 overflow-hidden relative max-h-[92vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          disabled={isLoading}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors disabled:opacity-40"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-500 to-pink-500 text-white flex items-center justify-center shadow-md shadow-purple-200">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-slate-900">Generate Any Book Quiz</h2>
            <p className="text-xs sm:text-sm text-slate-500">AI crafts 10 questions with book excerpts &amp; hints</p>
          </div>
        </div>

        {/* Missing API key warning */}
        {!hasApiKey && (
          <div className="mb-4 p-4 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="font-bold text-amber-950 mb-0.5">Gemini API Key Required</p>
              <p className="mb-2">To generate custom quizzes on the fly, you need a free Google Gemini API key.</p>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenSettings();
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-600 text-white rounded-xl font-bold hover:bg-amber-700 transition-colors shadow-sm"
              >
                <Key className="w-3.5 h-3.5" />
                Configure Key Now
              </button>
            </div>
          </div>
        )}

        {/* Error message */}
        {error && (
          <div className="mb-4 p-3 bg-rose-50 text-rose-800 text-xs font-semibold rounded-xl border border-rose-200 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {/* Loading Overlay state */}
        {isLoading ? (
          <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
            <div className="relative">
              <div className="w-16 h-16 rounded-full border-4 border-purple-200 border-t-purple-600 animate-spin" />
              <div className="absolute inset-0 flex items-center justify-center text-xl animate-soft-bounce">
                📖
              </div>
            </div>
            <div>
              <h3 className="font-extrabold text-slate-800 text-base mb-1">
                Reading &amp; Crafting Questions...
              </h3>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                The AI is analyzing "{title}", extracting sample text excerpts, hints, and 10 comprehension questions.
              </p>
            </div>
            <div className="text-[11px] font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
              Takes ~5 to 10 seconds
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 overflow-y-auto pr-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Book Title *
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Percy Jackson & The Lightning Thief"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Author *
                </label>
                <input
                  type="text"
                  required
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="e.g. Rick Riordan"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none text-sm transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Reading Level
                </label>
                <select
                  value={readingLevel}
                  onChange={(e) => setReadingLevel(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none text-sm transition-all"
                >
                  <option value="Grades 1-2 (Ages 6-8)">Grades 1-2 (Ages 6-8)</option>
                  <option value="Grades 3-5 (Ages 8-11)">Grades 3-5 (Ages 8-11)</option>
                  <option value="Grades 6-8 (Ages 11-14)">Grades 6-8 (Ages 11-14)</option>
                  <option value="Young Adult / High School">Young Adult / High School</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Book Icon
                </label>
                <div className="flex items-center gap-1.5 flex-wrap">
                  {quickEmojis.map((e) => (
                    <button
                      key={e}
                      type="button"
                      onClick={() => setEmoji(e)}
                      className={`w-8 h-8 rounded-lg text-lg flex items-center justify-center transition-all ${
                        emoji === e
                          ? 'bg-purple-600 text-white scale-110 shadow-sm'
                          : 'bg-slate-100 hover:bg-slate-200'
                      }`}
                    >
                      {e}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Optional: Focus / Chapters / Themes
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={2}
                placeholder="e.g. Focus on Chapters 1 to 5, or character traits of the protagonist..."
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none text-xs transition-all resize-none"
              />
            </div>

            {/* Actions */}
            <div className="pt-2 flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs sm:text-sm font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!hasApiKey}
                className="flex items-center gap-2 px-5 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 active:scale-95 shadow-md shadow-purple-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-all"
              >
                <Sparkles className="w-4 h-4" />
                Generate 10 Questions
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
