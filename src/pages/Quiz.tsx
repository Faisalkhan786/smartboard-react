import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { loadQuiz, type Quiz as QuizData } from '../content/quizzes'
import { CHAPTERS } from '../content/chapters'
import { usePenEngine, type PenSettings } from '../components/smartboard/usePenEngine'
import Icon from '../components/icons/Icon'
import './deck.css' // shared sidebar chrome (.sidebar, .ui-btn, .swatch, …)
import './quiz.css'

type Tool = 'pointer' | 'pen' | 'highlighter' | 'eraser'
const PEN_COLORS = ['#facc15', '#38bdf8', '#fb7185', '#34d399', '#f8fafc']

// 9:16 board — same portrait size the deck uses (so it lands in the same spot).
const BOARD_W = 540
const BOARD_H = 960
const PEN_SIZE = 3
// MCQ content accent — deliberately distinct from the decks' cyan.
const CONTENT_ACCENT = '#8b5cf6'

/** Pen-tip that follows the pointer (same behaviour as the Smartboard). */
function PenCursor({ active, color, tool, scale }: { active: boolean; color: string; tool: Tool; scale: number }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!active) return
    const move = (e: PointerEvent) => {
      const el = ref.current
      if (!el) return
      const overChrome = (e.target as Element | null)?.closest?.('.sidebar')
      el.style.display = overChrome ? 'none' : 'block'
      el.style.left = `${e.clientX}px`
      el.style.top = `${e.clientY}px`
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [active])

  if (!active) return null
  const isEraser = tool === 'eraser'
  const d = Math.max(6, (tool === 'eraser' ? PEN_SIZE * 6 : tool === 'highlighter' ? PEN_SIZE * 4.2 : PEN_SIZE * 1.6) * scale)
  return (
    <div
      ref={ref}
      className="quiz-cursor"
      aria-hidden="true"
      style={{
        width: d,
        height: d,
        background: isEraser ? 'rgba(255,255,255,0.2)' : color,
        border: isEraser ? '1.5px solid #fff' : 'none',
      }}
    />
  )
}

function QuizView({ quiz }: { quiz: QuizData }) {
  const chapter = CHAPTERS.find((c) => c.id === quiz.chapterId)
  const accent = chapter?.accent ?? '#38bdf8'
  const backTo = chapter ? `/chapter/${chapter.id}` : '/'
  const total = quiz.questions.length

  const [idx, setIdx] = useState(0)
  const [attempt, setAttempt] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({}) // question index → chosen option
  const [finished, setFinished] = useState(false)
  const [scale, setScale] = useState(1)

  // --- annotation (pen) layer ---
  const [tool, setTool] = useState<Tool>('pointer')
  const [penColor, setPenColor] = useState(PEN_COLORS[0])
  const inkRef = useRef<HTMLCanvasElement>(null)
  const laserRef = useRef<HTMLCanvasElement>(null)
  const settingsRef = useRef<PenSettings>({ mode: 'pen', color: penColor, size: PEN_SIZE })
  settingsRef.current = { mode: tool === 'pointer' ? 'pen' : tool, color: penColor, size: PEN_SIZE }
  const engine = usePenEngine(inkRef, laserRef, settingsRef)

  const current = quiz.questions[idx]
  const selected = idx in answers ? answers[idx] : null
  const answered = selected !== null
  const answeredCount = Object.keys(answers).length
  const score = quiz.questions.reduce((n, q, i) => n + (answers[i] === q.answer ? 1 : 0), 0)
  const inkKey = `a${attempt}q${idx}` // per-question, per-attempt ink bucket

  // Fit the board EXACTLY like the deck (same left-sidebar reservation + 96%
  // height, capped at 1×) so the board sits in the identical screen rectangle —
  // an OBS region set on a slide stays valid on the quiz.
  useEffect(() => {
    const fit = () => {
      const sidebarW = window.innerWidth <= 760 ? 0 : 320
      const availH = window.innerHeight * 0.96
      const availW = Math.max(240, window.innerWidth - sidebarW - 24)
      setScale(Math.min(1, availH / BOARD_H, availW / BOARD_W))
    }
    fit()
    window.addEventListener('resize', fit)
    return () => window.removeEventListener('resize', fit)
  }, [])

  // Show each question's own ink (fresh canvas per question / per attempt).
  useEffect(() => {
    engine.setActiveSlide(inkKey)
  }, [inkKey, engine])

  const pick = (i: number) => {
    if (answered) return // lock once answered
    setAnswers((a) => ({ ...a, [idx]: i }))
  }

  const prev = () => {
    if (idx > 0) setIdx((i) => i - 1)
  }

  const next = () => {
    if (idx >= total - 1) {
      setFinished(true)
      return
    }
    setIdx((i) => i + 1) // unanswered → this is a skip; ink/answers persist per question
  }

  const restart = () => {
    setIdx(0)
    setAttempt((a) => a + 1)
    setAnswers({})
    setFinished(false)
    setTool('pointer')
  }

  const penActive = !finished && tool !== 'pointer'
  const pct = finished ? Math.round((score / total) * 100) : 0
  const resultMsg =
    pct >= 80 ? 'Excellent! 🎉' : pct >= 50 ? 'Good effort — keep practising.' : 'Review the topic and try again.'

  const sidebarStyle = { '--topic-accent': accent } as CSSProperties
  const boardStyle = {
    '--quiz-accent': CONTENT_ACCENT,
    width: BOARD_W,
    height: BOARD_H,
    transform: `scale(${scale})`,
  } as CSSProperties

  const toolBtn = (t: Tool, icon: string, label: string) => (
    <button
      className={'ui-btn icon-btn' + (tool === t ? ' active' : '')}
      title={label}
      aria-label={label}
      aria-pressed={tool === t}
      onClick={() => setTool(t)}
    >
      <Icon name={icon} size={17} />
    </button>
  )

  return (
    <div className="quiz-shell">
      {/* LEFT SIDEBAR — same panel/position as the deck toolbar */}
      <aside className="sidebar quiz-sidebar" style={sidebarStyle}>
        <div className="deck-back-row">
          <Link to={backTo} className="deck-back">
            <Icon name="back" size={13} /> {chapter?.title ?? 'Back'}
          </Link>
        </div>

        <div className="deck-topic-head">
          <div className="deck-topic-icon">
            <Icon name="bolt" size={18} />
          </div>
          <div style={{ minWidth: 0 }}>
            <div className="deck-topic-kicker">Practice · {total} Qs</div>
            <div className="deck-topic-title">MCQ</div>
          </div>
        </div>

        <div className="side-divider" />

        <div className="side-group-title">Pen Tools</div>
        <div className="icon-row">
          {toolBtn('pointer', 'cursor', 'Select (pointer)')}
          {toolBtn('pen', 'pen', 'Pen — write to explain')}
          {toolBtn('highlighter', 'marker', 'Highlighter')}
          {toolBtn('eraser', 'eraser', 'Eraser')}
        </div>

        <div className="side-divider" />

        <div className="side-group-title">Ink Colour</div>
        <div className="color-palette">
          {PEN_COLORS.map((c) => (
            <button
              key={c}
              className={'swatch' + (penColor === c ? ' active' : '')}
              style={{ background: c }}
              title="Ink colour"
              aria-label={`Ink colour ${c}`}
              aria-pressed={penColor === c}
              onClick={() => {
                setPenColor(c)
                if (tool === 'pointer' || tool === 'eraser') setTool('pen')
              }}
            />
          ))}
        </div>

        <div className="side-divider" />

        <div className="side-group-title">Board Actions</div>
        <div className="icon-row">
          <button className="ui-btn icon-btn" title="Undo" aria-label="Undo" onClick={() => engine.undo()}>
            <Icon name="undo" size={17} />
          </button>
          <button className="ui-btn icon-btn" title="Clear this question's ink" aria-label="Clear ink" onClick={() => engine.clear()}>
            <Icon name="trash" size={17} />
          </button>
        </div>
      </aside>

      {/* reserve the scaled footprint so the transformed board isn't clipped */}
      <div className="quiz-stage-outer" style={{ width: BOARD_W * scale, height: BOARD_H * scale }}>
        <div className="quiz-board" style={boardStyle}>
          <div className="quiz-content">
            <div className="quiz-head">
              <span className="quiz-kicker">{quiz.title}</span>
              {!finished && <span className="quiz-score">Score {score}</span>}
            </div>

            {finished ? (
              <div className="quiz-result">
                <div className="quiz-result-ring">
                  <span className="quiz-result-pct">{pct}%</span>
                </div>
                <div className="quiz-result-score">
                  You scored <strong>{score}</strong> / {total}
                </div>
                {total - answeredCount > 0 && (
                  <div className="quiz-result-sub">{total - answeredCount} skipped</div>
                )}
                <div className="quiz-result-msg">{resultMsg}</div>
                <div className="quiz-actions">
                  <button className="quiz-btn primary" onClick={restart}>
                    Try again
                  </button>
                  <Link to={backTo} className="quiz-btn">
                    Back to chapter
                  </Link>
                </div>
              </div>
            ) : (
              <>
                <div className="quiz-progress">
                  <div className="quiz-progress-bar" style={{ width: `${(idx / total) * 100}%` }} />
                </div>
                <div className="quiz-count">
                  Question {idx + 1} <span>/ {total}</span>
                </div>

                <div className="quiz-card">
                  <h2 className="quiz-q">{current.q}</h2>

                  <div className="quiz-options">
                    {current.options.map((opt, i) => {
                      let cls = 'quiz-option'
                      if (answered) {
                        if (i === current.answer) cls += ' correct'
                        else if (i === selected) cls += ' wrong'
                        else cls += ' dim'
                      }
                      return (
                        <button key={i} className={cls} onClick={() => pick(i)} disabled={answered}>
                          <span className="quiz-option-mark">{String.fromCharCode(65 + i)}</span>
                          <span className="quiz-option-text">{opt}</span>
                          {answered && i === current.answer && <span className="quiz-tick">✓</span>}
                          {answered && i === selected && i !== current.answer && <span className="quiz-cross">✕</span>}
                        </button>
                      )
                    })}
                  </div>

                  {answered && current.explanation && (
                    <div className="quiz-explain">
                      <span className="quiz-explain-label">Why</span>
                      {current.explanation}
                    </div>
                  )}
                </div>

                <div className="quiz-nav-row">
                  <button className="quiz-btn ghost" onClick={prev} disabled={idx === 0}>
                    ← Previous
                  </button>
                  <button className="quiz-btn primary" onClick={next}>
                    {idx >= total - 1 ? (answered ? 'See result' : 'Finish') : answered ? 'Next →' : 'Skip →'}
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Annotation canvases — inside the board so ink aligns with the content */}
          <canvas
            ref={laserRef}
            className={'quiz-laser' + (finished ? ' hidden' : '')}
            width={BOARD_W}
            height={BOARD_H}
            aria-hidden="true"
          />
          <canvas
            ref={inkRef}
            className={'quiz-ink' + (penActive ? ' active' : '') + (finished ? ' hidden' : '')}
            width={BOARD_W}
            height={BOARD_H}
            aria-hidden="true"
          />
        </div>
      </div>

      <PenCursor active={penActive} color={penColor} tool={tool} scale={scale} />
    </div>
  )
}

function QuizLoading() {
  return (
    <div className="quiz-loading" role="status" aria-live="polite">
      <div className="quiz-loading-inner">
        <div className="quiz-loading-ring" aria-hidden="true" />
        <div className="quiz-loading-text">Loading quiz</div>
      </div>
    </div>
  )
}

/** Route entry: resolve the quiz for the URL, then render it (questions load on demand). */
export default function Quiz() {
  const { quizId } = useParams()
  const [quiz, setQuiz] = useState<QuizData | null | undefined>(undefined)

  useEffect(() => {
    let active = true
    setQuiz(undefined)
    loadQuiz(quizId).then((q) => {
      if (active) setQuiz(q)
    })
    return () => {
      active = false
    }
  }, [quizId])

  if (quiz === undefined) return <QuizLoading />
  if (quiz === null) return <Navigate to="/" replace />
  return <QuizView quiz={quiz} />
}
