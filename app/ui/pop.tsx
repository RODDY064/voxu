"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Func {
  (action: string): void;
}



const popColorPallet: string[] = [
  "rgb(207, 109, 243, 0.2)",
  "rgb(233, 89, 12, 0.2)",
  "rgb(120, 91, 236, 0.2)",
  "rgb(131, 204, 20, 0.2)",
];

const popLinks:Array<{name:string,id:string}> = [
 {
  name:'loaders animations',
  id:'loaders'
 },
 {
  name:'button animations',
  id:'button'
 },
 {
  name:'ui/ux animations',
  id:'ui/ux'
 },
 {
  name:'Contacts',
  id:'footer'
 }
]


export default function Pop({
  pop,
  nav,
  handleHover,
}: {
  pop?: boolean;
  nav?: boolean;
  handleHover: Func;
}) {
  const controls = useAnimation();
  const [count, setCount] = useState<number>(0);
  const [colors, setColors] = useState<string>(popColorPallet[0])

  useEffect(() => {
    setTimeout(() => {
      if (count >= 3) {
        setCount(0);
      } else {
        const newCount = count + 1;
        setCount(newCount);
      }
    }, 10000);

    setColors(popColorPallet[count])
  }, [count]);


  useEffect(() => {
    controls.start(pop ? "show" : "hide");
  }, [pop]);


  const handleScrollIntoView = (id:string)=>{
    const scrollObj = document.getElementById(id)
    scrollObj?.scrollIntoView({
      behavior:'smooth'
    })
  }


  return (
    <motion.div
      variants={popVariants}
      animate={controls}
      initial="hide"
       style={{ background: colors}}
      className={`absolute w-[12rem] h-[15rem] rounded-[20px] flex flex-col items-center 
                  py-2 px-4 z-60  backdrop-blur-xl  border border-white 
                  ${nav ? "ml-[-8rem] mt-[21rem]" : "ml-[-17rem] mt-[15rem]"}`}>
      <div className="w-full flex justify-end">
        <div onClick={() => handleHover("leave")} className="cursor-pointer">
          <Image src='/icons/x.svg' width={25} height={25} alt="cancel"/>
        </div>
      </div>
      <div className="text-sm">
         <ul className="list-disc">
          {popLinks.map((item)=>(
            <li   
            key={item.name}  
            onClick={()=>handleScrollIntoView(item.id)}  
            className="cursor-pointer">{item.name}</li>
          ))
          }
         </ul>
        </div>
    </motion.div>
  );
}

const popVariants = {
  show: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 700,
      damping: 90,
    },
  },
  hide: {
    scale: 0,
  },
};
