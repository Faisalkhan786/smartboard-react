# Project History & Decision Log

A narrative of how this project came to be, so the full context survives across
sessions. Newest context at the bottom.

## 0. Origin — vanilla smartboard (`../Smartboard`)

The project started as a single-file studio:

- `smartboard.html` — the **engine**: dark 9:16 (540×960) board, sidebar controls,
  pen-tab annotation (calligraphy / marker / laser / eraser), KaTeX, and
  `html2canvas` export to 1080×1920 PNG.
- `slides.js` — a `SLIDES_DATA` array of `{ navTitle, html }` slides (the first
  content was about **Simple Machines**, using a pulley as the example).

## 1. Multi-topic system (vanilla)

To hold many topics for revision, we split engine from content:

- `topics/manifest.js` — list of topics (+ later chapters).
- `topics/<id>.js` — each topic registers `window.TOPICS[id] = { slides }`.
- `index.html` — a **topic launcher** menu; cards open `smartboard.html?topic=<id>`.
- Engine loads the chosen topic's deck on demand and added a "← back" button.

The original deck was renamed to the **Simple Machines** topic. A new **Pulley**
topic was authored (short & efficient, 4 slides).

## 2. Content & UX decisions (vanilla)

- **Pulley deck (4 slides):** What is a Pulley? · Fixed Pulley · Movable Pulley ·
  Formula & Numerical.
- **Fixed pulley** slide includes the key line (user-requested, translated):
  *"So the amount of effort does not decrease — only the way of applying it becomes
  more convenient."*
- **Movable pulley** was corrected to a **2-pulley system** (1 fixed for direction +
  1 movable on the load) — this is the clearer, textbook-correct depiction. MA = 2.
- **Slide 1 layout:** pulley illustration placed **below the definition** (title →
  definition → image → jobs) for a natural teaching flow.
- **YouTube safe zones:** slide padding tuned so content clears the Shorts UI
  (right rail ~72, bottom ~148, top ~40 on the 540×960 board). Added a toggleable
  **Safe Zone guide** overlay (excluded from PNG export).
- **Centre image upload:** add/replace/move/resize, saved per slide (localStorage),
  included in export.
- **Sidebar fit:** compacted into **icon-only rows with hover tooltips**; slide list
  is fixed-height, scrollable, with a count + "more below" fade so the sidebar fits
  on one page.
- **Chapter-wise navigation:** `index.html` became two-level — **Chapters → Topics**.
  Both Simple Machines and Pulley sit under the **Work & Energy** chapter.

## 3. Decision to migrate to React

Goal: grow this into a bigger project for **Class 9 + 10**, and support **both**
orientations (9:16 shorts now, 16:9 long videos later). The user is comfortable with
React/Node. We chose the professional path:

- **Vite + React + TypeScript**, React Router, CSS tokens.
- A **format-driven** architecture (portrait/landscape as a core config) so dual
  orientation is first-class.
- Reusable **slide primitives** + **diagram components** instead of HTML strings.
- Fresh folder `smartboard-react` (vanilla kept as reference); a backup zip exists at
  `../Smartboard.zip`.

## 4. React migration (this workspace)

Built and verified (`npm run build` passes, dev server boots):

- Format system (`config/formats.ts`), content model (`content/`), engine
  (`components/smartboard/`), slide primitives + diagrams, pages + routing.
- Content migrated: **Simple Machines (3)** and **Pulley (4)** under **Work & Energy**.
- All vanilla features ported: pen engine, safe zone, centre image (drag/resize),
  reveal solution, PNG export, compact sidebar + tooltips, chapter→topic→deck nav,
  plus a **format toggle**.

See `CLAUDE.md` for structure, conventions, status, and TODOs.
