export interface SlideImage {
  src: string
  leftPct: number
  topPct: number
  widthPct: number
  heightPct?: number
  ratioLocked?: boolean
  cropped?: boolean
  cropX?: number
  cropY?: number
  cropZoom?: number
}

type Store = Record<string, SlideImage>
const KEY = 'smartboard:images:v1'
const DB_NAME = 'smartboard-media'
const DB_VERSION = 1
const STORE_NAME = 'images'

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION)
    request.onupgradeneeded = () => request.result.createObjectStore(STORE_NAME)
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error)
  })
}

function readDb(db: IDBDatabase): Promise<Store | undefined> {
  return new Promise((resolve, reject) => {
    const request = db.transaction(STORE_NAME, 'readonly').objectStore(STORE_NAME).get(KEY)
    request.onsuccess = () => resolve(request.result as Store | undefined)
    request.onerror = () => reject(request.error)
  })
}

function writeDb(db: IDBDatabase, images: Store): Promise<void> {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, 'readwrite')
    transaction.objectStore(STORE_NAME).put(images, KEY)
    transaction.oncomplete = () => resolve()
    transaction.onerror = () => reject(transaction.error)
    transaction.onabort = () => reject(transaction.error)
  })
}

export const loadImages = async (): Promise<Store> => {
  let legacy: Store = {}
  try {
    legacy = migrateKeys(JSON.parse(localStorage.getItem(KEY) || '{}'))
  } catch {
    legacy = {}
  }
  try {
    const db = await openDb()
    const stored = await readDb(db)
    if (stored) {
      localStorage.removeItem(KEY)
      return stored
    }
    if (Object.keys(legacy).length) await writeDb(db, legacy)
    // Remove the old quota-limited copy only after IndexedDB has it safely.
    localStorage.removeItem(KEY)
    return legacy
  } catch {
    return legacy
  }
}

/**
 * Images used to be keyed by numeric slide index ("pulley:0"); they are now
 * keyed by the stable slide key ("pulley:s0"). Remap any legacy keys once so
 * previously uploaded images survive the switch.
 */
function migrateKeys(store: Store): Store {
  const out: Store = {}
  for (const [k, v] of Object.entries(store)) {
    const m = /^([^:]+):(\d+)$/.exec(k)
    if (m) {
      const migrated = `${m[1]}:s${m[2]}`
      if (!(migrated in store)) {
        out[migrated] = v
        continue
      }
    }
    out[k] = v
  }
  return out
}

export async function saveImages(images: Store): Promise<void> {
  const db = await openDb()
  await writeDb(db, images)
}

export const imgKey = (topicId: string, slideKey: string) => `${topicId}:${slideKey}`

/** Downscale and encode an uploaded image efficiently before storing it. */
export function fileToDataURL(file: File, max = 1400): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (ev) => {
      const img = new Image()
      img.onload = () => {
        let w = img.width
        let h = img.height
        if (w > max || h > max) {
          const s = Math.min(max / w, max / h)
          w = Math.round(w * s)
          h = Math.round(h * s)
        }
        const c = document.createElement('canvas')
        c.width = w
        c.height = h
        c.getContext('2d')!.drawImage(img, 0, 0, w, h)
        // WebP keeps photographic images compact while retaining transparency.
        const webp = c.toDataURL('image/webp', 0.84)
        resolve(webp.startsWith('data:image/webp') ? webp : c.toDataURL('image/png'))
      }
      img.onerror = reject
      img.src = ev.target!.result as string
    }
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}
