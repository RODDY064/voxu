'use client'

import { useState, useEffect } from "react"
import { bree } from "../fonts/font"
import Image from "next/image";
import { useCustom, Custom } from "./customContext/customContextProvider";
import { sourceFunc } from "./source";

interface Prop {
  duration: number;
  weight?: number;
  height?:number,
  radius?: number;
  svg?:boolean
}


export default function SourceCopy({name , properties}:{name:string , properties:Prop}) {
  const { userCustomize, setUserCustomize } = useCustom()

  const [isAction, setIsAction] = useState<{ copied: boolean; reset: boolean }>(
    { copied: false, reset: false }
  );



  async function copyToClipboard(text: any) {
    try {
      await navigator.clipboard.writeText(text);
      setIsAction((prev)=>({...prev,copied:true}));
    } catch (err) {
      setIsAction((prev)=>({...prev,copied:false}));
    }
  }

  useEffect(() => {
    function TimeUp() {
      setTimeout(() => {
        setIsAction((prev)=>({...prev,
          copied:false,
          reset: false,
        }));
      }, 2000);
    }

    TimeUp();
  }, [isAction.copied]);

  useEffect(() => {
    function TimeUp() {
      setTimeout(() => {
        setIsAction((prev)=>({...prev,
          reset: false,
        }));
      }, 2000);
    }

    TimeUp();
  }, [isAction.reset]);



  const handleReset = ()=>{
    setUserCustomize((prev: Custom)=>({ ...prev, 
      color:'#000000',
      speed:properties.duration,
      size: properties.weight,
      height: properties.height,
      radius:properties.radius,
      scale:1,
    }));
    setIsAction((prev)=>({...prev,reset:true}));
  }
  


  return (
    <div className={`${bree.className} w-full h-full flex max-sm:flex-col items-center  justify-center p-5 gap-4`}>
      <div 
      onClick={()=>{copyToClipboard(sourceFunc({userCustomize:userCustomize , source:name}))}}
      className="w-[80%] md:w-[45%] h-12 p-2 flex items-center justify-center gap-[4px] bg-black rounded-2xl text-rose-400 cursor-pointer">
      <h3 className="font-[800]">
        <span className="bg-gradient-to-r from-pink-400 via-white to-teal-400  bg-clip-text text-transparent">
          Copy
        </span>
      </h3>
      <div>
        {isAction.copied ? (<><Image src="/icons/check.svg" width={20} height={20} alt="check" /></>) 
        : (<><Image src="/icons/copy.svg" width={20} height={20} alt="copy" /></>)}
      </div>
      </div>
      <div 
       onClick={handleReset}
      className="w-[80%] md:w-[45%] h-12 p-2 flex items-center justify-center gap-[4px] bg-black rounded-2xl text-white cursor-pointer">
      <h3 className="font-[800]">
        <span className="bg-gradient-to-r from-pink-400 via-white to-teal-400  bg-clip-text text-transparent">
          Default
        </span>
      </h3>
      {isAction.reset ? (<><Image src="/icons/check.svg" width={20} height={20} alt="check" /></>) 
      : (<><Image src="/icons/reset.svg" width={20} height={20} alt="reset" /></>)}
      </div>
    </div>
  )
}
