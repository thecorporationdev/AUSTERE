import React from "react";
import Globe from "../icons/Globe";

type Props = {};

const LocationsGlobe = (props: Props) => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between  gap-x-10 items-center">
      <div className=" w-full md:justify-start flex items-center">
        <div className="border-black border-t-2 ">
          <div className="flex md:justify-start">
            <div className="md:w-3/4 flex justify-between mt-2 ">
              <h1 className="font-extrabold text-4xl">DTX</h1>
              <p className="md:w-4/12 text-[12px] text-gray-500 font-bold leading-none">
                515 maitama haruna street jabi park abuja nigeria
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:inline-block">
        <Globe className="h-[400px] w-[400px]" />
      </div>
      <div className=" w-full flex md:justify-end items-center">
        <div className="border-black border-t-2 ">
          <div className="flex md:justify-end">
            <div className="md:w-3/4 flex justify-between mt-2 ">
              <p className="md:w-4/12 text-[12px] text-gray-500 font-bold leading-none">
                515 maitama haruna street jabi park abuja nigeria
              </p>
              <h1 className="font-extrabold text-4xl">MPLS</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationsGlobe;