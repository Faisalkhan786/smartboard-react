import type { Topic } from '../types'
import { TOPICS_META, type TopicMeta } from './meta'

export { TOPICS_META, type TopicMeta }

/**
 * Lazy loaders — a topic's heavy slide code is fetched only when its deck opens,
 * so the app's initial download stays small no matter how many topics exist.
 * Add a new topic here (one line) plus an entry in ./meta.ts.
 */
const LOADERS: Record<string, () => Promise<Topic>> = {
  'work': () => import('./work').then((m) => m.work),
  'work-energy-theorem': () => import('./workEnergyTheorem').then((m) => m.workEnergyTheorem),
  'kinetic-energy': () => import('./kineticEnergy').then((m) => m.kineticEnergy),
  'potential-energy': () => import('./potentialEnergy').then((m) => m.potentialEnergy),
  'conservation-energy': () => import('./conservationEnergy').then((m) => m.conservationEnergy),
  'simple-machine': () => import('./simpleMachine').then((m) => m.simpleMachine),
  'pulley': () => import('./pulley').then((m) => m.pulley),
  'inclined-plane': () => import('./inclinedPlane').then((m) => m.inclinedPlane),
  'lever': () => import('./lever').then((m) => m.lever),
  'movable-pulley': () => import('./movablePulley').then((m) => m.movablePulley),
  'height-and-distance': () => import('./heightAndDistance').then((m) => m.heightAndDistance),
}

/** Fetch a topic's full content on demand (returns null if the id is unknown). */
export const loadTopic = (id: string | undefined): Promise<Topic | null> =>
  id && LOADERS[id] ? LOADERS[id]() : Promise.resolve(null)

/** Lightweight metadata (no slide code) — for the Home / Chapter list pages. */
export const getTopicMeta = (id: string | undefined): TopicMeta | undefined =>
  TOPICS_META.find((t) => t.id === id)

export const topicsInChapter = (chapterId: string): TopicMeta[] =>
  TOPICS_META.filter((t) => t.chapterId === chapterId)
