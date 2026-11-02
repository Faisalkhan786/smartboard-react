/* =====================================================================
   FORMAT SYSTEM — the core of dual-orientation support.
   Every board dimension, safe-zone and export size derives from here.
   Add/adjust a format and the whole app adapts.
   ===================================================================== */

export type FormatId = 'portrait' | 'landscape'

export interface SafeZone {
  /** px on the on-screen board (not the export) */
  top: number
  right: number
  bottom: number
  left: number
}

export interface Format {
  id: FormatId
  label: string
  /** export resolution */
  exportW: number
  exportH: number
  /** on-screen board size (export is 2× this via html2canvas scale) */
  boardW: number
  boardH: number
  /** content safe area, keeps text clear of the YouTube UI */
  safe: SafeZone
}

export const FORMATS: Record<FormatId, Format> = {
  portrait: {
    id: 'portrait',
    label: '9:16 Shorts',
    exportW: 1080,
    exportH: 1920,
    boardW: 540,
    boardH: 960,
    // Shorts UI: right rail ~72, bottom bar ~148, top icons ~40
    safe: { top: 40, right: 72, bottom: 148, left: 40 },
  },
  landscape: {
    id: 'landscape',
    label: '16:9 Long',
    exportW: 1920,
    exportH: 1080,
    boardW: 960,
    boardH: 540,
    // Landscape has far less UI overlap; keep modest title-safe margins
    safe: { top: 36, right: 48, bottom: 48, left: 48 },
  },
}

export const DEFAULT_FORMAT: FormatId = 'portrait'
