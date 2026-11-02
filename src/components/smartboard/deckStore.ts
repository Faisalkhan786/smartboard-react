/**
 * Per-topic deck layout — lets the user insert their own blank slides between
 * the code-authored (static) ones, persisted in localStorage.
 *
 * Slides are identified by a STABLE key, never by position, so inserting or
 * deleting a slide never shifts another slide's ink / image:
 *   - static slides (from the topic file):  "s0", "s1", ...  (s + array index)
 *   - user-inserted blank slides:           "u-<id>"
 */

export interface UserSlideMeta {
  id: string
  navTitle: string
}

export interface DeckLayout {
  /** full display order, mixing static + user keys */
  order: string[]
  /** metadata for user-inserted slides, keyed by their id */
  users: Record<string, UserSlideMeta>
}

type Store = Record<string, DeckLayout>
const KEY = 'smartboard:decks:v1'

export const staticKey = (i: number) => `s${i}`
export const isUserKey = (k: string) => k.startsWith('u-')
export const newUserId = () => `u-${Date.now().toString(36)}${Math.floor(Math.random() * 1e4).toString(36)}`

const read = (): Store => {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '{}')
  } catch {
    return {}
  }
}
const write = (s: Store) => {
  try {
    localStorage.setItem(KEY, JSON.stringify(s))
  } catch {
    /* ignore quota errors — layout is tiny */
  }
}

/**
 * Merge a stored layout with the topic's current static slide count:
 * drops stale entries and makes sure every static slide is present at its
 * natural position (so adding a slide in code later still shows up).
 */
function reconcile(stored: DeckLayout | undefined, staticCount: number): DeckLayout {
  const users = { ...(stored?.users ?? {}) }
  const validStatic = new Set<string>()
  for (let i = 0; i < staticCount; i++) validStatic.add(staticKey(i))

  // keep only keys we still recognise
  const order = (stored?.order ?? []).filter((k) => validStatic.has(k) || !!users[k])

  // ensure every static key exists, inserted after its predecessor
  for (let i = 0; i < staticCount; i++) {
    const k = staticKey(i)
    if (order.includes(k)) continue
    if (i === 0) {
      order.unshift(k)
    } else {
      const prevIdx = order.indexOf(staticKey(i - 1))
      if (prevIdx >= 0) order.splice(prevIdx + 1, 0, k)
      else order.push(k)
    }
  }

  // garbage-collect user metadata that is no longer in the order
  const liveUsers: Record<string, UserSlideMeta> = {}
  for (const k of order) if (users[k]) liveUsers[k] = users[k]

  return { order, users: liveUsers }
}

export function loadLayout(topicId: string, staticCount: number): DeckLayout {
  return reconcile(read()[topicId], staticCount)
}

export function saveLayout(topicId: string, layout: DeckLayout) {
  const s = read()
  s[topicId] = layout
  write(s)
}
