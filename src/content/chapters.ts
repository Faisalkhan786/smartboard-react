import type { Chapter } from './types'

/** Chapters across classes. Tag each with a classId from content/classes.ts. */
export const CHAPTERS: Chapter[] = [
  // ---------------- Class 9 Physics (CBSE order) ----------------
  {
    id: 'motion',
    classId: 'class-9',
    title: 'Motion',
    subtitle: 'Distance, displacement, speed, velocity & acceleration',
    kicker: 'Class 9 Physics',
    icon: 'motion',
    accent: '#f59e0b',
  },
  {
    id: 'force-laws-motion',
    classId: 'class-9',
    title: 'Force & Laws of Motion',
    subtitle: "Newton's three laws, inertia & momentum",
    kicker: 'Class 9 Physics',
    icon: 'force',
    accent: '#fb7185',
  },
  {
    id: 'gravitation',
    classId: 'class-9',
    title: 'Gravitation',
    subtitle: 'Gravity, free fall, mass & weight',
    kicker: 'Class 9 Physics',
    icon: 'gravity',
    accent: '#34d399',
  },
  {
    id: 'work-energy',
    classId: 'class-9',
    title: 'Work & Energy',
    subtitle: 'Simple machines, force & mechanical advantage',
    kicker: 'Class 9 Physics',
    icon: 'bolt',
    accent: '#38bdf8',
  },
  {
    id: 'sound-energy',
    classId: 'class-9',
    title: 'Sound Energy',
    subtitle: 'Production, propagation & properties of sound',
    kicker: 'Class 9 Physics',
    icon: 'sound',
    accent: '#a78bfa',
  },
  // ---------------- Class 10 Physics (coming soon) ----------------
]

export const chaptersInClass = (classId: string) =>
  CHAPTERS.filter((c) => c.classId === classId)
