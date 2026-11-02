import { Link } from 'react-router-dom'
import type { CSSProperties } from 'react'
import Icon from '../components/icons/Icon'

interface Props {
  to: string
  ready: boolean
  accent: string
  icon: string
  title: string
  tagline: string
  slides: number
}

/** A topic rendered as a compact "deck card" in a 2-column gallery. */
export default function DeckRow({ to, ready, accent, icon, title, tagline, slides }: Props) {
  const style = { '--card-accent': accent } as CSSProperties
  const inner = (
    <>
      <span className="deck-row-head">
        <span className="deck-row-icon">
          <Icon name={icon} size={15} />
        </span>
        <span className="deck-row-title">{title}</span>
        <span className="deck-row-count">{ready ? `${slides} slides` : 'Soon'}</span>
      </span>
      <span className="deck-row-tag">{tagline}</span>
    </>
  )
  if (!ready) {
    return (
      <div className="deck-row soon" style={style}>
        {inner}
      </div>
    )
  }
  return (
    <Link to={to} className="deck-row" style={style}>
      {inner}
    </Link>
  )
}
