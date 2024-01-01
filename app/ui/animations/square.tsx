"use client";
import { motion } from "framer-motion";
import { useCustom } from '../customize/customContext/customContextProvider'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Square() {

  const pathName = usePathname()
  const { userCustomize } = useCustom()
  const [timeDuration , setTimeDuration ] = useState<number>(0.9)
  useEffect(()=>{
     setTimeDuration(userCustomize.speed)
  },[userCustomize.speed])
    

  return (
    <div key={timeDuration}  className="w-full h-full flex items-center justify-center">
      <motion.svg
        key={userCustomize.color}
        style={{ scale: pathName === '/' ? 1 : userCustomize.scale}}
        className="overflow-visible origin-center"
        viewBox="0 0 35 35"
        height="35"
        width="35"
        xmlns="http://www.w3.org/2000/svg">
        <motion.rect
          key={userCustomize.scale}
          className="track"
          x="2.5"
          y="2.5"
          fill="none"
          strokeOpacity={0.2}
          stroke={pathName === '/' ? '#000' : userCustomize.color}
          strokeWidth="5px"
          width="32.5"
          height="32.5"
        />
        <motion.rect
          className="car"
          x="2.5"
          y="2.5"
          fill="none"
          strokeWidth="5px"
          width="32.5"
          height="32.5"
          strokeDasharray="25, 85"
          pathLength="100"
          initial={{stroke:pathName === '/' ? '#000' : userCustomize.color, strokeDashoffset: -100 }}
          animate={{stroke:pathName === '/' ? '#000' : userCustomize.color, strokeDashoffset: 0 }}
          transition={{ duration: pathName === "/" ? 0.9: timeDuration, repeat: Infinity,ease: 'linear' }}
        />
      </motion.svg>
    </div>
  );
}
