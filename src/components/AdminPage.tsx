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
  LogIn,
  LogOut,
  ShieldAlert,
} from 'lucide-react';
import type { User } from 'firebase/auth';
import { isCloudConfigured, getAuth, isAdminUser } from '../config/firebase';
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
  const [user, setUser] = useState<User | null>(null);
  const [authChecking, setAuthChecking] = useState(true);
  const [signingIn, setSigningIn] = useState(false);
  const cloud = isCloudConfigured();
  const isAdmin = isAdminUser(user);

  // Watch Firebase Auth state + handle redirect result (mobile Safari blocks popups)
  useEffect(() => {
    if (!cloud) {
      setAuthChecking(false);
      return;
    }
    let unsub: (() => void) | null = null;
    getAuth().then((auth) => {
      if (!auth) {
        setAuthChecking(false);
        return;
      }
      import('firebase/auth').then(({ onAuthStateChanged, getRedirectResult }) => {
        // Check if we're returning from a Google redirect sign-in
        getRedirectResult(auth)
          .then((result) => {
            if (result?.user) {
              setUser(result.user);
            }
          })
          .catch((err) => {
            // eslint-disable-next-line no-console
            console.error('[bookquiz] Redirect sign-in error:', err);
            setError('Sign-in failed. Please try again.');
          })
          .finally(() => {
            setAuthChecking(false);
          });
        unsub = onAuthStateChanged(auth, (u) => {
          setUser(u);
          setAuthChecking(false);
        });
      });
    });
    return () => {
      if (unsub) unsub();
    };
  }, [cloud]);

  const handleSignIn = async () => {
    setSigningIn(true);
    setError('');
    try {
      const auth = await getAuth();
      if (!auth) throw new Error('Auth not available');
      const { GoogleAuthProvider, signInWithRedirect } = await import('firebase/auth');
      const provider = new GoogleAuthProvider();
      // Remember to reopen the admin view after Google redirects back:
      // the app has no URL routing (the admin page is React state), so a
      // fresh page load would otherwise land on the main page and the
      // pending sign-in result would never be processed.
      try {
        sessionStorage.setItem('bookquiz:returnToAdmin', '1');
      } catch {
        // ignore storage failures
      }
      // Redirect (not popup) — popups are blocked on mobile Safari
      await signInWithRedirect(auth, provider);
      // Page will redirect to Google and back; no finally needed
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      setError('Sign-in failed. Please try again.');
      setSigningIn(false);
      // The redirect never started, so don't reopen the admin view later.
      try {
        sessionStorage.removeItem('bookquiz:returnToAdmin');
      } catch {
        // ignore storage failures
      }
    }
  };

  const handleSignOut = async () => {
    try {
      const auth = await getAuth();
      if (auth) {
        const { signOut } = await import('firebase/auth');
        await signOut(auth);
      }
      setUser(null);
      setPlayers(null);
      setSelected(null);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };

  useEffect(() => {
    if (!cloud || !isAdmin) return;
    listPlayers()
      .then(setPlayers)
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
        setError('Could not load the record book. Check your connection.');
        setPlayers([]);
      });
  }, [cloud, isAdmin]);

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
      {/* Sign-in status at the very top */}
      {cloud && !authChecking && !user && (
        <div className="mb-6 flex items-center justify-between gap-3 bg-white/70 rounded-2xl border border-indigo-100 px-4 py-3">
          <span className="text-sm text-slate-500">
            Grown-ups: sign in to see answer records
          </span>
          <button
            onClick={handleSignIn}
            disabled={signingIn}
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold px-5 py-2.5 rounded-xl transition-colors shrink-0"
          >
            <LogIn size={16} />
            {signingIn ? 'Signing in…' : 'Sign in with Google'}
          </button>
        </div>
      )}

      {cloud && !authChecking && user && !isAdmin && (
        <div className="mb-6 flex items-center justify-between gap-3 bg-rose-50 rounded-2xl border border-rose-100 px-4 py-3">
          <span className="text-sm text-slate-500 truncate">
            <ShieldAlert size={14} className="inline mr-1 text-rose-400" />
            {user.email} is not authorized
          </span>
          <button
            onClick={handleSignOut}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-500 hover:text-indigo-700 transition-colors shrink-0"
          >
            <LogOut size={15} />
            Sign out
          </button>
        </div>
      )}

      {cloud && !authChecking && isAdmin && (
        <div className="mb-6 flex items-center justify-between bg-white/60 rounded-2xl border border-indigo-100 px-4 py-2.5">
          <span className="text-sm text-slate-500 truncate">
            Signed in as <span className="font-semibold text-slate-700">{user?.email}</span>
          </span>
          <button
            onClick={handleSignOut}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-500 hover:text-indigo-700 transition-colors shrink-0 ml-3"
          >
            <LogOut size={15} />
            Sign out
          </button>
        </div>
      )}

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

      {cloud && authChecking && (
        <div className="text-center text-slate-400 py-12">
          Checking sign-in…
        </div>
      )}

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

      {cloud && isAdmin && error && (
        <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 text-sm text-rose-700 mb-4">
          {error}
        </div>
      )}

      {cloud && isAdmin && !selected && players === null && !error && (
        <div className="text-center text-slate-400 py-12">
          Loading the record book…
        </div>
      )}

      {cloud && isAdmin && !selected && players !== null && players.length === 0 && !error && (
        <div className="text-center bg-white/70 rounded-2xl border border-indigo-100 p-10">
          <Users size={32} className="mx-auto text-indigo-300 mb-3" />
          <p className="font-semibold text-slate-600">No answers recorded yet.</p>
          <p className="text-sm text-slate-400 mt-1">
            Once someone finishes a quiz with their name, they&rsquo;ll show up here.
          </p>
        </div>
      )}

      {cloud && isAdmin && !selected && players !== null && players.length > 0 && (
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

      {cloud && isAdmin && selected && results === null && (
        <div className="text-center text-slate-400 py-12">Loading history…</div>
      )}

      {cloud && isAdmin && selected && results !== null && (
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
