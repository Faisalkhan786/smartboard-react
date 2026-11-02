import { useEffect, useMemo, useRef, type RefObject, type MutableRefObject } from 'react'

export type PenMode = 'pen' | 'highlighter' | 'laser' | 'eraser'

export interface PenSettings {
  mode: PenMode
  color: string
  size: number
}

interface Pt {
  x: number
  y: number
  pressure: number
  time: number
}
interface Stroke {
  mode: PenMode
  color: string
  size: number
  points: Pt[]
}

export interface PenEngine {
  undo: () => void
  clear: () => void
  setActiveSlide: (key: string) => void
}

/**
 * Canvas ink engine — calligraphy pen, highlighter, laser, eraser.
 * Ported from the vanilla smartboard; strokes are kept per slide KEY
 * (stable string), so inserting/deleting slides never shifts another
 * slide's ink.
 */
export function usePenEngine(
  inkRef: RefObject<HTMLCanvasElement>,
  laserRef: RefObject<HTMLCanvasElement>,
  settingsRef: MutableRefObject<PenSettings>,
): PenEngine {
  const strokes = useRef<Record<string, Stroke[]>>({})
  const activeSlide = useRef<string>('s0')
  const drawing = useRef(false)
  const activeStroke = useRef<Stroke | null>(null)
  const laserPoints = useRef<Pt[]>([])
  const engineRef = useRef<PenEngine | null>(null)

  useEffect(() => {
    const ink = inkRef.current
    const laser = laserRef.current
    if (!ink || !laser) return
    const inkCtx = ink.getContext('2d')!
    const laserCtx = laser.getContext('2d')!

    const slideBucket = (k: string) => (strokes.current[k] ??= [])

    function coords(e: PointerEvent): Pt {
      const r = ink!.getBoundingClientRect()
      return {
        x: (e.clientX - r.left) * (ink!.width / r.width),
        y: (e.clientY - r.top) * (ink!.height / r.height),
        pressure: e.pressure && e.pressure > 0 ? e.pressure : 0.5,
        time: performance.now(),
      }
    }

    function drawSmoothPath(ctx: CanvasRenderingContext2D, pts: Pt[]) {
      ctx.beginPath()
      ctx.moveTo(pts[0].x, pts[0].y)
      for (let i = 1; i < pts.length - 2; i++) {
        const xc = (pts[i].x + pts[i + 1].x) / 2
        const yc = (pts[i].y + pts[i + 1].y) / 2
        ctx.quadraticCurveTo(pts[i].x, pts[i].y, xc, yc)
      }
      if (pts.length > 2) {
        const n = pts.length
        ctx.quadraticCurveTo(pts[n - 2].x, pts[n - 2].y, pts[n - 1].x, pts[n - 1].y)
      } else if (pts.length === 2) {
        ctx.lineTo(pts[1].x, pts[1].y)
      }
    }

    function drawStroke(ctx: CanvasRenderingContext2D, stroke: Stroke) {
      const pts = stroke.points
      if (pts.length === 0) return
      ctx.save()
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'

      if (stroke.mode === 'eraser') {
        ctx.globalCompositeOperation = 'destination-out'
        ctx.lineWidth = stroke.size
        drawSmoothPath(ctx, pts)
        ctx.stroke()
      } else if (stroke.mode === 'highlighter') {
        ctx.globalCompositeOperation = 'source-over'
        ctx.strokeStyle = stroke.color
        ctx.globalAlpha = 0.28
        ctx.lineWidth = stroke.size
        drawSmoothPath(ctx, pts)
        ctx.stroke()
      } else {
        ctx.globalCompositeOperation = 'source-over'
        ctx.strokeStyle = stroke.color
        ctx.fillStyle = stroke.color
        ctx.globalAlpha = 1
        if (pts.length < 3) {
          ctx.beginPath()
          ctx.arc(pts[0].x, pts[0].y, stroke.size * 0.55, 0, Math.PI * 2)
          ctx.fill()
        } else {
          for (let i = 1; i < pts.length; i++) {
            const p0 = pts[i - 1]
            const p1 = pts[i]
            const dist = Math.hypot(p1.x - p0.x, p1.y - p0.y)
            const dt = Math.max(1, p1.time - p0.time)
            const velocity = dist / dt
            const pressureFactor =
              p1.pressure !== 0.5
                ? 0.65 + p1.pressure * 0.75
                : Math.max(0.68, Math.min(1.22, 1.15 - velocity * 0.18))
            ctx.beginPath()
            ctx.lineWidth = stroke.size * pressureFactor
            const midX = (p0.x + p1.x) / 2
            const midY = (p0.y + p1.y) / 2
            if (i === 1) {
              ctx.moveTo(p0.x, p0.y)
              ctx.lineTo(midX, midY)
            } else {
              const prevMidX = (pts[i - 2].x + p0.x) / 2
              const prevMidY = (pts[i - 2].y + p0.y) / 2
              ctx.moveTo(prevMidX, prevMidY)
              ctx.quadraticCurveTo(p0.x, p0.y, midX, midY)
            }
            ctx.stroke()
          }
        }
      }
      ctx.restore()
    }

    function renderAll() {
      inkCtx.clearRect(0, 0, ink!.width, ink!.height)
      slideBucket(activeSlide.current).forEach((s) => drawStroke(inkCtx, s))
    }

    function onDown(e: PointerEvent) {
      ink!.setPointerCapture(e.pointerId)
      drawing.current = true
      const pt = coords(e)
      const s = settingsRef.current
      if (s.mode === 'laser') {
        laserPoints.current.push(pt)
        return
      }
      activeStroke.current = {
        mode: s.mode,
        color: s.color,
        size:
          s.mode === 'eraser'
            ? s.size * 6.5
            : s.mode === 'highlighter'
              ? s.size * 5
              : s.size,
        points: [pt],
      }
    }

    function onMove(e: PointerEvent) {
      if (!drawing.current) return
      const pt = coords(e)
      if (settingsRef.current.mode === 'laser') {
        laserPoints.current.push(pt)
        return
      }
      if (activeStroke.current) {
        activeStroke.current.points.push(pt)
        renderAll()
        drawStroke(inkCtx, activeStroke.current)
      }
    }

    function onUp() {
      if (!drawing.current) return
      drawing.current = false
      if (activeStroke.current && activeStroke.current.points.length > 0) {
        slideBucket(activeSlide.current).push(activeStroke.current)
        activeStroke.current = null
        renderAll()
      }
    }

    let raf = 0
    function animateLaser() {
      laserCtx.clearRect(0, 0, laser!.width, laser!.height)
      const now = performance.now()
      laserPoints.current = laserPoints.current.filter((p) => now - p.time < 420)
      const lp = laserPoints.current
      if (lp.length > 1) {
        laserCtx.save()
        laserCtx.lineCap = 'round'
        laserCtx.lineJoin = 'round'
        for (let i = 1; i < lp.length; i++) {
          const age = (now - lp[i].time) / 420
          laserCtx.beginPath()
          laserCtx.moveTo(lp[i - 1].x, lp[i - 1].y)
          laserCtx.lineTo(lp[i].x, lp[i].y)
          laserCtx.strokeStyle = `rgba(255, 30, 86, ${1 - age})`
          laserCtx.lineWidth = 6 * (1 - age * 0.5)
          laserCtx.shadowColor = '#ff1e56'
          laserCtx.shadowBlur = 14
          laserCtx.stroke()
        }
        laserCtx.restore()
      }
      raf = requestAnimationFrame(animateLaser)
    }
    raf = requestAnimationFrame(animateLaser)

    ink.addEventListener('pointerdown', onDown)
    ink.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)

    engineRef.current = {
      undo: () => {
        slideBucket(activeSlide.current).pop()
        renderAll()
      },
      clear: () => {
        strokes.current[activeSlide.current] = []
        renderAll()
      },
      setActiveSlide: (key: string) => {
        activeSlide.current = key
        renderAll()
      },
    }

    return () => {
      cancelAnimationFrame(raf)
      ink.removeEventListener('pointerdown', onDown)
      ink.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Stable API object so effects depending on it don't re-run every render.
  return useMemo<PenEngine>(
    () => ({
      undo: () => engineRef.current?.undo(),
      clear: () => engineRef.current?.clear(),
      setActiveSlide: (key: string) => engineRef.current?.setActiveSlide(key),
    }),
    [],
  )
}
