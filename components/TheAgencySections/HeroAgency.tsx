import React from "react";
import SmallBtn from "../ui/SmallBtn";

type Props = {};

const HeroAgency = (props: Props) => {
  return (
    <section className="w-full flex-col  md:px-10 hidden md:flex h-screen md:h-[80vh] md:mt-10 xxl:max-w-[80%]">
      <div className="flex w-full">
        <h1 className="w-full text-4xl md:text-5xl xl:text-8xl font-extrabold tracking-tighter">
          The Agency
        </h1>
        <p className="mt-3 md:mt-0 text-xs md:text-base md:w-4/6 font-bold">
          we create brand experiences
        </p>
      </div>

      <div className="flex md:grid md:grid-cols-5 mt-8  h-[200px] md:h-[400px] relative flex-col gap-y-12 border-t-2 border-b-2 border-gray-600">
        <div className=" z-5 md:text-center md:items-center md:justify-center w-full md:w-[40%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-4">
          <h3 className="uppercase text-base md:text-3xl font-bold">
            increase your revenue
          </h3>
          <p className="text-[13px] md:w-3/4  md:text-center font-semibold tracking-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            libero dolore culpa molestias dolorem, hic dignissimos quod harum
          </p>
          <SmallBtn className="w-5/12 xl:w-4/12 ">learn more</SmallBtn>
        </div>
        <div className="border-r-2 border-gray-500 h-full"></div>
        <div className="border-r-2 border-gray-500  h-full "></div>
        <div className="border-r-2 border-gray-500  h-full "></div>
        <div className="border-r-[0] border-gray-500  h-full"></div>
        <div className="border-l-2 border-gray-500  h-full "></div>
      </div>
    </section>
  );
};

export default HeroAgency;
