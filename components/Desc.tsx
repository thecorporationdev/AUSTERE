import React from "react";
import Arrow from "./icons/Arrow";

type Props = {};

const Desc = (props: Props) => {
  return (
    <section className="mt-20 border-t-2 border-black w-[92%] mx-auto flex justify-end">
      <div className="md:w-[80%] md:h-[35vh] mt-3 flex flex-col md:flex-row justify-between">
        <div className="flex flex-col gap-y-0 leading-none font-medium uppercase tracking-tighter">
          <span>A</span>
          <span className="mt-0">Full-service</span>
          <span>Digital</span>
          <span>Commerce</span>
          <span>Agency</span>
        </div>
        <div className=" md:w-[50%] h-full flex flex-col md:flex-row md:justify-start ">
          <div className="w-[80%] flex  flex-col md:flex-row  justify-between">
            <div className="flex flex-col gap-y-[0.3rem] ">
              <span className="uppercase tracking-tighter text-base">
                we&apos;re hiring
              </span>

              <a className="flex items-center w-28 underline justify-between ">
                <span className="text-[0.7rem] tracking-tighter ">
                  SeeJobOpenings
                </span>
                <Arrow className="ml-1 h-3 " />
              </a>
            </div>

            <div className="flex  flex-col justify-start">
              <ul className="leading-none text-xs fobt-medium">
                <li>667 Madison Awe,f15</li>
                <li>NEW YORK NY 10065</li>
              </ul>
              <div className="my-8 text-sm">
                <div className="">09031269618</div>
                <div className="mt-3 underline underline-offset-1 tracking-tighter">
                  temi236topemichel@gmail.com
                </div>
              </div>

              <ul className="capitalize undeline leading-none tracking-tighter text-base">
                <li className="underline tracking-tighter">dribble</li>
                <li className="underline tracking-tighter">facebook</li>
                <li className="underline tracking-tighter">twitter</li>
                <li className="underline tracking-tighter">linkdin</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Desc;
