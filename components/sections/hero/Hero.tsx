"use client";
import React from "react";
import { HeroMotionDiv, LineMotionDiv } from "../../ui/MotionDiv";

const Hero = () => {
  return (
    <HeroMotionDiv className=" md:mt-3 w-full text-black">
      <h1 className="justify-between items-center text-wine-400 text-left  uppercase w-full text-[1.6rem] md:text-[2.5rem] xl:text-[3rem] xxl:text-[3.8rem] tracking-normal py-10 font-[500]">
        we were born to create a simple, <br />
        clean, beautiful yet purposeful africa, <br /> one design at a time...
      </h1>
      <div className="h-[3px] w-full bg-black mt-5" />
      <div className="flex justify-end">
        <div className=" md:w-[80%] mt-3 flex flex-col md:flex-row justify-between ">
          <div
            className="flex flex-col gap-y-1  font-[500]
           uppercase "
          >
            <span className="text-xs">AFRICA&apos;S FOREMOST</span>
            <span className="text-xs">HUMAN CENTERED</span>
            <span className="text-xs">MINIMALIST DESIGN AGENCY</span>
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
