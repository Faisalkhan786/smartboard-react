import { createContext, useContext } from 'react'
import type { SlideImage } from '../smartboard/imageStore'

export interface SlideCtx {
  solved: boolean
  /** the current slide's uploaded image (for image-slot primitives) */
  image?: SlideImage
  /** which slot (if any) the uploaded image fills */
  imageSlot?: 'diagram' | 'top' | 'full'
}

const Ctx = createContext<SlideCtx>({ solved: false })

export const SlideProvider = Ctx.Provider
export const useSlide = () => useContext(Ctx)
