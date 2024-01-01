import Image from "next/image";
import { bree } from "./fonts/font";

export default function Start() {
  return (
    <div className="w-full h-screen relative py-4 flex justify-center">
      <div
        className="w-[90%] sticky h-[40rem] md:h-[30rem]  rounded-[25px] flex max-sm:flex-col justify-between p-5 px-8 overflow-hidden"
        id="shadow">
        <div
          className={`${bree.className} md:text-2xl text-xl font-[800] md:w-[50%] w-[100%] rotate-[8deg] md:rotate-[-8deg] pt-[15%] px-4 md:px-12`}>
          <h1>Just Copy and Paste</h1>
          <h3 className="text-sm  font-[400] my-4">
            Say goodbye to tedious coding for eye-catching loading animations.
            We believe in making aesthetics accessible to everyone. Elevate your
            UI without the need for a design degree – just copy and paste, and
            watch the magic unfold.
          </h3>
        </div>
        <div className="md:w-[50%] w-[100%] h-[50%] md:h-[100%]  flex items-center justify-center  rotate-12">
          <div
            id="shadow_card"
            className="md:w-[69%] w-[90%] h-[80%] md:h-[75%]  rounded-[35px] bg-box  
        flex items-center justify-center p-4">
            <div className="w-full h-full relative rounded-[35px] overflow-hidden">
              <Image
                src="/images/doc.png"
                fill={true}
                alt="info"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
