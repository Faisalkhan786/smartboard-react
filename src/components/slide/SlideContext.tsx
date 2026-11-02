import { createContext, useContext } from 'react'

export interface SlideCtx {
  solved: boolean
}

const Ctx = createContext<SlideCtx>({ solved: false })

export const SlideProvider = Ctx.Provider
export const useSlide = () => useContext(Ctx)
