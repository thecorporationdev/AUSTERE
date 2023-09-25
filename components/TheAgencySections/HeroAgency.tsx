import React from "react";
import Reveal from "../Reveal";

type Props = {};

const HeroAgency = (props: Props) => {
  return (
    <section className="w-full flex-col  md:flex md:mt-10">
      <div className="flex w-full">
        <Reveal>
          <h1 className="w-full text-4xl md:text-6xl mx-auto xl:text-8xl font-[500] text-left uppercase md:py-10">
            The <br className="md:hidden" /> Agency
          </h1>
        </Reveal>
      </div>
      <div className="h-[5px] w-full bg-black mt-10" />
      <div className="w-full flex justify-end mt-10 md:my-20 ">
        <div className="lg:w-1/2 flex justify-end ">
          <Reveal>
            <p className=" text-xs md:text-[18px] font-[400] leading-[20px] lg:leading-[35px] tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              laboriosam dolore ipsum tempore voluptate illo fugit, facere
              aliquid facilis, laudantium aperiam suscipit eaque minima mlor sit
              amet illo?axime. Minus consectetur tenetur officia illo? Lorem
              ipsum do
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default HeroAgency;
