"use client";

import { motion } from "framer-motion";
import { useCustom } from "../customize/customContext/customContextProvider";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


export default function LineSpinner() {

    const pathName = usePathname()
    const { userCustomize } = useCustom()
    const [timeDuration , setTimeDuration ] = useState<number>(2)
    useEffect(()=>{
       setTimeDuration(userCustomize.speed)
    },[userCustomize.speed])
      


  return (
    <div className="w-full h-full flex items-center justify-center">
     <div key={timeDuration} className='w-[40px] h-[40px] flex items-center justify-start relative'>
       {[1,2,3,4,5,6,7,8,9,10,11,12].map((item)=>(
        <motion.div
         style={{
          rotate:`${(360/-12)*item}deg`
         }}
        key={item} className='absolute top-0 w-[4px] h-[100%] left-[50%] rounded-2xl'>
          <motion.div
           key={userCustomize.color}
           animate={{
            scaleY:[0.75,1,0.75,0.75],
            opacity:[0,1,0,0]
           }}
           transition={{
            duration: pathName === "/" ? 2 : timeDuration,
            repeatType:'loop',
            repeat:Infinity,
            repeatDelay:0,
            ease:'easeInOut',
            delay:pathName === "/" ? (2/12)*item : (timeDuration/12)*item
            
           }}
           className='w-[100%] h-[22%] rounded-2xl'
           style={{background:pathName === '/' ? '#000' : userCustomize.color}}
           ></motion.div>
        </motion.div>
          ))}
    </div>
    </div>
  );
}

