import React from "react";
import SmallBtn from "./SmallBtn";
import Arrow from "../icons/Arrow";

type Props = {};

const InsightLink = (props: Props) => {
  return (
    <div className="w-full md:mt-4 py-2 ">
      <div className="flex border-b-2 border-black gap-x-2 flex-col md:flex-row  w-full">
        <div className="flex ">
          <SmallBtn className="text-[11px] underline">blog</SmallBtn> /{" "}
          <SmallBtn className="text-[11px]  underline">2000</SmallBtn>
        </div>
        <div className="flex justify-evenly w-full">
          <div className="tracking-[-0.02] text-[12px] md:text-base font-light">
            TC Works with EFCC - rethinking crime in Nigeria
          </div>
          <Arrow className="" />
        </div>
      </div>
    </div>
  );
};

export default InsightLink;
