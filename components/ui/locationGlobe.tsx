import React from "react";
import Globe from "../icons/Globe";
import Reveal from "../Reveal";

type Props = {};

const LocationsGlobe = (props: Props) => {
  return (
    <Reveal>
      <div className="w-full flex flex-col md:flex-row justify-between  gap-x-10 items-center">
        <div className=" w-full md:justify-start flex items-center">
          <div className="border-black border-t-2 max-md:mt-2">
            <div className="flex md:justify-start">
              <div className="md:w-3/4 flex flex-col md:flex-row justify-between mt-4">
                <h1 className="font-[500]  text-4xl">SNA</h1>
                <p className="md:w-6/12 text-[12px]  font-[400] leading-none mt-2 tracking-wide">
                  9903 Carswell Peak, San Antonio, TX 78245
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:inline-block">
          <Globe className="h-[400px] w-[400px]" />
        </div>
        <div className=" w-full flex md:justify-end items-center">
          <div className="border-black border-t-2 max-md:mt-4">
            <div className="flex md:justify-end">
              <div className="md:w-3/4 flex flex-col-reverse md:flex-row justify-between mt-2 ">
                <p className="md:w-6/12 text-[12px]  font-[400] leading-none mt-2 tracking-wide">
                  4 St. Katherines Court Bradford-on-Avon BA15 1LE
                </p>
                <h1 className="font-[500] text-4xl">LBA</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default LocationsGlobe;
