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
            <div className=" text-base flex flex-col gap-y-6 md:text-[17px] font-[400] text-black leading-[24px] lg:leading-[30px] tracking-wide">
              <p>Welcome and it&apos;s great to have you here!</p>
              <p>
                You could have chosen any other place in the world, but you
                decided to come here, and I appreciate it.{" "}
              </p>
              <p>Now, let&apos;s get down to business! </p>
              <p>
                This website was made to not only highlight our accomplishments
                and skills but also to show our authentic selves and what
                motivates us. Please take a moment to scroll down or navigate
                through the other pages to fully grasp our essence.
              </p>
              <p>I must mention that our designs are SIMPLE, YET FUNCTIONAL.</p>
              <p>And once you&apos;re finished, let&apos;s talk business.</p>
              <p>AA</p>
            </div>
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
