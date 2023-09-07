import Arrow from "@/components/icons/Arrow";
import React from "react";

type Props = {};

const Discover = (props: Props) => {
  return (
    <section className="md:px-14 w-full flex md:justify-end justify-between py-7 md:py-16">
      <div className=" flex  w-full md:w-[55%]">
        <div className=" flex-col relative flex w-full ">
          <h2 className="md:absolute  top-0 -left-40 tracking-tighter text-2xl md:text-5xl font-light">
            ONLY SIX KEYS TO
          </h2>
          <div className="md:mt-10 ">
            <h2 className="tracking-tighter text-3xl md:text-6xl font-light">
              sucess
            </h2>
            <div className="bg-black w-full h-[3px] mt-4"></div>
            <div className="flex justify-between md:w-[75%]">
              <p className="mt-6 tracking-tighter">
                These are the fundermental pillar for operational excellence in
                your digital channels
              </p>
              <div className="flex items-end underline underline-offset-2 text-gray-500 w-full  justify-end ">
                <div className="flex items-center">
                  <h1 className="text-base md:text-2xl tracking-tighter uppercase mb-2 text-gray-800 ">
                    discover
                  </h1>
                  <Arrow />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
