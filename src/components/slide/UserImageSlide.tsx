import type { CSSProperties } from 'react'
import { useSlide } from './SlideContext'
import { SlideSplit, SplitMain, SplitAside } from './primitives'

/**
 * Body for a user-inserted (blank) slide that has an image placement chosen:
 *   - 'full' — the image fills the slide (portrait images left-align in landscape
 *     instead of floating centred with empty sides)
 *   - 'top'  — the image sits in a box that reflows like a diagram: a top box in
 *     9:16, a left column in 16:9 (leaving the right side free to annotate)
 * The image/GIF is read from slide context. With none uploaded yet, a hint shows.
 */
export default function UserImageSlide({ mode }: { mode: 'full' | 'top' }) {
  const { image } = useSlide()
  const src = image?.src && !image.deleted ? image.src : null
  const fit = image?.fit ?? 'cover'
  // 'cover' follows the reposition sliders; 'contain' is positioned via CSS so it
  // can be format-aware (centred in portrait, left-aligned in landscape).
  const media: CSSProperties = {
    objectFit: fit,
    ...(fit === 'cover'
      ? { objectPosition: `${image?.cropX ?? 50}% ${image?.cropY ?? 50}%` }
      : {}),
  }

  if (mode === 'full') {
    return (
      <div className={'user-full' + (src ? '' : ' empty')}>
        {src ? (
          <img className="user-full-media" src={src} alt="" style={media} />
        ) : (
          <div className="user-slot-hint">Full-slide image — upload with the 🖼️ button</div>
        )}
      </div>
    )
  }

  // 'top' — reflows like a diagram box: top in portrait, left column in landscape.
  return (
    <SlideSplit>
      <SplitMain>
        <div className={'diagram-card diagram-card--media user-top' + (src ? '' : ' empty')}>
          {src ? (
            <img className="diagram-card-media" src={src} alt="" style={media} />
          ) : (
            <div className="user-slot-hint">Top image — upload with the 🖼️ button</div>
          )}
        </div>
      </SplitMain>
      <SplitAside>{null}</SplitAside>
    </SlideSplit>
  )
}
