import Icon from './icons/Icon'
import { useUnsavedImages } from './smartboard/useUnsavedImages'
import './SaveImagesIndicator.css'

interface Props {
  /** floating pill (Home) — fixed top-right instead of inline */
  floating?: boolean
}

/**
 * Smart "unsaved images" indicator. Faded + disabled while everything is
 * committed; amber + count + gentle pulse the moment an image is uploaded or
 * moved and not yet saved. Clicking it writes the images into the repo. Shown
 * in the deck toolbar, the chapter page, and (floating) the home page.
 */
export default function SaveImagesIndicator({ floating }: Props) {
  const { count, saving, saveNow } = useUnsavedImages()
  const dirty = count > 0
  const label = saving ? 'Saving…' : dirty ? `Save · ${count}` : 'Saved'

  return (
    <button
      type="button"
      className={
        'save-indicator' +
        (dirty ? ' dirty' : ' clean') +
        (saving ? ' saving' : '') +
        (floating ? ' floating' : '')
      }
      onClick={() => dirty && !saving && saveNow()}
      disabled={!dirty || saving}
      data-tip={
        dirty
          ? `${count} image${count > 1 ? 's' : ''} not saved to the repo — click to save, then git commit & push`
          : 'All centre images are saved to the repo'
      }
      aria-label={
        dirty ? `${count} images not yet saved to the repo` : 'All images saved to the repo'
      }
    >
      <span className="save-indicator-glyph" aria-hidden="true">
        {dirty && !saving ? <span className="save-dot" /> : <Icon name={saving ? 'upload' : 'check'} size={13} />}
      </span>
      <span className="save-indicator-label">{label}</span>
    </button>
  )
}
