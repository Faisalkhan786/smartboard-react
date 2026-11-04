import type { SlideImage } from '../components/smartboard/imageStore'

/**
 * Committed, cross-device centre images. Keyed by `${topicId}:${slideKey}`
 * (the same key as `imgKey`). Each `src` points to a file in `/public/decks/`,
 * so the image + its placement travel with the repo.
 *
 * These are the DEFAULT images shown on every device after a `git pull`.
 * A locally-uploaded image (stored in the browser's IndexedDB) overrides the
 * matching entry here — so you can still draft locally before committing.
 *
 * To (re)generate this file: open any deck → Toolbar → "Save images to repo",
 * drop the downloaded `.webp` files into `public/decks/`, then replace this
 * file with the downloaded `imageManifest.ts` and commit both.
 */
export const IMAGE_MANIFEST: Record<string, SlideImage> = {
  // 'pulley:s0': { src: '/decks/pulley__s0.webp', leftPct: 22, topPct: 30, widthPct: 55 },
}
