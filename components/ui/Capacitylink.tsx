"use client";
import React from "react";
import SmallBtn from "./SmallBtn";

import { FiArrowUpRight } from "react-icons/fi";

type Props = {};

const CapabilityLink = (props: Props) => {
  return (
    <div className="w-full mt-4">
      <div className="flex border-b-2 border-gray-500 justify-between  py-2 lg:py-5">
        <div className="tracking-[-0.02] text-base md:text-3xl capitalize font-semibold">
          digital producer
        </div>
        <div className="flex text-gray-500 font-semibold  gap-x-4 lg:gap-x-6">
          <SmallBtn className="text-[11px]">blog</SmallBtn>
          <SmallBtn className="text-[11px]">2000</SmallBtn>
        </div>
        <FiArrowUpRight className="text-5xl font-semibold" />
      </div>
      <p className="text-xs md:text-sm font-bold leading-[20px] lg:leading-[30px] tracking-wide">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga odit
        voluptatum molestias dolorem maxime aliquam qui culpa ut laudantium
        temporibus praesentium atque, possimus illo ab inventore pariatur porro
        nisi deleniti.
      </p>
    </div>
  );
};

export default CapabilityLink;
