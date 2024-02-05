'use client'

import { motion } from 'framer-motion'

export default function AnimateBox() {
  return (
    <div className="w-full h-full  flex items-center justify-center rotate-12  p-4 relative">
      <div
        id="card_1"
        className="absolute w-[13rem] lg:w-[15rem h-[8rem] md:h-[13rem] rounded-[35px] bg-box translate-y-[-5rem] translate-x-[-2rem] flex items-center justify-center">
        <div className="w-[70px] h-[70px]  flex flex-none items-center justify-start relative">
         <motion.div 
     animate={{rotate:[0,360]}}
     transition={{
      duration:1.5 * 1.8,
      repeat:Infinity,
      repeatDelay:0,
      repeatType:'loop'
    }}
    className='w-[70px] h-[70px] flex items-center justify-start relative'>
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
            width: `${70 * 0.25}px`,
            height:`${70 * 0.25}px`
           }}
           className='w-[0.7rem] h-[0.7rem] rounded-full bg-black'></div>
        </motion.div>
       ))

       }
    </motion.div>
   
        </div>
      </div>

      <div className="absolute w-[5rem] h-[5rem] rounded-[15px] bg-box translate-y-[-7rem] translate-x-[7.5rem] flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center">
          <motion.div
            variants={Container}
            animate="animate"
            className="flex gap-2">
            {[1, 2, 3].map((item) => (
              <motion.div variants={Cube} key={item}>
                <motion.div
                  variants={innerCube}
                  className="w-[10px] h-[12px] rounded-[4px] bg-black flex-none"
                ></motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div
        id="card_3"
        className="absolute w-[8rem] h-[8rem] rounded-[25px] translate-y-[0.2rem] translate-x-[9rem] flex items-center justify-center ">
        <div className="w-full h-full flex items-center justify-center">
          <motion.svg
            className="overflow-visible origin-center"
            viewBox="0 0 25 25"
            height="20"
            width="20"
            preserveAspectRatio="xMidYMid meet">
            <motion.path
              className="track"
              fill="none"
              stroke="#1817172b"
              strokeWidth="4"
              pathLength="100"
              d="M29.76 18.72c0 7.28-3.92 13.6-9.84 16.96-2.88 1.68-6.24 2.64-9.84 2.64-3.6 0-6.88-0.96-9.76-2.64 0-7.28 3.92-13.52 9.84-16.96 2.88-1.68 6.24-2.64 9.76-2.64s6.88 0.96 9.76 2.64c5.84 3.36 9.76 9.68 9.84 16.96-2.88 1.68-6.24 2.64-9.76 2.64-3.6 0-6.88-0.96-9.84-2.64-5.84-3.36-9.76-9.68-9.76-16.96 0-7.28 3.92-13.6 9.76-16.96C25.84 5.12 29.76 11.44 29.76 18.72z"
            ></motion.path>
            <motion.path
              className="car"
              fill="none"
              strokeDasharray="15, 85"
              strokeWidth="4"
              pathLength="100"
              d="M29.76 18.72c0 7.28-3.92 13.6-9.84 16.96-2.88 1.68-6.24 2.64-9.84 2.64-3.6 0-6.88-0.96-9.76-2.64 0-7.28 3.92-13.52 9.84-16.96 2.88-1.68 6.24-2.64 9.76-2.64s6.88 0.96 9.76 2.64c5.84 3.36 9.76 9.68 9.84 16.96-2.88 1.68-6.24 2.64-9.76 2.64-3.6 0-6.88-0.96-9.84-2.64-5.84-3.36-9.76-9.68-9.76-16.96 0-7.28 3.92-13.6 9.76-16.96C25.84 5.12 29.76 11.44 29.76 18.72z"
              initial={{ stroke: "#000", strokeDashoffset: 100 }}
              animate={{ stroke: "#000", strokeDashoffset: 0 }}
              transition={{ duration: 1.3, repeat: Infinity, ease: "linear" }}
            ></motion.path>
          </motion.svg>
        </div>
      </div>

      <div className="absolute w-[6rem] h-[6rem] rounded-[15px] bg-box translate-y-[5rem] translate-x-[0.5rem] flex items-center justify-center">

      <div className="w-full h-full flex items-center justify-center">
          <motion.svg
            className=" overflow-visible origin-center"
            style={{scale:0.8}}
            height="37"
            width="37"
            viewBox="0 0 37 37"
            preserveAspectRatio="xMidYMid meet">
            <motion.path
              className="track"
              fill="none"
              strokeWidth="5"
              stroke="#1817172b"
              pathLength="100"
              d="M36.63 31.746 c0 -13.394 -7.3260000000000005 -25.16 -18.13 -31.375999999999998 C7.696 6.66 0.37 18.352 0.37 31.746 c5.328 3.108 11.544 4.8839999999999995 18.13 4.8839999999999995 S31.301999999999996 34.854 36.63 31.746z"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: 100 }}
              transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
            ></motion.path>
            <motion.path
              className="car"
              fill="none"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="15, 85"
              pathLength="100"
              d="M36.63 31.746 c0 -13.394 -7.3260000000000005 -25.16 -18.13 -31.375999999999998 C7.696 6.66 0.37 18.352 0.37 31.746 c5.328 3.108 11.544 4.8839999999999995 18.13 4.8839999999999995 S31.301999999999996 34.854 36.63 31.746z"
              initial={{ stroke: "#000", strokeDashoffset: 0 }}
              animate={{ stroke: "#000", strokeDashoffset: [0, 100] }}
              transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
            ></motion.path>
          </motion.svg>
        </div>
      </div>

      <div
        id="card_5"
        className="absolute w-[10rem] h-[10rem] rounded-[25px] translate-y-[7rem] translate-x-[-8.5rem] flex items-center justify-center"
      >
        <motion.div variants={wave} animate="show" className="flex gap-3">
          {[1, 2, 3, 4].map((item) => (
            <motion.div
              initial={{ scaleY: 0.1 }}
              variants={waveBars}
              key={item}
              className="w-[0.15rem] h-[2.4rem] bg-black rounded-2xl"
            ></motion.div>
          ))}
        </motion.div>
      </div>

      <div
        id="card_6"
        className="absolute w-[7rem] h-[7rem] rounded-[15px] bg-box translate-y-[-2.4rem] translate-x-[-12.5rem] flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center">
          <motion.svg
            animate={{
              rotate: 360,
            }}
            style={{
              scale:0.7
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="container"
            viewBox="0 0 40 40"
            height="40"
            width="40"
          >
            <motion.circle
              className="track"
              cx="20"
              cy="20"
              r="17.5"
              pathLength="100"
              strokeWidth="5px"
              fill="none"
            />
            <motion.circle
              className="car"
              cx="20"
              cy="20"
              r="17.5"
              pathLength="100"
              strokeWidth="5px"
              stroke="#000"
              strokeLinecap="round"
              fill="none"
              initial={{ strokeDasharray: "1, 200", strokeDashoffset: 0 }}
              animate={{
                strokeDasharray: ["1,150", "75,150", "75,150"],
                strokeDashoffset: [0, -25, -100],
              }}
              transition={{
                duration: 2 * 0.75,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          </motion.svg>
        </div>
      </div>
    </div>
  );
}


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
        duration: 1,
        type: "tween",
        repeat: Infinity,
      },
    },
  };
  

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
          y: [0, 0, -20, 0],
          transition: {
            duration: 1.5,
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
            duration: 1.5,
            ease: 'easeInOut',
            times: [0, 0.2, 0.25, 0.3, 0.4, 0.7, 0.85, 1],
            repeat: Infinity,
          },
        },
      };
    