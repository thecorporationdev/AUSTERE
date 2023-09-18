import ClientList from "@/components/WorkingsSections/ClientList";
import ProjectList from "@/components/WorkingsSections/ProjectList";
import Footer from "@/components/ui/Footer";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <section className="max-w-[90%] mx-auto ">
        <div className=" w-full max-md:flex-col mx-auto flex items-center justify-center">
          <h1 className="w-full text-4xl md:text-6xl mx-auto xl:text-8xl font-extrabold text-center uppercase">
            THE workings
          </h1>
        </div>
        <div className="h-[3px] w-full bg-black mt-10"></div>

        <ProjectList />

        <div className="w-full mt-10 md:mt-20">
          <div className="w-full">
            <h3 className="text-3xl md:text-5xl uppercase tracking-tighter font-extrabold">
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
