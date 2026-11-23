import { useParams, Link } from 'react-router-dom'
import type { CSSProperties } from 'react'
import { CHAPTERS, chaptersInClass } from '../content/chapters'
import { topicsInChapter } from '../content/topics'
import { quizzesInChapter } from '../content/quizzes'
import Icon from '../components/icons/Icon'
import AppBar from '../components/AppBar'
import './chapter.css'

export default function Chapter() {
  const { chapterId } = useParams()
  const chapter = CHAPTERS.find((c) => c.id === chapterId)
  const topics = chapterId ? topicsInChapter(chapterId) : []
  const quizzes = chapterId ? quizzesInChapter(chapterId) : []
  // chapter number within its own class
  const idxInClass = chapter
    ? chaptersInClass(chapter.classId, chapter.subjectId).findIndex((c) => c.id === chapter.id)
    : -1
  const chapterNo = idxInClass >= 0 ? String(idxInClass + 1).padStart(2, '0') : '—'

  const accentStyle = { '--chapter-accent': chapter?.accent ?? '#38bdf8' } as CSSProperties

  return (
    <div className="ch-page" style={accentStyle}>
      <AppBar>
        <Link to="/studio" className="appbar-back" aria-label="Back to all chapters" title="All chapters">
          <Icon name="back" size={18} />
        </Link>
        <nav className="appbar-crumb" aria-label="Breadcrumb">
          <Link to="/" className="appbar-logo">
            <span className="mk"><Icon name="bolt" size={16} /></span>
            Smartboard Studio
          </Link>
          <span className="appbar-sep">›</span>
          <span className="appbar-cur">{chapter?.title ?? 'Chapter'}</span>
        </nav>
      </AppBar>

      <div className="ch-content">
        {/* centered hero — matches studio "Pick a chapter" */}
        <header className="ch-hero">
          <div className="ch-hero-crumb">
            <b>Chapter {chapterNo}</b> · {chapter?.kicker ?? 'Class 9 Physics'}
          </div>
          <h1 className="ch-hero-title">{chapter?.title ?? 'Chapter'}</h1>
          <p className="ch-hero-sub">
            {chapter?.subtitle ?? ''}
            {topics.length > 0 ? ` · ${topics.length} topics` : ''}
          </p>
        </header>

        {/* topics — numbered, cohesive cyan, 2-column */}
        <div className="ch-seclabel">
          Topics{topics.length > 0 ? ` · ${topics.length}` : ''}
          <span className="ch-line" />
        </div>

        {topics.length === 0 ? (
          <div className="ch-empty">No topics in this chapter yet — coming soon.</div>
        ) : (
          <div className="ch-grid">
            {topics.map((t, i) => {
              const ready = t.slideCount > 0
              const inner = (
                <>
                  <span className="ch-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="ch-ico"><Icon name={t.icon} size={18} /></span>
                  <div className="ch-body">
                    <div className="ch-title">{t.title}</div>
                    <div className="ch-sub">
                      <span className="ch-desc">{t.tagline}</span>
                      {t.formula && <span className="ch-formula">{t.formula}</span>}
                    </div>
                  </div>
                  <span className="ch-slides">{ready ? `${t.slideCount} slides` : 'Soon'}</span>
                </>
              )
              return ready ? (
                <Link key={t.id} to={`/deck/${t.id}`} className="ch-card">{inner}</Link>
              ) : (
                <div key={t.id} className="ch-card soon">{inner}</div>
              )
            })}
          </div>
        )}

        {/* practice */}
        {quizzes.length > 0 && (
          <div className="ch-practice">
            <div className="ch-seclabel">
              Practice · {quizzes.length}
              <span className="ch-line" />
            </div>
            {quizzes.map((qz) => {
              const ready = qz.count > 0
              const inner = (
                <>
                  <div className="ch-pico"><Icon name={qz.icon} size={19} /></div>
                  <div className="ch-pbody">
                    <div className="ch-ptitle">{qz.title}</div>
                    <div className="ch-ptag">{qz.tagline}</div>
                  </div>
                  <span className="ch-pmeta">{ready ? `${qz.count} questions` : 'Soon'}</span>
                </>
              )
              return ready ? (
                <Link key={qz.id} to={`/quiz/${qz.id}`} className="ch-pcard">{inner}</Link>
              ) : (
                <div key={qz.id} className="ch-pcard soon">{inner}</div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
