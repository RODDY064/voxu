'use client'


import { useEffect } from "react"
import { Custom, useCustom } from "./customContext/customContextProvider"

export default function Size({ size  , svg }:{ size?:number,svg?:boolean }) {

   const { userCustomize , setUserCustomize} = useCustom()
   useEffect(()=>{
    setUserCustomize((prev: Custom)=>({ ...prev, size: size }));
  },[]);

  

  return (
    <div>
      {svg && svg === true ?
       (<>
          <div className="w-full flex gap-2">
        <div className="w-[35%] h-12 p-2 flex items-center justify-center
        rounded-[15px]  border-[1px] border-white shadow-card">
          Scale
         </div>
         <div className="w-[60%] h-12 p-2 flex items-center justify-between px-8
        rounded-[25px]  border-[1px] border-white shadow-card cursor-pointer">
            <div><h1>{userCustomize.scale}px</h1></div>
          <input type='range' 
           min={1} 
           max={10}
           value={userCustomize.scale}
           onChange={(e)=>setUserCustomize((prev:Custom)=>({...prev,scale: parseFloat(e.target.value)}))}
          className="w-[70%] h-full rounded-[25px]  cursor-pointer focus:outline-none" id="range"/>
         </div>
    </div>
       </>):
       (<>
          <div className="w-full flex gap-2">
        <div className="w-[35%] h-12 p-2 flex items-center justify-center
        rounded-[15px]  border-[1px] border-white shadow-card">
          Width
         </div>
         <div className="w-[60%] h-12 p-2 flex items-center justify-between px-8
        rounded-[25px]  border-[1px] border-white shadow-card cursor-pointer">
            <div><h1>{userCustomize.size}px</h1></div>
          <input type='range' 
           min={1} 
           max={100}
           value={userCustomize.size}
           onChange={(e)=>setUserCustomize((prev:Custom)=>({...prev,size: parseFloat(e.target.value)}))}
          className="w-[70%] h-full rounded-[25px]  cursor-pointer focus:outline-none" id="range"/>
         </div>
        </div>
       </>)
      }
    </div>
  )
}
