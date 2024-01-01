"use client";

import { motion } from "framer-motion";
import { useCustom } from '../customize/customContext/customContextProvider'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'



export default function Waveform() {

  const pathName = usePathname()
  const { userCustomize } = useCustom()
  const [timeDuration , setTimeDuration ] = useState<number>(1)
  useEffect(()=>{
     setTimeDuration(userCustomize.speed)
  },[userCustomize.speed])
    



  const num = [1, 2, 3, 4];
  const wave = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const waveBars = {
    show: {
      scaleY: [0.1, 1, 0.1],
      transition: {
        duration:  pathName === "/" ? 1 : timeDuration,
        type: "tween",
        repeat: Infinity,
      },
    },
  };

  return (
  <div key={timeDuration} className="w-full h-full flex items-center justify-center">
     <motion.div variants={wave} animate="show" className="flex gap-3" key={userCustomize.radius}>
      {num.map((item) => (
        <motion.div
          style={{
            background: pathName === '/' ? '#000' : userCustomize.color,
            width:pathName === '/' ? '3px' : `${userCustomize.size}px`,
            height:pathName === '/' ? '32px' : `${userCustomize.height}px`,
            borderRadius: pathName === '/' ? '20%' : `${userCustomize.radius}%`
          }}
          initial={{ scaleY: 0.1 }}
          variants={waveBars}
          key={item}
          className="w-[3px] h-[32px] bg-black rounded-sm"
        ><div key={userCustomize.height}></div></motion.div>
      ))}
    </motion.div>
  </div>
  );
}
