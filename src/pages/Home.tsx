import { useState } from 'react'
import { CLASSES } from '../content/classes'
import { SUBJECTS } from '../content/subjects'
import { chaptersInClass } from '../content/chapters'
import { topicsInChapter } from '../content/topics'
import Card from './Card'
import SaveImagesIndicator from '../components/SaveImagesIndicator'
import './home.css'

const CLASS_KEY = 'smartboard:class'
const SUBJECT_KEY = 'smartboard:subject'

export default function Home() {
  const [activeClass, setActiveClass] = useState(
    () => localStorage.getItem(CLASS_KEY) || CLASSES[0].id,
  )
  const [activeSubject, setActiveSubject] = useState(
    () => localStorage.getItem(SUBJECT_KEY) || SUBJECTS[0].id,
  )

  const selectClass = (id: string) => {
    setActiveClass(id)
    localStorage.setItem(CLASS_KEY, id)
  }

  const selectSubject = (id: string) => {
    setActiveSubject(id)
    localStorage.setItem(SUBJECT_KEY, id)
  }

  const selectedSubject = SUBJECTS.find((subject) => subject.id === activeSubject) ?? SUBJECTS[0]
  const chapters = chaptersInClass(activeClass, selectedSubject.id)

  return (
    <div className="home">
      <SaveImagesIndicator floating />
      <div className="home-header">
        <div className="home-eyebrow">{selectedSubject.title} Shorts</div>
        <h1 className="home-title">Smartboard Studio</h1>
        <p className="home-sub">Pick a class, then a chapter to see its topics.</p>
      </div>

      <div className="class-switch subject-switch" role="tablist" aria-label="Select subject">
        {SUBJECTS.map((subject) => (
          <button
            key={subject.id}
            role="tab"
            aria-selected={subject.id === selectedSubject.id}
            className={subject.id === selectedSubject.id ? 'active' : ''}
            onClick={() => selectSubject(subject.id)}
          >
            {subject.title}
          </button>
        ))}
      </div>

      <div className="class-switch" role="tablist" aria-label="Select class">
        {CLASSES.map((c) => (
          <button
            key={c.id}
            role="tab"
            aria-selected={c.id === activeClass}
            className={c.id === activeClass ? 'active' : ''}
            onClick={() => selectClass(c.id)}
          >
            {c.title}
          </button>
        ))}
      </div>

      <div className="topic-grid">
        {chapters.length === 0 && (
          <div className="empty-note" style={{ textAlign: 'center' }}>
            No {selectedSubject.title} chapters in this class yet — coming soon.
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
              kicker={ch.kicker}
              title={ch.title}
              tagline={ch.subtitle}
              meta={n > 0 ? `${n} ${n === 1 ? 'topic' : 'topics'}` : 'Coming soon'}
              cta="Open chapter"
            />
          )
        })}
      </div>

      <div className="home-footnote">
        9:16 &amp; 16:9 decks · pen-tab annotation · 1080×1920 PNG export
      </div>
    </div>
  )
}
