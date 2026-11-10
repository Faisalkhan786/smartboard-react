import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { loadTopic } from '../content/topics'
import type { Topic } from '../content/types'
import { CHAPTERS } from '../content/chapters'
import { CLASSES } from '../content/classes'
import { FORMATS, DEFAULT_FORMAT, type FormatId } from '../config/formats'
import Smartboard from '../components/smartboard/Smartboard'
import Toolbar, { type ToolbarProps } from './Toolbar'
import { useTooltips } from './useTooltips'
import { usePenEngine, type PenMode, type PenSettings } from '../components/smartboard/usePenEngine'
import { useExportPng } from '../components/smartboard/useExportPng'
import {
  loadImages,
  saveImages,
  imgKey,
  fileToDataURL,
  type SlideImage,
} from '../components/smartboard/imageStore'
import { IMAGE_MANIFEST } from '../content/imageManifest'
import {
  loadLayout,
  saveLayout,
  staticKey,
  isUserKey,
  newUserId,
  type DeckLayout,
} from '../components/smartboard/deckStore'
import './deck.css'

interface ComposedSlide {
  key: string
  navTitle: string
  isUser: boolean
  render: () => ReactNode
}

function DeckView({ topic }: { topic: Topic }) {
  const [slide, setSlide] = useState(0)
  const [mode, setMode] = useState<PenMode>('pen')
  const [color, setColor] = useState('#facc15')
  const [size, setSize] = useState(2)
  const [solved, setSolved] = useState(false)
  const [safeZoneOn, setSafeZoneOn] = useState(false)
  const [imageEditing, setImageEditing] = useState(false)
  const [cropEditing, setCropEditing] = useState(false)
  const [toolsOpen, setToolsOpen] = useState(true)
  const [toolsClosing, setToolsClosing] = useState(false)
  const [formatId, setFormatId] = useState<FormatId>(DEFAULT_FORMAT)
  const [images, setImages] = useState<Record<string, SlideImage>>({})
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [layout, setLayout] = useState<DeckLayout>(() =>
    topic ? loadLayout(topic.id, topic.slides.length) : { order: [], users: {} },
  )
  const [scale, setScale] = useState(1)

  const boardRef = useRef<HTMLDivElement>(null)
  const inkRef = useRef<HTMLCanvasElement>(null)
  const laserRef = useRef<HTMLCanvasElement>(null)
  const settingsRef = useRef<PenSettings>({ mode, color, size })
  settingsRef.current = { mode, color, size }

  const engine = usePenEngine(inkRef, laserRef, settingsRef)
  const exportPng = useExportPng(boardRef)
  useTooltips()
  const format = FORMATS[formatId]

  useEffect(() => {
    let active = true
    loadImages().then((stored) => {
      // Committed manifest = cross-device default; local IndexedDB overrides it.
      if (active) setImages({ ...IMAGE_MANIFEST, ...stored })
    }).catch(() => {
      if (active) alert('Could not load saved images from browser storage.')
    }).finally(() => {
      if (active) setImagesLoaded(true)
    })
    return () => { active = false }
  }, [])

  const chapter = useMemo(
    () => CHAPTERS.find((c) => c.id === topic?.chapterId),
    [topic],
  )

  // Static slides + user-inserted blank slides, in display order
  const composed = useMemo<ComposedSlide[]>(() => {
    if (!topic) return []
    return layout.order
      .filter((k) => {
        if (isUserKey(k)) return true
        const i = parseInt(k.slice(1), 10)
        return !topic.slides[i]?.hidden
      })
      .map((k) => {
        if (isUserKey(k)) {
          return {
            key: k,
            navTitle: layout.users[k]?.navTitle ?? 'Blank slide',
            isUser: true,
            render: () => null,
          }
        }
        const i = parseInt(k.slice(1), 10)
        const sd = topic.slides[i]
        return {
          key: k,
          navTitle: sd?.navTitle ?? '—',
          isUser: false,
          render: sd ? sd.render : () => null,
        }
      })
  }, [topic, layout])

  const slideCount = composed.length
  const safeSlide = Math.min(slide, Math.max(0, slideCount - 1))
  const activeKey = composed[safeSlide]?.key ?? staticKey(0)

  // Floating-toolbar (landscape) open/close with a downward exit animation
  const openTools = useCallback(() => {
    setToolsClosing(false)
    setToolsOpen(true)
  }, [])
  const closeTools = useCallback(() => {
    setToolsClosing(true)
    window.setTimeout(() => {
      setToolsOpen(false)
      setToolsClosing(false)
    }, 160)
  }, [])
  const toggleTools = useCallback(() => {
    if (toolsOpen && !toolsClosing) closeTools()
    else if (!toolsOpen) openTools()
  }, [toolsOpen, toolsClosing, openTools, closeTools])

  // Reload the layout + reset to the first slide when the topic changes
  useEffect(() => {
    if (!topic) return
    setLayout(loadLayout(topic.id, topic.slides.length))
    setSlide(0)
  }, [topic])

  // Fit the board into the viewport
  useEffect(() => {
    const fit = () => {
      if (format.id === 'landscape') {
        // near full-screen; toolbar floats as an overlay. Leave a small margin
        // so the board isn't edge-to-edge.
        const availH = window.innerHeight - 12
        const availW = window.innerWidth - 12
        setScale(Math.min(availH / format.boardH, availW / format.boardW) * 0.95)
      } else {
        const sidebarW = window.innerWidth <= 760 ? 0 : 320
        const availH = window.innerHeight * 0.96
        const availW = Math.max(240, window.innerWidth - sidebarW - 24)
        setScale(Math.min(1, availH / format.boardH, availW / format.boardW))
      }
    }
    fit()
    window.addEventListener('resize', fit)
    return () => window.removeEventListener('resize', fit)
  }, [format])

  // Keep the ink layer in sync with the active slide (by stable key)
  useEffect(() => {
    engine.setActiveSlide(activeKey)
    setImageEditing(false)
    setCropEditing(false)
  }, [activeKey, engine])

  // Keyboard shortcuts
  useEffect(() => {
    if (!topic) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setSlide((s) => Math.min(slideCount - 1, s + 1))
      if (e.key === 'ArrowLeft') setSlide((s) => Math.max(0, s - 1))
      if (e.key.toLowerCase() === 'z') engine.undo()
      if (e.key.toLowerCase() === 't') toggleTools()
      if (e.key === '[') setSize((v) => Math.max(2, v - 0.5))
      if (e.key === ']') setSize((v) => Math.min(14, v + 0.5))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [topic, engine, slideCount, toggleTools])

  const imgK = imgKey(topic.id, activeKey)
  const rawImage = images[imgK]
  const currentImage: SlideImage | undefined = rawImage && !rawImage.deleted ? rawImage : undefined

  const writeImages = (next: Record<string, SlideImage>) => {
    setImages(next)
    void saveImages(next).catch(() => alert('Could not save the image. Browser storage may be full.'))
  }

  const onImageFile = async (file: File) => {
    const existingImages = imagesLoaded ? images : { ...IMAGE_MANIFEST, ...(await loadImages()) }
    if (!imagesLoaded) {
      setImages(existingImages)
      setImagesLoaded(true)
    }
    const src = await fileToDataURL(file)
    const prevRaw = existingImages[imgK]
    const prev = prevRaw && !prevRaw.deleted ? prevRaw : undefined
    const img = new Image()
    img.onload = () => writeImages({
      ...existingImages,
      [imgK]: {
        src,
        leftPct: prev?.leftPct ?? 22,
        topPct: prev?.topPct ?? 30,
        widthPct: prev?.widthPct ?? 55,
        heightPct: prev?.heightPct ?? Math.min(90, (prev?.widthPct ?? 55) * img.height * format.boardW / (img.width * format.boardH)),
        ratioLocked: prev?.ratioLocked ?? true,
        cropX: prev?.cropX ?? 50,
        cropY: prev?.cropY ?? 50,
        cropZoom: prev?.cropZoom ?? 1,
        cropped: prev?.cropped ?? false,
      },
    })
    img.src = src
  }

  const onImageChange = useCallback(
    (next: SlideImage) => {
      setImages((prev) => {
        const updated = { ...prev, [imgK]: next }
        void saveImages(updated).catch(() => alert('Could not save the image. Browser storage may be full.'))
        return updated
      })
    },
    [imgK],
  )

  const onRemoveImage = () => {
    const existing = images[imgK]
    if (!existing || existing.deleted) return
    const next = { ...images }
    if (IMAGE_MANIFEST[imgK]) {
      // committed image → leave a tombstone so the deletion can be saved to the repo
      next[imgK] = { src: '', leftPct: 0, topPct: 0, widthPct: 0, deleted: true }
    } else {
      // local-only upload → just drop it
      delete next[imgK]
    }
    writeImages(next)
  }

  const onToggleImageEdit = () => {
    if (!currentImage) {
      alert('No image on this slide yet — add one with the 🖼️ button.')
      return
    }
    setImageEditing((v) => !v)
  }

  const updateCurrentImage = (changes: Partial<SlideImage>) => {
    if (!currentImage) return
    onImageChange({ ...currentImage, ...changes })
  }

  // Insert a blank user slide right after the given position, then jump to it
  const onInsertAfter = (pos: number) => {
    const id = newUserId()
    const order = [...layout.order]
    order.splice(pos + 1, 0, id)
    const next: DeckLayout = {
      order,
      users: { ...layout.users, [id]: { id, navTitle: 'Blank slide' } },
    }
    setLayout(next)
    saveLayout(topic.id, next)
    setSlide(pos + 1)
  }

  // Delete a user slide (static slides come from code and can't be removed)
  const onDeleteSlide = (pos: number) => {
    const k = composed[pos]?.key
    if (!k || !isUserKey(k)) return
    if (!confirm('Delete this blank slide? Any ink / image on it will be lost.')) return

    const order = layout.order.filter((x) => x !== k)
    const users = { ...layout.users }
    delete users[k]
    const next: DeckLayout = { order, users }
    setLayout(next)
    saveLayout(topic.id, next)

    // drop any image stored for this slide key
    const ik = imgKey(topic.id, k)
    if (images[ik]) {
      const ni = { ...images }
      delete ni[ik]
      writeImages(ni)
    }

    setSlide((s) => Math.min(s, Math.max(0, order.length - 1)))
  }

  // Drag-reorder: move a slide and keep the current selection on the same slide
  const onReorder = (from: number, to: number) => {
    if (from === to) return
    const prevKey = activeKey
    const order = [...layout.order]
    const [moved] = order.splice(from, 1)
    order.splice(to, 0, moved)
    const next: DeckLayout = { ...layout, order }
    setLayout(next)
    saveLayout(topic.id, next)
    setSlide(Math.max(0, order.indexOf(prevKey)))
  }

  // Rename a user slide (static slides are code-defined and keep their titles)
  const onRename = (pos: number, title: string) => {
    const k = composed[pos]?.key
    if (!k || !isUserKey(k)) return
    const t = title.trim() || 'Blank slide'
    const next: DeckLayout = {
      ...layout,
      users: { ...layout.users, [k]: { id: k, navTitle: t } },
    }
    setLayout(next)
    saveLayout(topic.id, next)
  }

  const toolbarProps: ToolbarProps = {
    topicTitle: topic.title,
    topicIcon: topic.icon,
    topicContext: chapter
      ? `${CLASSES.find((c) => c.id === chapter.classId)?.title ?? ''} · ${chapter.title}`
      : topic.title,
    accent: topic.accent,
    backTo: chapter ? `/chapter/${chapter.id}` : '/',
    backLabel: chapter ? chapter.title : 'All Topics',
    slides: composed.map((c) => ({ navTitle: c.navTitle, isUser: c.isUser })),
    currentSlide: safeSlide,
    onSelectSlide: setSlide,
    onInsertAfter,
    onDeleteSlide,
    onReorder,
    onRename,
    mode,
    onMode: setMode,
    color,
    onColor: setColor,
    size,
    onSize: setSize,
    onUndo: engine.undo,
    onClear: engine.clear,
    safeZoneOn,
    onToggleSafeZone: () => setSafeZoneOn((v) => !v),
    onImageFile,
    imageEditing,
    ratioLocked: currentImage?.ratioLocked ?? true,
    onToggleRatioLock: () => {
      const nextLocked = !(currentImage?.ratioLocked ?? true)
      updateCurrentImage({ ratioLocked: nextLocked, ...(nextLocked ? {} : { cropped: false, cropZoom: 1 }) })
      if (!nextLocked) setCropEditing(false)
    },
    cropEditing,
    onToggleCrop: () => {
      if (!currentImage) { alert('Upload an image first.'); return }
      updateCurrentImage({ cropped: true, cropX: currentImage.cropX ?? 50, cropY: currentImage.cropY ?? 50 })
      setImageEditing(true)
      setCropEditing((v) => !v)
    },
    cropped: currentImage?.cropped ?? false,
    cropZoom: currentImage?.cropZoom ?? 1,
    onCropZoom: (cropZoom) => updateCurrentImage({ cropZoom }),
    onResetCrop: () => updateCurrentImage({ cropX: 50, cropY: 50, cropZoom: 1 }),
    onToggleImageEdit,
    onRemoveImage,
    onToggleSolved: () => setSolved((v) => !v),
    onExport: () => exportPng(`${topic.id}_slide_${safeSlide + 1}.png`),
    format: formatId,
    onFormat: setFormatId,
  }

  const landscape = formatId === 'landscape'

  return (
    <div className={'deck-shell' + (landscape ? ' landscape' : '')}>
      {!landscape && <Toolbar {...toolbarProps} />}

      <Smartboard
        format={format}
        scale={scale}
        solved={solved}
        safeZoneOn={safeZoneOn}
        boardRef={boardRef}
        inkRef={inkRef}
        laserRef={laserRef}
        slideKey={activeKey}
        inkInteractive={!imageEditing}
        settings={{ mode, color, size }}
        image={currentImage}
        imageEditing={imageEditing}
        cropEditing={cropEditing}
        onImageChange={onImageChange}
      >
        {composed[safeSlide]?.render()}
      </Smartboard>

      {landscape && (
        <>
          {!toolsOpen && (
            <button
              className="tools-toggle"
              title="Show tools (T)"
              aria-label="Show tools"
              onClick={openTools}
            >
              ☰
            </button>
          )}
          {toolsOpen && (
            <Toolbar {...toolbarProps} floating closing={toolsClosing} onClose={closeTools} />
          )}
        </>
      )}
    </div>
  )
}

function DeckLoading() {
  return (
    <div className="deck-loading" role="status" aria-live="polite">
      <div className="deck-loading-inner">
        <div className="deck-loading-ring" aria-hidden="true" />
        <div className="deck-loading-text">Loading deck</div>
      </div>
    </div>
  )
}

/**
 * Route entry: resolve the topic for the URL, then render the deck. The topic's
 * slide code is fetched on demand (undefined = still loading, null = unknown id).
 */
export default function Deck() {
  const { topicId } = useParams()
  const [topic, setTopic] = useState<Topic | null | undefined>(undefined)

  useEffect(() => {
    let active = true
    setTopic(undefined)
    loadTopic(topicId).then((t) => {
      if (active) setTopic(t)
    })
    return () => {
      active = false
    }
  }, [topicId])

  if (topic === undefined) return <DeckLoading />
  if (topic === null) return <Navigate to="/" replace />
  return <DeckView topic={topic} />
}
