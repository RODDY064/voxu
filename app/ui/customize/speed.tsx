"use client";

import { useEffect } from "react";
import { Custom, useCustom } from "./customContext/customContextProvider";


export default function Speed({ duration }: { duration?: number }) {
  const { userCustomize, setUserCustomize } = useCustom();
  
   useEffect(()=>{
     setUserCustomize((prev: Custom)=>({ ...prev, speed: duration }));
   },[]);


  return (
    <div className="w-full flex gap-2">
      <div
        className="w-[35%] h-12 p-2 flex items-center justify-center
    rounded-[15px]  border-[1px] border-white shadow-card">
        Speed
      </div>
      <div
        className="w-[60%] h-12 p-2 flex items-center justify-between px-8
    rounded-[25px]  border-[1px] border-white shadow-card cursor-pointer">
        <div>
          <h1>{userCustomize.speed}s</h1>
        </div>
        <input
          type="range"
          min={0.1}
          max={10}
          step={0.1}
          value={userCustomize.speed}
          onChange={(e) =>
            setUserCustomize((prev: Custom) => ({
              ...prev,speed: e.target.value,
            }))
          }
          className="w-[68%] h-full rounded-[25px] bg-transparent  cursor-pointer focus:outline-none"
          id="range"
        />
      </div>
    </div>
  );
}
