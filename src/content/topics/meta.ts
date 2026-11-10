/**
 * Lightweight topic list for the Home / Chapter pages.
 *
 * This is always loaded, but it is tiny (just labels — no slide code). The heavy
 * part of a topic (its slides, render functions and diagrams) lives in
 * ./<id>.tsx and is lazy-loaded only when its deck opens — see `loadTopic` in
 * ./index.ts.
 *
 * Keep one entry here for every topic. `slideCount` is shown on the chapter
 * list, so bump it when you add or remove slides in the topic file.
 */
export interface TopicMeta {
  id: string
  chapterId: string
  title: string
  tagline: string
  kicker: string
  icon: string
  accent: string
  slideCount: number
}

export const TOPICS_META: TopicMeta[] = [
  { id: 'work', chapterId: 'work-energy', title: 'Work', tagline: 'Force × displacement · W = F × s', kicker: 'Class 9 Physics · Work & Energy', icon: 'force', accent: '#818cf8', slideCount: 6 },
  { id: 'work-energy-theorem', chapterId: 'work-energy', title: 'Work-Energy Theorem', tagline: 'Work done = change in energy', kicker: 'Class 9 Physics · Work & Energy', icon: 'bolt', accent: '#f97316', slideCount: 6 },
  { id: 'kinetic-energy', chapterId: 'work-energy', title: 'Kinetic Energy', tagline: 'Energy of motion · KE = ½mv²', kicker: 'Class 9 Physics · Work & Energy', icon: 'motion', accent: '#34d399', slideCount: 6 },
  { id: 'potential-energy', chapterId: 'work-energy', title: 'Potential Energy', tagline: 'Stored energy of position · PE = mgh', kicker: 'Class 9 Physics · Work & Energy', icon: 'gravity', accent: '#a78bfa', slideCount: 6 },
  { id: 'conservation-energy', chapterId: 'work-energy', title: 'Conservation of Energy', tagline: 'KE + PE stays constant', kicker: 'Class 9 Physics · Work & Energy', icon: 'bolt', accent: '#2dd4bf', slideCount: 6 },
  { id: 'simple-machine', chapterId: 'work-energy', title: 'Simple Machines', tagline: 'Load, effort & mechanical advantage', kicker: 'Class 9 Physics · Work & Energy', icon: 'gear', accent: '#38bdf8', slideCount: 3 },
  { id: 'pulley', chapterId: 'work-energy', title: 'Pulley', tagline: 'Fixed & movable pulleys, MA & numericals', kicker: 'Class 9 Physics · Work & Energy', icon: 'pulley', accent: '#facc15', slideCount: 5 },
  { id: 'inclined-plane', chapterId: 'work-energy', title: 'Inclined Plane', tagline: 'A sloping surface · MA = l ÷ h', kicker: 'Class 9 Physics · Work & Energy', icon: 'incline', accent: '#34d399', slideCount: 5 },
  { id: 'lever', chapterId: 'work-energy', title: 'Lever', tagline: 'Fulcrum, moments & three classes', kicker: 'Class 9 Physics · Work & Energy', icon: 'lever', accent: '#a78bfa', slideCount: 5 },
  { id: 'movable-pulley', chapterId: 'work-energy', title: 'Movable Pulley', tagline: 'Why effort = load ÷ 2 (derivation)', kicker: 'Class 9 Physics · Work & Energy', icon: 'pulley', accent: '#f472b6', slideCount: 6 },
  { id: 'height-and-distance', chapterId: 'height-and-distance', title: 'Height and Distance', tagline: 'Angles of elevation, depression & right-triangle problems', kicker: 'Class 9 Math · Height and Distance', icon: 'incline', accent: '#a78bfa', slideCount: 6 },
]
