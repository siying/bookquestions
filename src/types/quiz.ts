export interface Question {
  id: string;
  question: string;
  options: [string, string, string, string];
  correctAnswerIndex: number; // 0-3
  samplePassage: string;      // The book excerpt / sample text
  hint: string;               // Kid-friendly clue highlighting the sample passage
  explanation: string;        // Why the answer is right & book context
}

export interface Book {
  id: string;
  title: string;
  author: string;
  coverEmoji: string;
  themeColor: string; // Tailwind color name like 'amber', 'emerald', 'sky', 'purple', 'rose'
  readingLevel: string;
  synopsis: string;
  questions: Question[];
}

export type QuestionAttemptStatus = 
  | 'unanswered'
  | 'attempt1_wrong'
  | 'attempt2_wrong'
  | 'correct_first_try'
  | 'correct_second_try';

export interface QuestionState {
  status: QuestionAttemptStatus;
  selectedOptionIndex: number | null;
  secondOptionIndex: number | null;
  wrongOptions: number[]; // indices of options that were picked incorrectly
}

export interface QuizProgress {
  bookId: string;
  currentIndex: number;
  questionStates: Record<number, QuestionState>;
  isCompleted: boolean;
}
