import React from "react";
import InsightLink from "../ui/InsightLink";
import CapabilityLink from "../ui/Capacitylink";
import Reveal from "../Reveal";
import { designCategories } from "@/app/Data/data";

type Props = {};

const CapabilityHero = (props: Props) => {
  return (
    <section className="w-full flex-col  flex md:mt-10 text-black pt-32 md:pt-24">
      <Reveal>
        <div className=" w-full max-md:flex-col text-black max-w-[90%] mx-auto flex items-left justify-center">
          <h1 className="w-full text-4xl md:text-6xl mx-auto xl:text-8xl font-[500] text-left uppercase md:py-10">
            the <br className="md:hidden" /> Capabilities
          </h1>
        </div>
      </Reveal>
      <div className="h-[3px] w-full bg-black mt-10 max-w-[90%] mx-auto"></div>

      <div className="w-full flex justify-end mt-10 md:my-20 ">
        <div className=" max-sm:max-w-[90%] max-sm:mx-auto lg:w-1/2 flex justify-end ">
          <Reveal>
            <p className="text-base md:text-[17px] font-[400] text-black leading-[24px] lg:leading-[30px] tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              assumenda nostrum distinctio. Fuga nemo accusamus libero molestiae
              quod maxime dolore aspernatur non! Dicta quibusdam asperiores
              quaerat labore cupiditate obcaecati eaque?
            </p>
          </Reveal>
        </div>
      </div>

      <div className="w-full flex lg:justify-end mt-4">
        <div className=" w-full">
          {designCategories.map((design, idx) => (
            <CapabilityLink
              key={idx}
              title={design?.category}
              description={design?.description}
              image={design?.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilityHero;
