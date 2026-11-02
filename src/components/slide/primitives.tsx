import type { CSSProperties, ReactNode } from 'react'
import './slide.css'

type KwColor = 'cyan' | 'yellow' | 'coral' | 'emerald'
/** Inline keyword highlight. `big` bumps the size for extra emphasis. */
export const Kw = ({ c, big, children }: { c: KwColor; big?: boolean; children: ReactNode }) => (
  <span className={`kw-${c}` + (big ? ' kw-lg' : '')}>{children}</span>
)

export const Header = ({
  kicker,
  title,
  part,
}: {
  kicker: string
  title: string
  part: string
}) => (
  <div className="board-header">
    <div className="header-left">
      <div className="chapter-tag">{kicker}</div>
      <div className="board-title">{title}</div>
    </div>
    <div className="topic-badge">{part}</div>
  </div>
)

export const Hero = ({
  eyebrow,
  compact,
  children,
}: {
  eyebrow: string
  compact?: boolean
  children: ReactNode
}) => (
  <div className={'lesson-hero' + (compact ? ' compact-hero' : '')}>
    <div className="eyebrow">{eyebrow}</div>
    <div className="hero-copy">{children}</div>
  </div>
)

/**
 * Two-column body for landscape (16:9). In PORTRAIT these render as
 * `display:contents`, so the children stack exactly as before — portrait
 * layouts never change. In LANDSCAPE the slide body splits into
 * `SplitMain` (left — usually the diagram) and `SplitAside` (right — text).
 * Put `Header` above the split and `Footnote` below it, both full-width.
 */
export const SlideSplit = ({ children }: { children: ReactNode }) => (
  <div className="slide-split">{children}</div>
)
export const SplitMain = ({ children }: { children: ReactNode }) => (
  <div className="split-main">{children}</div>
)
export const SplitAside = ({ children }: { children: ReactNode }) => (
  <div className="split-aside">{children}</div>
)

/** A labelled empty pad — blank space to write/derive live on the board. */
export const WritePad = ({
  label = 'Write here',
  minHeight,
  className,
}: {
  label?: string
  minHeight?: number
  className?: string
}) => (
  <div className={`write-pad${className ? ` ${className}` : ''}`} style={minHeight === undefined ? undefined : { minHeight }}>
    <span className="write-pad-label">{label}</span>
  </div>
)

/**
 * Full-slide title card that separates the concept slides from the numericals
 * — a "Practice Time" divider so each deck reads as concept → practice.
 */
export const PracticeMarker = ({
  pill = 'Numericals',
  title = 'PRACTICE TIME',
  sub,
}: {
  pill?: string
  title?: string
  sub?: ReactNode
}) => (
  <div className="practice-marker">
    <div className="practice-pill">✦ {pill}</div>
    <div className="practice-title">{title}</div>
    {sub && <div className="practice-sub">{sub}</div>}
  </div>
)

export const SectionHead = ({ num, title }: { num: string; title: string }) => (
  <div className="sec-head">
    <span className="sec-num">{num}</span>
    <span className="sec-title">{title}</span>
  </div>
)

export const DiagramCard = ({
  children,
  style,
}: {
  children: ReactNode
  style?: CSSProperties
}) => (
  <div className="diagram-card" style={style}>
    {children}
  </div>
)

export const DiagramCaption = ({ children }: { children: ReactNode }) => (
  <div className="diagram-caption">{children}</div>
)
export const Dot = () => <span className="caption-dot">•</span>

export const TakeawayCard = ({
  title,
  variant,
  children,
}: {
  title: string
  variant?: 'ma'
  children: ReactNode
}) => (
  <div className={'takeaway-card' + (variant === 'ma' ? ' ma-takeaway' : '')}>
    <div className="takeaway-title">{title}</div>
    <div className="takeaway-copy">{children}</div>
  </div>
)

export const Footnote = ({ children }: { children: ReactNode }) => (
  <div className="slide-footnote">{children}</div>
)

export const FormulaCard = ({
  label = 'FORMULA',
  note,
  children,
}: {
  label?: string
  note?: ReactNode
  children: ReactNode
}) => (
  <div className="formula-card">
    <div className="eyebrow">{label}</div>
    <div className="formula-display">{children}</div>
    {note && <div className="formula-note">{note}</div>}
  </div>
)

export const Fraction = ({ num, den }: { num: ReactNode; den: ReactNode }) => (
  <span className="fraction">
    <span>{num}</span>
    <span>{den}</span>
  </span>
)

export const WorkedExample = ({ children }: { children: ReactNode }) => (
  <div className="worked-example">{children}</div>
)
export const GivenRow = ({ label, value }: { label: ReactNode; value: ReactNode }) => (
  <div className="given-row">
    {label}
    <b>{value}</b>
  </div>
)
export const Divider = () => <div className="worked-divider" />
export const Calculation = ({ children }: { children: ReactNode }) => (
  <div className="calculation">{children}</div>
)

/** Content inside appears only when the deck's "Reveal Solution" is on (.solved on the slide). */
export const RevealPad = ({ children }: { children: ReactNode }) => (
  <div className="open-calc-pad">
    <div className="calc-solution">{children}</div>
  </div>
)

export const DefinitionStack = ({ children }: { children: ReactNode }) => (
  <div className="definition-stack">{children}</div>
)
/** 3-up grid — stacks in portrait, three columns in landscape (e.g. lever classes). */
export const ClassGrid = ({ children }: { children: ReactNode }) => (
  <div className="class-grid">{children}</div>
)
/** A lever-class card: schematic on top, then heading, description and example. */
export const ClassCard = ({
  diagram,
  index,
  title,
  example,
  children,
}: {
  diagram: ReactNode
  index: ReactNode
  title: ReactNode
  example: ReactNode
  children: ReactNode
}) => (
  <div className="class-card">
    <div className="class-diagram">{diagram}</div>
    <div className="class-body">
      <div className="definition-heading">
        <span className="definition-index">{index}</span>
        {title}
      </div>
      <div className="class-desc">{children}</div>
      <div className="class-eg">{example}</div>
    </div>
  </div>
)
export const DefinitionCard = ({
  index,
  title,
  variant,
  unit,
  children,
}: {
  index: ReactNode
  title: ReactNode
  variant: 'load' | 'effort'
  unit?: ReactNode
  children: ReactNode
}) => (
  <div className={'definition-card ' + (variant === 'load' ? 'load-definition' : 'effort-definition')}>
    <div className="definition-heading">
      <span className="definition-index">{index}</span>
      {title}
    </div>
    <div className="definition-text">{children}</div>
    {unit && <div className="definition-unit">{unit}</div>}
  </div>
)

export const CompareGrid = ({ children }: { children: ReactNode }) => (
  <div className="pulley-compare">{children}</div>
)
export const CompareArrow = () => (
  <div className="compare-arrow" aria-hidden>
    →
  </div>
)
export const CompareCard = ({
  label,
  force,
  forceSub,
  children,
}: {
  label: string
  force: ReactNode
  forceSub: string
  children: ReactNode
}) => (
  <div className="compare-card">
    <div className="compare-label">{label}</div>
    {children}
    <div className="compare-force">
      {force}
      <small>{forceSub}</small>
    </div>
  </div>
)
