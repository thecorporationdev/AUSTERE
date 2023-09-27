import React from "react";
import Reveal from "@/components/Reveal";

const Hero = () => {
  return (
    <div className=" md:mt-3 w-full text-black">
      <Reveal>
        <h1 className="justify-between items-center text-wine-400 text-left  uppercase w-full text-[2.3rem] md:text-[2.5rem] xl:text-[3rem] xxl:text-[3.8rem] tracking-normal py-10 font-[500]">
          we were born to create a simple, <br className="hidden md:block" />
          clean, beautiful yet purposeful africa,{" "}
          <br className="hidden md:block" /> one design at a time...
        </h1>
      </Reveal>
      <div className="h-[3px] w-full bg-black mt-5" />

      <div className="w-full flex justify-end mt-10 md:my-20 ">
        <div className="lg:w-1/2 flex justify-end ">
          <Reveal>
            <p className=" text-base md:text-[17px] font-[400] text-black leading-[20px] lg:leading-[30px] tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              assumenda nostrum distinctio. Fuga nemo accusamus libero molestiae
              quod maxime dolore aspernatur non! Dicta quibusdam asperiores
              quaerat labore cupiditate obcaecati eaque?
            </p>
          </Reveal>
        </div>
      </div>

      {/* <div className="flex justify-end">
        <div className=" md:w-[80%] mt-3 flex flex-col md:flex-row justify-between ">
          <Reveal>
            <div
              className="flex flex-col gap-y-1  font-[500]
           uppercase "
            >
              <span className="text-xs">AFRICA&apos;S FOREMOST</span>
              <span className="text-xs">HUMAN CENTERED</span>
              <span className="text-xs">MINIMALIST DESIGN AGENCY</span>
            </div>
          </Reveal>
          <div className=" mt-4 md:mt-0 md:w-[50%] h-full flex flex-col md:flex-row md:justify-start ">
            <div className=" w-[100%] flex  flex-col md:flex-row  justify-end"></div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
