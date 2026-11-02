import { useRef, type RefObject } from 'react'
import type { SlideImage } from './imageStore'

interface Props {
  data: SlideImage
  editing: boolean
  cropEditing: boolean
  boardRef: RefObject<HTMLElement>
  onChange: (next: SlideImage) => void
}

/** A per-slide uploaded image. Draggable + resizable while in "Move/Size" mode. */
export default function ImageLayer({ data, editing, cropEditing, boardRef, onChange }: Props) {
  const mode = useRef<null | 'drag' | 'resize' | 'crop'>(null)
  const start = useRef({ x: 0, y: 0, left: 0, top: 0, w: 0, h: 0, cropX: 50, cropY: 50 })

  const rect = () => boardRef.current!.getBoundingClientRect()

  function begin(e: React.PointerEvent, m: 'drag' | 'resize' | 'crop') {
    if (!editing) return
    e.preventDefault()
    e.stopPropagation()
    mode.current = m
    start.current = {
      x: e.clientX,
      y: e.clientY,
      left: data.leftPct,
      top: data.topPct,
      w: data.widthPct,
      h: data.heightPct ?? 40,
      cropX: data.cropX ?? 50,
      cropY: data.cropY ?? 50,
    }
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', end)
  }

  function move(e: PointerEvent) {
    const r = rect()
    const dx = ((e.clientX - start.current.x) / r.width) * 100
    const dy = ((e.clientY - start.current.y) / r.height) * 100
    if (mode.current === 'crop') {
      onChange({ ...data, cropX: Math.max(0, Math.min(100, start.current.cropX - dx)), cropY: Math.max(0, Math.min(100, start.current.cropY - dy)) })
      return
    }
    if (mode.current === 'drag') {
      onChange({
        ...data,
        leftPct: Math.max(0, Math.min(100 - start.current.w, start.current.left + dx)),
        topPct: Math.max(0, Math.min(96, start.current.top + dy)),
      })
    } else if (mode.current === 'resize') {
      const widthPct = Math.max(10, Math.min(100, start.current.w + dx))
      const heightPct = data.ratioLocked
        ? start.current.h * (widthPct / start.current.w)
        : Math.max(8, Math.min(100, start.current.h + dy))
      onChange({ ...data, widthPct, heightPct })
    }
  }

  function end() {
    window.removeEventListener('pointermove', move)
    window.removeEventListener('pointerup', end)
    mode.current = null
  }

  return (
    <div
      className={'user-image' + (editing ? ' editing' : '') + (cropEditing ? ' crop-editing' : '')}
      style={{ left: `${data.leftPct}%`, top: `${data.topPct}%`, width: `${data.widthPct}%`, height: `${data.heightPct ?? 40}%` }}
      onPointerDown={(e) => begin(e, cropEditing ? 'crop' : 'drag')}
    >
      <img className={data.cropped ? 'cropped' : ''} src={data.src} alt="" onLoad={(e) => {
        if (data.heightPct !== undefined) return
        const board = boardRef.current
        const image = e.currentTarget
        if (board && image.naturalWidth) onChange({ ...data, heightPct: data.widthPct * image.naturalHeight / image.naturalWidth * board.offsetWidth / board.offsetHeight, ratioLocked: data.ratioLocked ?? true })
      }} style={{
        objectFit: data.ratioLocked === false ? 'fill' : data.cropped ? 'cover' : 'contain',
        ...(data.cropped && data.ratioLocked !== false ? { objectPosition: `${data.cropX ?? 50}% ${data.cropY ?? 50}%`, transform: `scale(${data.cropZoom ?? 1})` } : {}),
      }} />
      {cropEditing && <div className="crop-guides" aria-hidden="true"><span>DRAG TO REPOSITION</span></div>}
      <div
        className="img-resize-handle"
        onPointerDown={(e) => begin(e, 'resize')}
      />
    </div>
  )
}
