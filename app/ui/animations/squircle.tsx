'use client'

import { motion } from "framer-motion";
import { useCustom } from '../customize/customContext/customContextProvider'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Squircle() {

  const pathName = usePathname()
  const { userCustomize } = useCustom()
  const [timeDuration , setTimeDuration ] = useState<number>(0.9)
  useEffect(()=>{
     setTimeDuration(userCustomize.speed)
  },[userCustomize.speed])
    

  return (
    <div key={timeDuration} className="w-full h-full flex items-center justify-center">
      <motion.svg
      key={userCustomize.color}
      style={{ scale: pathName === '/' ? 1 : userCustomize.scale}}
     className=" overflow-visible origin-center"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 35 35"
      height="35"
      width="35"
      preserveAspectRatio="xMidYMid meet"
    >
      <motion.path
        key={userCustomize.scale}
        className="track"
        fill="none"
        strokeWidth="5"
        strokeOpacity={0.2}
        stroke={pathName === '/' ? '#000' : userCustomize.color}
        pathLength="100"
        d="M0.37 18.5 C0.37 5.772 5.772 0.37 18.5 0.37 S36.63 5.772 36.63 18.5 S31.228 36.63 18.5 36.63 S0.37 31.228 0.37 18.5"
      ></motion.path>
      <motion.path
        className="car"
        fill="none"
        strokeWidth="5"
        strokeLinecap={'round'}
        strokeDasharray={'15, 85'}
        pathLength="100"
        d="M0.37 18.5 C0.37 5.772 5.772 0.37 18.5 0.37 S36.63 5.772 36.63 18.5 S31.228 36.63 18.5 36.63 S0.37 31.228 0.37 18.5"
        initial={{stroke:pathName === '/' ? '#000' : userCustomize.color, strokeDashoffset: -100 }}
        animate={{stroke:pathName === '/' ? '#000' : userCustomize.color, strokeDashoffset: 0 }}
        transition={{ duration: pathName === "/" ? 0.9: timeDuration, repeat: Infinity,ease: 'linear' }}
      ></motion.path>
    </motion.svg>
    </div>
  );
}
