/**
 * Lightweight local progress tracking (localStorage).
 *
 * Records the last-opened deck (for "Resume") and how far the user got in each
 * topic (for per-topic "done" ticks and per-chapter progress bars). Purely
 * local — no backend. Safe to call anywhere; all reads/writes are guarded.
 */

const LAST_KEY = 'smartboard:lastDeck'
const PROG_KEY = 'smartboard:progress'

export interface LastDeck {
  topicId: string
  chapterId: string
  slide: number
  total: number
  updatedAt: number
}

export interface TopicProgress {
  /** furthest slide index reached (0-based) */
  reached: number
  total: number
  done: boolean
  updatedAt: number
}

type ProgressMap = Record<string, TopicProgress>

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

function write(key: string, value: unknown): void {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    /* ignore quota / private-mode errors */
  }
}

/** Record the current deck position. Called from the deck as the slide changes. */
export function recordDeckProgress(
  topicId: string,
  chapterId: string,
  slide: number,
  total: number,
): void {
  if (!topicId || total <= 0) return
  write(LAST_KEY, { topicId, chapterId, slide, total, updatedAt: Date.now() })

  const map = read<ProgressMap>(PROG_KEY, {})
  const reached = Math.max(map[topicId]?.reached ?? 0, slide)
  map[topicId] = { reached, total, done: reached >= total - 1, updatedAt: Date.now() }
  write(PROG_KEY, map)
}

export function getLastDeck(): LastDeck | null {
  const v = read<LastDeck | null>(LAST_KEY, null)
  return v && v.topicId ? v : null
}

export function getProgressMap(): ProgressMap {
  return read<ProgressMap>(PROG_KEY, {})
}

export function getTopicProgress(topicId: string): TopicProgress | undefined {
  return getProgressMap()[topicId]
}

export function isTopicDone(topicId: string): boolean {
  return Boolean(getProgressMap()[topicId]?.done)
}

export interface ChapterProgress {
  doneTopics: number
  totalTopics: number
  percent: number
}

/** Progress across a chapter, given its topic ids (ready topics only). */
export function getChapterProgress(topicIds: string[]): ChapterProgress {
  const map = getProgressMap()
  const totalTopics = topicIds.length
  const doneTopics = topicIds.filter((id) => map[id]?.done).length
  return {
    doneTopics,
    totalTopics,
    percent: totalTopics ? Math.round((doneTopics / totalTopics) * 100) : 0,
  }
}
