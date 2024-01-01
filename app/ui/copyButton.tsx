"use client";

import Image from "next/image";
import { bree } from "./fonts/font";
import { useEffect, useState } from "react";

export default function CopyButton({ source }: { source: string }) {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  async function copyToClipboard(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch (err) {
      setIsCopied(false);
    }
  }

  useEffect(() => {
    function TimeUp() {
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }

    TimeUp();
  }, [isCopied]);

  return (
    <div
      onClick={() => copyToClipboard(source)}
      className="w-[15rem] h-12 p-2 rounded-[20px] bg-black text-white flex  gap-1
    items-center justify-center cursor-pointer" >
      <h3 className={`${bree.className} font-[800]`}>
        <span className="bg-gradient-to-r from-pink-400 via-white to-teal-400  bg-clip-text text-transparent">
          Copy
        </span>
      </h3>
      <div>
        {isCopied ? (
          <>
            <Image src="/icons/check.svg" width={20} height={20} alt="check" />
          </>
        ) : (
          <>
            <Image src="/icons/copy.svg" width={20} height={20} alt="copy" />
          </>
        )}
      </div>
    </div>
  );
}
