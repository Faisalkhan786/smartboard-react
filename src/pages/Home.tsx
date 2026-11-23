import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CLASSES } from '../content/classes'
import { SUBJECTS } from '../content/subjects'
import { chaptersInClass } from '../content/chapters'
import { topicsInChapter } from '../content/topics'
import { getChapterProgress } from '../content/progress'
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
          {label && <span className="nav-pill-lab">{label}</span>}
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
          label=""
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

      {/* ===== Dashboard ===== */}
      <div className="home">
        <div className="home-dash">
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
            <>
              <div className="home-pagehead dash-pagehead">
                <div className="home-crumb">
                  <b>{selectedSubject!.title}</b> · {selectedClass!.title} · Chapters
                </div>
                <h1 className="home-title">Pick a chapter</h1>
                <p className="home-sub">Choose a chapter to see its topics and decks.</p>
              </div>

              {chapters.length === 0 ? (
                <div className="empty-note">
                  No {selectedSubject!.title} chapters in this class yet — coming soon.
                </div>
              ) : (
                <div className="dash-chaps">
                  {chapters.map((ch, i) => {
                    const topics = topicsInChapter(ch.id)
                    const live = topics.length > 0
                    const prog = getChapterProgress(topics.map((t) => t.id))
                    const no = String(i + 1).padStart(2, '0')
                    const status = !live
                      ? 'Soon'
                      : prog.percent === 100
                        ? 'Complete'
                        : prog.doneTopics > 0
                          ? 'In progress'
                          : 'Ready'
                    const body = (
                      <>
                        <div className="dchap-top">
                          <span className="dchap-no">{no}</span>
                          <span className="dchap-ico"><Icon name={ch.icon} size={20} /></span>
                          <span className="dchap-status">{status}</span>
                        </div>
                        <h3>{ch.title}</h3>
                        <div className="dchap-sub">{ch.subtitle}</div>
                        <div className="dchap-foot">
                          <div className="dbar"><i style={{ width: `${prog.percent}%` }} /></div>
                          <div className="dfl">
                            {live ? (
                              <>
                                <span className="on">{topics.length} topics</span>
                                <span>{prog.doneTopics}/{prog.totalTopics} done</span>
                              </>
                            ) : (
                              <>
                                <span>Planned</span>
                                <span>—</span>
                              </>
                            )}
                          </div>
                        </div>
                      </>
                    )
                    return live ? (
                      <Link key={ch.id} to={`/chapter/${ch.id}`} className="dchap live">
                        {body}
                      </Link>
                    ) : (
                      <div key={ch.id} className="dchap soon">
                        {body}
                      </div>
                    )
                  })}
                </div>
              )}
            </>
          )}
        </div>

        <div className="home-footnote">
          9:16 &amp; 16:9 decks · pen-tab annotation · 1080×1920 PNG export
        </div>
      </div>
    </>
  )
}
