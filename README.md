# 📚 BookQuest - Reading Comprehension for Kids

> An interactive reading comprehension quiz web app designed for young readers. Pre-bundled with 60 verified comprehension questions for classic children's books, featuring progressive hints with actual book excerpts and explanations.

Deployable directly to **GitHub Pages** with zero configuration required!

---

## ✨ Key Features

- **📖 10 Selection Questions per Book**:
  Comprehension questions that test key plot turns, character motivations, themes, and details.
- **💡 Two-Step Progressive Hint System**:
  - **Wrong on First Try?** The app does not penalize or immediately reveal the answer. Instead, it displays an encouraging hint alongside an **actual excerpt / sample text from the book** and lets the child try again!
  - **Correct or Still Wrong on Second Try?** Displays the relevant **sample passage from the book** and provides a clear, kid-friendly **explanation** of why that answer is correct.
- **📚 Curated Children's Literature Sets (60 Questions)**:
  Built-in verified books with 10 questions each ready out of the box:
  - 🕷️ *Charlotte's Web* by E.B. White
  - 🌹 *The Little Prince* by Antoine de Saint-Exupéry
  - 🍫 *Charlie and the Chocolate Factory* by Roald Dahl
  - 🦁 *The Lion, the Witch and the Wardrobe* by C.S. Lewis
  - 📚 *Matilda* by Roald Dahl
  - 🐇 *Alice's Adventures in Wonderland* by Lewis Carroll
- **🗣️ Text-to-Speech (Read Aloud)**:
  Built-in Web Speech API reads questions, choices, hints, and explanations aloud to support auditory learners and younger readers.
- **🎵 Cheerful Audio & Confetti**:
  Gentle Web Audio API chimes and celebration confetti to reward learning.
- **🏆 Comprehension Report**:
  Tracks First-Try Gold Stars (⭐) vs. Clue-Assisted Silver Stars (🌟), with an interactive review of all questions, excerpts, and explanations, plus a printable report.

---

## 🚀 GitHub Pages Deployment

The repository includes a GitHub Actions workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) that automatically builds and deploys to GitHub Pages on every push to `main`.

Live site:
👉 **https://siyin.github.io/bookquestions/**

---

## 💻 Local Development

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

---

## 📄 License
This project is open-source under the Apache 2.0 License.
