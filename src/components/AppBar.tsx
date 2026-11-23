import type { ReactNode } from 'react'
import SaveImagesIndicator from './SaveImagesIndicator'
import './AppBar.css'

/**
 * Shared full-width top bar (chrome) used across the app pages (studio,
 * chapter). Children fill the left/centre; the Save indicator is pinned right.
 * Keeps the header identical everywhere — background & border span edge to edge,
 * content stays within a centred max-width.
 */
export default function AppBar({ children }: { children: ReactNode }) {
  return (
    <header className="appbar">
      <div className="appbar-inner">
        {children}
        <div className="appbar-spacer" />
        <SaveImagesIndicator />
      </div>
    </header>
  )
}
