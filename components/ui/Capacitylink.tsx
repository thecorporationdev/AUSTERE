"use client";
import React from "react";
import SmallBtn from "./SmallBtn";

import { FiArrowUpRight } from "react-icons/fi";
import Reveal from "../Reveal";

type Props = {
  title: string;
  description: string;
};

const CapabilityLink = (props: Props) => {
  const { title, description } = props;
  return (
    <Reveal>
      <div className="w-full mt-4">
        <div className="flex border-b-2 border-black justify-between  py-2">
          <div className="tracking-[-0.02] text-base md:text-3xl capitalize font-semibold">
            {title}
          </div>

          {/* <FiArrowUpRight className="text-5xl font-semibold" /> */}
        </div>
        <p className="text-xs md:text-sm font-[300] leading-[20px] lg:leading-[30px] tracking-wide mb-2 ">
          {description}
        </p>
      </div>
    </Reveal>
  );
};

export default CapabilityLink;
