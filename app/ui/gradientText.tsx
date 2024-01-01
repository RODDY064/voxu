'use client'



import { useGradientColor } from "./gradientContext"


export default function GradientText() {
  const { gradientColor } = useGradientColor()
  return (
    <span 
    className={` text-3xl mx-2 bg-gradient-to-r ${gradientColor}  bg-clip-text text-transparent`}>
    ui/ux animations
  </span>
  )
}
