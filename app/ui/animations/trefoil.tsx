'use client'

import {motion} from 'framer-motion'
import { useCustom } from '../customize/customContext/customContextProvider'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Trefoil() {
  const pathName = usePathname()
  const { userCustomize } = useCustom()
  const [timeDuration , setTimeDuration ] = useState<number>(1.3)
  useEffect(()=>{
     setTimeDuration(userCustomize.speed)
  },[userCustomize.speed])



  return (
    <div key={timeDuration} className='w-full h-full flex items-center justify-center'>
     <motion.svg
      key={userCustomize.color}
      style={{ scale: pathName === '/' ? 1 : userCustomize.scale}}
      className="overflow-visible origin-center"
      viewBox="0 0 40 40"
      height="40"
      width="40"
      preserveAspectRatio="xMidYMid meet">
      <motion.path
         key={userCustomize.scale}
        className="track"
        fill="none"
        strokeOpacity={0.2}
        stroke={pathName === '/' ? '#000' : userCustomize.color}
        strokeWidth="4"
        pathLength="100"
        d="M29.76 18.72c0 7.28-3.92 13.6-9.84 16.96-2.88 1.68-6.24 2.64-9.84 2.64-3.6 0-6.88-0.96-9.76-2.64 0-7.28 3.92-13.52 9.84-16.96 2.88-1.68 6.24-2.64 9.76-2.64s6.88 0.96 9.76 2.64c5.84 3.36 9.76 9.68 9.84 16.96-2.88 1.68-6.24 2.64-9.76 2.64-3.6 0-6.88-0.96-9.84-2.64-5.84-3.36-9.76-9.68-9.76-16.96 0-7.28 3.92-13.6 9.76-16.96C25.84 5.12 29.76 11.44 29.76 18.72z"
      ></motion.path>
      <motion.path
        className="car"
        fill="none"
        strokeDasharray='15, 85'
        strokeWidth="4"
        pathLength="100"
        d="M29.76 18.72c0 7.28-3.92 13.6-9.84 16.96-2.88 1.68-6.24 2.64-9.84 2.64-3.6 0-6.88-0.96-9.76-2.64 0-7.28 3.92-13.52 9.84-16.96 2.88-1.68 6.24-2.64 9.76-2.64s6.88 0.96 9.76 2.64c5.84 3.36 9.76 9.68 9.84 16.96-2.88 1.68-6.24 2.64-9.76 2.64-3.6 0-6.88-0.96-9.84-2.64-5.84-3.36-9.76-9.68-9.76-16.96 0-7.28 3.92-13.6 9.76-16.96C25.84 5.12 29.76 11.44 29.76 18.72z"
        initial={{stroke:pathName === '/' ? '#000' : userCustomize.color, strokeDashoffset: 100 }}
        animate={{stroke:pathName === '/' ? '#000' : userCustomize.color, strokeDashoffset: 0 }}
        transition={{ duration: pathName === "/" ? 1.3: timeDuration, repeat: Infinity,ease: 'linear' }}
      ></motion.path>
    </motion.svg>
    </div>
  )
}
