import Link from "next/link";
import Bouncy from "../animations/bouncy";
import Infinity_animate from "../animations/infinity";
import Reuleaux from "../animations/reuleaux";
import Square from "../animations/square";
import Squircle from "../animations/squircle";
import Trefoil from "../animations/trefoil";
import Waveform from "../animations/waveform";
import CopyButton from "../copyButton";
import Myagi from "../animations/myagi";
import PinWheel from "../animations/pinwheel";
import Ring from "../animations/ring";
import LineSpinner from "../animations/line_spinner";
import TailChase from "../animations/tailchase";

export const animations: Array<{
  name: string;
  render: React.ReactNode;
  prop: {
    duration: number;
    weight?: number;
    height?:number,
    radius?: number;
    svg?:boolean;
  };
  source: string;
}> = [
  {
    name: "Bouncy",
    render: <Bouncy />,
    prop: { duration: 1.5, weight: 14, height:17, radius: 30 },
    source: `
    import { motion } from "framer-motion"
    
    
    
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
    
    const num = [1,2,3]
    
    export default function Bouncy() {
      return (
        <div className='w-full h-full flex items-center justify-center'>
          <motion.div 
           variants={Container}
           animate='animate'
           className="flex gap-2">
            {num.map((item)=>(
                <motion.div variants={Cube} key={item}>
                    <motion.div variants={innerCube} className="w-[14px] h-[17px] rounded-md bg-black flex-none"></motion.div>
                </motion.div>
            ))
            }
          </motion.div>
        </div>
      )
    }
    `,
  },
  {
    name: "Infinity",
    render: <Infinity_animate />,
    prop: { duration: 1.3, weight: 55, svg:true },
    source: `
    import { motion } from 'framer-motion'
    
    export default function Infinity_animate() {
      return (
        <div className='w-full h-full flex items-center justify-center'>
           <motion.svg
          className="overflow-visible origin-center"
          viewBox="0 0 55 23.1"
          height="23.1"
          width="55"
          preserveAspectRatio="xMidYMid meet" >
          <motion.path
            className="track"
            fill="none"
            stroke="#1817172b"
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
            initial={{stroke:'#000', strokeDashoffset: 100 }}
            animate={{stroke:'#000', strokeDashoffset: 0 }}
            transition={{ duration: 1.3, repeat: Infinity,ease: 'linear' }}
          />
        </motion.svg>
        </div>
      )
    }
    `,
  },
  {
    name: "Squircle",
    render: <Squircle />,
    prop: { duration: 0.9, weight: 37 , svg:true},
    source: `

    import { motion } from "framer-motion";
    
    export default function Squircle() {
      return (
        <div className="w-full h-full flex items-center justify-center">
          <motion.svg
         className=" overflow-visible origin-center"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 37 37"
          height="37"
          width="37"
          preserveAspectRatio="xMidYMid meet" >
          <motion.path
            className="track"
            fill="none"
            strokeWidth="5"
            stroke='#1817172b'
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
            initial={{stroke:'#000' , strokeDashoffset: 0 }}
            animate={{stroke:'#000' , strokeDashoffset: -100 }}
            transition={{ repeat: Infinity, duration: 0.9, ease: 'linear' }}
          ></motion.path>
        </motion.svg>
        </div>
      );
    }
    `,
  },
  {
    name: "Reuleaux",
    render: <Reuleaux />,
    prop: { duration: 0.9, weight: 37 ,svg:true },
    source: `
    import { motion } from "framer-motion";
    
    export default function Reuleaux() {
      return (
        <div className="w-full h-full flex items-center justify-center">
          <motion.svg
            className=" overflow-visible origin-center"
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
      );
    }
    `,
  },
  {
    name: "Square",
    render: <Square />,
    prop: { duration: 0.9, weight: 35, svg:true },
    source: `
    import { motion } from "framer-motion";
    
    export default function Square() {
      return (
        <div className="w-full h-full flex items-center justify-center">
          <motion.svg
            className="overflow-visible origin-center"
            viewBox="0 0 35 35"
            height="35"
            width="35"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.rect
              className="track"
              x="2.5"
              y="2.5"
              fill="none"
              stroke="#1817172b"
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
              initial={{ stroke: "#000", strokeDashoffset: 0 }}
              animate={{stroke: "#000",strokeDashoffset: -100}}
              transition={{ duration: 0.9, ease: "linear", repeat: Infinity }}
            />
          </motion.svg>
        </div>
      );
    }
    `,
  },
  {
    name: "Trefoil",
    render: <Trefoil />,
    prop: { duration: 1.3, weight: 40, svg:true },
    source: `
    import {motion} from 'framer-motion'

    export default function Trefoil() {
      return (
        <div className='w-full h-full flex items-center justify-center'>
         <motion.svg
          className="overflow-visible origin-center"
          viewBox="0 0 40 40"
          height="40"
          width="40"
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
            strokeDasharray='15, 85'
            strokeWidth="4"
            pathLength="100"
            d="M29.76 18.72c0 7.28-3.92 13.6-9.84 16.96-2.88 1.68-6.24 2.64-9.84 2.64-3.6 0-6.88-0.96-9.76-2.64 0-7.28 3.92-13.52 9.84-16.96 2.88-1.68 6.24-2.64 9.76-2.64s6.88 0.96 9.76 2.64c5.84 3.36 9.76 9.68 9.84 16.96-2.88 1.68-6.24 2.64-9.76 2.64-3.6 0-6.88-0.96-9.84-2.64-5.84-3.36-9.76-9.68-9.76-16.96 0-7.28 3.92-13.6 9.76-16.96C25.84 5.12 29.76 11.44 29.76 18.72z"
            initial={{stroke:'#000', strokeDashoffset: 100 }}
            animate={{stroke:'#000', strokeDashoffset: 0 }}
            transition={{ duration: 1.3, repeat: Infinity,ease: 'linear' }}
          ></motion.path>
        </motion.svg>
        </div>
      )
    }
    `,
  },
  {
    name: "Waveform",
    render: <Waveform />,
    prop: { duration: 1, weight: 3, height:32, radius: 10 },
    source: `

    import { motion } from "framer-motion";
    
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
    
    export default function Waveform() {
      const num = [1, 2, 3, 4];
    
      return (
        <motion.div variants={wave} animate="show" className="flex gap-3">
          {num.map((item) => (
            <motion.div
              initial={{ scaleY: 0.1 }}
              variants={waveBars}
              animate="show" 
              key={item}
              className="w-[0.25rem] h-[2.7rem] bg-black rounded-sm"
            ></motion.div>
          ))}
        </motion.div>
      );
    }
    `,
  },
  {
    name: "Myagi",
    render: <Myagi />,
    prop: { duration: 0.9, weight: 5, height:50, radius: 30 },
    source: `
    import { motion } from "framer-motion";

    export default function Myagi() {
    // variants
    const container = {
    show:{
          transition:{staggerChildren:0.075}
        }
      }
    
      const lineVariants = {
        show: {
          rotate: [0, 180],
          transition: { duration: 0.9, ease: 'easeInOut', repeat: Infinity},
        },
      };
    
      const lines =[1,0.8,0.6,0.4,0.2,0.1]

  return (
   <div className='w-full h-full flex items-center justify-center'>
     <motion.div
     variants={container}
     animate='show'
     className='flex items-center justify-center relative'>
     {lines.map((item)=>(
      <motion.div 
      variants={lineVariants}
      style={{ opacity : item}}
      transition={{ repeatType:'mirror'}}
      
       key={item} className='w-[5px] h-[50px] bg-black rounded-md absolute'></motion.div>
     ))
     }
    </motion.div>
   </div>
  )
  }`,
  },
  {
    name: "PinWheel",
    render: <PinWheel/>,
    prop: { duration: 0.9, weight: 50 , height:5, radius: 30 },
    source: `
    import { motion } from "framer-motion";

    export default function PinWheel() {
    // variants
    const container = {
    show:{
          transition:{staggerChildren:0.075}
        }
      }
    
      const lineVariants = {
        show: {
          rotate: [0, 180],
          transition: { duration: 0.9, ease: 'easeInOut', repeat: Infinity},
        },
      };
    
      const lines =[1,0.8,0.6,0.4,0.2,0.1]

  return (
   <div className='w-full h-full flex items-center justify-center'>
     <motion.div
     variants={container}
     animate='show'
     className='flex items-center justify-center relative'>
     {lines.map((item)=>(
      <motion.div 
      variants={lineVariants}
      style={{ opacity : item}}
      transition={{ repeatType:'loop'}}
      
       key={item} className='w-[50px] h-[5px] bg-black rounded-md absolute'></motion.div>
     ))
     }
    </motion.div>
   </div>
  )
  }`,
  },
  {
    name:'Ring',
    render:<Ring/>,
    prop: { duration: 2 , weight: 40, svg:true},
    source:`
    'use client'
    import { motion } from 'framer-motion'
    
    
    export default function Ring() {
      return (
       <div className="w-full h-full flex items-center justify-center">
          <motion.svg
          animate={{
            rotate:360
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType:'loop',
            ease: 'easeInOut',
          }}
          className="container"
          viewBox="0 0 40 40"
          height="40"
          width="40">
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
            stroke='#000'
            strokeLinecap='round'
            fill="none"
            initial={{ strokeDasharray: '1, 200', strokeDashoffset: 0 }}
            animate={{
              strokeDasharray: ['1,150','75,150','75,150'],
              strokeDashoffset: [0,-25,-100],
            }}
            transition={{
              duration: 2 * 0.75,
              repeat: Infinity,
              repeatType:'loop',
              ease: 'easeInOut',
            }}
          />
        </motion.svg>
       </div>
      )
    }
    `
  },
  {
    name:"LineSpinner",
    render:<LineSpinner/>,
    prop:{ duration: 2 , weight:40, height:40, radius:25},
    source:`
    "use client";
import { motion } from "framer-motion";

export default function LineSpinner() {

  return (
    <div className='w-[40px] h-[40px] flex items-center justify-start relative'>
       {[1,2,3,4,5,6,7,8,9,10,11,12].map((item)=>(
        <div
         style={{
          rotate: {360/-12*item}deg
         }}
        key={item} className='absolute top-0 w-[4px] h-[100%] left-[50%] rounded-2xl'>
          <motion.div
           animate={{
            scaleY:[0.75,1,0.75,0.75],
            opacity:[0,1,0,0]
           }}
           transition={{
            duration:2,
            repeatType:'loop',
            repeat:Infinity,
            repeatDelay:0,
            ease:'easeInOut',
            delay:2/12*item
            
           }}
           className='w-[100%] h-[22%] rounded-2xl bg-black'></motion.div>
        </div>
       ))

       }
    </div>
  );
}
    `
  },
  {
    name:'TailChase',
    render:<TailChase/>,
    prop:{ duration:1.5 , weight:40 , height:40},
    source:`
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
            width: {40 * 0.25}px,
            height:{40 * 0.25}px
           }}
           className='w-[0.7rem] h-[0.7rem] rounded-full bg-black'></div>
        </motion.div>
       ))

       }
    </motion.div>
    </div>
  )
}
`
  }
];

export default function Screen() {
  return (
    <>
      {animations.map((item) => (
        <div
          key={item.name}
          id={item.name}
          className="w-full h-[26rem] bg-cream shadow-sm backdrop-blur-xs 
         z-60 border border-teal-400/40  rounded-[25px] flex gap-2 flex-col justify-between p-4">
          <Link
            href={`customize/${item.name}`}
            className="w-full h-full home  rounded-[25px] border-[1px] border-sky-300/50 p-4 shadow-card flex flex-col cursor-pointer">
            <h1 className="mb-2">{item.name}</h1>
            <div className="w-full h-full  overflow-hidden rounded-lg">
              {item.render}
            </div>
          </Link>
          <div
            className="w-full h-24 bg-gray-100/20 rounded-[25px] p-4 border
          border-black/10 shadow-card flex items-center justify-center">
            <CopyButton source={item.source} />
          </div>
        </div>
      ))}
    </>
  );
}
