import { useParams, Link } from 'react-router-dom'
import type { CSSProperties } from 'react'
import { CHAPTERS, chaptersInClass } from '../content/chapters'
import { topicsInChapter } from '../content/topics'
import Icon from '../components/icons/Icon'
import SaveImagesIndicator from '../components/SaveImagesIndicator'
import DeckRow from './DeckRow'
import './home.css'

export default function Chapter() {
  const { chapterId } = useParams()
  const chapter = CHAPTERS.find((c) => c.id === chapterId)
  const topics = chapterId ? topicsInChapter(chapterId) : []
  // chapter number within its own class
  const idxInClass = chapter ? chaptersInClass(chapter.classId).findIndex((c) => c.id === chapter.id) : -1
  const chapterNo = idxInClass >= 0 ? String(idxInClass + 1).padStart(2, '0') : '—'

  const accentStyle = { '--chapter-accent': chapter?.accent ?? '#38bdf8' } as CSSProperties

  return (
    <div className="home chapter-view" style={accentStyle}>
      <div className="topbar">
        <Link to="/" className="back-btn" aria-label="Back to all chapters" title="All chapters">
          <Icon name="back" size={18} />
        </Link>
        <SaveImagesIndicator />
      </div>

      <header className="chapter-cover">
        <div className="chapter-cover-icon">
          <Icon name={chapter?.icon ?? 'grid'} size={23} />
        </div>
        <div>
          <div className="chapter-cover-kicker">
            Chapter {chapterNo} · {chapter?.kicker ?? 'Class 9 Physics'}
          </div>
          <h1 className="chapter-cover-title">{chapter?.title ?? 'Chapter'}</h1>
          <p className="chapter-cover-sub">{chapter?.subtitle ?? ''}</p>
        </div>
      </header>

      <div className="chapter-divider" />

      <div className="section-label">
        Topics{topics.length > 0 ? ` · ${topics.length}` : ''}
      </div>
      <div className="deck-list">
        {topics.length === 0 && (
          <div className="empty-note">No topics in this chapter yet — coming soon.</div>
        )}
        {topics.map((t) => (
          <DeckRow
            key={t.id}
            to={`/deck/${t.id}`}
            ready={t.slides.length > 0}
            accent={t.accent}
            icon={t.icon}
            title={t.title}
            tagline={t.tagline}
            slides={t.slides.length}
          />
        ))}
      </div>
    </div>
  )
}
