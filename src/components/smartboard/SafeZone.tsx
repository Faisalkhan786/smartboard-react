import type { Format } from '../../config/formats'

/** Design-only overlay showing where the platform UI covers the frame. Excluded from PNG export. */
export default function SafeZone({ format }: { format: Format }) {
  const { safe } = format
  return (
    <div className="safe-overlay">
      <div className="yt-mask yt-top" style={{ height: safe.top }} />
      <div
        className="yt-mask yt-right"
        style={{ width: safe.right, top: format.boardH * 0.33, bottom: safe.bottom }}
      >
        <span className="yt-label vert">Actions</span>
      </div>
      <div className="yt-mask yt-bottom" style={{ height: safe.bottom }}>
        <span className="yt-label">YouTube · title · channel · caption</span>
      </div>
      <div
        className="safe-zone-box"
        style={{ top: safe.top, left: safe.left, right: safe.right, bottom: safe.bottom }}
      >
        <span className="safe-label">SAFE ZONE</span>
      </div>
    </div>
  )
}
