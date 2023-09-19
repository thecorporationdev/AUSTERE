import React from "react";
import InsightLink from "../ui/InsightLink";
import CapabilityLink from "../ui/Capacitylink";

type Props = {};

const CapabilityHero = (props: Props) => {
  return (
    <section className="w-full flex-col  flex md:mt-10">
      <div className=" w-full max-md:flex-col mx-auto flex items-left justify-center">
        <h1 className="w-full text-4xl md:text-6xl mx-auto xl:text-8xl font-[500] text-left uppercase md:py-10">
          the Capabilities
        </h1>
      </div>
      <div className="h-[3px] w-full bg-black mt-10"></div>

      <div className="w-full flex justify-end mt-10 md:my-20 ">
        <div className="lg:w-1/2 flex justify-end ">
          <p className=" text-xs md:text-[18px] font-[400] leading-[20px] lg:leading-[30px] tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            laboriosam dolore ipsum tempore voluptate illo fugit, facere aliquid
            facilis, laudantium aperiam suscipit eaque minima maxime. Minus
            consectetur tenetur officia illo? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Magnam laboriosam dolore ipsum tempore
            vo illo?
          </p>
        </div>
      </div>

      <div className="w-full flex lg:justify-end mt-4">
        <div className=" w-full lg:w-[75%]">
          <CapabilityLink />
          <CapabilityLink />
          <CapabilityLink />
          <CapabilityLink />
        </div>
      </div>
    </section>
  );
};

export default CapabilityHero;
