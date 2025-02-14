import { TreeContext } from "../context/TreeContext"    
import { useContext } from "react"

export const useTreesContext = () => {
  const context = useContext(TreeContext)

  if(!context) {
    throw Error('useTreesContext must be used inside an TreesContextProvider')
  }

  return context
}