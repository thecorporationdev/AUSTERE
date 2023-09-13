import React from "react";
import Arrow from "../../icons/Arrow";
import { DescMotionDiv, LineMotionDiv } from "../../ui/MotionDiv";

type Props = {};

const Desc = (props: Props) => {
  return (
    <section className="mt-6 md:mt-20 w-[92%] mx-auto flex-col flex ">
      <LineMotionDiv className="h-[3px] w-full bg-black">.</LineMotionDiv>
      <div className="flex justify-end">
        <div className=" md:w-[80%]  md:h-[30vh] mt-3 flex flex-col md:flex-row justify-between ">
          <div className="flex flex-col gap-y-0 leading-2 font-bold uppercase tracking-tight">
            <span>A</span>
            <span className="mt-0">Full-service</span>
            <span>Digital</span>
            <span>Commerce</span>
            <span>Agency</span>
          </div>
          <div className=" mt-4 md:mt-0 md:w-[50%] h-full flex flex-col md:flex-row md:justify-start ">
            <div className="w-[80%] flex  flex-col md:flex-row  justify-between">
              <div className="flex flex-col gap-y-[0.3rem] ">
                <span className="uppercase tracking-normal text-base font-semibold ">
                  we&apos;re hiring
                </span>

                <a className="flex items-center w-28 underline">
                  <span className="text-[0.7rem] tracking-normal font-semibold cursor-pointer hover:scale-105 transition-all duration-75 ease-linear">
                    SeeJobOpenings
                  </span>
                  <Arrow className=" h-3 underline underline-offset-1 " />
                </a>
              </div>

              <div className="flex mt-3 md:mt-0 flex-col justify-start font-semibold">
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

                <ul className="capitalize undeline  tracking-normal text-base">
                  <li className="underline tracking-tighter">dribble</li>
                  <li className="underline tracking-tighter">facebook</li>
                  <li className="underline tracking-tighter">twitter</li>
                  <li className="underline tracking-tighter">linkdin</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Desc;
