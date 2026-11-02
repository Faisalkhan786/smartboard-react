# CLAUDE.md — Smartboard Studio (React + TS)

Context for any future session working in this workspace. Read this first.

## What this project is

A personal tool to author **Physics teaching decks** and record them as videos
(YouTube Shorts 9:16 now, 16:9 long videos later). Each slide is a 1080×1920 (or
1920×1080) "smartboard" that supports pen-tab annotation, a safe-zone guide, an
uploadable centre image, a reveal-solution toggle, and PNG export.

Audience: **Class 9 (and later Class 10) Physics**. Content is organised as
**Chapter → Topic → Deck (slides)**.

This React app is the production version. A pre-migration **vanilla HTML/JS**
version lives at `../Smartboard` (and `../Smartboard.zip` backup) for reference.

## Stack

- **Vite + React 18 + TypeScript**
- **react-router-dom** for Chapter/Topic/Deck routing
- **html2canvas** for PNG export
- Plain CSS with design tokens in `src/theme/tokens.css` (no Tailwind)
- No backend; local-first. Run with `npm run dev`.

## Commands

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc --noEmit && vite build  (use this to verify changes)
```

## Architecture (the important parts)

- **Format system is the backbone** — `src/config/formats.ts` defines `portrait`
  and `landscape` (board size, safe zones, export resolution). The `<Smartboard>`
  derives everything from the active format. A format toggle lives in the Toolbar.
- **Landscape layout** — slides are authored **portrait-first** (vertical stack).
  For 16:9, wrap the slide body in `<SlideSplit>` with `<SplitMain>` (left — the
  diagram) and `<SplitAside>` (right — the text/cards); keep `Header` above and
  `Footnote` below, full-width. In **portrait** these wrappers are `display:contents`,
  so portrait is byte-for-byte unchanged; in **landscape** (`.slide.landscape` on
  the slide) they become a two-column row. Landscape-only size tweaks live under
  `.slide.landscape …` in `slide.css`. Pulley is done; other topics still stack.
- **Content is data + components** — `src/content/`:
  - `chapters.ts` — chapter list
  - `topics/<id>.tsx` — a `Topic` with `slides[]`; each slide's `render()` composes
    **slide primitives** (`components/slide/primitives.tsx`) and **diagram
    components** (`components/diagrams/diagrams.tsx`).
  - `topics/index.ts` — the registry (`TOPICS`, `getTopic`, `topicsInChapter`).
- **Engine** — `components/smartboard/`:
  - `usePenEngine.ts` — canvas ink (calligraphy/marker/laser/eraser), per-slide
    strokes, undo/clear. Returns a **stable** API object (memoised).
  - `useExportPng.ts` — 2× PNG, skips safe-zone overlay + resize handle.
  - `SafeZone.tsx`, `ImageLayer.tsx`, `imageStore.ts` (localStorage, per topic+slide),
    `Smartboard.tsx` (board frame host).
  - `deckStore.ts` — per-topic **slide layout**: lets the user insert their own
    **blank slides** between the code-authored ones. Slides are identified by a
    **stable key** (static = `s<index>`, user = `u-<id>`), NOT by position, so
    inserting/deleting never shifts another slide's ink or image. Ink (`usePenEngine`)
    and images (`imgKey`) are both keyed by this string. `Deck` composes
    static + user slides into the live list; a blank user slide renders `null`
    (empty board) — add an image to it via 🖼️ to get an "image slide".
- **Pages** — `pages/Home.tsx` (chapters), `Chapter.tsx` (topics in a chapter),
  `Deck.tsx` (orchestrator: tool state, scaling, keyboard, images) + `Toolbar.tsx`.

## Conventions

- **Add a topic:** create `src/content/topics/<id>.tsx` (copy `pulley.tsx`), build
  slides from primitives, give it a `chapterId`, then register it in
  `topics/index.ts`.
- **Add a chapter:** add to `CHAPTERS` in `content/chapters.ts`; point topics at its id.
- **New diagram:** add an SVG component in `components/diagrams/diagrams.tsx`
  (JSX attrs: `strokeWidth`, `strokeLinecap`, `textAnchor`, `fontSize`, …).
- Build slides from existing primitives — **don't** write raw slide HTML/inline
  styles. Keep colours as `kw-*` / tokens.
- After non-trivial changes, run `npm run build` to typecheck.

## Current status

- Chapter: **Work & Energy** → Topics: **Simple Machines** (3 slides), **Pulley** (4 slides,
  landscape-ready), **Inclined Plane** (4 slides, landscape-ready), **Lever** (4 slides,
  landscape-ready), **Movable Pulley** (concept + E=W/2 derivation + numerical, landscape-ready).
- Build passes; dev server boots clean.

## Known next steps / TODO

- Move centre images from localStorage to **repo assets** for cross-device permanence.
- Author/adjust **landscape (16:9)** layouts per slide.
- Port the **pen-tip cursor** from the vanilla build (currently uses system cursor).
- Add more Class 9/10 chapters & topics.

## Physics notes baked into content (keep correct)

- **Fixed pulley:** MA = 1, effort = load; only changes *direction* (the amount of
  effort does not decrease — only the way of applying it becomes convenient).
- **Movable pulley shown as a 2-pulley system** (1 fixed on top for direction + 1
  movable on the load): MA = 2, effort = load ÷ 2, pull twice the rope. The fixed
  pulley does not change MA.
