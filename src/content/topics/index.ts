import type { Topic } from '../types'
import { simpleMachine } from './simpleMachine'
import { pulley } from './pulley'
import { inclinedPlane } from './inclinedPlane'
import { lever } from './lever'
import { movablePulley } from './movablePulley'
import { workEnergyTheorem } from './workEnergyTheorem'
import { work } from './work'

/** Topic registry — add new topics here. */
export const TOPICS: Topic[] = [
  work,
  workEnergyTheorem,
  simpleMachine,
  pulley,
  inclinedPlane,
  lever,
  movablePulley,
]

export const getTopic = (id: string | undefined) =>
  TOPICS.find((t) => t.id === id)

export const topicsInChapter = (chapterId: string) =>
  TOPICS.filter((t) => t.chapterId === chapterId)
