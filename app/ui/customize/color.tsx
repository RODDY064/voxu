'use client'

import { Custom, useCustom } from "./customContext/customContextProvider"




export default function Color() {

  const { userCustomize, setUserCustomize } = useCustom()

  return (
    <div className="w-full flex gap-2">
        <div className="w-[35%] h-12 p-2 flex items-center justify-center
        rounded-[15px]  border-[1px] border-white shadow-card">
          Color
         </div>
         <div className="w-[60%] h-12 p-2 flex items-center justify-center
        rounded-[25px]  border-[1px] border-white shadow-card cursor-pointer">
          <input value={userCustomize.color} onChange={(e)=>setUserCustomize((prev:Custom)=>({...prev,color:e.target.value}))} type='color' className="w-[80%] h-full rounded-[15px] bg-transparent overflow-hidden cursor-pointer focus:outline-none"/>
         </div>
    </div>
  )
}
