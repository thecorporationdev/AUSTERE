import React from "react";
import SmallBtn from "./SmallBtn";
import Arrow from "../icons/Arrow";
import { FiArrowUpRight } from "react-icons/fi";
import Reveal from "../Reveal";

type Props = {};

const InsightLink = (props: Props) => {
  return (
    <Reveal>
      <div className="w-full md:mt-4 py-2 ">
        <div className="flex border-b-2 border-black gap-x-2 flex-col md:flex-row  w-full">
          <div className="flex flex-1">
            <h2 className="text-[18px] underline text-black font-[500]">
              insights
            </h2>{" "}
            /{" "}
            <SmallBtn className="text-[11px]  underline text-black">
              2000
            </SmallBtn>
          </div>
          <div className="flex justify-between lg:w-[65%] text-left">
            <div className="tracking-[-0.02] text-black text-[12px] md:text-base font-light mb-4">
              TC Works with EFCC - rethinking crime in Nigeria
            </div>
            <FiArrowUpRight className=" text-3xl lg:text-5xl font-semibold" />
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default InsightLink;
