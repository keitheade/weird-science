# Weird Science — Pathway to Surgery

A self-hosted VCE Science & Maths tutor web app for aspiring surgeons. Covers **Chemistry**, **Physics**, **Biology**, and **Mathematical Methods** from Year 9/10 through VCE Units 1–4, aligned to the Victorian (Australian) curriculum.

## Features

- **Learn** — Curated lessons with surgeon-relevance callouts
- **Quiz** — MCQ, numeric, multi-select, drag-label, equation balance & interactive questions
- **Interactive Labs** — Atom builder, periodic table, physics sims, biology diagrams, function grapher
- **AI Tutor** — Optional Gemini or local LM Studio (OpenAI-compatible API)
- **Gamification** — XP, levels, streaks, badges, pathway map
- **Progress** — Dashboard with mastery radar, strengths & improvement areas
- **Multi-profile** — PIN-protected kid profiles
- **Responsive** — Works on phones and laptops

## Local Development

```bash
# Install dependencies
npm install

# Set up database and seed content
npm run db:setup

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## AI Tutor Setup

1. Go to **Settings** in the app
2. Choose **Google Gemini** or **LM Studio (Local)**
3. Enter your API key and enable the tutor

**Gemini:** Get a key from [Google AI Studio](https://aistudio.google.com/apikey). Use the default OpenAI-compatible endpoint.

**LM Studio:** Start the local server (default `http://localhost:1234/v1/`). API key can be any value.

## Deploy to Synology NAS

### Option A: Docker Compose (recommended)

1. Copy this project to your Synology (e.g. `/docker/weird-science/`)
2. Open **Container Manager** → **Project** → **Create**
3. Point to the `docker-compose.yml` file
4. Build and start
5. Access at `http://<nas-ip>:3000`

Data persists in the `./data` folder (SQLite database).

### Option B: Manual Docker build

```bash
docker build -t weird-science .
docker run -d \
  -p 3000:3000 \
  -v ./data:/app/data \
  --name weird-science \
  weird-science
```

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `DATABASE_URL` | `file:./data/weird-science.db` | SQLite database path |
| `AI_ENABLED` | `false` | Enable AI tutor |
| `AI_PROVIDER` | `gemini` | Provider preset name |
| `AI_BASE_URL` | Gemini OpenAI endpoint | API base URL |
| `AI_API_KEY` | — | API key |
| `AI_MODEL` | `gemini-2.0-flash` | Model name |

## Tech Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS + custom UI components
- Prisma + SQLite
- Framer Motion + Canvas/SVG interactives
- Recharts for analytics
- OpenAI-compatible client for AI

## Curriculum

Content follows VCAA study designs and Victorian Curriculum F–10 science, structured as:

- **Year 9/10** foundation topics
- **VCE Units 1–4** per subject
- Surgeon-relevance notes throughout

Subjects: Chemistry, Physics, Biology, Mathematical Methods.
