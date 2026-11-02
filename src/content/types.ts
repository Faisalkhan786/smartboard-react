import type { ReactNode } from 'react'

export interface ClassInfo {
  id: string
  title: string
  subtitle: string
}

export interface Chapter {
  id: string
  classId: string
  title: string
  subtitle: string
  kicker: string
  icon: string
  accent: string
}

export interface SlideDef {
  navTitle: string
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
