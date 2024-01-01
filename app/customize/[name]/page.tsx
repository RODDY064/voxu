// add the animation import here

import Bouncy from "@app/ui/animations/bouncy";
import Infinity_animate from "@app/ui/animations/infinity";
import LineSpinner from "@app/ui/animations/line_spinner";
import Myagi from "@app/ui/animations/myagi";
import PinWheel from "@app/ui/animations/pinwheel";
import Reuleaux from "@app/ui/animations/reuleaux";
import Ring from "@app/ui/animations/ring";
import Square from "@app/ui/animations/square";
import Squircle from "@app/ui/animations/squircle";
import TailChase from "@app/ui/animations/tailchase";
import Trefoil from "@app/ui/animations/trefoil";
import Waveform from "@app/ui/animations/waveform";







import Color from "@app/ui/customize/color";
import Height from "@app/ui/customize/height";
import Radius from "@app/ui/customize/radius";
import Size from "@app/ui/customize/size";
import SourceCopy from "@app/ui/customize/sourceCopy";
import Speed from "@app/ui/customize/speed";
import Footer from "@app/ui/footer";
import { animations } from "@app/ui/motion/screen";








export default function Customize({ params:{ name}}:{ params:any[string]}) {
  
  const animation = animations.filter((item)=>item.name === name)

  return (
    <div className="w-full min-h-screen home">
      <div
        className="w-full min-h-screen flex max-sm:flex-col items-center md:justify-center px-5
       gap-4 p-24 md:pt-24 md:pb-0 md:px-2 ">
        <div
          className="w-[100%] md:w-[55%]  h-[27rem] bg-cream shadow-sm backdrop-blur-xs 
          border border-teal-400/40  rounded-[25px] flex gap-2 flex-col justify-between p-4 py-5" >
          <div className="w-full h-full rounded-[25px] border-[1px] border-sky-300/50 p-4 shadow-card">
            <h1>{animation[0]?.name}</h1>
            <div className="w-full h-full">{animation[0]?.render}</div>
          </div>
        </div>
        <div className="w-[100%]  md:w-[40%] gap-3 flex flex-col items-center">
          <div
            className="w-full h-[20rem] bg-cream shadow-sm backdrop-blur-xs 
         border border-teal-400/40 flex items-center justify-center  rounded-[25px]  p-4">
           <div className="w-full flex flex-col  gap-3 max-sm:gap-3">
            <Color/>
            <Size size={animation[0]?.prop.weight} svg={animation[0]?.prop.svg}/>
            <Height height={animation[0]?.prop.height} />
            <Radius radius={animation[0]?.prop.radius}/>
            <Speed duration={animation[0]?.prop.duration}/>

           </div>
         </div>
          <div
            className="w-full min-h-[5rem]  p-1 bg-cream shadow-sm backdrop-blur-xs 
         border border-teal-400/40   rounded-[25px]">
          <SourceCopy name={animation[0].name} properties={animation[0].prop} />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
