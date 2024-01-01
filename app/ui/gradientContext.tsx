'use client'

import { useContext , createContext, useState } from "react"

const gradientContext = createContext<any>(null)
export default function GradientContextProvider(
  { children }:{
    children:React.ReactNode
  }
) {
  const [gradientColor,setGradientColor] = useState<string>('from-pink-400 to-violet-500')
  
  return (
    <gradientContext.Provider value={{ gradientColor, setGradientColor}}>
        {children}
    </gradientContext.Provider>
  )
}

export function useGradientColor(){
  const context = useContext(gradientContext)
  if(!context){
    throw new Error('useCustom must be used within the customize context provider');
  }else{
      return context
  }
}