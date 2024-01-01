"use client";

import React, { createContext, useContext, useState } from "react";


export  interface Custom {
    color?:string,
    size?:number,
    height?:number,
    speed?:number,
    radius?:number,
    scale?:number

}


const customizeContext = createContext<any>(null);

export default function CustomContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
   const [ userCustomize, setUserCustomize ] = useState<Custom>({
    color:'#000000',
    size:40,
    height:40,
    speed:1.5,
    radius:20,
    scale:1,
   })
  return (
    <customizeContext.Provider value={{ userCustomize , setUserCustomize}}>
        {children}
    </customizeContext.Provider>
  )
}

export function useCustom(){
    const context = useContext(customizeContext)
    if(!context){
      throw new Error('useCustom must be used within the customize context provider');
    }else{
        return context
    }

}
