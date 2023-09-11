import React from "react";
import SmallBtn from "./SmallBtn";
import Arrow from "../icons/Arrow";

type Props = {};

const InsightLink = (props: Props) => {
  return (
    <div className="w-full mt-4">
      <div className="flex border-b-2 border-gray-500 justify-between ">
        <div className="flex text-gray-500 font-semibold">
          <SmallBtn className="text-[11px]">blog</SmallBtn> /{" "}
          <SmallBtn className="text-[11px]">2000</SmallBtn>
        </div>
        <div className="tracking-[-0.02] text-[8px] md:text-base font-semibold">
          TC Works with EFCC - rethinking crime in Nigeria
        </div>
        <Arrow className="text-gray-500 fill-gray-500" />
      </div>
    </div>
  );
};

export default InsightLink;
