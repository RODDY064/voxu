"use client";


import Image from "next/image";
import { bree } from "./fonts/font";
import Link from "next/link";
import {  useRef, useState } from "react";
import {
  useAnimation,
  useMotionValueEvent,
  useScroll,
  motion,
} from "framer-motion";
import Pop from "./pop";

export default function Nav() {
  const ref = useRef(null);
  const controls = useAnimation();
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const [isAnimating, setIsAnimating] = useState<{nav?:boolean,pop?:boolean}>({nav:false,pop:false});

  useMotionValueEvent(scrollY, "change", (latest) => {
    switch (true) {
      case latest > 100:
        setIsAnimating((prev)=>({...prev,nav:true}));
        break;
      case latest < 100:
        setIsAnimating((prev)=>({...prev,nav:false}));
    }

    controls.start(isAnimating.nav ? "start" : "stop");
  });

  

  const  handleHover = (action:string)=>{
     if(action === 'enter'){
      setIsAnimating((prev)=>({...prev,pop:true}))
   
     }else{
      setIsAnimating((prev)=>({...prev,pop:false}))
      
     }

  }

   const handleScrollIntoView =()=>{
     const loaders = document.getElementById('Square')

     loaders?.scrollIntoView({
      behavior:'smooth',
      block: "end",
     })
   }
 


  return (
    <div className="w-full flex justify-center  items-center fixed z-50">
      <motion.div
        variants={nav_animate}
        initial={{ width :'100%'}}
        animate={controls}
        ref={ref}
        className={`${
          bree.className
        } w-full p-4 px-5 flex justify-between max-sm:items-center
       ${
         isAnimating.nav
           ? "home rounded-[20px] border border-teal-400/40 m-2 shadow-sm"
           : ""
       }`}>
        <div  onClick={handleScrollIntoView} className="max-sm:hidden">
         <h2 className="text-lg font-medium cursor-pointer">Animations</h2>
        </div>
        <Link   href="/" className="w-[10rem] h-12 flex items-center justify-center">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={130}
            height={130}
            className="object-cover cursor-pointer"
          />
        </Link>
        <div className="flex gap-[1px] justify-center items-center relative">
          <h2
           onClick={()=>handleHover('enter')}
           className="text-lg font-medium cursor-pointer flex gap-[1px] items-center justify-center">
            Menu
            <span>
              <Image src="/icons/menu.svg" width={20} height={20} alt="menu" />
            </span>
          </h2>
         <Pop pop={isAnimating.pop} nav={isAnimating.nav} handleHover={handleHover}/>
        </div>
      </motion.div>
    </div>
  );
}

const nav_animate = {
  start: {
    width: "70%",
    height: 70,
    transition: {
      type: "tween",
      duration: 0.4,
    },
  },
  stop: {
    width: "100%",
    height: "auto",
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
};


