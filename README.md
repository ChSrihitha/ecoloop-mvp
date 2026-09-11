# EcoLoop

A production-quality hackathon MVP for DVPS35 — AI-based E-Waste Pickup Coordinator.

## What works in the demo
- Add e-waste manually; photo is optional.
- AI analysis via a Vercel server function when `OPENAI_API_KEY` is configured, with a reliable local fallback.
- Seeded demo recycler matching.
- Pickup scheduling and local persistence.
- Visual disposal lifecycle with demo status advancement.
- Printable responsible disposal certificate after completion.
- Impact dashboard with transparent demo-point methodology.

## Stack
React + Vite + TypeScript + Tailwind CSS + shadcn-style UI primitives + Lucide React. Supabase schema is included for PostgreSQL/Storage/Auth integration. Vercel API function protects the OpenAI key.

## Local setup
```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and add `OPENAI_API_KEY` for live AI analysis. The frontend still works without it using the fallback.

## Supabase
Run `supabase/schema.sql` in the Supabase SQL editor. Create an e-waste image bucket for production uploads and add RLS policies before handling real user data. The current hackathon UI intentionally uses localStorage so the demo can run without external dependencies.

## OpenAI
The frontend calls `/api/analyze`; the API function reads `OPENAI_API_KEY` server-side. Never put the key in `VITE_*` variables or frontend source.

## Deployment
Import the repository into Vercel. Add `OPENAI_API_KEY` (and optionally `OPENAI_MODEL`) in project environment variables. Build command: `npm run build`.

## GitHub-ready structure
- `src/` — React application and UI
- `api/analyze.ts` — secure AI backend function
- `supabase/schema.sql` — database schema + demo seed
- `.env.example` — required environment variables
