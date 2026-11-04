import { useCallback, useEffect, useState } from 'react'
import { loadImages, saveImages, IMAGES_CHANGED_EVENT, type SlideImage } from './imageStore'
import { exportImagesToRepo, deckFileFor } from './exportImages'
import { IMAGE_MANIFEST } from '../../content/imageManifest'

/** Everything about an image except where its bytes live (data: vs /decks/). */
function placement(img: SlideImage): string {
  const { src: _src, ...rest } = img
  return JSON.stringify(rest)
}

/**
 * How many centre images are not yet committed to the repo?
 *
 * "unsaved" = a local (IndexedDB) image that has no committed manifest entry
 * yet (a fresh upload), or whose placement/crop differs from the committed one
 * (moved/cropped since it was saved). The `src` form is ignored, so an
 * already-saved image still stored locally as a data: URL is NOT flagged.
 */
function countUnsaved(store: Record<string, SlideImage>): number {
  let n = 0
  for (const key of Object.keys(store)) {
    const local = store[key]
    const committed = IMAGE_MANIFEST[key]
    if (local.deleted) {
      if (committed) n++ // a committed image was deleted — deletion not saved yet
    } else if (!committed) n++ // never committed
    else if (placement(local) !== placement(committed)) n++ // moved/cropped
  }
  return n
}

/** Shared across Home, Chapter and the deck toolbar — stays in sync via an event. */
export function useUnsavedImages() {
  const [count, setCount] = useState(0)
  const [saving, setSaving] = useState(false)

  const refresh = useCallback(async () => {
    try {
      setCount(countUnsaved(await loadImages()))
    } catch {
      /* ignore — storage unavailable */
    }
  }, [])

  useEffect(() => {
    refresh()
    const onEvt = () => refresh()
    window.addEventListener(IMAGES_CHANGED_EVENT, onEvt)
    window.addEventListener('focus', onEvt)
    return () => {
      window.removeEventListener(IMAGES_CHANGED_EVENT, onEvt)
      window.removeEventListener('focus', onEvt)
    }
  }, [refresh])

  const saveNow = useCallback(async () => {
    if (saving) return
    setSaving(true)
    try {
      const store = await loadImages()
      const ok = await exportImagesToRepo({ ...IMAGE_MANIFEST, ...store })
      if (ok) {
        // Repo is now the source of truth — rewrite data: URLs to their /decks/
        // paths so the count drops to 0 without discarding anything.
        const rewritten: Record<string, SlideImage> = {}
        for (const [k, v] of Object.entries(store)) {
          if (v.deleted) continue // deletion committed on the server → drop the tombstone
          rewritten[k] = v.src.startsWith('data:') ? { ...v, src: `/decks/${deckFileFor(k)}` } : v
        }
        await saveImages(rewritten) // dispatches the change event → refresh
      }
    } finally {
      setSaving(false)
      refresh()
    }
  }, [saving, refresh])

  return { count, saving, saveNow }
}
