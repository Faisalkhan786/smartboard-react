import type { SlideImage } from './imageStore'

const EXT_BY_MIME: Record<string, string> = { gif: 'gif', png: 'png', webp: 'webp', jpeg: 'jpg', jpg: 'jpg' }

/** Image format → file extension, read from a data: URL or committed path (defaults to webp). */
function extFromSrc(src?: string): string {
  if (!src) return 'webp'
  const data = /^data:image\/([a-z0-9.+-]+)/i.exec(src)
  if (data) return EXT_BY_MIME[data[1].toLowerCase()] ?? 'webp'
  const ext = /\.([a-z0-9]+)$/i.exec(src) // already a /decks/<name>.<ext> path
  return ext ? ext[1].toLowerCase() : 'webp'
}

/** The filename stem (no extension) for a slide's centre image. */
const deckBaseFor = (key: string) => key.replace(':', '__').replace(/[^a-zA-Z0-9_-]/g, '-')

/** `topicId:slideKey` (+ its src, to pick the extension) → filename for /public/decks/. */
export const deckFileFor = (key: string, src?: string) => `${deckBaseFor(key)}.${extFromSrc(src)}`
const fileFor = deckFileFor

function triggerDownload(blob: Blob, name: string) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = name
  document.body.appendChild(a)
  a.click()
  a.remove()
  setTimeout(() => URL.revokeObjectURL(url), 4000)
}

function dataUrlToBlob(dataUrl: string): Blob {
  const [head, b64] = dataUrl.split(',')
  const mime = /data:(.*?);base64/.exec(head)?.[1] ?? 'image/webp'
  const bin = atob(b64)
  const bytes = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i)
  return new Blob([bytes], { type: mime })
}

/**
 * Save the deck's centre images into the repo.
 *
 * Primary path (while `npm run dev` is running): POST to the dev-server plugin,
 * which writes the .webp files into public/decks/ and rewrites
 * src/content/imageManifest.ts directly on disk — no manual file moving.
 *
 * Fallback (production preview / plugin unavailable): download the files + a
 * ready-to-commit imageManifest.ts, like before.
 */
export async function exportImagesToRepo(images: Record<string, SlideImage>): Promise<boolean> {
  const keys = Object.keys(images)
  if (keys.length === 0) {
    alert('No images to save yet — upload a centre image on a slide first.')
    return false
  }

  // --- Primary: let the dev server write straight into the repo ---
  try {
    const res = await fetch('/__save-images', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ images }),
    })
    if (res.ok) {
      const { written, removed, total } = (await res.json()) as {
        written: number
        removed: number
        total: number
      }
      alert(
        `Saved to the repo ✓\n\n` +
          `• ${written} image file(s) written to  public/decks/\n` +
          (removed ? `• ${removed} deleted image(s) removed from  public/decks/\n` : '') +
          `• src/content/imageManifest.ts updated (${total} entr${total === 1 ? 'y' : 'ies'})\n\n` +
          `Now just run:  git add -A && git commit && git push`,
      )
      return true
    }
  } catch {
    // dev plugin not reachable — fall through to the download flow
  }

  // --- Fallback: download the files + manifest for manual placement ---
  downloadForManualPlacement(images)
  return true
}

function downloadForManualPlacement(images: Record<string, SlideImage>) {
  const manifest: Record<string, SlideImage> = {}
  let fileCount = 0

  for (const key of Object.keys(images).sort()) {
    const img = images[key]
    if (img.deleted) continue // deleted image — omit from manifest (remove its file manually)
    if (img.src.startsWith('data:')) {
      const name = fileFor(key, img.src)
      triggerDownload(dataUrlToBlob(img.src), name)
      fileCount++
      manifest[key] = { ...img, src: `/decks/${name}` }
    } else {
      manifest[key] = img
    }
  }

  const body = Object.entries(manifest)
    .map(([k, v]) => `  ${JSON.stringify(k)}: ${JSON.stringify(v)},`)
    .join('\n')
  const ts = `import type { SlideImage } from '../components/smartboard/imageStore'

/** Auto-generated. Commit this file + /public/decks/. */
export const IMAGE_MANIFEST: Record<string, SlideImage> = {
${body}
}
`
  triggerDownload(new Blob([ts], { type: 'text/plain' }), 'imageManifest.ts')

  alert(
    `Dev server not reachable — downloaded ${fileCount} image file(s) + imageManifest.ts instead.\n\n` +
      `1. Move the .webp files into  public/decks/\n` +
      `2. Replace  src/content/imageManifest.ts  with the downloaded one\n` +
      `3. git add -A && git commit && git push`,
  )
}
