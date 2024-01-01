'use client'
import { motion } from "framer-motion"
import { useCustom } from "../customize/customContext/customContextProvider";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";




export default function Bouncy() {
  
  const pathName = usePathname()
  const { userCustomize } = useCustom()
  const [timeDuration , setTimeDuration ] = useState<number>(1.5)
  useEffect(()=>{
     setTimeDuration(userCustomize.speed)
  },[userCustomize.speed])
    


// variants 

const Container = {
  initial: {},
  animate: {
    transition:{
      staggerChildren:0.2
    }
  },
  
};

const Cube = {
  initial: {},
  animate: {
    y: [0, 0, -40, 0],
    transition: {
      duration: pathName === '/' ? 1.5 : timeDuration,
      ease: 'easeInOut',
      times: [0, 0.3, 0.5, 0.75, 1],
      repeat: Infinity,
    },
  },
};

const innerCube = {
  initial: {},
  animate: {
    scaleY: [1, 0.8, 0.65, 1.15, 0.8],
    scaleX: [1, 1, 1.3, 0.9, 1.1],
    transition: {
      duration: pathName === "/" ? 1.5 : timeDuration,
      ease: "easeInOut",
      times: [0, 0.2, 0.25, 0.3, 0.4, 0.7, 0.85, 1],
      repeat: Infinity,
    },
  },
};

const num = [1,2,3]



  return (
    <div key={timeDuration} className='w-full h-full flex items-center justify-center overflow-hidden'>
      <motion.div 
      key={userCustomize.size}
       variants={Container}
       animate='animate'
       className="flex gap-2">
        {num.map((item)=>(
            <motion.div variants={Cube} key={item}>
                <motion.div 
                 key={userCustomize.radius}
                 style={{
                  background: pathName === '/' ? '#000' : userCustomize.color,
                  width:pathName === '/' ? '14px' : `${userCustomize.size}px`,
                  height:pathName === '/' ? '17px' : `${userCustomize.height}px`,
                  borderRadius: pathName === '/' ? '30%' : `${userCustomize.radius}%`
                }}

                variants={innerCube} className="w-[14px] h-[17px] rounded-md bg-black flex-none">
                  <div key={userCustomize.height}></div>
                </motion.div>
            </motion.div>
        ))
        }
      </motion.div>
    </div>
  )
}
