import React from "react";
import Locationsdets from "../ui/Locationsdets";
import LocationsGlobe from "../ui/locationGlobe";

type Props = {};

const Locations = (props: Props) => {
  return (
    <section className=" md:pt-20  flex flex-col gap-y-10 mt-16">
      <div className="w-full flex items-center justify-center py-6 ">
        <h2 className="text-3xl md:text-4xl font-[500] uppercase">
          our locations
        </h2>
      </div>
      <div className="">
        <Locationsdets />
        <LocationsGlobe />
        {/* <Locationsdets /> */}
      </div>
    </section>
  );
};

export default Locations;
