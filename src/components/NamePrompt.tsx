import React, { useState } from 'react';
import { User, Play, ArrowLeft, Cloud, HardDrive } from 'lucide-react';
import { isCloudConfigured } from '../config/firebase';

const PLAYER_NAME_STORAGE_KEY = 'bookquest_player_name';

export function getLastPlayerName(): string {
  try {
    return localStorage.getItem(PLAYER_NAME_STORAGE_KEY) || '';
  } catch {
    return '';
  }
}

export function rememberPlayerName(name: string): void {
  try {
    localStorage.setItem(PLAYER_NAME_STORAGE_KEY, name.trim());
  } catch {
    // ignore
  }
}

interface NamePromptProps {
  bookTitle: string;
  onStart: (name: string) => void;
  onBack: () => void;
}

export const NamePrompt: React.FC<NamePromptProps> = ({
  bookTitle,
  onStart,
  onBack,
}) => {
  const [name, setName] = useState(getLastPlayerName());
  const [error, setError] = useState('');
  const cloud = isCloudConfigured();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = name.trim();
    if (!clean) {
      setError('Please tell us your name first! 🌟');
      return;
    }
    rememberPlayerName(clean);
    onStart(clean);
  };

  return (
    <div className="max-w-xl mx-auto px-4 pt-10 pb-16">
      <button
        onClick={onBack}
        className="mb-6 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-500 hover:text-indigo-700 transition-colors"
      >
        <ArrowLeft size={16} />
        Choose another book
      </button>

      <div className="bg-white/80 backdrop-blur rounded-3xl shadow-xl border border-indigo-100 p-8 text-center">
        <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white shadow-lg">
          <User size={30} />
        </div>
        <h2 className="text-2xl font-extrabold text-slate-800 mb-1">
          Who&rsquo;s answering today?
        </h2>
        <p className="text-slate-500 mb-6">
          <span className="font-semibold text-indigo-600">{bookTitle}</span>
          <br />
          We&rsquo;ll keep your answers so you can see how you did.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (error) setError('');
            }}
            placeholder="Type your name…"
            maxLength={60}
            autoFocus
            className="w-full text-center text-xl font-semibold px-5 py-4 rounded-2xl border-2 border-indigo-200 focus:border-indigo-500 focus:outline-none bg-white placeholder:text-slate-300 placeholder:font-normal"
          />
          {error && (
            <p className="text-sm font-semibold text-rose-500">{error}</p>
          )}
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-lg font-extrabold text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 shadow-lg transition-all active:scale-[0.98]"
          >
            <Play size={20} />
            Start Quiz
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center gap-1.5 text-xs text-slate-400">
          {cloud ? (
            <>
              <Cloud size={14} className="text-emerald-500" />
              <span>Answers are saved to your family&rsquo;s record book</span>
            </>
          ) : (
            <>
              <HardDrive size={14} />
              <span>Answers are saved on this device only</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
