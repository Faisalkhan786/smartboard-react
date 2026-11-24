import type { ReactNode } from 'react'

export interface ClassInfo {
  id: string
  title: string
  subtitle: string
}

export interface SubjectInfo {
  id: string
  title: string
}

export interface Chapter {
  id: string
  classId: string
  subjectId: string
  title: string
  subtitle: string
  kicker: string
  icon: string
  accent: string
}

export interface SlideDef {
  navTitle: string
  /** Keep the slide in content while omitting it from the visible deck. */
  hidden?: boolean
  /**
   * Marks the slide's DiagramCard as an overridable image slot: if the user
   * uploads an image on this slide, it fills the diagram box (and reflows with
   * it across formats) instead of floating as a free overlay.
   */
  imageSlot?: 'diagram' | 'top' | 'full'
  /** slide body — composed from slide primitives */
  render: () => ReactNode
}

export interface Topic {
  id: string
  chapterId: string
  title: string
  tagline: string
  kicker: string
  icon: string
  accent: string
  slides: SlideDef[]
}
