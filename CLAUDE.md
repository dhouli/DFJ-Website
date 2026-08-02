# Project context for Claude Code

This is the rebuild of danceforjoynj.com, a family-owned dance studio in Brielle, NJ, owned by Kim Houli. Stack: Next.js 16 (App Router, Turbopack), TypeScript, Tailwind CSS.

`npm run dev` defaults to port 3000, but that's often already in use locally — Next will fall back to 3002 automatically in that case.

## Voice and design direction

Warm, professional, welcoming — not sleek/commercial/dark. Closest reference points from comp research: Springs Dance (confidence over trophies), American Dance Institute (warm, non-competitive), New England Dance Academy (organized by age group). Avoid the "sleek black urban studio" aesthetic — that fits competitive/adult studios, not a family recreational studio.

Real studio photography only, no stock images. Kim will provide a photo library organized by class/age group — ask before inventing placeholder imagery beyond simple colored blocks.

## Known facts (don't invent tuition/policy details — ask Kim)

- Address: 1025 NJ-70 #2, Brielle, NJ 08730
- Phone: (732) 223-5336
- Email: danceforjoynj@gmail.com
- Classes: Pre-Ballet (3-5), Try Tap & Hip Hop (3-4), Ballet/Pre-Pointe/Pointe (5+), Jazz (6-18), Contemporary (10+), Musical Theater, Hip Hop, Tap (5+), Acro (6+), Lyrical (7+)
- Instructors: Kimberly Houli (Artistic Director & Owner), Jennifer & Jessica Hine (Hip Hop), Jessica Totaro, Dana Ingram, Kathleen Pearlburg, Megan Theobald
- Facility: raised Marley floors, parent viewing windows

## Known gaps to fill (see DFJ_Site_Structure.md in the parent project folder for full detail)

- No tuition/pricing published anywhere — needs to be sourced from Kim before the Schedule & Enrollment page is real
- Registration platform not yet decided (embedded widget vs. external link)
- All copy marked `TODO` in `src/app/**` is placeholder/template language and needs rewriting in DFJ's real voice
- Social media URLs in `Footer.tsx` are placeholders (`REPLACE_ME`)

## Site map

7 top-level nav items: Classes, Schedule & Enrollment, About, Events, Testimonials, Contact, plus a Register Now CTA button. Dress Code / Dates at a Glance / Summer Classes from the old site are folded into Schedule & Enrollment rather than kept as standalone pages — don't recreate them as separate routes unless Kim asks.
