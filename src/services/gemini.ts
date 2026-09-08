import { Question } from '../types/quiz';

const STORAGE_KEY = 'bookquest_gemini_api_key';
const MODEL_KEY = 'bookquest_gemini_model';

export const DEFAULT_MODEL = 'gemini-2.5-flash';

export const AVAILABLE_MODELS = [
  { id: 'gemini-2.5-flash', name: 'Gemini 2.5 Flash (Fastest & Recommended)' },
  { id: 'gemini-1.5-flash', name: 'Gemini 1.5 Flash' },
  { id: 'gemini-2.5-pro', name: 'Gemini 2.5 Pro (Deep Reasoning)' },
];

export function getStoredApiKey(): string {
  if (typeof window === 'undefined') return '';
  return localStorage.getItem(STORAGE_KEY) || '';
}

export function saveStoredApiKey(key: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, key.trim());
}

export function removeStoredApiKey(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}

export function getStoredModel(): string {
  if (typeof window === 'undefined') return DEFAULT_MODEL;
  return localStorage.getItem(MODEL_KEY) || DEFAULT_MODEL;
}

export function saveStoredModel(model: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(MODEL_KEY, model);
}

export async function testGeminiApiKey(apiKey: string, model: string = DEFAULT_MODEL): Promise<boolean> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`;
  
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: 'Hello! Respond with just "OK" to verify API access.' }] }],
      generationConfig: { maxOutputTokens: 10 },
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData?.error?.message || `API error (${response.status})`);
  }

  return true;
}

interface RawGeneratedQuestion {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  samplePassage: string;
  hint: string;
  explanation: string;
}

export async function generateQuestionsForBook(
  bookTitle: string,
  author: string,
  readingLevel: string = 'Ages 8-12',
  notesOrChapters?: string,
  apiKey?: string,
  model?: string
): Promise<Question[]> {
  const key = apiKey || getStoredApiKey();
  if (!key) {
    throw new Error('Please enter your Google Gemini API key in settings to generate new questions.');
  }

  const selectedModel = model || getStoredModel();
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${selectedModel}:generateContent?key=${encodeURIComponent(key)}`;

  const prompt = `You are an expert children's literature educator creating a reading comprehension quiz for children (${readingLevel}).
Book: "${bookTitle}" by ${author}.
${notesOrChapters ? `Additional Focus/Context: ${notesOrChapters}` : ''}

Generate exactly 10 high-quality multiple-choice comprehension questions testing whether the child understood key plot events, character motivations, themes, and important details of the book.

For each of the 10 questions:
1. Provide "question": clear, engaging question suited for ${readingLevel}.
2. Provide "options": an array of exactly 4 distinct, plausible answer choices (only 1 is correct).
3. Provide "correctAnswerIndex": integer 0, 1, 2, or 3 pointing to the correct choice in "options".
4. Provide "samplePassage": a relevant quote, passage excerpt, or vivid scene description from the book that contains or reveals the answer.
5. Provide "hint": a gentle, encouraging clue for the child if they guess wrong on their first try, directing them to notice something specific in the samplePassage.
6. Provide "explanation": a kind, clear explanation of why the correct option is right and what happens in the book, referencing the sample passage.

Respond with ONLY valid JSON adhering to this JSON schema:
[
  {
    "question": "string",
    "options": ["string", "string", "string", "string"],
    "correctAnswerIndex": 0,
    "samplePassage": "string",
    "hint": "string",
    "explanation": "string"
  }
]`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        responseMimeType: 'application/json',
        temperature: 0.7,
      },
    }),
  });

  if (!response.ok) {
    const errJson = await response.json().catch(() => ({}));
    const message = errJson?.error?.message || `Request failed with status ${response.status}`;
    throw new Error(message);
  }

  const data = await response.json();
  const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!rawText) {
    throw new Error('The AI did not return any content. Please try again.');
  }

  let parsed: RawGeneratedQuestion[];
  try {
    parsed = JSON.parse(rawText);
  } catch {
    // If wrapped in markdown code fence
    const cleaned = rawText.replace(/```json\s*|\s*```/g, '').trim();
    parsed = JSON.parse(cleaned);
  }

  if (!Array.isArray(parsed) || parsed.length === 0) {
    throw new Error('Failed to parse 10 questions from the AI response. Please try again.');
  }

  // Format into Question objects
  return parsed.map((item, idx) => ({
    id: `ai-${Date.now()}-${idx}`,
    question: item.question,
    options: [
      item.options[0] || 'Option A',
      item.options[1] || 'Option B',
      item.options[2] || 'Option C',
      item.options[3] || 'Option D',
    ] as [string, string, string, string],
    correctAnswerIndex: typeof item.correctAnswerIndex === 'number' && item.correctAnswerIndex >= 0 && item.correctAnswerIndex <= 3 
      ? item.correctAnswerIndex 
      : 0,
    samplePassage: item.samplePassage || 'Excerpt from the book.',
    hint: item.hint || 'Re-read the sample text carefully to find the answer!',
    explanation: item.explanation || 'This is the correct answer according to the book.',
  }));
}
