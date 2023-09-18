"use client";
import React from "react";
import { HeroMotionDiv, LineMotionDiv } from "../../ui/MotionDiv";

const Hero = () => {
  return (
    <HeroMotionDiv className=" md:mt-3 w-full">
      <h1 className="justify-between flex items-center text-wine-400 text-left  uppercase w-full text-[1.3rem] md:text-[2.5rem] xl:text-[3rem] xxl:text-[3.8rem] tracking-normal py-10 font-[400]">
        we were born to create a simple, <br />
        clean, beautiful yet purposeful africa, <br /> one design at a time...
      </h1>
      <div className="h-[3px] w-full bg-black mt-5" />
      <div className="flex justify-end">
        <div className=" md:w-[80%] mt-3 flex flex-col md:flex-row justify-between ">
          <div
            className="flex flex-col gap-y-0  font-normal
           uppercase tracking-tight"
          >
            <span className="mt-0 text-base">AFRICA&apos;S FOREMOST</span>
            <span className="text-base">HUMAN CENTERED</span>
            <span className="text-base">MINIMALIST DESIGN AGENCY</span>
          </div>
          <div className=" mt-4 md:mt-0 md:w-[50%] h-full flex flex-col md:flex-row md:justify-start ">
            <div className=" w-[100%] flex  flex-col md:flex-row  justify-end"></div>
          </div>
        </div>
      </div>
    </HeroMotionDiv>
  );
};

export default Hero;
