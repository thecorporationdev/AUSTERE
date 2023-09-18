"use client";
import React from "react";
import { HeroMotionDiv, LineMotionDiv } from "../../ui/MotionDiv";

const Hero = () => {
  return (
    <HeroMotionDiv className=" md:mt-3 w-full">
      <h1 className="justify-between flex items-center text-wine-400 text-left  uppercase w-full text-[1.5rem] md:text-[2.5rem] xl:text-[3rem] xxl:text-[4.5rem] tracking-tight font-[800]">
        we&apos;re born to create a simple, clean, beautiful yet purposeful
        africa, one design at a time
      </h1>
      <div className="h-[3px] w-full bg-black mt-5">.</div>
    </HeroMotionDiv>
  );
};

export default Hero;
