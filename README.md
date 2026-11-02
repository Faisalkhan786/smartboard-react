# Smartboard Studio (React + TS)

Physics shorts/long-video smartboard. Vite + React + TypeScript, format-driven
(9:16 portrait + 16:9 landscape), chapter → topic → deck navigation.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + production build
```

## Structure

```
src/
  config/formats.ts            portrait/landscape (board size, safe zones, export res)
  content/
    chapters.ts                chapter list
    topics/pulley.tsx          decks authored with slide primitives
    topics/simpleMachine.tsx
    topics/index.ts            topic registry
  components/
    smartboard/                board, pen engine, export, safe zone, image layer
    slide/primitives.tsx       Header, Hero, Card, Formula, Numerical ...
    diagrams/diagrams.tsx      reusable SVG diagrams
  pages/                       Home (chapters) · Chapter (topics) · Deck (board)
```

## Add a topic

1. Create `src/content/topics/<id>.tsx` (copy `pulley.tsx`), build slides from primitives.
2. Register it in `src/content/topics/index.ts`.
3. Set its `chapterId` to a chapter in `content/chapters.ts`.

## Add a chapter

Add an entry to `CHAPTERS` in `content/chapters.ts`, then point topics at its `id`.

## Notes / next steps

- **Images** currently persist in `localStorage` (per machine). For cross-device
  permanence, move to repo assets (`src/assets/...`) and import them in a slide.
- **Landscape (16:9)** format toggle works; slide layouts are authored portrait-first,
  so landscape may need per-slide spacing tweaks later.
- Pen-tip cursor from the vanilla build isn't ported yet (uses the system cursor).
