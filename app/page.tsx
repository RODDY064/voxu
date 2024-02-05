import Examples from "./ui/motion/examples";
import Button from "./ui/button";
import { bree } from "./ui/fonts/font";
import GradientText from "./ui/gradientText";
import AnimateBox from "./ui/animateBox";
import Start from "./ui/start";
import Footer from "./ui/footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen home">
      <div className="w-full h-screen flex items-center justify-center pt-12">
        <div className="w-[90%] h-[30rem]  box rounded-[16px] border border-teal-400/20 p-3 md:p-8 pt-12  md:pt-[8rem] flex max-sm:flex-col justify-between">
         <div className="md:w-[60%] lg:w-[50%] w-[100%]">
         <h1 className={`${bree.className} md:text-xl font-[800]`}>
            Welcome to a world of seamless interactions and stunning visuals.{" "}
             Explore our collection of
            <GradientText/>
            crafted to enhance user engagement and elevate your digital
            experiences
          </h1>
          <div className="my-14">
            <Button word="Explore Below" 
            color="bg-gradient-to-r from-pink-400 via-white to-teal-400  bg-clip-text text-transparent" />
          </div>
         </div>
         <div className="md:w-[40%] lg:w-[50%] w-[100%]  max-sm:hidden ">
          <AnimateBox />
         </div>
        </div>
        
      </div>
        <Start/>
        <Examples/>
        <Footer/>
    </main>
  );
}
