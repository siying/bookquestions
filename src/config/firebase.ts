import type { FirebaseApp } from 'firebase/app';
import type { Firestore } from 'firebase/firestore';
import type { Auth, User } from 'firebase/auth';

// Firebase web config for the BookQuiz cloud records.
// projectId is fixed; the apiKey is a public browser key (restricted by
// HTTP referrer to the BookQuiz sites in the Google Cloud console).
// Until a key is filled in, cloud sync stays disabled and the app keeps
// working fully on local browser storage.
const firebaseConfig = {
  apiKey: 'AIzaSyDEcFNL5nvaYjLzFj-8beb06AOYi09ZyO4',
  projectId: 'mathpractice-siying-2026',
  authDomain: 'mathpractice-siying-2026.firebaseapp.com',
};

let app: FirebaseApp | null = null;
let db: Firestore | null = null;
let auth: Auth | null = null;
let warned = false;

/** Sync check: is a real API key configured? (no Firebase code loaded) */
export function isCloudConfigured(): boolean {
  return Boolean(
    firebaseConfig.apiKey && firebaseConfig.apiKey !== 'FIREBASE_WEB_API_KEY'
  );
}

function warnOnce() {
  if (!warned) {
    warned = true;
    // eslint-disable-next-line no-console
    console.warn(
      '[bookquiz] Firebase web API key not configured — cloud records disabled, using local storage only.'
    );
  }
}

/**
 * Firestore instance, or null when cloud sync is not configured.
 * Firebase modules are loaded lazily so the quiz bundle stays light.
 */
export async function getDb(): Promise<Firestore | null> {
  if (!isCloudConfigured()) {
    warnOnce();
    return null;
  }
  try {
    if (!app) {
      const appMod = await import('firebase/app');
      if (appMod.getApps().length === 0) {
        app = appMod.initializeApp(firebaseConfig);
      } else {
        app = appMod.getApps()[0] ?? null;
      }
    }
    if (!db && app) {
      const { getFirestore } = await import('firebase/firestore');
      db = getFirestore(app);
    }
    return db;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('[bookquiz] Failed to init Firebase:', err);
    return null;
  }
}

/**
 * Firebase Auth instance, or null when cloud sync is not configured.
 * Loaded lazily; only used by the admin page.
 */
export async function getAuth(): Promise<Auth | null> {
  if (!isCloudConfigured()) {
    warnOnce();
    return null;
  }
  try {
    // Ensure app is initialized
    await getDb();
    if (!auth && app) {
      const { getAuth: getFirebaseAuth } = await import('firebase/auth');
      auth = getFirebaseAuth(app);
    }
    return auth;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('[bookquiz] Failed to init Firebase Auth:', err);
    return null;
  }
}

/** Admin email addresses allowed to view the answer records. */
export const ADMIN_EMAILS = ['dong.sy@gmail.com', 'siying.dong@gmail.com'];

/** Check if a Firebase user is an authorized admin. */
export function isAdminUser(user: User | null): boolean {
  if (!user || !user.email) return false;
  return ADMIN_EMAILS.includes(user.email.toLowerCase());
}
