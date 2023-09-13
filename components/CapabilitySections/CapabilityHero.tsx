import React from "react";
import InsightLink from "../ui/InsightLink";
import CapabilityLink from "../ui/Capacitylink";

type Props = {};

const CapabilityHero = (props: Props) => {
  return (
    <section className="w-full flex-col  md:px-10 flex md:mt-10 xxl:max-w-[80%] ">
      <div className="flex w-full max-md:flex-col">
        <h1 className="w-full text-4xl md:text-5xl xl:text-8xl font-extrabold tracking-tighter uppercase">
          Capability
        </h1>
        <p className="mt-3 md:mt-0 text-xs md:text-base md:w-4/6 font-bold">
          Change the world, one brand at one time
        </p>
      </div>

      <div className="w-full flex justify-end mt-10 md:my-20">
        <div className="lg:w-1/2">
          <p className="lg:w-[70%] mx-auto text-xs md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            laboriosam dolore ipsum tempore voluptate illo fugit, facere aliquid
            facilis, laudantium aperiam suscipit eaque minima maxime. Minus
            consectetur tenetur officia illo?
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

      <div className="w-full justify-start py-10">
        <div className="lg:w-1/2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            temporibus aliquid dignissimos adipisci autem consectetur voluptates
            odio molestiae cupiditate, doloremque recusandae reprehenderit quo
            minus quibusdam deserunt quam nihil deleniti illo!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CapabilityHero;
