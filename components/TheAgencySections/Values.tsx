import React from "react";
import Value from "../ui/Value";
import ValueCarousel from "../ui/Valuecarousel";
import Reveal from "../Reveal";

type Props = {};

const Values = (props: Props) => {
  return (
    <div className="max-sm:mt-32 mt-24">
      <div className="w-full flex ">
        <Reveal>
          <div className="flex justify-between items-start flex-col md:flex-row">
            <h3 className="tracking-tighter  text-3xl md:text-4xl w-full uppercase  md:py-0 font-[500]">
              our values
            </h3>

            <div className="w-full md:border-t-2 md:border-black flex flex-col">
              <h3 className="hidden text-base mt-4 md:mt-2  capitalize tracking-tighter font-[500]">
                Accountability <br /> breeds success
              </h3>
              <h3 className="text-xl mt-14 md:mt-2 font-b capitalize tracking-tighter font-[500]">
                Accountability breeds success
              </h3>
              <Reveal>
                <p className="mt-2 text-base md:text-[17px]  text-left leading-[24px] md:leading-[28px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus sapiente est temporibus, sequi ipsa provident,
                  eligendi omnis consequatur expedita maxime ipsam, quidem
                  pariatur molestias dolorem tenetur. Soluta quam adipisci esse.
                  Necessitatibus sapiente est temporibus, sequi ipsa provident,
                  eligendi omnis consequatur expedita maxime ipsam, quidem
                  pariatur molestias dolorem tenetur. Soluta quam adipisci esse.
                  Necessitatibus sapiente est temporibus, sequi ipsa provident,
                  eligendi omnis consequatur expedita maxime ipsam, quidem
                  pariatur molestias dolorem tenetur. Soluta quam adipisci esse.
                </p>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>

      {/* <ValueCarousel /> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mt-10 md:mt-24 gap-y-6 max-sm:mt-16 ">
        <Value />
        <Value />
        <Value />
        <Value />
        <Value />
      </div>
    </div>
  );
};

export default Values;
