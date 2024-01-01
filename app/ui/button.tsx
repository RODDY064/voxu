'use client'
import { motion } from "framer-motion"
import { bree } from "./fonts/font"

export default function Button({word , color}:{word:string, color?:string}) {
  return (
    <motion.div
     whileHover={{scale:1.1}}
     className={`${bree.className}  w-[12rem] h-12 p-2 flex items-center justify-center bg-black rounded-[12px] cursor-pointer`}>
       <h2 className={`text-lg font-[800]`}>
        <span className={`${color ? color:'text-white'}`}>{word}</span>
        </h2>
    </motion.div>
  )
}
