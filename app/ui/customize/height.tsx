'use client'


import { useEffect } from "react"
import { Custom, useCustom } from "./customContext/customContextProvider"

export default function Height({ height }:{ height?:number}) {

   const { userCustomize , setUserCustomize} = useCustom()
   useEffect(()=>{
    setUserCustomize((prev: Custom)=>({ ...prev, height: height }));
  },[]);

  

  return (
    <div>
        <div 
          style={{
            opacity: !height ? "0.5" : "1",
            cursor: !height ? "not-allowed" : "pointer",
          }}
        className="w-full flex gap-2">
        <div className="w-[35%] h-12 p-2 flex items-center justify-center
        rounded-[15px]  border-[1px] border-white shadow-card">
          Height
         </div>
         <div className="w-[60%] h-12 p-2 flex items-center justify-between px-8
        rounded-[25px]  border-[1px] border-white shadow-card cursor-pointer">
            <div><h1>{userCustomize.height}px</h1></div>
          <input type='range' 
           min={1} 
           max={100}
           value={userCustomize.height}
           onChange={(e)=>setUserCustomize((prev:Custom)=>({...prev,height: parseFloat(e.target.value)}))}
           disabled={!height ? true : false}
            style={{
              opacity: !height ? "0.5" : "1",
              cursor: !height ? "not-allowed" : "pointer",
            }}
          className="w-[70%] h-full rounded-[25px]  cursor-pointer focus:outline-none" id="range"/>
         </div>
    </div>
    </div>
  )
}
