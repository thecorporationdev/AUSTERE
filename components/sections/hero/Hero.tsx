"use client";
import React from "react";
import { HeroMotionDiv } from "../../ui/MotionDiv";

const Hero = () => {
  return (
    <HeroMotionDiv className="px-12 md:mt-3 w-full">
      <h1 className="font-[800] flex items-center text-wine-400 uppercase w-full text-[3rem] md:text-[4.5rem] xl:text-[8rem] xxl:text-[9.5rem] tracking-wide leading-[0.9]">
        get started
      </h1>
    </HeroMotionDiv>
  );
};

export default Hero;
