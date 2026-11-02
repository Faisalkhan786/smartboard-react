import { useEffect, useRef, type ReactNode, type RefObject } from 'react'
import type { Format } from '../../config/formats'
import { SlideProvider } from '../slide/SlideContext'
import SafeZone from './SafeZone'
import ImageLayer from './ImageLayer'
import type { SlideImage } from './imageStore'
import type { PenSettings } from './usePenEngine'
import './smartboard.css'

interface Props {
  format: Format
  scale: number
  solved: boolean
  safeZoneOn: boolean
  children: ReactNode
  boardRef: RefObject<HTMLDivElement>
  inkRef: RefObject<HTMLCanvasElement>
  laserRef: RefObject<HTMLCanvasElement>
  /** stable key of the active slide — changes remount the content to replay the transition */
  slideKey: string
  inkInteractive: boolean
  settings: PenSettings
  image?: SlideImage
  imageEditing: boolean
  cropEditing: boolean
  onImageChange: (d: SlideImage) => void
}

export default function Smartboard({
  format,
  scale,
  solved,
  safeZoneOn,
  children,
  boardRef,
  inkRef,
  laserRef,
  slideKey,
  inkInteractive,
  settings,
  image,
  imageEditing,
  cropEditing,
  onImageChange,
}: Props) {
  const { boardW, boardH, safe } = format
  const landscape = format.id === 'landscape'
  const cursorRef = useRef<HTMLDivElement>(null)

  // Pen-tip cursor — follows the pointer over the board (replaces the system arrow)
  useEffect(() => {
    const board = boardRef.current
    const cursor = cursorRef.current
    if (!board || !cursor) return
    const show = () => {
      if (inkInteractive) cursor.style.display = 'block'
    }
    const hide = () => {
      cursor.style.display = 'none'
    }
    const moveIt = (e: PointerEvent) => {
      if (!inkInteractive) {
        cursor.style.display = 'none'
        return
      }
      cursor.style.display = 'block'
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    }
    board.addEventListener('pointerenter', show)
    board.addEventListener('pointerleave', hide)
    board.addEventListener('pointermove', moveIt)
    return () => {
      board.removeEventListener('pointerenter', show)
      board.removeEventListener('pointerleave', hide)
      board.removeEventListener('pointermove', moveIt)
    }
  }, [inkInteractive, boardRef])

  // Size/colour the pen-tip to match the active tool
  useEffect(() => {
    const el = cursorRef.current
    if (!el) return
    const { mode, color, size } = settings
    let d: number
    let bg: string
    let border: string
    if (mode === 'eraser') {
      d = size * 6 * scale
      bg = 'rgba(255,255,255,0.2)'
      border = '1.5px solid #fff'
    } else if (mode === 'laser') {
      d = 12
      bg = '#ff1e56'
      border = '2px solid #fff'
    } else {
      d = (mode === 'highlighter' ? size * 4.2 : size * 1.6) * scale
      bg = color
      border = 'none'
    }
    d = Math.max(6, d)
    el.style.width = `${d}px`
    el.style.height = `${d}px`
    el.style.background = bg
    el.style.border = border
  }, [settings, scale])

  return (
    <>
      {/* reserve the *scaled* footprint so the transformed board isn't clipped */}
      <div className="stage-outer" style={{ width: boardW * scale, height: boardH * scale }}>
        <div
          className="smartboard"
          ref={boardRef}
          style={{ width: boardW, height: boardH, transform: `scale(${scale})` }}
        >
          <div className="slides-root">
            <SlideProvider value={{ solved }}>
              <div
                key={slideKey}
                className={'slide active' + (solved ? ' solved' : '') + (landscape ? ' landscape' : '')}
                style={{
                  paddingTop: safe.top,
                  paddingRight: safe.right,
                  paddingBottom: safe.bottom,
                  paddingLeft: safe.left,
                }}
              >
                {children}
              </div>
            </SlideProvider>
          </div>

          {image && (
            <ImageLayer
              data={image}
              editing={imageEditing}
              cropEditing={cropEditing}
              boardRef={boardRef}
              onChange={onImageChange}
            />
          )}

          <canvas
            ref={inkRef}
            className="ink-canvas"
            width={boardW}
            height={boardH}
            style={{
              pointerEvents: inkInteractive ? 'auto' : 'none',
              cursor: inkInteractive ? 'none' : 'default',
            }}
          />
          <canvas ref={laserRef} className="laser-canvas" width={boardW} height={boardH} />

          {safeZoneOn && <SafeZone format={format} />}
        </div>
      </div>

      {/* Rendered outside the scaled board so its fixed positioning isn't transformed */}
      <div className="pen-tip-cursor" ref={cursorRef} />
    </>
  )
}
