import { useEffect } from 'react'

/** Body-rendered hover tooltips for any element with a [data-tip] attribute. */
export function useTooltips() {
  useEffect(() => {
    const tip = document.createElement('div')
    tip.className = 'tip-pop'
    document.body.appendChild(tip)
    const over = (e: MouseEvent) => {
      const t = (e.target as HTMLElement).closest('[data-tip]') as HTMLElement | null
      if (!t) return
      tip.textContent = t.getAttribute('data-tip') || ''
      const r = t.getBoundingClientRect()
      tip.style.left = r.left + r.width / 2 + 'px'
      tip.style.top = r.top - 8 + 'px'
      tip.classList.add('show')
    }
    const out = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('[data-tip]')) tip.classList.remove('show')
    }
    // Hide immediately on click — the hovered button may unmount (e.g. the
    // panel-close button), which would otherwise leave the tooltip stuck.
    const down = () => tip.classList.remove('show')
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)
    document.addEventListener('mousedown', down)
    return () => {
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout', out)
      document.removeEventListener('mousedown', down)
      tip.remove()
    }
  }, [])
}
