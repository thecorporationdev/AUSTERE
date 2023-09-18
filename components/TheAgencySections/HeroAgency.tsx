import React from "react";
import SmallBtn from "../ui/SmallBtn";

type Props = {};

const HeroAgency = (props: Props) => {
  return (
    <section className="w-full flex-col  hidden md:flex h-[100vh] md:mt-10">
      <div className="flex w-full">
        <h1 className="w-full text-4xl md:text-6xl mx-auto xl:text-8xl font-extrabold text-left uppercase md:py-10">
          The Agency
        </h1>
      </div>
      <div className="h-[3px] w-full bg-black mt-10" />

      <div className="w-full flex justify-end mt-10 md:my-20 ">
        <div className="lg:w-1/2 flex justify-end ">
          <p className=" text-xs md:text-[18px] font-bold leading-[20px] lg:leading-[35px] tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            laboriosam dolore ipsum tempore voluptate illo fugit, facere aliquid
            facilis, laudantium aperiam suscipit eaque minima mlor sit amet
            illo?axime. Minus consectetur tenetur officia illo? Lorem ipsum do
          </p>
        </div>
      </div>

      <div className="flex md:grid md:grid-cols-5 mt-20  h-[200px] md:h-[400px] relative flex-col gap-y-12 border-t-2 border-b-2 border-gray-600">
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
