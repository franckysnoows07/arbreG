import { MediaContext } from "../context/MediaContext"
import { useContext } from "react"

export const useMediaContext = () => {
  const context = useContext(MediaContext)

  if(!context) {
    throw Error('useMediaContext must be used inside an MediaContextProvider')
  }

  return context
}