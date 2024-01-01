'use client'
import { motion } from 'framer-motion'
import { useCustom } from '../customize/customContext/customContextProvider'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Ring() {
  
    const pathName = usePathname()
    const { userCustomize } = useCustom()
    const [timeDuration , setTimeDuration ] = useState<number>(2)
    useEffect(()=>{
       setTimeDuration(userCustomize.speed)
    },[userCustomize.speed])


  return (
   <div key={userCustomize.color} className="w-full h-full flex items-center justify-center overflow-hidden">
      <motion.svg
      key={timeDuration}
      style={{ scale:pathName === '/' ? 1 : userCustomize.scale}}
      animate={{
        rotate:360
      }}
      transition={{
        duration: pathName === "/" ? 2 : timeDuration,
        repeat: Infinity,
        repeatType:'loop',
        ease: 'easeInOut',
      }}
      className="container"
      viewBox="0 0 40 40"
      height="40"
      width="40">
      <motion.circle
       key={userCustomize.scale}
        className="track"
        cx="20"
        cy="20"
        r="17.5"
        pathLength="100"
        strokeWidth="5px"
        fill="none"
      />
      <motion.circle
        className="car"
        cx="20"
        cy="20"
        r="17.5"
        pathLength="100"
        strokeWidth="5px"
        stroke={pathName === '/' ? '#000' : userCustomize.color}
        strokeLinecap='round'
        fill="none"
        initial={{ strokeDasharray: '1, 200', strokeDashoffset: 0 }}
        animate={{
          strokeDasharray: ['1,150','75,150','75,150'],
          strokeDashoffset: [0,-25,-100],
        }}
        transition={{
          duration: pathName === "/" ?  2 * 0.75 : timeDuration * 0.75,
          repeat: Infinity,
          repeatType:'loop',
          ease: 'easeInOut',
        }}
      />
    </motion.svg>
   </div>
  )
}


