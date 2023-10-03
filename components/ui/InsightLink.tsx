import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Reveal from "../Reveal";

type Props = {
  title: string;
};

const InsightLink = (props: Props) => {
  const { title } = props;
  return (
    <Reveal>
      <div className="w-full md:mt-4 py-2 ">
        <div className="flex border-b-2 border-black gap-x-2 flex-col md:flex-row  w-full items-center">
          <div className="flex items-center justify-between  w-full">
            <div className="tracking-[-0.02] flex-1 text-black text-[13px] md:text-[18px] font-[500] mb-4  ">
              {title}
            </div>
            <div className="flex gap-x-2  items-center justify-between">
              {/* <div className="flex  items-center ">
                <h2 className="text-[10px] md:text-[14px] underline text-black font-[400] mr-2">
                  insights
                </h2>
                |
                <SmallBtn className="text-[10px]  underline text-black">
                  2000
                </SmallBtn>
              </div> */}

              <div className="flex  items-center justify-end ">
                <FiArrowUpRight className=" text-2xl lg:text-5xl font-semibold" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default InsightLink;
