# Prompt Engine App

## Live Demo - https://prompthelperr.netlify.app/

An AI-powered prompt ideation and generation web application. Users can sign up, generate structured prompts across categories (writing, coding, business, education), refine them, save history, and export content. The interface supports light/dark themes, animated backgrounds, and responsive design.

---

## 🌟 Quick Explanation (Non‑Technical Friendly)
Think of this app as a smart idea helper. You choose a category (like writing or coding), fill a few blanks, and it creates a detailed prompt for you. You can:
- Get AI-suggested ideas
- Customize details (length, tone, etc.)
- Improve (enhance) the prompt
- Copy or save it for later

You log in (email & password), and your prompts stay saved for next time. You can also switch between light and dark mode.

---

## ✨ Key Features
- Email/password authentication (Firebase Auth)
- Persistent user session & profile display
- AI prompt suggestions (Cohere API)
- Multiple prompt categories with templates & variable auto-suggestions
- Enhance existing prompt (refinement step)
- Prompt history & favorites (Firestore placeholder logic in services folder)
- Export utilities (JSON / TXT)
- Light & dark theme toggle (persisted)
- Animated auth page with dynamic colorful blobs
- Accessible, responsive UI (TailwindCSS + React + Lucide icons)

---

## 🧱 Tech Stack
| Layer | Tool |
|-------|------|
| Frontend | React 18 + TypeScript |
| Build | Vite |
| Styling | Tailwind CSS + custom utility classes |
| Icons | lucide-react |
| Auth & Data | Firebase (Auth, Firestore, Analytics) |
| AI | Cohere API (cohere-ai SDK) |

---

## 📂 Project Structure (Simplified)
```
src/
	components/        # UI components (navigation, auth, generator, history, footer, etc.)
	contexts/          # Global state providers (auth, theme)
	hooks/             # Custom hooks (prompt generation logic)
	services/          # API/service wrappers (Cohere + Firestore abstractions)
	utils/             # Helper utilities (export, templates, suggestions)
	config/            # Firebase initialization
	types/             # TypeScript shared types
	App.tsx            # Root app composition
	main.tsx           # Entry point mounting React
```

---

## 🔐 Environment Variables
Create a `.env` file (never commit real keys). Example:
```
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement
VITE_COHERE_API_KEY=your_cohere_key
```

All `VITE_` prefixed keys are exposed to the browser (only add what is safe per provider guidelines).

---

## 🚀 Getting Started
### 1. Install Dependencies
```
npm install
```
### 2. Configure Environment
Add your `.env` values (see above section).
### 3. Run Dev Server
```
npm run dev
```
Open the printed local URL (typically http://localhost:5173).

### 4. Build for Production
```
npm run build
npm run preview
```

---

## 🧭 User Flow
1. Open app → Sign up (name, email, password)
2. Land on generator dashboard
3. Choose a category (e.g., Writing)
4. See AI‑generated idea suggestions
5. Fill variables (or randomize) and select prompt length
6. Generate prompt → Optionally Enhance
7. Copy or save (history/favorites logic available for expansion)
8. Toggle dark/light at any time

---

## 🧠 AI Integration
`services/cohere.ts` (not shown here) calls Cohere for:
- Initial idea suggestions per category
- Prompt enhancement

Replace / extend with different providers by updating the service layer only.

---

## 🎨 Theming
- Tailwind configured with `darkMode: 'class'`
- Theme stored in `localStorage` and applied to `<html>`
- Component classes use `dark:` variants + custom utility CSS in `index.css`

---

## 📦 Export
`utils/exportUtils.ts` contains helpers to export prompts (JSON / plain text). Extend for CSV / Markdown easily.

---

## 🔒 Security & Notes
- Do not expose sensitive Firebase rules—configure Firestore security rules in the Firebase console.
- Rate-limit or debounce AI calls in production to control cost.
- Add validation to prevent empty or abusive content before sending to Cohere.

---

## 🛣 Roadmap Ideas
- Favorite & tag management UI
- Shareable prompt links
- Multi-language interface
- Prompt version history & diff
- Offline caching (IndexedDB)
- Cohere streaming responses

---

## 🧪 Testing (Suggested)
Add Jest + React Testing Library:
```
npm install -D jest @types/jest ts-jest @testing-library/react @testing-library/jest-dom
```
Then configure `jest.config.ts` and write component tests for generator logic.

---

## 🙋 FAQ (Plain Language)
Q: Why do I need to sign in?  
A: So your prompts can stay saved for later.

Q: Is dark mode saved?  
A: Yes, the app remembers your choice.

Q: Can I use this for any topic?  
A: Yes—choose a category or expand templates to fit your need.

Q: Can I improve a prompt after generating?  
A: Click Enhance to get a refined version.

---

## 👨‍💻 Author
Made by **Vedant Kankate**  
Portfolio: https://vedant-kankate.netlify.app/

---

## 📜 License
MIT (add a `LICENSE` file if you want explicit licensing on GitHub).

---

> If this project helps you, consider starring it on GitHub!
