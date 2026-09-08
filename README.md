# 📚 BookQuest - AI Reading Comprehension for Kids

> An interactive reading comprehension quiz web app designed for young readers. Pre-bundled with 60+ verified comprehension questions for classic children's books and powered by Google Gemini AI to generate custom 10-question quizzes for *any* book with smart clues, excerpts, and explanations.

Deployable directly to **GitHub Pages** with zero backend required!

---

## ✨ Key Features

- **📖 10 Selection Questions per Book**:
  Comprehension questions that test key plot turns, character motivations, themes, and details without feeling dry or intimidating.
- **💡 Two-Step Progressive Hint System**:
  - **Wrong on First Try?** The app does not penalize or immediately reveal the answer. Instead, it displays an encouraging hint alongside an **actual excerpt / sample text from the book** and lets the child try again!
  - **Correct or Still Wrong on Second Try?** Displays the relevant **sample passage from the book** and provides a clear, kid-friendly **explanation** of why that answer is correct.
- **✨ Dual Mode: Ready-to-Play Library & Live AI Generator**:
  - **Built-in verified books** (*Charlotte's Web*, *The Little Prince*, *Charlie and the Chocolate Factory*, *The Lion, the Witch and the Wardrobe*, *Matilda*, *Alice in Wonderland*) with 10 high-quality questions each.
  - **Dynamic AI Generation**: Parents, teachers, or kids can enter **any book title and author** (e.g., *Percy Jackson*, *Harry Potter*, *Hatchet*) and choose their reading grade. The app uses Google Gemini (`gemini-2.5-flash` or `gemini-1.5-flash`) to generate a brand-new 10-question quiz on the spot with book quotes, hints, and explanations!
- **🗣️ Text-to-Speech (Read Aloud)**:
  Built-in Web Speech API reads questions, choices, hints, and explanations aloud to support auditory learners and younger readers.
- **🎵 Cheerful Audio & Confetti**:
  Gentle Web Audio API chimes (no heavy MP3 downloads required) and celebration confetti to reward learning.
- **🏆 Comprehension Report**:
  Tracks First-Try Gold Stars (⭐) vs. Clue-Assisted Silver Stars (🌟), with an interactive review of all questions, excerpts, and explanations, plus a printable report.
- **🔒 Privacy First**:
  Your Gemini API key is stored strictly in your browser's `localStorage`. No keys or personal data are ever sent to third-party servers.

---

## 🚀 One-Click GitHub Pages Deployment

This repository includes a pre-configured GitHub Actions workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### Step 1: Push to GitHub
Ensure your code is pushed to your GitHub repository:
```bash
git add .
git commit -m "Initial release of BookQuest"
git push origin main
```

### Step 2: Enable GitHub Pages in Repository Settings
1. Go to your repository on GitHub: `https://github.com/siyin/bookquestions`.
2. Click **Settings** (gear icon) ➔ **Pages** (in the left sidebar under *Code and automation*).
3. Under **Build and deployment**:
   - Set **Source** to **GitHub Actions**.
4. That's it! GitHub Actions will automatically run the deployment workflow. Within 1–2 minutes, your site will be live at:
   ```
   https://siyin.github.io/bookquestions/
   ```

---

## 💻 Local Development

### Prerequisites
- Node.js (v18 or newer)
- npm

### Installation & Running
1. Clone the repository:
   ```bash
   git clone https://github.com/siyin/bookquestions.git
   cd bookquestions
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start local development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```
   The static production output will be generated inside `dist/`.

---

## 🔑 Setting up the Gemini AI Generator (Optional)

You can play with all pre-defined books right away without any setup!

To generate quizzes for new books:
1. Get a free API key from [Google AI Studio](https://aistudio.google.com/app/apikey).
2. In the BookQuest web app, click the **AI Setup** button in the top right navbar.
3. Paste your API key and click **Test Connection** to verify.
4. Click **Save Settings**.
5. Click **Generate New Book Quiz** on the home screen to create a 10-question quiz for any book in seconds!

---

## 🛠️ Technology Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Vite 6](https://vitejs.dev/) (configured with relative `base: './'` for seamless static hosting)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Visuals**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Sound**: Native Web Audio API + Web Speech API (zero external asset latency)
- **Deployment**: [GitHub Pages](https://pages.github.com/) via GitHub Actions

---

## 📄 License
This project is open-source under the Apache 2.0 License.
