"use client";
import { useEffect } from "react";
import { Custom, useCustom } from "./customContext/customContextProvider";

export default function Radius({ radius }: { radius?: number }) {
  const { userCustomize, setUserCustomize } = useCustom();

  useEffect(() => {
    setUserCustomize((prev: Custom) => ({ ...prev, radius: radius }));
  }, []);

  return (
    <div>
      <div 
       style={{
        opacity: !radius ? "0.5" : "1",
        cursor: !radius ? "not-allowed" : "pointer",
      }}
      className="w-full flex gap-2">
        <div
          className="w-[35%] h-12 p-2 flex items-center justify-center
    rounded-[15px]  border-[1px] border-white shadow-card">
          Radius
        </div>
        <div
          className="w-[60%] h-12 p-2 flex items-center justify-between px-8
    rounded-[25px]  border-[1px] border-white shadow-card">
          <div>
            <h1>{userCustomize.radius}%</h1>
          </div>
          <input
            type="range"
            min={1}
            max={100}
            key={userCustomize.radius}
            value={userCustomize.radius}
            onChange={(e) =>
              setUserCustomize((prev: Custom) => ({
                ...prev,
                radius: parseFloat(e.target.value),
              }))
            }
            disabled={!radius ? true : false}
            style={{
              opacity: !radius ? "0.5" : "1",
              cursor: !radius ? "not-allowed" : "pointer",
            }}
            className="w-[70%] h-full rounded-[25px]  cursor-pointer focus:outline-none"
            id="range"
          />
        </div>
      </div>
    </div>
  );
}
