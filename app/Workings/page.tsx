import ClientList from "@/components/WorkingsSections/ClientList";
import ProjectList from "@/components/WorkingsSections/ProjectList";
import Footer from "@/components/ui/Footer";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <section className="max-w-[90%] mx-auto text-black">
        <div className=" w-full max-md:flex-col mx-auto flex items-center justify-center">
          <h1 className="w-full text-4xl md:text-6xl mx-auto xl:text-8xl font-[500] text-left uppercase md:py-10">
            THE workings
          </h1>
        </div>
        <div className="h-[3px] w-full bg-black mt-10"></div>

        <div className="w-full flex justify-end mt-10 md:my-20 ">
          <div className="lg:w-1/2 flex justify-end ">
            <p className=" text-xs md:text-[18px] font-[400] leading-[20px] lg:leading-[30px] tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              laboriosam dolore ipsum tempore voluptate illo fugit, facere
              aliquid facilis, laudantium aperiam suscipit eaque minima maxime.
              Minus consectetur tenetur officia illo? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Magnam laboriosam dolore ipsum
            </p>
          </div>
        </div>

        <ProjectList />

        <div className="w-full mt-10 md:mt-20">
          <div className="w-full">
            <h3 className="text-2xl md:text-3xl uppercase tracking-tighter font-[500]">
              clients
            </h3>
          </div>
          <ClientList />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
