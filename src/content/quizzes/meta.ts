/**
 * Lightweight quiz list for the Chapter page — always loaded, but tiny (just
 * labels, no questions). The questions live in ./<id>.ts and are lazy-loaded
 * only when a quiz opens — see `loadQuiz` in ./index.ts.
 *
 * Keep one entry per quiz. `count` (number of questions) is shown on the card,
 * so update it when you add or remove questions.
 */
export interface QuizMeta {
  id: string
  chapterId: string
  title: string
  tagline: string
  icon: string
  accent: string
  count: number
}

export const QUIZZES_META: QuizMeta[] = [
  {
    id: 'work-energy-mcq',
    chapterId: 'work-energy',
    title: 'Work & Energy — Practice',
    tagline: 'MCQs with instant feedback & explanations',
    icon: 'bolt',
    accent: '#38bdf8',
    count: 12,
  },
]
