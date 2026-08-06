# Dance For Joy Website — Open Items

Things that don't block launch but need Kim's input eventually.

## Full site audit — Aug 6, 2026

Went through every page on production (danceforjoynj.com), checked for broken images, console
errors, and broken links (none found), and read through content for accuracy against what's
already tracked below.

Note: initial automated testing flagged the homepage Instagram feed as rendering blank on
production. That turned out to be a false alarm specific to the automated browser used to check
it (likely blocking SnapWidget's third-party script) — Kim confirmed via a real screenshot that
it displays correctly for actual visitors. No fix needed there; `InstagramFeed.tsx` is back to
matching what's live.

Two real findings still open:

1. **Events page still shows the old 2015–2021 highlight reel** (`src/app/events/page.tsx`,
   "Watch Our Dancers" section) — worth swapping for the same 2026 recital links now on the
   homepage (`ShowHighlight` component) so the two pages are consistent and current.
2. **404 page is the plain Next.js default** — no site header/footer, no "Back to Home" link.
   Minor polish item, low priority.

Everything else — every page's layout, images, forms (registration portal, contact form, Google
Map), and footer links — checked out clean on desktop. Mobile couldn't be re-verified with a
fresh screenshot this session (viewport resizing wasn't cooperating in the browser tool), but the
mobile-specific issues raised earlier (hamburger nav, flip-card tap behavior, Instagram feed
sizing) were already tested and fixed directly — worth a quick spot-check on an actual phone as
final confirmation.

## Getting found & growing enrollment

Kim wants Dance For Joy to come up (and win) when people search "dance studio near me" /
"dance classes Brielle NJ." The website changes below are done. The rest is stuff only Kim can
do — and honestly, it matters more than anything on the site itself.

**Done on the site:**
- Added structured data (`src/app/layout.tsx`) telling Google exactly what DFJ is, where it is,
  phone/email, and social links — this is what powers rich results and helps local search
  understand the business.
- Added unique, keyword-specific page titles and descriptions to Classes, Schedule &
  Enrollment, About, Company, Events, Dress Code, and Contact (previously every page shared the
  same generic homepage title/description).
- Added a "New to Dance For Joy?" trial/visit CTA banner on the homepage (`src/app/page.tsx`) —
  a soft "Schedule a Visit" invite rather than a specific promo, since I don't know what offer
  (if any) Kim wants to commit to publicly. **If Kim wants to run an actual promo** — a free
  trial class, a discounted intro month, "Free Dance Week" like some comps do — tell me the
  terms and I'll build it out properly (own page, homepage banner, matching copy everywhere).

**The big lever — Google Business Profile (this is what actually wins the "map pack"):**
The 3 map results people see for "dance studio near me" are driven almost entirely by Google
Business Profile, not the website. If DFJ doesn't have one claimed/optimized yet, this is the
single highest-impact thing to do:
1. Claim/verify the profile at google.com/business if not done already.
2. Set the primary category to something like "Dance school" (most specific match — this
   carries more ranking weight than almost anything else).
3. Fill in hours, phone, website link, service area, and add real photos regularly (studio,
   classes, recitals — Google favors profiles with fresh, frequent activity).
4. **Reviews are the biggest single lever.** Ask parents directly (after a good class, at
   recital, in a follow-up email) to leave a Google review — a simple QR code or link by the
   front desk works well. Respond to every review, good or bad.
5. Post updates occasionally (Google Posts) — a new session starting, a recital date, a
   registration deadline. Keeps the profile "active" in Google's eyes.

**Other things that help but are lower priority:**
- Make sure the studio's name/address/phone are identical (not just close) everywhere it's
  listed online — Yelp, Facebook, any dance-studio directories. Mismatches confuse Google.
- Local backlinks: getting listed on a Brielle/Monmouth County chamber of commerce site, local
  parent Facebook groups, or sponsoring a local school event, all help local search trust DFJ
  as a real neighborhood business.
- Keep posting on Instagram/Facebook regularly — active social profiles indirectly support
  local search trust, and the homepage's live Instagram feed now shows that activity to
  visitors too.

## Content to verify or personalize

- ~~**Homepage "Meet Kim" bio**~~ — done, replaced with Kim's real words on both the homepage
  and her About page bio (including "owner for over 20 years").
- **About page "Our Mission" section** (`src/app/about/page.tsx`) — draft copy that should get
  a real pass from Kim. The old site does have a "Mission and Vision" paragraph, but it reads
  like the same unfinished template filler as the fake testimonials and "Why" page content
  (generic, no specific studio details) — pasting it here for reference in case Kim prefers it
  or wants to blend the two:

  > "At Dance For Joy, we are dedicated to nurturing confidence and creativity in every dancer.
  > Our studio offers a variety of classes designed to provide age-appropriate dance education,
  > ensuring that each student progresses at their own pace in a supportive and joyful
  > atmosphere. We believe in the power of dance to inspire and uplift, and our mission is to
  > create a space where students can express themselves freely and develop lifelong skills."

- **Testimonials** (homepage section, `src/app/page.tsx`) — Kim confirmed these are the only
  three she has right now. Still worth confirming the quotes/names are okay to publish since
  the original source is unclear.
- **Dress Code page** (`src/app/dress-code/page.tsx`) — pulled directly from the old site's
  "Dress-Code-25.26.pdf", so it's real content, but it's season-specific (note the "25.26" in
  the filename). Needs a check each year that it's still current.
- **Tuition rates & policies** (`src/data/schedule.ts`) — these numbers are filled in and look
  complete, but double-check they're current/accurate before this goes live to real families.
- **Key Dates 2026–2027** (`src/data/schedule.ts`) — now tagged and color-coded by category
  (Studio/Audition/Competition/Performance/Closed) on the Events page. Worth a final read
  through to catch anything stale, and I added a "June — Company auditions for the following
  season" entry based on what Kim told me, without an exact date — worth pinning down.
- **Company page** (`src/app/company/page.tsx`, new) — built from what Kim described: 3
  competitions (Dance Xplosion, Backstage, Journey), NYCDA as a separate convention experience,
  4 performances at the Strand Theater, Friday rehearsals separate from weekly classes, June
  auditions, late-August choreography intensive. I made an assumption that NYCDA Convention
  (tagged as one of 4 "(Company)" events in the schedule data) is the convention Kim meant is
  separate from her "three competitions," rather than a fourth competition — worth confirming
  that's right. Also no audition eligibility requirements (age, level, prerequisites) listed
  since I don't have those specifics — worth adding if Kim wants that spelled out for parents.

## Instructor photos still needed

Jessica Totaro, Sara Martorana, Emily Penkethman, and Kathleen Pearlberg now have real photos
and bios (with a hover/tap flip-card to reveal the bio). Megan Theobald was removed at Kim's
request. Five instructors still show a placeholder icon and "Photo coming soon":

- Miss Colleen (Ballet, Jazz & Tap)
- Miss Laraine (Unique Kids)
- Miss Olivia (Ballet & Lyrical)
- Miss Libby (Ballet)
- Mr. A.J. (Acro)

## Competition awards/results — nothing found

Searched for any competition results or awards for Dance For Joy (Brielle, NJ) to potentially
showcase on the site. Came up empty — nothing indexed publicly on Google, Yelp, or elsewhere.
If DFJ has placed at Dance Xplosion, Backstage, Journey, etc., that would need to come from Kim
directly (or from photos/records at the studio) rather than the open web.

## Other findings, not yet acted on

- A few unused photos remain in `public/images/` (contemporary.jpg was used, but a couple other
  "picture" files are still sitting there unused) — low priority, fine to leave.

## Patterns from other studio sites — done or still open

- **Live Instagram feed** — done, see `src/components/InstagramFeed.tsx` (SnapWidget).
- **Company/audition info page** — done, see `src/app/company/page.tsx`.
- **Free trial class / studio tour CTA** — soft version done (see "Getting found & growing
  enrollment" above); a real promo offer is still open if Kim wants one.
- **Awards/accolades showcase.** Still open — see note above, nothing found via search, would
  need to come from Kim.
- **Mobile nav menu** — done, hamburger menu built and verified in `src/components/Header.tsx`.

## Analytics — wired in, ready for launch

The new site now loads Google Analytics 4 (`src/app/layout.tsx`), using the GA4 property that
already existed under danceforjoynj@gmail.com for danceforjoynj.com (Measurement ID
`G-N8QV881ZRG`) rather than creating a duplicate one. It's wired in now so visitor data starts
flowing the moment the rebuilt site goes live — no action needed. To check traffic later:
analytics.google.com → danceforjoynj.com property → Reports. Note this only covers the new
site once it's deployed; it does nothing for the currently-live old site (Kim said that's fine
for now).

## Google Business Profile — done, a couple of manual follow-ups left

Everything below is live or pending Google's review (usually clears in 10 min–1 day):

- **Hours**: Mon–Fri 4:00–7:00 PM, Sat/Sun Closed. Done.
- **Category & description**: Dance school (primary), full description. Done.
- **Services catalog**: added Jazz, Acro, Lyrical, Contemporary alongside Google's
  auto-suggested services (Tap, Hip Hop, and Musical Theater were removed at Kim's request).
  Done.
- **Website link**: now UTM-tagged (`?utm_source=google_business&utm_medium=organic`) so we can
  see GBP-driven traffic in analytics later. Done.
- **Chat/messaging**: enabled via Text message (SMS) using the studio's existing number,
  (732) 223-5336 — customers can now text the listing directly from Google. Done.
- **Posts**: published an update with a "come see the studio" message linking back to the site.
  Couldn't attach the hero video clip through browser automation — GBP's upload picker opens a
  native file-select dialog that can't be driven remotely. **If you want video on that post**,
  open Google Business Profile → Posts → edit this post → "Select images and videos" and pick
  `public/videos/hero-highlight.mp4` from the site folder (or any clip from your phone) — takes
  30 seconds by hand.
- **Q&A section**: turns out Google discontinued Q&A on Business Profiles entirely (Nov–Dec
  2025) — it's been replaced by an AI "Ask Maps" feature with no owner-editable content. Nothing
  to do here; the tactic no longer exists.
- **Service area**: tried to add nearby towns (Manasquan, Point Pleasant, Wall, Spring Lake) but
  couldn't get Google's autocomplete to accept a match. Also, service area is really meant for
  businesses that travel to customers — for a storefront like DFJ with a public address, it's
  not clearly a fit anyway, so this was set aside rather than force it.
