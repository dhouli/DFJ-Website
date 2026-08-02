# Dance For Joy — Website Rebuild

Next.js 14 + TypeScript + Tailwind scaffold for the DanceForJoy NJ rebuild.

## Local setup

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Getting this into GitHub

```bash
cd dance-for-joy
git init
git add .
git commit -m "Initial scaffold"
gh repo create dance-for-joy --private --source=. --push
# or manually: create an empty repo on github.com, then
# git remote add origin <your-repo-url>
# git branch -M main
# git push -u origin main
```

## Working with Claude Code

Open this folder in VS Code, then run `claude` in the integrated terminal (or use the Claude Code extension). `CLAUDE.md` in this repo gives Claude Code context on the project so you don't have to re-explain it every session — point it there or it will pick it up automatically.

Suggested first sessions:
1. Drop real photos into `public/images/` (organized by page/class), then ask Claude Code to wire them into the hero, class cards, and About page.
2. Rewrite the placeholder copy marked `TODO` throughout `src/app/**` in DFJ's real voice.
3. Decide on and wire up a registration/payment platform for `/schedule-enrollment` (e.g., embed a Jackrabbit/DanceStudio-Pro widget, or a simple Stripe/Calendly flow).
4. Add real tuition info — currently missing from the old site.

## Structure

- `src/app/` — one folder per route (App Router), matches the site map in `DFJ_Site_Structure.md`
- `src/components/Header.tsx` / `Footer.tsx` — shared nav, already wired to all 6 top-level pages
- `tailwind.config.ts` — placeholder warm color palette (`joy-*`), swap for final brand colors

## Deploying

Easiest path: push to GitHub, then import the repo at vercel.com (free tier is fine for a studio marketing site). Every push to `main` auto-deploys.
