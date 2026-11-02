import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import type { PenMode } from '../components/smartboard/usePenEngine'
import { FORMATS, type FormatId } from '../config/formats'
import Icon from '../components/icons/Icon'

const COLORS = ['#facc15', '#38bdf8', '#fb7185', '#34d399', '#ffffff']

export interface ToolbarProps {
  topicTitle: string
  topicIcon: string
  topicContext: string
  accent: string
  backTo: string
  backLabel: string
  slides: { navTitle: string; isUser?: boolean }[]
  currentSlide: number
  onSelectSlide: (i: number) => void
  /** insert a blank user slide right after position `pos` */
  onInsertAfter: (pos: number) => void
  /** delete the user slide at position `pos` (static slides can't be deleted) */
  onDeleteSlide: (pos: number) => void
  /** move a slide from one position to another */
  onReorder: (from: number, to: number) => void
  /** rename the user slide at position `pos` */
  onRename: (pos: number, title: string) => void
  mode: PenMode
  onMode: (m: PenMode) => void
  color: string
  onColor: (c: string) => void
  size: number
  onSize: (n: number) => void
  onUndo: () => void
  onClear: () => void
  safeZoneOn: boolean
  onToggleSafeZone: () => void
  onImageFile: (f: File) => void
  imageEditing: boolean
  ratioLocked: boolean
  onToggleRatioLock: () => void
  cropEditing: boolean
  onToggleCrop: () => void
  cropped: boolean
  cropZoom: number
  onCropZoom: (zoom: number) => void
  onResetCrop: () => void
  onToggleImageEdit: () => void
  onRemoveImage: () => void
  onToggleSolved: () => void
  onExport: () => void
  format: FormatId
  onFormat: (f: FormatId) => void
  /** render as a floating drop-up panel (landscape) instead of a docked sidebar */
  floating?: boolean
  /** playing the downward close animation (landscape) */
  closing?: boolean
  /** close the floating panel (landscape) — renders a ✕ at the panel's top-right */
  onClose?: () => void
}

export default function Toolbar(p: ToolbarProps) {
  const listRef = useRef<HTMLDivElement>(null)
  const fileRef = useRef<HTMLInputElement>(null)
  const [more, setMore] = useState(false)
  const [dragIdx, setDragIdx] = useState<number | null>(null)
  const [overIdx, setOverIdx] = useState<number | null>(null)
  const [editIdx, setEditIdx] = useState<number | null>(null)
  const [editText, setEditText] = useState('')

  const commitRename = () => {
    if (editIdx !== null) p.onRename(editIdx, editText)
    setEditIdx(null)
  }

  const refreshFade = () => {
    const el = listRef.current
    if (!el) return
    setMore(el.scrollHeight - el.scrollTop - el.clientHeight > 4)
  }
  useEffect(refreshFade, [p.slides.length])

  return (
    <div
      className={
        'sidebar' +
        (p.floating ? ' sidebar-floating' : '') +
        (p.closing ? ' closing' : '')
      }
      style={{ '--topic-accent': p.accent } as CSSProperties}
    >
      {p.floating && p.onClose && (
        <button className="panel-close" data-tip="Hide tools (T)" aria-label="Hide tools" onClick={p.onClose}>
          ✕
        </button>
      )}
      <div>
        <Link to={p.backTo} className="deck-back">
          ← {p.backLabel}
        </Link>
        <div className="deck-topic-head">
          <div className="deck-topic-icon">
            <Icon name={p.topicIcon} size={20} />
          </div>
          <div style={{ minWidth: 0 }}>
            <div className="deck-topic-kicker">{p.topicContext}</div>
            <div className="deck-topic-title">{p.topicTitle}</div>
          </div>
        </div>
      </div>

      <div>
        <div className="side-group-title side-group-head">
          <span>Slides · {p.slides.length} (← / →)</span>
          <button
            className="head-add"
            data-tip="Insert blank slide after current"
            onClick={() => p.onInsertAfter(p.currentSlide)}
          >
            ＋
          </button>
        </div>
        <div className={'slide-list-wrap' + (more ? ' more' : '')}>
          <div className="slide-list" ref={listRef} onScroll={refreshFade}>
            {p.slides.map((s, i) => {
              const editing = editIdx === i
              return (
                <div
                  key={i}
                  role="button"
                  className={
                    'ui-btn slide-row' +
                    (i === p.currentSlide ? ' active' : '') +
                    (s.isUser ? ' slide-blank' : '') +
                    (overIdx === i && dragIdx !== null && dragIdx !== i ? ' drop-target' : '') +
                    (dragIdx === i ? ' dragging' : '')
                  }
                  draggable={!editing}
                  onDragStart={(e) => {
                    setDragIdx(i)
                    e.dataTransfer.effectAllowed = 'move'
                  }}
                  onDragOver={(e) => {
                    e.preventDefault()
                    if (overIdx !== i) setOverIdx(i)
                  }}
                  onDrop={(e) => {
                    e.preventDefault()
                    if (dragIdx !== null && dragIdx !== i) p.onReorder(dragIdx, i)
                    setDragIdx(null)
                    setOverIdx(null)
                  }}
                  onDragEnd={() => {
                    setDragIdx(null)
                    setOverIdx(null)
                  }}
                  onClick={() => !editing && p.onSelectSlide(i)}
                >
                  <span className="slide-grip" data-tip="Drag to reorder">⠿</span>
                  {editing ? (
                    <input
                      className="slide-rename"
                      autoFocus
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                      onBlur={commitRename}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') commitRename()
                        if (e.key === 'Escape') setEditIdx(null)
                      }}
                    />
                  ) : (
                    <span
                      className="slide-label"
                      onDoubleClick={(e) => {
                        if (!s.isUser) return
                        e.stopPropagation()
                        setEditIdx(i)
                        setEditText(s.navTitle)
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}. {s.isUser ? '📝 ' : ''}
                      {s.navTitle}
                    </span>
                  )}
                  {s.isUser ? (
                    <span
                      className="slide-del"
                      role="button"
                      data-tip="Delete this blank slide"
                      onClick={(e) => {
                        e.stopPropagation()
                        p.onDeleteSlide(i)
                      }}
                    >
                      ✕
                    </span>
                  ) : (
                    <span className="slide-arrow">→</span>
                  )}
                </div>
              )
            })}
          </div>
          <div className="slide-list-fade" />
        </div>
      </div>

      <div>
        <div className="side-group-title">Format</div>
        <div className="icon-row">
          {(Object.keys(FORMATS) as FormatId[]).map((f) => (
            <button
              key={f}
              className={'ui-btn' + (p.format === f ? ' active' : '')}
              style={{ justifyContent: 'center', fontSize: 11 }}
              onClick={() => p.onFormat(f)}
            >
              {FORMATS[f].label}
            </button>
          ))}
        </div>
      </div>

      <div className="side-divider" />

      <div>
        <div className="side-group-title">Pen Tab Mode</div>
        <div className="icon-row">
          <button className={'ui-btn icon-btn' + (p.mode === 'pen' ? ' active' : '')} data-tip="Calligraphy Pen" onClick={() => p.onMode('pen')}><Icon name="pen" size={18} /></button>
          <button className={'ui-btn icon-btn' + (p.mode === 'highlighter' ? ' active' : '')} data-tip="Marker / Highlighter" onClick={() => p.onMode('highlighter')}><Icon name="marker" size={18} /></button>
          <button className={'ui-btn icon-btn' + (p.mode === 'laser' ? ' active' : '')} data-tip="Laser Pointer" onClick={() => p.onMode('laser')}><Icon name="laser" size={18} /></button>
          <button className={'ui-btn icon-btn' + (p.mode === 'eraser' ? ' active' : '')} data-tip="Eraser" onClick={() => p.onMode('eraser')}><Icon name="eraser" size={18} /></button>
        </div>
      </div>

      <div>
        <div className="side-group-title">Ink Color</div>
        <div className="color-palette">
          {COLORS.map((c) => (
            <div
              key={c}
              className={'swatch' + (p.color === c ? ' active' : '')}
              style={{ background: c }}
              onClick={() => p.onColor(c)}
            />
          ))}
        </div>
      </div>

      <div>
        <div className="side-group-title">
          Pen Size: <span style={{ color: 'var(--accent-cyan)' }}>{p.size} px</span>
        </div>
        <div className="slider-row">
          <input
            type="range"
            min={2}
            max={14}
            step={0.5}
            value={p.size}
            onChange={(e) => p.onSize(parseFloat(e.target.value))}
          />
          <button className="ui-btn icon-btn sm" data-tip="Fine" onClick={() => p.onSize(2.5)}>F</button>
          <button className="ui-btn icon-btn sm" data-tip="Medium" onClick={() => p.onSize(4)}>M</button>
          <button className="ui-btn icon-btn sm" data-tip="Bold" onClick={() => p.onSize(7.5)}>B</button>
        </div>
      </div>

      <div className="side-divider" />

      <div>
        <div className="side-group-title">Board Actions</div>
        <div className="icon-row">
          <button className="ui-btn icon-btn" data-tip="Undo (Z)" onClick={p.onUndo}><Icon name="undo" size={18} /></button>
          <button className="ui-btn icon-btn" data-tip="Clear slide" onClick={p.onClear}><Icon name="trash" size={18} /></button>
          <button className={'ui-btn icon-btn' + (p.safeZoneOn ? ' active' : '')} data-tip="Safe Zone Guide" onClick={p.onToggleSafeZone}><Icon name="frame" size={18} /></button>
        </div>
      </div>

      <div>
        <div className="side-group-title">Center Image (saved per slide)</div>
        <div className="icon-row">
          <button className="ui-btn icon-btn" data-tip="Upload / Replace image" onClick={() => fileRef.current?.click()}>
            <Icon name="image" size={19} />
          </button>
          <button className={'ui-btn icon-btn' + (p.imageEditing ? ' active' : '')} data-tip="Move / Resize image" onClick={p.onToggleImageEdit}>
            <Icon name="move" size={19} />
          </button>
          <button className={'ui-btn icon-btn' + (p.ratioLocked ? ' active' : '')} data-tip={p.ratioLocked ? 'Unlock aspect ratio' : 'Lock aspect ratio'} onClick={p.onToggleRatioLock} aria-label="Toggle aspect ratio lock"><Icon name={p.ratioLocked ? 'lock' : 'unlock'} size={18} /></button>
          <button className={'ui-btn icon-btn' + (p.cropEditing ? ' active' : '')} data-tip="Crop: drag image inside its frame" onClick={p.onToggleCrop} aria-label="Toggle crop mode"><Icon name="crop" size={18} /></button>
          <button className="ui-btn icon-btn" data-tip="Remove image" onClick={p.onRemoveImage}>
            <Icon name="trash" size={19} />
          </button>
        </div>
        {p.cropped && (
          <div style={{ marginTop: 8, padding: '8px 10px', borderRadius: 9, background: 'rgba(148,163,184,.08)', border: '1px solid rgba(148,163,184,.14)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 10, color: 'var(--text-muted)' }}>
              <span>{p.cropEditing ? 'Drag image inside frame' : 'Crop applied'}</span>
              <button className="ui-btn" style={{ padding: '3px 7px', fontSize: 9 }} onClick={p.onResetCrop}>Reset</button>
            </div>
            <div className="slider-row" style={{ marginTop: 7 }}>
              <span style={{ fontSize: 10, whiteSpace: 'nowrap' }}>Zoom</span>
              <input aria-label="Crop zoom" type="range" min={1} max={3} step={0.05} value={p.cropZoom} onChange={(e) => p.onCropZoom(Number(e.target.value))} />
              <span style={{ fontSize: 9, minWidth: 30 }}>{p.cropZoom.toFixed(1)}×</span>
            </div>
          </div>
        )}
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={(e) => {
            const f = e.target.files?.[0]
            e.target.value = ''
            if (f) p.onImageFile(f)
          }}
        />
      </div>

      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <button className="ui-btn action-btn-solve" onClick={p.onToggleSolved}><Icon name="eye" size={17} /> Reveal / Hide Solution</button>
        <button className="ui-btn action-btn-png" onClick={p.onExport}><Icon name="download" size={17} /> Export PNG</button>
      </div>
    </div>
  )
}
