export  function sourceFunc({ userCustomize , source }:{ userCustomize:any,source:string}) {

  /* add the source code and the name of the animation in the sourceCode array 
   and add the userCustomize to its corresponding value i.e 
    userCustomize.color = color of the animation 
    userCustomize.speed = duration of the animation
    userCustomize.size  = width and height of the animation
  */


  const sourceCode:Array<{name:string , code:string}> = [{
    name:'Bouncy',
    code:`
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
            duration: ${userCustomize.speed},
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
            duration: ${userCustomize.speed},
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
                    <motion.div 
                     style={{ 
                      background: ${userCustomize.color},
                      borderRadius: ${userCustomize.radius}%,
                    }}
                    variants={innerCube} className="w-[${userCustomize.size}px] h-[${userCustomize.height}px] rounded-md  flex-none"></motion.div>
                </motion.div>
            ))
            }
          </motion.div>
        </div>
      )
    }
    `
  },
  {
   name:'Infinity',
   code:`
   import { motion } from 'framer-motion'
    
   export default function Infinity_animate() {
     return (
       <div className='w-full h-full flex items-center justify-center'>
          <motion.svg
         className="overflow-visible origin-center"
         style={{scale:${userCustomize.scale}}}
         viewBox="0 0 55 23.1"
         height="23.1"
         width="55"
         preserveAspectRatio="xMidYMid meet" >
         <motion.path
           className="track"
           fill="none"
           strokeOpacity={0.2}
           stroke=${userCustomize.color}
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
           initial={{stroke: "${userCustomize.color}", strokeDashoffset: 100 }}
           animate={{stroke: "${userCustomize.color}", strokeDashoffset: 0 }}
           transition={{ duration: ${userCustomize.speed}, repeat: Infinity,ease: 'linear' }}
         />
       </motion.svg>
       </div>
     )
   }`
  },
  {
    name:'Squircle',
    code:`
    import { motion } from "framer-motion";
    
    export default function Squircle() {
      return (
        <div className="w-full h-full flex items-center justify-center">
          <motion.svg
         className=" overflow-visible origin-center"
         style={{scale:${userCustomize.scale}}}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 37 37"
          height="37"
          width="37"
          preserveAspectRatio="xMidYMid meet" >
          <motion.path
            className="track"
            fill="none"
            strokeWidth="5"
            strokeOpacity={0.2}
            stroke=${userCustomize.color}
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
            initial={{stroke:'${userCustomize.color}' , strokeDashoffset: 0 }}
            animate={{stroke:'${userCustomize.color}' , strokeDashoffset: -100 }}
            transition={{ repeat: Infinity, duration: ${userCustomize.speed}, ease: 'linear' }}
          ></motion.path>
        </motion.svg>
        </div>
      );
    }`
  },{
    name:'Reuleaux',
    code:`  
  import { motion } from "framer-motion";
    
    export default function Reuleaux() {
      return (
        <div className="w-full h-full flex items-center justify-center">
          <motion.svg
            className=" overflow-visible origin-center"
            style={{scale:${userCustomize.scale}}}
            height="37"
            width="37"
            viewBox="0 0 37 37"
            preserveAspectRatio="xMidYMid meet">
            <motion.path
              className="track"
              fill="none"
              strokeWidth="5"
              strokeOpacity={0.2}
              stroke=${userCustomize.color}
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
              initial={{ stroke: "${userCustomize.color}", strokeDashoffset: 0 }}
              animate={{ stroke: "${userCustomize.color}", strokeDashoffset: [0, 100] }}
              transition={{ duration: ${userCustomize.speed}, repeat: Infinity, ease: "linear" }}
            ></motion.path>
          </motion.svg>
        </div>
      );
    }`
  },{
    name:'Square',
    code:` 
    import { motion } from "framer-motion";
    
    export default function Square() {
      return (
        <div className="w-full h-full flex items-center justify-center">
          <motion.svg
            className="overflow-visible origin-center"
            style={{scale:${userCustomize.scale}}}
            viewBox="0 0 35 35"
            height="35"
            width="35"
            xmlns="http://www.w3.org/2000/svg">
            <motion.rect
              className="track"
              x="2.5"
              y="2.5"
              fill="none"
              strokeOpacity={0.2}
              stroke=${userCustomize.color}
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
              initial={{ stroke: "${userCustomize.color}", strokeDashoffset: 0 }}
              animate={{stroke: "${userCustomize.color}",strokeDashoffset: -100}}
              transition={{ duration: ${userCustomize.speed}, ease: "linear", repeat: Infinity }}
            />
          </motion.svg>
        </div>
      );
    }`
  },
  {
    name:'Trefoil',
    code:`
    import {motion} from 'framer-motion'

    export default function Trefoil() {
      return (
        <div className='w-full h-full flex items-center justify-center'>
         <motion.svg
          className="overflow-visible origin-center"
          style={{scale:${userCustomize.scale}}}
          viewBox="0 0 40 40"
          height="40"
          width="40"
          preserveAspectRatio="xMidYMid meet">
          <motion.path
            className="track"
            fill="none"
            strokeOpacity={0.2}
            stroke=${userCustomize.color}
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
            initial={{stroke:'${userCustomize.color}', strokeDashoffset: 100 }}
            animate={{stroke:'${userCustomize.color}', strokeDashoffset: 0 }}
            transition={{ duration: ${userCustomize.speed}, repeat: Infinity,ease: 'linear' }}
          ></motion.path>
        </motion.svg>
        </div>
      )
    }`
  },
  {
    name:'Waveform',
    code:`
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
          duration: ${userCustomize.speed},
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
              style={{ 
                background: ${userCustomize.color},
                borderRadius: ${userCustomize.radius}%,
              }}
              className="w-[${userCustomize.size}px] h-[${userCustomize.height}px] rounded-sm"
            ></motion.div>
          ))}
        </motion.div>
      );
    }`
  },
  {
    name:'Myagi',
    code:`
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
              transition: { duration: ${userCustomize.speed},, ease: 'easeInOut', repeat: Infinity},
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
          style={{ opacity : item ,
            background: ${userCustomize.color},
            borderRadius: ${userCustomize.radius}%
          }}
          transition={{ repeatType:'mirror'}}
               
           key={item} className='w-[${userCustomize.size}}px] h-[${userCustomize.height}px] bg-black rounded-md absolute'></motion.div>
         ))
         }
        </motion.div>
       </div>
      )
    }`
  },
  {
    name:'PinWheel',
    code:`
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
              transition: { duration: ${userCustomize.speed},, ease: 'easeInOut', repeat: Infinity},
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
          style={{ opacity : item ,
            background: ${userCustomize.color},
            borderRadius: ${userCustomize.radius}%
          }}
          transition={{ repeatType:'mirror'}}
               
           key={item} className='w-[${userCustomize.size}}px] h-[${userCustomize.height}px] bg-black rounded-md absolute'></motion.div>
         ))
         }
        </motion.div>
       </div>
      )
    }`
  },
  {
    name:'Ring',
    code:`
    'use client'
import { motion } from 'framer-motion'


export default function Ring() {
  return (
   <div className="w-full h-full flex items-center justify-center">
      <motion.svg
      animate={{
        rotate:360
      }}
      style={{scale:${userCustomize.scale}}}
      transition={{
        duration: ${userCustomize.speed},
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
        stroke= '${userCustomize.color}'
        strokeLinecap='round'
        fill="none"
        initial={{ strokeDasharray: '1, 200', strokeDashoffset: 0 }}
        animate={{
          strokeDasharray: ['1,150','75,150','75,150'],
          strokeDashoffset: [0,-25,-100],
        }}
        transition={{
          duration: ${userCustomize.speed * 0.75},
          repeat: Infinity,
          repeatType:'loop',
          ease: 'easeInOut',
        }}
      />
    </motion.svg>
   </div>
  )
}
`},{
    name:"LineSpinner",
    code:``

  },
  {
    name:'TailChase',
    code:``
  }
]
  
  const NameCode = sourceCode.filter((item)=>item.name.toLocaleLowerCase() === source.toLocaleLowerCase())

  return NameCode[0].code
}