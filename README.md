# 💝 Memory & Fun Game

A personalized React + TypeScript project that includes interactive games such as:

- 🧠 **Quiz Game**: A mix of multiple-choice and free-answer questions
- 🎲 **Dare Game**: Fun dares revealed one by one
- 🎁 **Gift Game**: Choose stores, types, and styles
- 🍽️ **Restaurant Challenge**: Themes, roles, and story-based dining adventure

All styled with Tailwind CSS and animated with Framer Motion for a magical and clean UI experience.

---

## 🚀 How to Run

```bash
npm install install
npm run dev
```

> Or use `npm` or `yarn` if you prefer.

---

## 🔒 Private Data Setup

For privacy, quiz answers and dare content are not included in the repo. You must create a file manually:

### 📁 `src/data/game-data.private.json`

Make sure this file is listed in `.gitignore`.

### JSON Format:

```json
{
  "quiz": [
    {
      "type": "multiple",
      "question": "What's my favorite color?",
      "options": ["Blue", "Red", "Green", "Yellow"],
      "answer": "BLUE"
    },
    {
      "type": "free",
      "question": "What's the name of the first movie we watched together?",
      "answer": "INCEPTION"
    }
  ],
  "dares": [
    "Do 10 jumping jacks 💪",
    "Speak like a robot for 1 minute 🤖"
  ]
}
```

> You can customize it however you want. Just keep the format.

---

## 🛡️ Tech Stack

- React + TypeScript
- Tailwind CSS
- Framer Motion

---

## 📦 Folder Structure


Made with 💙 for birthday idea
