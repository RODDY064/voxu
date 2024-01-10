import Link from "next/link";
import { bree } from "./fonts/font";
import Button from "./button";
import Image from "next/image";

const Contacts: Array<{ icons: string; name: string; item?: string }> = [
  {
    icons: "/icons/phone.svg",
    name: "Contact",
    item: "+233 599969735",
  },
  {
    icons: "/icons/email.svg",
    name: "Email",
    item: "adarkwagodfred@icloud.com",
  },
  {
    icons: "/icons/insta.svg",
    name: "Social Media",
    item: "Instagram",
  },
];

export default function Footer() {
  return (
    <div className="w-full min-h-screen p-5 pt-24" id="footer">
      <div className="w-full flex justify-center" >
        <div
          className="w-[100%] md:w-[90%] min-h-[32rem] max-sm:min-h-[35rem] rounded-[25px] relative flex max-sm:flex-col md:justify-between p-5 overflow-hidden"
          id="shadow">
          <div
            className={`${bree.className} font-[800] md:w-[40%] w-[100%] flex flex-col items-center md:justify-center max-sm:absolute max-sm:p-4`}>
            <div>
              <h1 className="text-lg md:text-xl my-4">
                Elevate your UI with stunning animations. Want to show some
                love?
              </h1>
              <Link href="mailto:adarkwagodfred7075@icloud.com">
                <Button word="Support" />
              </Link>
            </div>
            <div className="w-full min-h-[4rem] flex items-center justify-end">
              <h1 className="rotate-12 mr-[-40%] max-sm:pr-[50%] max-sm:pt-[15%]">
                Check out my other projects
              </h1>
            </div>
          </div>
          <div className="w-[100%] md:w-[60%] h-full  flex items-center rotate-12 px-12  p-4 relative">
            <Link
              href="https://swatter-gamma.vercel.app/"
              id="shadow_card"
              className="md:w-[40%] max-sm:hidden w-[80%] h-[50%] absolute top-8 md:h-[50%]  rounded-[35px] bg-box cursor-pointer flex items-center justify-center p-2">
              <div className="w-full h-full overflow-hidden relative rounded-[35px]">
                <Image
                  src="/images/pro_1.png"
                  fill={true}
                  className="object-cover"
                  alt="project"
                />
              </div>
            </Link>
            <Link
              href="https://melodify-eta.vercel.app/"
              id="shadow_card"
              className="md:w-[40%] w-[80%] h-[50%] md:h-[50%] absolute bottom-8 right-3 rounded-[35px] bg-box  flex items-center justify-center p-2 cursor-pointer">
              <div className="w-full h-full overflow-hidden relative rounded-[35px]">
                <Image
                  src="/images/pro_2.png"
                  fill={true}
                  className="object-cover"
                  alt="project"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-screen flex flex-col max-sm:justify-center  items-center pt-[10rem]">
        <div
          className={`${bree.className} font-[800] md:w-[70%] w-[90%] min-h-[20rem] p-4 home border border-teal-300 rounded-2xl shadow-card`}>
          <h1 className="md:text-xl text-lg">Get in touch</h1>
          <div className="my-4">
            <div className="flex flex-col gap-4 max-sm:ml-0">
              {Contacts.map((item) => (
                <div key={item.name} className="w-full flex gap-4 items-end">
                  <div className="w-12 h-12 rounded-full bg-teal-200/50 cursor-pointer flex items-center justify-center">
                    <Image
                      src={item.icons}
                      width={25}
                      height={35}
                      alt={item.name}
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-sm font-[400] ">{item.name}</h3>
                    <h3 className="text-sm ">{item.item}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full items-base">
        <h1 className={`${bree.className} text-center py-2`}>&copy;2023 VOXU</h1>
      </div>
    </div>
  );
}
