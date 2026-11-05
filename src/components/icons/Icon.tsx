import type { ReactNode } from 'react'

/** Consistent line-icon set (24×24, inherits currentColor). */
const ICONS: Record<string, ReactNode> = {
  bolt: <path d="M13 2 L5 13 h6 l-1 9 l8-12 h-6 z" />,
  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </>
  ),
  pulley: (
    <>
      <line x1="5" y1="4.5" x2="19" y2="4.5" />
      <circle cx="12" cy="9" r="3" />
      <line x1="12" y1="9" x2="12" y2="9.3" />
      <path d="M9.3 9.6 V15" />
      <path d="M14.7 9.6 V13.2" />
      <rect x="7" y="15" width="4.6" height="4" rx="1" />
    </>
  ),
  sound: (
    <>
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
    </>
  ),
  motion: (
    <>
      <path d="M3 12 h12 M11 8 l4 4 -4 4" />
      <path d="M3 8 h3 M3 16 h3" />
    </>
  ),
  force: (
    <>
      <rect x="13" y="7" width="7" height="10" rx="1.5" />
      <path d="M3 12 H11 M8 9 l3 3 -3 3" />
    </>
  ),
  gravity: (
    <>
      <circle cx="12" cy="7" r="3.5" />
      <path d="M12 12 V20 M8.5 16.5 L12 20 l3.5 -3.5" />
    </>
  ),
  grid: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M4 9.5 H20 M9.5 4 V20" />
    </>
  ),
  lever: (
    <>
      <path d="M3 15 L21 9" />
      <path d="M12 12 L8.5 20 L15.5 20 Z" />
    </>
  ),
  incline: (
    <>
      <path d="M3 19 L21 19 L21 9 Z" />
      <rect x="8" y="12.4" width="4.2" height="4.2" rx="0.8" transform="rotate(-29 10.1 14.5)" />
    </>
  ),
  image: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2.5" />
      <circle cx="8.5" cy="8.5" r="1.6" />
      <path d="M21 15.5 L15.5 10 L4 21" />
    </>
  ),
  move: (
    <>
      <path d="M12 3 V21 M3 12 H21" />
      <path d="M9 6 L12 3 L15 6 M9 18 L12 21 L15 18 M6 9 L3 12 L6 15 M18 9 L21 12 L18 15" />
    </>
  ),
  trash: (
    <>
      <path d="M3 6 H21" />
      <path d="M8 6 V4.5 A1.5 1.5 0 0 1 9.5 3 h5 A1.5 1.5 0 0 1 16 4.5 V6" />
      <path d="M6 6 l1 13 a2 2 0 0 0 2 2 h6 a2 2 0 0 0 2 -2 l1 -13" />
      <path d="M10 10.5 V17 M14 10.5 V17" />
    </>
  ),
  pen: (
    <>
      <path d="M15.5 4.5 a2 2 0 0 1 3 3 L8 18 l-4 1 1 -4 Z" />
      <path d="M13.5 6.5 l3 3" />
    </>
  ),
  marker: (
    <>
      <path d="M4 20 h3.5" />
      <path d="M7 17 l9 -9 a1.6 1.6 0 0 1 2.3 0 l.7 .7 a1.6 1.6 0 0 1 0 2.3 l-9 9 -4 1 1 -4 Z" />
    </>
  ),
  laser: (
    <>
      <circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none" />
      <path d="M12 3.6 v2.2 M12 18.2 v2.2 M3.6 12 h2.2 M18.2 12 h2.2 M6.3 6.3 l1.5 1.5 M16.2 16.2 l1.5 1.5 M17.7 6.3 l-1.5 1.5 M7.8 16.2 l-1.5 1.5" />
    </>
  ),
  eraser: (
    <>
      <path d="M20 20 H7 l-4 -4 a1.5 1.5 0 0 1 0 -2 L13 4 a1.5 1.5 0 0 1 2 0 l5 5 a1.5 1.5 0 0 1 0 2 l-8 8" />
      <path d="M8 10 l6 6" />
    </>
  ),
  undo: (
    <>
      <path d="M9 7 l-5 5 5 5" />
      <path d="M4 12 h11 a4 4 0 0 1 4 4 v1" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11 V8 a4 4 0 0 1 8 0 v3" />
    </>
  ),
  unlock: (
    <>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11 V8 a4 4 0 0 1 7.5 -2" />
    </>
  ),
  crop: (
    <>
      <path d="M6 2 v14 a2 2 0 0 0 2 2 h14" />
      <path d="M2 6 h14 a2 2 0 0 1 2 2 v14" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12 s3.5 -7 10 -7 10 7 10 7 -3.5 7 -10 7 -10 -7 -10 -7 Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  download: (
    <>
      <path d="M12 3 v12 M7 10 l5 5 5 -5" />
      <path d="M4 20 h16" />
    </>
  ),
  frame: (
    <path d="M8 4 H5 a1 1 0 0 0 -1 1 v3 M16 4 h3 a1 1 0 0 1 1 1 v3 M20 16 v3 a1 1 0 0 1 -1 1 h-3 M8 20 H5 a1 1 0 0 1 -1 -1 v-3" />
  ),
  back: (
    <>
      <path d="M19 12 H5" />
      <path d="M12 5 L5 12 L12 19" />
    </>
  ),
  check: <path d="M20 6 L9 17 l-5 -5" />,
  cursor: <path d="M5 3 L5 19 L9.2 14.8 L12 21 L14.6 19.9 L11.8 13.8 L18 13.8 Z" />,
  upload: (
    <>
      <path d="M12 20 V8 M7 13 l5 -5 5 5" />
      <path d="M4 4 h16" />
    </>
  ),
}

export default function Icon({ name, size = 26 }: { name: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {ICONS[name] ?? ICONS.grid}
    </svg>
  )
}
