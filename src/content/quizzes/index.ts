import type { Quiz } from './types'
import { QUIZZES_META, type QuizMeta } from './meta'

export { QUIZZES_META, type QuizMeta }
export type { Quiz, MCQ } from './types'

/**
 * Lazy loaders — a quiz's questions are fetched only when it opens, so adding
 * more quizzes never grows the app's initial download.
 * Add a new quiz here (one line) plus an entry in ./meta.ts.
 */
const LOADERS: Record<string, () => Promise<Quiz>> = {
  'work-energy-mcq': () => import('./workEnergy').then((m) => m.workEnergyQuiz),
}

/** Fetch a quiz's questions on demand (returns null if the id is unknown). */
export const loadQuiz = (id: string | undefined): Promise<Quiz | null> =>
  id && LOADERS[id] ? LOADERS[id]() : Promise.resolve(null)

/** Lightweight metadata (no questions) — for the Chapter list page. */
export const quizzesInChapter = (chapterId: string): QuizMeta[] =>
  QUIZZES_META.filter((q) => q.chapterId === chapterId)
