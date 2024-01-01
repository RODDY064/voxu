"use client";

import { useAnimation } from "framer-motion";
import Blob from "./blob";
import { useEffect, useState } from "react";
import { useGradientColor } from "./gradientContext";


const pallet: Array<{
  theme: { first: string; second: string };
  blob: {
    first: string;
    second: string;
    third: string;
    fourth: string;
    fifth: string;
  };
}> = [
  {
    theme: {
      first: "rgba(255,30,233,0.478)",
      second: "#cf6df3",
    },
    blob: {
      first: "#592BF1",
      second: "#CF6DF3",
      third: "rgba(255,30,233,0.7)",
      fourth: "#A83CEA",
      fifth: "#A83CEA",
    },
  },
  {
    theme:{
      first:'#ea580c',
      second:'#facc15'
    },
    blob:{
      first:'#facc15',
      second:'#ea580c',
      third:'#f59e0b',
      fourth:'#ea580c',
      fifth:'#ea580c'
    }
  },
  {
    theme:{
      first:'#7759EC',
      second:'#5eead4'
    },
    blob:{
      first:'#5eead4',
      second:'#7759EC',
      third:'#A96DFC',
      fourth:'#5eead4',
      fifth:'#5eead4'
    }
  },
  {
    theme:{
      first:'#84cc16',
      second:'#7dd3fc'
    },
    blob:{
      first:'#d9f99d',
      second:'#84cc16',
      third:'#a3e635',
      fourth:'#7dd3fc',
      fifth:'#4ade80'
    }
  }
];

const gradient:string[] = [
  'from-pink-400 to-violet-500',
  'from-orange-400 to-yellow-300',
  'from-teal-400 to-violet-400',
  'from-green-400 to-cyan-400',
]


export default function Theme() {
  const [count, setCount] = useState<number>(0);
  const [colors , setColors ] = useState(pallet[0])
  const controls = useAnimation()
  const { setGradientColor} = useGradientColor()
  

  useEffect(() => {
    setTimeout(() => {
      if (count >= 3) {
        setCount(0);
      } else {
        const newCount = count + 1;
        setCount(newCount);
      }
    }, 10000);

    setColors(pallet[count])
    setGradientColor(gradient[count])

    controls.start({
      opacity:[1,0,1],
      transition:{
        duration:0.1,
        type:'tween'
      }
    })
  }, [count]);

  const gradientStyle = {
    fill: "url(#myGradient)",
    fillOpacity: 0.6,
  };
  return (
    <div  className="w-full h-screen fixed flex justify-end md:items-end">
      <div className="w-full flex justify-end md:items-end">
        <div className="w-full  absolute hidden md:flex">
          <div className="w-full ml-[-2%]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <defs>
                <linearGradient
                  id="myGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    style={{
                      stopColor: colors.theme.first,
                      stopOpacity: 0.7,
                    }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: colors.theme.second, stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
              <path
                style={gradientStyle}
                d="M0,32L21.8,48C43.6,64,87,96,131,122.7C174.5,149,218,171,262,165.3C305.5,160,349,128,393,106.7C436.4,85,480,75,524,101.3C567.3,128,611,192,655,234.7C698.2,277,742,299,785,256C829.1,213,873,107,916,80C960,53,1004,107,1047,144C1090.9,181,1135,203,1178,213.3C1221.8,224,1265,224,1309,224C1352.7,224,1396,224,1418,224L1440,224L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320Z"
              ></path>
            </svg>
          </div>
          <div className="absolute right-0 w-[20rem] h-[10rem] bg-bg_white bottom-0 rounded-bl-[70%]"></div>
        </div>
        <div
          className="w-[70%] h-[30vh]  md:w-[45%] md:h-[85vh] relative z-20"
          id="theme">
          <Blob color={colors.blob} />
        </div>
      </div>
    </div>
  );
}

/*
first [rgba(255,30,233,0.478),"#cf6df3 , 0.5]
second [#ea580c,#facc15,0.6]
third [#7759EC,#F87CE6,0.5]
fourth[ #fef08a,0.5]

*/
