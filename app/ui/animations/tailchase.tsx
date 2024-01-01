'use client'
import { motion } from "framer-motion"
import { useCustom } from "../customize/customContext/customContextProvider";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";



export default function TailChase() {

    const pathName = usePathname()
    const { userCustomize } = useCustom()
    const [timeDuration , setTimeDuration ] = useState<number>(1.5)
    useEffect(()=>{
       setTimeDuration(userCustomize.speed)
    },[userCustomize.speed])
      


  return (
    <div key={timeDuration} className="w-full h-full flex items-center justify-center">
         <motion.div 
     animate={{rotate:[0,360]}}
     transition={{
      duration: pathName === '/' ? 1.5 * 1.8 : timeDuration * 1.8,
      repeat:Infinity,
      repeatDelay:0,
      repeatType:'loop'
    }}
     style={{
        width: pathName === '/' ? '40px' : `${userCustomize.size}px`, 
        height:pathName === '/' ? '40px' : `${userCustomize.height}px`,
     }}
    className='w-[40px] h-[40px] flex items-center justify-start relative'>
       {[1,0.853,0.668,0.501,0.334,0.167].map((item)=>(
        <motion.div
        animate={{
          rotate:[0,360,360]
         }}
         transition={{
          duration: pathName === '/' ? 1.5 : timeDuration,
          repeatType:'loop',
          repeat:Infinity,
          repeatDelay:0,
          ease:'easeInOut',
          delay: pathName === '/' ? 1.5*item*0.5 : timeDuration*item*0.5 
          
         }}
         key={item} className='absolute top-0 w-[100%] h-[100%] left-0 '>
          <div
           key={userCustomize.color}
           style={{
            width:`${userCustomize.size * 0.25}px`,
            height:`${userCustomize.size * 0.25}px`,
            background: pathName === '/' ? '#000' : userCustomize.color,
           }}
           className='w-[0.7rem] h-[0.7rem] rounded-full'></div>
        </motion.div>
       ))

       }
    </motion.div>
    </div>
  )
}




/*
'use client'
import { motion } from 'framer-motion'



 export default function TailChase() {
  return (
    <div className="w-full h-full flex items-center justify-center">
         <motion.div 
     animate={{rotate:[0,360]}}
     transition={{
      duration:1.5 * 1.8,
      repeat:Infinity,
      repeatDelay:0,
      repeatType:'loop'
    }}
    className='w-[40px] h-[40px] flex items-center justify-start relative'>
       {[1,0.853,0.668,0.501,0.334,0.167].map((item)=>(
        <motion.div
        animate={{
          rotate:[0,360,360]
         }}
         transition={{
          duration:1.5,
          repeatType:'loop',
          repeat:Infinity,
          repeatDelay:0,
          ease:'easeInOut',
          delay:1.5*item*0.5
          
         }}
         key={item} className='absolute top-0 w-[100%] h-[100%] left-0 '>
          <div
           style={{
            width:`${40 * 0.25}px`,
            height:`${40 * 0.25}px`
           }}
           className='w-[0.7rem] h-[0.7rem] rounded-full bg-black'></div>
        </motion.div>
       ))

       }
    </motion.div>
    </div>
  )
}

*/
