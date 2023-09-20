import React from "react";
import SmallBtn from "./SmallBtn";
import Arrow from "../icons/Arrow";
import { FiArrowUpRight } from "react-icons/fi";

type Props = {};

const InsightLink = (props: Props) => {
  return (
    <div className="w-full md:mt-4 py-2 ">
      <div className="flex border-b-2 border-black gap-x-2 flex-col md:flex-row  w-full">
        <div className="flex ">
          <SmallBtn className="text-[11px] underline text-black">
            insights
          </SmallBtn>{" "}
          /{" "}
          <SmallBtn className="text-[11px]  underline text-black">
            2000
          </SmallBtn>
        </div>
        <div className="flex justify-evenly w-full">
          <div className="tracking-[-0.02] text-black text-[12px] md:text-base font-light mb-4">
            TC Works with EFCC - rethinking crime in Nigeria
          </div>
          <FiArrowUpRight className="text-5xl font-semibold" />
        </div>
      </div>
    </div>
  );
};

export default InsightLink;
