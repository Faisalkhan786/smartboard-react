/** One multiple-choice question. */
export interface MCQ {
  /** the question text */
  q: string
  /** answer choices (2–4 typical) */
  options: string[]
  /** index into `options` of the correct choice (0-based) */
  answer: number
  /** shown after the user answers — why it's correct */
  explanation?: string
}

/** A practice set of MCQs, attached to a chapter. */
export interface Quiz {
  id: string
  chapterId: string
  title: string
  questions: MCQ[]
}
