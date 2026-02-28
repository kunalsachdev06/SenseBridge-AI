# 🌉 SenseBridge AI

**A Universal Accessibility Layer for an Inclusive World**

> *Accessibility is not a feature. It is a right.*

AI that converts real-world information into personalized sensory formats — bridging gaps for visually, hearing, and learning-impaired individuals.

---

## ✨ Features

- **Image → Audio Description** — AI-powered scene narration for blind users
- **Speech → Text Captions** — Real-time captioning for deaf users
- **Text → Simplified Language** — Complex text made readable for dyslexic learners
- **Multi-language Output** — English, Hindi, Tamil, Telugu, Marathi
- **Smart Crisis Detection** — Fire, weapon, accident, explosion alerts
- **Interactive Live Demo** — Try all features directly from the website
- **Dark/Light Theme** — Toggle with smooth transitions
- **Full Accessibility** — ARIA labels, keyboard nav, high contrast, large text mode

---

## 📁 Folder Structure

```
SenseBridge_AI/
├── frontend/                 # React + Vite + Tailwind CSS
│   ├── src/
│   │   ├── components/       # 15+ section components
│   │   ├── context/          # Theme & accessibility context
│   │   ├── utils/            # Motion variants system
│   │   ├── App.jsx           # Main layout
│   │   ├── main.jsx          # Entry point (Lenis smooth scroll)
│   │   └── index.css         # Design system
│   ├── index.html
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── package.json
│
├── backend/                  # Flask API
│   ├── app.py                # 6 endpoints with mock responses
│   ├── requirements.txt
│   ├── .env.example
│   └── sample_data/
│       └── demo_responses.json
│
└── README.md
```

---

## 🚀 Quick Start

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Opens at **http://localhost:5173**

### Backend

```bash
cd backend
pip install -r requirements.txt
cp .env.example .env
python app.py
```

Runs at **http://localhost:5000**

---

## 🔌 API Endpoints

| Endpoint | Method | Description |
|---|---|---|
| `/health` | GET | Health check |
| `/upload-image` | POST | Image description (mock) |
| `/speech-to-text` | POST | Speech transcription (mock) |
| `/simplify-text` | POST | Text simplification (mock) |
| `/detect-crisis` | POST | Crisis detection (mock) |
| `/translate` | POST | Multi-language translation (mock) |

All endpoints return structured JSON:
```json
{
  "success": true,
  "data": { ... },
  "timestamp": "2025-01-01T00:00:00Z",
  "version": "1.0"
}
```

---

## 🌐 Deployment

### Frontend → Vercel

1. Push code to GitHub
2. Import the `frontend/` directory in [Vercel](https://vercel.com)
3. Set build command: `npm run build`
4. Set output directory: `dist`

### Backend → Render

1. Push code to GitHub
2. Create a new Web Service on [Render](https://render.com)
3. Set root directory: `backend/`
4. Set start command: `gunicorn app:app`
5. Add environment variables from `.env.example`

---

## ♿ Accessibility

- **Skip-to-content link** for keyboard users
- **ARIA labels** on all interactive elements
- **Keyboard navigation** with visible focus rings
- **High contrast mode** toggle
- **Large text mode** toggle
- **`prefers-reduced-motion`** support
- **ARIA live regions** for crisis alerts
- **Semantic HTML** throughout

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, Vite, Tailwind CSS v3 |
| Animations | Framer Motion, Lenis |
| Icons | Lucide React |
| Backend | Flask, Python |
| Deployment | Vercel + Render |

---

## 📄 License

Built for hackathon purposes. © 2025 SenseBridge AI Team.
