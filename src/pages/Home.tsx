import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CLASSES } from '../content/classes'
import { SUBJECTS } from '../content/subjects'
import { chaptersInClass } from '../content/chapters'
import { topicsInChapter } from '../content/topics'
import Card from './Card'
import Icon from '../components/icons/Icon'
import AppBar from '../components/AppBar'
import './home.css'

const CLASS_KEY = 'smartboard:class'
const SUBJECT_KEY = 'smartboard:subject'

interface NavOption {
  id: string
  title: string
}

interface NavDropdownProps {
  stepNo: number
  label: string
  options: NavOption[]
  selectedId: string | null
  placeholder: string
  disabled?: boolean
  highlight?: boolean
  open: boolean
  onToggle: () => void
  onSelect: (id: string) => void
}

function NavDropdown({
  stepNo,
  label,
  options,
  selectedId,
  placeholder,
  disabled = false,
  highlight = false,
  open,
  onToggle,
  onSelect,
}: NavDropdownProps) {
  const selected = options.find((o) => o.id === selectedId)
  return (
    <div className={`nav-step${highlight ? ' pulse' : ''}`}>
      <span className="nav-stepno">{stepNo}</span>
      <div className={`nav-dd${open ? ' open' : ''}`}>
        <button
          type="button"
          className={`nav-pill${disabled ? ' locked' : ''}`}
          aria-haspopup="listbox"
          aria-expanded={open}
          disabled={disabled}
          onClick={() => {
            if (!disabled) onToggle()
          }}
        >
          <span className="nav-pill-lab">{label}</span>
          <span className="nav-pill-val">{selected ? selected.title : placeholder}</span>
          <svg
            className="nav-pill-caret"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.4}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
        <div className="nav-dd-menu" role="listbox">
          {options.map((o) => (
            <button
              key={o.id}
              type="button"
              role="option"
              aria-selected={o.id === selectedId}
              className={o.id === selectedId ? 'sel' : ''}
              onClick={() => onSelect(o.id)}
            >
              <span>{o.title}</span>
              {o.id === selectedId && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6}>
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const [activeClass, setActiveClass] = useState<string | null>(
    () => localStorage.getItem(CLASS_KEY),
  )
  const [activeSubject, setActiveSubject] = useState<string | null>(
    () => localStorage.getItem(SUBJECT_KEY),
  )
  const [openDD, setOpenDD] = useState<'class' | 'subject' | null>(null)

  // Close the open dropdown when clicking anywhere outside a dropdown.
  useEffect(() => {
    if (!openDD) return
    const onDown = (e: MouseEvent) => {
      const target = e.target as Element | null
      if (!target || !target.closest('.nav-dd')) setOpenDD(null)
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [openDD])

  const selectClass = (id: string) => {
    setActiveClass(id)
    localStorage.setItem(CLASS_KEY, id)
    setOpenDD(null)
  }

  const selectSubject = (id: string) => {
    setActiveSubject(id)
    localStorage.setItem(SUBJECT_KEY, id)
    setOpenDD(null)
  }

  const selectedClass = CLASSES.find((c) => c.id === activeClass) ?? null
  const selectedSubject = SUBJECTS.find((s) => s.id === activeSubject) ?? null
  const ready = Boolean(selectedClass && selectedSubject)
  const chapters = ready ? chaptersInClass(selectedClass!.id, selectedSubject!.id) : []

  return (
    <>
      {/* ===== Shared full-width header: logo → home + Class ▾ → Subject ▾ ===== */}
      <AppBar>
        <Link to="/" className="appbar-logo">
          <span className="mk"><Icon name="bolt" size={16} /></span>
          Smartboard Studio
        </Link>
        <div className="appbar-divider" />

        <NavDropdown
          stepNo={1}
          label="Class"
          options={CLASSES}
          selectedId={activeClass}
          placeholder="Select…"
          highlight={!selectedClass}
          open={openDD === 'class'}
          onToggle={() => setOpenDD((v) => (v === 'class' ? null : 'class'))}
          onSelect={selectClass}
        />

        <svg
          className="nav-flow"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.2}
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>

        <NavDropdown
          stepNo={2}
          label="Subject"
          options={SUBJECTS}
          selectedId={activeSubject}
          placeholder={selectedClass ? 'Select…' : 'Select class first'}
          disabled={!selectedClass}
          highlight={Boolean(selectedClass) && !selectedSubject}
          open={openDD === 'subject'}
          onToggle={() => setOpenDD((v) => (v === 'subject' ? null : 'subject'))}
          onSelect={selectSubject}
        />
      </AppBar>

      {/* ===== Body ===== */}
      <div className="home">
        <div className="home-body">
          <div className="home-pagehead">
            <div className="home-crumb">
              {ready ? (
                <>
                  <b>{selectedSubject!.title}</b> · {selectedClass!.title} · Chapters
                </>
              ) : (
                'Get started'
              )}
            </div>
            <h1 className="home-title">{ready ? 'Pick a chapter' : 'Welcome to Smartboard Studio'}</h1>
            <p className="home-sub">
              {ready
                ? 'Choose a chapter to see its topics and decks.'
                : 'Pick a class above to begin — then the subject unlocks.'}
            </p>
          </div>

          {!ready ? (
            <div className="home-emptystate">
              <span className="home-emptystate-badge">{selectedClass ? '2' : '1'}</span>
              <div>
                <div className="home-emptystate-title">
                  {selectedClass ? 'Now pick a subject' : 'Start by picking a class'}
                </div>
                <div className="home-emptystate-sub">
                  {selectedClass
                    ? 'The Subject dropdown in the header is now enabled.'
                    : 'Use the Class dropdown in the header above.'}
                </div>
              </div>
            </div>
          ) : (
            <div className="topic-grid">
              {chapters.length === 0 && (
                <div className="empty-note" style={{ textAlign: 'center' }}>
                  No {selectedSubject!.title} chapters in this class yet — coming soon.
                </div>
              )}
              {chapters.map((ch) => {
                const n = topicsInChapter(ch.id).length
                return (
                  <Card
                    key={ch.id}
                    to={`/chapter/${ch.id}`}
                    ready={n > 0}
                    accent={ch.accent}
                    icon={ch.icon}
                    kicker=""
                    title={ch.title}
                    tagline={ch.subtitle}
                    meta={n > 0 ? `${n} ${n === 1 ? 'topic' : 'topics'}` : 'Coming soon'}
                    cta="Open chapter"
                  />
                )
              })}
            </div>
          )}
        </div>

        <div className="home-footnote">
          9:16 &amp; 16:9 decks · pen-tab annotation · 1080×1920 PNG export
        </div>
      </div>
    </>
  )
}
