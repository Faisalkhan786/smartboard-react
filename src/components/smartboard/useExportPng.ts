import { useCallback, type RefObject } from 'react'
import html2canvas from 'html2canvas'

/** Captures the board to a 2× PNG (1080×1920 for portrait), skipping design-only overlays. */
export function useExportPng(boardRef: RefObject<HTMLElement>) {
  return useCallback(
    async (fileName: string) => {
      const board = boardRef.current
      if (!board) return
      const prev = board.style.transform
      board.style.transform = 'none'

      const editing = Array.from(
        document.querySelectorAll('.user-image.editing'),
      ) as HTMLElement[]
      editing.forEach((el) => el.classList.remove('editing'))

      const canvas = await html2canvas(board, {
        scale: 2,
        backgroundColor: '#060911',
        ignoreElements: (el) =>
          el.classList.contains('safe-overlay') ||
          el.classList.contains('img-resize-handle') ||
          el.classList.contains('crop-guides'),
      })

      editing.forEach((el) => el.classList.add('editing'))
      board.style.transform = prev

      const link = document.createElement('a')
      link.download = fileName
      link.href = canvas.toDataURL('image/png')
      link.click()
    },
    [boardRef],
  )
}
