import React from "react";
import Reveal from "../Reveal";

type Props = {};

const HeroAgency = (props: Props) => {
  return (
    <section className="w-full flex-col  md:flex md:mt-10 text-black">
      <div className="flex w-full">
        <Reveal>
          <h1 className="w-full text-4xl md:text-6xl mx-auto xl:text-8xl font-[500] text-black text-left uppercase md:py-10">
            The <br className="md:hidden" /> Agency
          </h1>
        </Reveal>
      </div>
      <div className="h-[5px] w-full bg-black mt-10" />
      <div className="w-full flex justify-end mt-10 md:my-20 ">
        <div className="lg:w-1/2 flex justify-end ">
          <Reveal>
            <p className=" text-base md:text-[17px] font-[400] leading-[24px] lg:leading-[35px] tracking-wide text-black">
              What does it take to establish an agency that prioritizes more
              than just profit, but also strives &#34;to create a Simple, Clean,
              Beautiful yet Purposeful Africa, One Design at a time…&#34;? I
              believe it lies within our brand essence, our principles, and the
              talented individuals who contribute their dedication and hard work
              to ensure we live up to our words. Please continue reading to gain
              an insight into what sets us apart, what fuels our creativity,
              what defines us as AUSTERE, and what makes us SIMPLE, YET
              FUNCTIONAL.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default HeroAgency;
