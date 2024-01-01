'use client'

import { motion } from "framer-motion";
import { useCustom } from "../customize/customContext/customContextProvider";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";



export default function Myagi() {
  
    const pathName = usePathname()
    const { userCustomize } = useCustom()
    const [timeDuration , setTimeDuration ] = useState<number>(0.9)
    useEffect(()=>{
       setTimeDuration(userCustomize.speed)
    },[userCustomize.speed])
      
  

    // variants
    const container = {
    show:{
          transition:{ staggerChildren:0.075 }
        }
      }
    
      const lineVariants = {
        show: {
          rotate: [0, 180],
          transition:{ 
            duration: pathName === "/" ? 0.9 : timeDuration, 
            ease: 'easeInOut', 
            repeat: Infinity,
            repeatType:'mirror' as const 
        },
        },
      };
    
      const lines =[1,0.8,0.6,0.4,0.2,0.1]

  return (
   <div key={timeDuration} className=' w-full h-full flex items-center justify-center'>
     <motion.div
      key={userCustomize.color}
     variants={container}
     animate='show'
     className='flex items-center justify-center relative'>
     {lines.map((item)=>(
      <motion.div 
      variants={lineVariants}
      style={{
         opacity : item,
         background: pathName === '/' ? '#000' : userCustomize.color,
         width:pathName === '/' ? '5px' : `${userCustomize.size}px`,
         height:pathName === '/' ? '50px' : `${userCustomize.height}px`,
         borderRadius: pathName === '/' ? '30%' : `${userCustomize.radius}%`

        }}
       key={item} className='w-[5px] h-[50px] bg-black rounded-md absolute'>
        <div key={userCustomize.size}><div key={userCustomize.radius}><div key={userCustomize.height}></div></div></div>
        </motion.div>
     ))
     }
    </motion.div>
   </div>
  )
}

