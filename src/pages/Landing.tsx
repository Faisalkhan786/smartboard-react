import { Link } from 'react-router-dom'
import type { CSSProperties } from 'react'
import Icon from '../components/icons/Icon'
import './landing.css'

/** Student destination (reserved) — currently falls through to the studio. */
const LEARN = '/learn'
const STUDIO = '/studio'
/** TODO: replace with the real YouTube channel URL before launch. */
const YOUTUBE_URL = '#'

interface SubjectTeaser {
  name: string
  icon: string
  accent: string
  blurb: string
  live: boolean
}

const SUBJECTS: SubjectTeaser[] = [
  { name: 'Physics', icon: 'atom', accent: 'var(--accent-cyan)', blurb: 'Motion, force, work & energy, sound & more.', live: true },
  { name: 'Mathematics', icon: 'sigma', accent: 'var(--accent-violet)', blurb: 'Algebra, geometry, trigonometry & more.', live: false },
  { name: 'Biology', icon: 'leaf', accent: 'var(--accent-emerald)', blurb: 'Cells, tissues, life processes & more.', live: false },
  { name: 'Chemistry', icon: 'flask', accent: 'var(--accent-amber)', blurb: 'Atoms, reactions, matter & more.', live: false },
]

const FEATURES = [
  { icon: 'pen', cls: 'c1', title: 'Visual smartboard', body: 'Diagrams aur derivations real-time board par — pen-style annotation ke saath, class jaisa feel.' },
  { icon: 'bolt', cls: 'c2', title: 'Short & focused', body: 'Har topic chhoti, 9:16 Shorts-ready deck — ek baithak mein ek concept, bina time waste.' },
  { icon: 'grid', cls: 'c3', title: 'Chapter-wise', body: 'Subject → Class → Chapter → Topic — NCERT ke flow mein organised, dhoondhna aasaan.' },
]

const PHYSICS_CHAPTERS = [
  { icon: 'motion', title: 'Motion', body: 'Distance, displacement, speed, velocity & acceleration', live: false },
  { icon: 'force', title: 'Force & Laws of Motion', body: "Newton's three laws, inertia & momentum", live: false },
  { icon: 'bolt', title: 'Work & Energy', body: 'Simple machines, force & mechanical advantage', live: true },
]

export default function Landing() {
  return (
    <div className="landing">
      {/* ===== NAV ===== */}
      <nav>
        <div className="l-wrap l-nav-in">
          <div className="l-brand">
            <span className="l-brand-mark">
              <Icon name="bolt" size={19} />
            </span>
            Smartboard Studio
          </div>
          <div className="l-nav-spacer" />
          <a className="l-nav-link l-hide" href="#subjects">Subjects</a>
          <a className="l-nav-link l-hide" href="#watch">Watch</a>
          <Link className="l-btn l-btn-ghost" to={STUDIO}>Studio</Link>
          <Link className="l-btn l-btn-primary" to={LEARN}>Start Learning →</Link>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <header className="l-hero">
        <div className="l-wrap l-hero-grid">
          <div>
            <span className="l-eyebrow">
              <span className="l-pulse" /> Class 9 &amp; 10 · Physics · Math · Bio · Chem
            </span>
            <h1 className="l-hero-title">
              Every concept, made <span className="l-grad">visual.</span>
            </h1>
            <p className="l-hero-sub">
              Har subject ek clean smartboard par — diagrams, derivations aur short, focused
              lessons. Exam ke liye bana, boring lecture nahi.
            </p>
            <div className="l-cta">
              <Link className="l-btn l-btn-primary l-btn-lg" to={LEARN}>Start Learning →</Link>
              <a className="l-btn l-btn-ghost l-btn-lg" href={YOUTUBE_URL}>▶&nbsp; Watch on YouTube</a>
            </div>
            <div className="l-meta">
              <div className="l-m"><span className="l-k">4</span><span className="l-l">Subjects · Physics live</span></div>
              <div className="l-m"><span className="l-k">9 &amp; 10</span><span className="l-l">Classes covered</span></div>
              <div className="l-m"><span className="l-k">9:16</span><span className="l-l">Shorts-ready decks</span></div>
            </div>
          </div>

          {/* smartboard: animated projectile + KE formula */}
          <div className="l-board" aria-label="Smartboard preview">
            <div className="l-board-bar">
              <span className="l-d l-a" /><span className="l-d l-b" /><span className="l-d l-c" />
              <span className="l-board-ttl">physics · work-&amp;-energy · kinetic-energy.deck</span>
            </div>
            <div className="l-board-face">
              <svg viewBox="0 0 450 300" preserveAspectRatio="xMidYMid meet">
                <path className="l-ink l-axis" d="M46 250 H410" />
                <path className="l-ink l-axis" d="M46 250 V40" />
                <path className="l-ink l-traj" d="M46 250 Q210 36 404 250" />
                <path className="l-ink l-vec" d="M46 250 L96 206" />
                <path className="l-ink l-vec" d="M96 206 L84 210 M96 206 L90 220" />
                <path className="l-ink l-axis" d="M404 250 v10 M225 250 v6" />
                <circle className="l-ball" r="7" />
              </svg>
              <div className="l-formula">KE = <b>½ m v²</b></div>
              <div className="l-tag-float">LIVE PREVIEW</div>
            </div>
          </div>
        </div>
      </header>

      {/* ===== SUBJECTS ===== */}
      <section className="l-block" id="subjects">
        <div className="l-wrap">
          <div className="l-sec-head">
            <div className="l-kicker">Pick your subject</div>
            <h2>Subjects</h2>
            <p>Abhi Physics live hai — Math, Biology aur Chemistry banaye ja rahe hain. Har subject ka apna rang, apni pehchaan.</p>
          </div>
          <div className="l-subjects">
            {SUBJECTS.map((s) => {
              const style = { '--acc': s.accent } as CSSProperties
              const inner = (
                <>
                  <span className="l-pill">{s.live ? 'Available' : 'Soon'}</span>
                  <div className="l-si"><Icon name={s.icon} size={24} /></div>
                  <h3>{s.name}</h3>
                  <div className="l-sd">{s.blurb}</div>
                  <div className="l-sf">
                    {s.live ? <span className="l-on">Class 9 · Start →</span> : <span className="l-soonlab">Coming soon</span>}
                  </div>
                </>
              )
              return s.live ? (
                <Link key={s.name} to={LEARN} className="l-subj live" style={style}>{inner}</Link>
              ) : (
                <div key={s.name} className="l-subj soon" style={style}>{inner}</div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="l-block" id="features">
        <div className="l-wrap">
          <div className="l-sec-head">
            <div className="l-kicker">Why it works</div>
            <h2>Padhai jo dikhti hai, yaad rehti hai</h2>
            <p>Har lesson ek smartboard par banaya gaya — taaki concept dekh ke samajh aaye, ratta na maarna pade.</p>
          </div>
          <div className="l-feat">
            {FEATURES.map((f) => (
              <div className="l-fcard" key={f.title}>
                <div className={`l-fico ${f.cls}`}><Icon name={f.icon} size={22} /></div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== A PEEK INSIDE PHYSICS ===== */}
      <section className="l-block" id="learn">
        <div className="l-wrap">
          <div className="l-sec-head">
            <div className="l-kicker">Inside Physics · Class 9</div>
            <h2>Chapters ki ek jhalak</h2>
            <p>Subject ke andar chapters aise organised hain — Work &amp; Energy abhi live hai.</p>
          </div>
          <div className="l-chaps">
            {PHYSICS_CHAPTERS.map((c) => {
              const inner = (
                <>
                  <div className="l-ci"><Icon name={c.icon} size={21} /></div>
                  <h3>{c.title}</h3>
                  <div className="l-cd">{c.body}</div>
                  <div className="l-cf">
                    {c.live ? (
                      <><span className="l-n">10 topics</span><span className="l-go">Open →</span></>
                    ) : (
                      <span className="l-sn">Coming soon</span>
                    )}
                  </div>
                </>
              )
              return c.live ? (
                <Link key={c.title} to={STUDIO} className="l-chap live">{inner}</Link>
              ) : (
                <div key={c.title} className="l-chap soon">{inner}</div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== YOUTUBE ===== */}
      <section className="l-block" id="watch">
        <div className="l-wrap">
          <div className="l-yt">
            <div>
              <h3>Shorts dekho, concepts pakdo</h3>
              <p>Har topic ka ek short, crisp video — YouTube par dekho aur Smartboard par detail me padho.</p>
            </div>
            <a className="l-btn l-btn-yt" href={YOUTUBE_URL}>▶&nbsp; Watch on YouTube</a>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="l-block">
        <div className="l-wrap">
          <div className="l-final">
            <h2>Aaj hi se seekhna shuru karo</h2>
            <p>Free hai. Account ki zaroorat nahi — bas subject chuno aur padho.</p>
            <div className="l-cta l-cta-center">
              <Link className="l-btn l-btn-primary l-btn-lg" to={LEARN}>Start Learning →</Link>
              <Link className="l-btn l-btn-ghost l-btn-lg" to={STUDIO}>Open Studio</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer>
        <div className="l-wrap l-foot-in">
          <div className="l-brand l-brand-sm">
            <span className="l-brand-mark l-brand-mark-sm"><Icon name="bolt" size={14} /></span>
            Smartboard Studio
          </div>
          <div className="l-foot-sp" />
          <a href="#subjects">Subjects</a>
          <a href="#watch">YouTube</a>
          <Link to={STUDIO}>Studio</Link>
          <span className="l-foot-copy">© 2026 · Class 9 &amp; 10</span>
        </div>
      </footer>
    </div>
  )
}
