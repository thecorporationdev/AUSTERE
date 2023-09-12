import React from "react";
import Value from "../ui/Value";
import ValueCarousel from "../ui/Valuecarousel";

type Props = {};

const Values = (props: Props) => {
  return (
    <div className="md:px-14  max-[400px]:mt-20 mt-28">
      <div className="w-full flex ">
        <div className="flex justify-between items-start flex-col md:flex-row">
          <h3 className="tracking-tighter font-black text-3xl md:text-4xl w-full uppercase  md:py-0">
            our values
          </h3>
          <div className="w-full md:border-t-2 md:border-black flex flex-col">
            <h3 className="hidden text-base mt-10 md:mt-2  capitalize tracking-tighter font-black">
              Accountability <br /> breeds success
            </h3>
            <h3 className="text-base mt-14 md:mt-2 font-b capitalize tracking-tighter font-black">
              Accountability breeds success
            </h3>
            <p className="break-words whitespace-normal mt-10 text-[13px] font-extrabold xl:w-7/12 text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus sapiente est temporibus, sequi ipsa provident,
              eligendi omnis consequatur expedita maxime ipsam, quidem pariatur
              molestias dolorem tenetur. Soluta quam adipisci esse.
            </p>
          </div>
        </div>
      </div>

      {/* <ValueCarousel /> */}

      <div className=" hidden xl:grid xl:grid-cols-5 mt-10 md:mt-24 gap-y-6 max-sm:mt-16 ">
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
