'use client'
import { motion } from "framer-motion";
import { useCustom } from '../customize/customContext/customContextProvider'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Reuleaux() {

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
        height="37"
        width="37"
        viewBox="0 0 37 37"
        preserveAspectRatio="xMidYMid meet">
        <motion.path
          key={userCustomize.scale}
          className="track"
          fill="none"
          strokeWidth="5"
          strokeOpacity={0.2}
          stroke={pathName === '/' ? '#000' : userCustomize.color}
          pathLength="100"
          d="M36.63 31.746 c0 -13.394 -7.3260000000000005 -25.16 -18.13 -31.375999999999998 C7.696 6.66 0.37 18.352 0.37 31.746 c5.328 3.108 11.544 4.8839999999999995 18.13 4.8839999999999995 S31.301999999999996 34.854 36.63 31.746z"
        ></motion.path>
        <motion.path
          className="car"
          fill="none"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="15, 85"
          pathLength="100"
          d="M36.63 31.746 c0 -13.394 -7.3260000000000005 -25.16 -18.13 -31.375999999999998 C7.696 6.66 0.37 18.352 0.37 31.746 c5.328 3.108 11.544 4.8839999999999995 18.13 4.8839999999999995 S31.301999999999996 34.854 36.63 31.746z"
          initial={{stroke:pathName === '/' ? '#000' : userCustomize.color, strokeDashoffset: 100 }}
          animate={{stroke:pathName === '/' ? '#000' : userCustomize.color, strokeDashoffset: 0 }}
          transition={{ duration: pathName === "/" ? 0.9: timeDuration, repeat: Infinity,ease: 'linear' }}
        ></motion.path>
      </motion.svg>
    </div>
  );
}
