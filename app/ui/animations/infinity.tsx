'use client'
import { motion } from 'framer-motion'
import { useCustom } from '../customize/customContext/customContextProvider'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Infinity_animate() {

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
      viewBox="0 0 55 23.1"
      height="23.1"
      width="55"
      preserveAspectRatio="xMidYMid meet" >
      <motion.path
         key={userCustomize.scale}
        className="track"
        fill="none"
        strokeOpacity={0.2}
        stroke={pathName === '/' ? '#000' : userCustomize.color}
        strokeWidth="4"
        pathLength="100"
        d="M26.7,12.2c3.5,3.4,7.4,7.8,12.7,7.8c5.5,0,9.6-4.4,9.6-9.5C49,5,45.1,1,39.8,1c-5.5,0-9.5,4.2-13.1,7.8l-3.4,3.3c-3.6,3.6-7.6,7.8-13.1,7.8C4.9,20,1,16,1,10.5C1,5.4,5.1,1,10.6,1c5.3,0,9.2,4.5,12.7,7.8L26.7,12.2z"
      />
      <motion.path
        className="car"
        fill="none"
        strokeWidth="4"
        strokeDasharray='15, 85'
        strokeLinecap='round'
        pathLength="100"
        d="M26.7,12.2c3.5,3.4,7.4,7.8,12.7,7.8c5.5,0,9.6-4.4,9.6-9.5C49,5,45.1,1,39.8,1c-5.5,0-9.5,4.2-13.1,7.8l-3.4,3.3c-3.6,3.6-7.6,7.8-13.1,7.8C4.9,20,1,16,1,10.5C1,5.4,5.1,1,10.6,1c5.3,0,9.2,4.5,12.7,7.8L26.7,12.2z"
        initial={{stroke:pathName === '/' ? '#000' : userCustomize.color, strokeDashoffset: 100 }}
        animate={{stroke:pathName === '/' ? '#000' : userCustomize.color, strokeDashoffset: 0 }}
        transition={{ duration: pathName === "/" ? 1.3 : timeDuration, repeat: Infinity,ease: 'linear' }}
      />
    </motion.svg>
    </div>
  )
}
