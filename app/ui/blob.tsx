"use client";
import { motion } from "framer-motion";

interface blob {
  first: string;
  second: string;
  third: string;
  fourth: string;
  fifth: string;
}

export default function Blob({ color }:{ color: blob }) {
  const { first, second, third, fourth, fifth } = color;

  return (
    <motion.div
      animate={{ rotate: [0, 360] }}
      transition={{
        duration: 100,
        repeat: Infinity,
        repeatType: "loop",
        type: "tween",
        ease: "linear",
      }}
      className="w-full h-full relative flex items-center justify-center"
    >
      <motion.div
        animate={{
          y: [-10, 10, -10, 0], // Create a bouncing effect
          x: [30, 0, 30, 0, -30],
        }}
        transition={{
          y: {
            duration: 32,
            repeat: Infinity,
            repeatType: "reverse", // Bounce back and forth
          },
          x: {
            duration: 32,
            repeat: Infinity,
            repeatType: "reverse", // Move back and forth
          },
        }}
        className="w-[70%] h-[70%] absolute"
        id="red first">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill={first}
            d="M37.3,-65.9C47.9,-58.6,55.5,-47.5,61.8,-35.9C68.1,-24.3,73.1,-12.1,73.5,0.2C73.9,12.6,69.8,25.2,62.6,35.4C55.5,45.6,45.4,53.4,34.5,57.9C23.5,62.4,11.8,63.7,0.6,62.7C-10.6,61.8,-21.3,58.5,-31.9,53.8C-42.5,49.1,-53,42.9,-62.9,33.7C-72.8,24.5,-82.1,12.2,-83.9,-1C-85.7,-14.3,-80,-28.6,-71.1,-39.5C-62.1,-50.4,-50,-57.9,-37.6,-64.2C-25.2,-70.5,-12.6,-75.5,0.4,-76.2C13.4,-76.9,26.8,-73.3,37.3,-65.9Z"
            transform="translate(100 100)"
          />
        </svg>
      </motion.div>
      <motion.div
        animate={{
          y: [-30, 30, -30, 0], // Create a bouncing effect
          x: [70, 0, 70, 0, -70],
        }}
        transition={{
          y: {
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse", // Bounce back and forth
          },
          x: {
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse", // Move back and forth
          },
        }}
        className="w-[70%] h-[70%] absolute mt-[-75%] z-30"
        id="orange fifth"
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill={fifth}
            d="M47.6,-67.3C62,-64.8,74.3,-52.2,77.2,-37.7C80.1,-23.2,73.5,-6.8,66.9,6.7C60.4,20.1,53.9,30.6,45.2,37.3C36.5,44,25.6,46.9,13.1,55.6C0.6,64.4,-13.4,78.9,-27.2,80.4C-40.9,81.9,-54.5,70.4,-61.6,56.5C-68.7,42.6,-69.4,26.4,-71.6,10.3C-73.9,-5.7,-77.7,-21.5,-74.9,-36.9C-72,-52.3,-62.5,-67.3,-48.9,-70.3C-35.3,-73.2,-17.6,-64,-0.5,-63.2C16.6,-62.3,33.1,-69.8,47.6,-67.3Z"
            transform="translate(100 100)"
          />
        </svg>
      </motion.div>
      <motion.div
        animate={{
          y: [-50, 50, -50, 0], // Create a bouncing effect
          x: [0, 20, 0, -20, 0], // Add horizontal movement
          scale: [1, 1.2, 1], // Simulate a breathing effect
        }}
        transition={{
          y: {
            duration: 45,
            repeat: Infinity,
            repeatType: "reverse", // Bounce back and forth
          },
          x: {
            duration: 45,
            repeat: Infinity,
            repeatType: "reverse", // Move back and forth
          },
          scale: {
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse", // Bounce back and forth
          },
        }}
        className="w-[70%] h-[70%] absolute mb-[-50%] ml-[15%] "
        id="blue second"
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill={second}
            d="M41.3,-71.9C53.5,-64.5,63.4,-53.4,69.8,-40.8C76.2,-28.2,79,-14.1,78.8,-0.1C78.6,13.8,75.2,27.7,67.9,38.5C60.5,49.4,49.1,57.3,37.1,64.6C25.1,72,12.5,78.8,-1.6,81.6C-15.7,84.4,-31.5,83.1,-43.9,76C-56.3,68.9,-65.5,56,-71,42.3C-76.6,28.7,-78.5,14.4,-80.3,-1C-82.1,-16.5,-83.8,-32.9,-77.3,-44.9C-70.8,-56.8,-56.1,-64.2,-41.8,-70.5C-27.6,-76.8,-13.8,-81.8,0.4,-82.5C14.5,-83.1,29.1,-79.4,41.3,-71.9Z"
            transform="translate(100 100)"
          />
        </svg>
      </motion.div>
      <motion.div
        animate={{
          y: [-140, 140, -140, 0], // Create a bouncing effect
          x: [120, 0, 120, 0, -120],
        }}
        transition={{
          y: {
            duration: 23,
            repeat: Infinity,
            repeatType: "reverse", // Bounce back and forth
          },
          x: {
            duration: 23,
            repeat: Infinity,
            repeatType: "reverse", // Move back and forth
          },
        }}
        className="absolute w-[70%] h-[70%] mb-[-30%] z-20"
        id="white third"
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill={third}
            d="M41.3,-71.9C53.5,-64.5,63.4,-53.4,69.8,-40.8C76.2,-28.2,79,-14.1,78.8,-0.1C78.6,13.8,75.2,27.7,67.9,38.5C60.5,49.4,49.1,57.3,37.1,64.6C25.1,72,12.5,78.8,-1.6,81.6C-15.7,84.4,-31.5,83.1,-43.9,76C-56.3,68.9,-65.5,56,-71,42.3C-76.6,28.7,-78.5,14.4,-80.3,-1C-82.1,-16.5,-83.8,-32.9,-77.3,-44.9C-70.8,-56.8,-56.1,-64.2,-41.8,-70.5C-27.6,-76.8,-13.8,-81.8,0.4,-82.5C14.5,-83.1,29.1,-79.4,41.3,-71.9Z"
            transform="translate(100 100)"
          />
        </svg>
      </motion.div>
      <motion.div
        animate={{
          y: [-45, 45, -45, 0], // Create a bouncing effect
          x: [90, 0, 90, 0, -90],
        }}
        transition={{
          y: {
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse", // Bounce back and forth
          },
          x: {
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse", // Move back and forth
          },
        }}
        className="w-[70%] h-[70%] absolute"
        id="white blue fourth"
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill={fourth}
            d="M39.7,-70.5C50.5,-62.5,57.6,-50,66.8,-37.4C76,-24.9,87.3,-12.5,90.2,1.7C93.1,15.8,87.7,31.6,76.7,41.1C65.8,50.6,49.3,53.8,35.6,59.3C21.9,64.9,11,72.8,-0.6,74C-12.3,75.1,-24.5,69.4,-36,62.5C-47.4,55.7,-58,47.7,-64.2,37C-70.4,26.4,-72.1,13.2,-70.9,0.7C-69.7,-11.9,-65.7,-23.8,-60,-35.1C-54.2,-46.4,-46.7,-57.1,-36.4,-65.3C-26.1,-73.5,-13.1,-79.2,0.7,-80.4C14.5,-81.6,28.9,-78.4,39.7,-70.5Z"
            transform="translate(100 100)"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}

/*
red=[#592BF1,#facc15,#5eead4]
blue=[#CF6DF3,#ea580c,#7759EC]
white=[rgba(255,30,233,0.7),#f59e0b,#A96DFC]
white blue["#A83CEA,#ea580c,#5eead4]
orange = [#A83CEA,#ea580c,#F87CE6]

*/
