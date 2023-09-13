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
    </div>
  );
};

export default CapabilityLink;