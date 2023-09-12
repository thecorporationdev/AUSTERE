import React from "react";

type Props = {};

const CapabilityHero = (props: Props) => {
  return (
    <section className="w-full flex-col  md:px-10 flex h-[80vh] md:mt-10 xxl:max-w-[80%]">
      <div className="flex w-full max-md:flex-col">
        <h1 className="w-full text-4xl md:text-5xl xl:text-8xl font-extrabold tracking-tighter uppercase">
          Capability
        </h1>
        <p className="mt-3 md:mt-0 text-xs md:text-base md:w-4/6 font-bold">
          Change the world, one brand at one time
        </p>
      </div>
    </section>
  );
};

export default CapabilityHero;
