import { Link } from 'react-router-dom'
import type { CSSProperties } from 'react'
import Icon from '../components/icons/Icon'

export interface CardProps {
  to: string
  ready: boolean
  accent: string
  icon: string
  kicker: string
  title: string
  tagline: string
  meta: string
  cta: string
}

export default function Card({ to, ready, accent, icon, kicker, title, tagline, meta, cta }: CardProps) {
  const style = { '--card-accent': accent } as CSSProperties
  const inner = (
    <>
      <div className="topic-card-head">
        <div className="topic-icon">
          <Icon name={icon} size={22} />
        </div>
        <div className="topic-head-text">
          {kicker && <div className="topic-chapter">{kicker}</div>}
          <div className="topic-name">{title}</div>
        </div>
      </div>
      <div className="topic-tagline">{tagline}</div>
      <div className="topic-foot">
        <span className="slide-count">{meta}</span>
        <span className="open-cta">{ready ? `${cta} →` : ''}</span>
      </div>
    </>
  )

  if (!ready) {
    return (
      <div className="topic-card soon" style={style}>
        {inner}
      </div>
    )
  }
  return (
    <Link to={to} className="topic-card" style={style}>
      {inner}
    </Link>
  )
}
