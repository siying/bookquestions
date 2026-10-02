import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  Users,
  Trophy,
  Star,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  XCircle,
  MinusCircle,
  CloudOff,
  BookOpen,
} from 'lucide-react';
import { isCloudConfigured } from '../config/firebase';
import {
  listPlayers,
  getPlayerResults,
  PlayerSummary,
  QuizResultRecord,
} from '../utils/playerRecords';

function formatDate(value: unknown): string {
  try {
    const v = value as { toDate?: () => Date } | null;
    if (v && typeof v.toDate === 'function') {
      return v.toDate().toLocaleString();
    }
    if (typeof value === 'number') {
      return new Date(value).toLocaleString();
    }
  } catch {
    // ignore
  }
  return '—';
}

const statusIcon = (status: string) => {
  if (status === 'correct_first_try')
    return <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />;
  if (status === 'correct_second_try')
    return <MinusCircle size={16} className="text-amber-500 shrink-0" />;
  return <XCircle size={16} className="text-rose-400 shrink-0" />;
};

const ResultDetail: React.FC<{ result: QuizResultRecord }> = ({ result }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white/80 rounded-2xl border border-indigo-100 shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full px-5 py-4 flex items-center justify-between gap-3 text-left hover:bg-indigo-50/50 transition-colors"
      >
        <div className="min-w-0">
          <div className="font-bold text-slate-800 truncate">
            {result.bookTitle}
          </div>
          <div className="text-xs text-slate-400">
            {formatDate(result.completedAt)}
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="inline-flex items-center gap-1 text-sm font-extrabold text-amber-500">
            <Trophy size={15} />
            {result.scorePercent}%
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500">
            <Star size={13} className="text-amber-400 fill-amber-400" />
            {result.goldStars}
            <Star size={13} className="text-slate-300 fill-slate-200" />
            {result.silverStars}
          </span>
          {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
      </button>
      {open && (
        <div className="px-5 pb-5 pt-1 space-y-4 border-t border-indigo-50">
          {result.answers.map((a, i) => (
            <div key={a.questionId || i} className="text-sm">
              <div className="flex items-start gap-2 font-semibold text-slate-700">
                {statusIcon(a.status)}
                <span>
                  {i + 1}. {a.question}
                </span>
              </div>
              <ul className="mt-1.5 ml-6 space-y-1">
                {a.options.map((opt, oi) => {
                  const isCorrect = oi === a.correctAnswerIndex;
                  const pickedFirst = oi === a.selectedOptionIndex;
                  const pickedSecond = oi === a.secondOptionIndex;
                  const picked = pickedFirst || pickedSecond;
                  return (
                    <li
                      key={oi}
                      className={`px-2.5 py-1 rounded-lg ${
                        isCorrect
                          ? 'bg-emerald-50 text-emerald-700 font-semibold'
                          : picked
                            ? 'bg-rose-50 text-rose-600'
                            : 'text-slate-400'
                      }`}
                    >
                      {isCorrect && '✓ '}
                      {picked && !isCorrect && '✗ '}
                      {opt}
                      {pickedSecond && !pickedFirst && (
                        <span className="text-xs"> (2nd try)</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

interface AdminPageProps {
  onBack: () => void;
}

export const AdminPage: React.FC<AdminPageProps> = ({ onBack }) => {
  const [players, setPlayers] = useState<PlayerSummary[] | null>(null);
  const [selected, setSelected] = useState<PlayerSummary | null>(null);
  const [results, setResults] = useState<QuizResultRecord[] | null>(null);
  const [error, setError] = useState('');
  const cloud = isCloudConfigured();

  useEffect(() => {
    if (!cloud) return;
    listPlayers()
      .then(setPlayers)
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
        setError('Could not load the record book. Check your connection.');
        setPlayers([]);
      });
  }, [cloud]);

  useEffect(() => {
    if (!selected) {
      setResults(null);
      return;
    }
    setResults(null);
    getPlayerResults(selected.id)
      .then(setResults)
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
        setError('Could not load this player\u2019s history.');
        setResults([]);
      });
  }, [selected]);

  return (
    <div className="max-w-3xl mx-auto px-4 pt-8 pb-16">
      <button
        onClick={() => (selected ? setSelected(null) : onBack())}
        className="mb-6 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-500 hover:text-indigo-700 transition-colors"
      >
        <ArrowLeft size={16} />
        {selected ? `All players` : 'Back to books'}
      </button>

      <h2 className="text-2xl font-extrabold text-slate-800 mb-1 flex items-center gap-2">
        <BookOpen size={24} className="text-indigo-500" />
        {selected ? `${selected.name}\u2019s answers` : 'Answer records'}
      </h2>
      <p className="text-sm text-slate-500 mb-6">
        {selected
          ? `${selected.quizCount} ${selected.quizCount === 1 ? 'quiz' : 'quizzes'} on record`
          : 'Pick a name to see every quiz they answered.'}
      </p>

      {!cloud && (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-sm text-amber-800 flex items-start gap-2.5">
          <CloudOff size={18} className="shrink-0 mt-0.5" />
          <span>
            Cloud records are not connected on this site yet, so there is no
            shared history to show. Answers are still kept on each
            device&rsquo;s browser.
          </span>
        </div>
      )}

      {cloud && error && (
        <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 text-sm text-rose-700 mb-4">
          {error}
        </div>
      )}

      {cloud && !selected && players === null && !error && (
        <div className="text-center text-slate-400 py-12">
          Loading the record book…
        </div>
      )}

      {cloud && !selected && players !== null && players.length === 0 && !error && (
        <div className="text-center bg-white/70 rounded-2xl border border-indigo-100 p-10">
          <Users size={32} className="mx-auto text-indigo-300 mb-3" />
          <p className="font-semibold text-slate-600">No answers recorded yet.</p>
          <p className="text-sm text-slate-400 mt-1">
            Once someone finishes a quiz with their name, they&rsquo;ll show up here.
          </p>
        </div>
      )}

      {cloud && !selected && players !== null && players.length > 0 && (
        <div className="space-y-3">
          {players.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelected(p)}
              className="w-full bg-white/80 hover:bg-white rounded-2xl border border-indigo-100 shadow-sm px-5 py-4 flex items-center justify-between gap-3 transition-all text-left"
            >
              <div>
                <div className="font-extrabold text-slate-800 text-lg">{p.name}</div>
                <div className="text-xs text-slate-400">
                  Last played {formatDate(p.lastPlayedAt)}
                </div>
              </div>
              <span className="shrink-0 text-sm font-bold text-indigo-600 bg-indigo-50 rounded-full px-3 py-1.5">
                {p.quizCount} {p.quizCount === 1 ? 'quiz' : 'quizzes'}
              </span>
            </button>
          ))}
        </div>
      )}

      {cloud && selected && results === null && (
        <div className="text-center text-slate-400 py-12">Loading history…</div>
      )}

      {cloud && selected && results !== null && (
        <div className="space-y-3">
          {results.length === 0 && (
            <p className="text-center text-slate-400 py-8">
              No completed quizzes for {selected.name} yet.
            </p>
          )}
          {results.map((r) => (
            <ResultDetail key={r.id} result={r} />
          ))}
        </div>
      )}
    </div>
  );
};
