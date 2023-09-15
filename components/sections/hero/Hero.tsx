"use client";
import React from "react";
import { HeroMotionDiv, LineMotionDiv } from "../../ui/MotionDiv";

const Hero = () => {
  return (
    <HeroMotionDiv className="md:px-12 md:mt-3 w-full">
      <h1 className="justify-between flex items-center text-wine-400 text-center uppercase w-full text-[1rem] md:text-[2.5rem] xl:text-[2rem] xxl:text-[4.5rem] tracking-wide font-[800]">
        we&apos;re born to create a simple,clean , beautiful yet purposeful
        africa, one design at a time
      </h1>
      <div className="h-[3px] w-full bg-black mt-5">.</div>
    </HeroMotionDiv>
  );
};

export default Hero;
