import ClientList from "@/components/WorkingsSections/ClientList";
import ProjectList from "@/components/WorkingsSections/ProjectList";
import Footer from "@/components/ui/Footer";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <section className="max-w-[90%] mx-auto ">
      <div className="lg:px-10 md:mt-3 w-full">
        <h1 className="font-[800] flex items-center text-wine-400 uppercase w-full text-[3rem] md:text-[4.5rem] xl:text-[6rem] xxl:text-[9.5rem] tracking-tight leading-[0.9] mt-6">
          workings
        </h1>
      </div>

      <ProjectList />

      <div className="w-full lg:px-12">
        <div className="w-full">
          <h3 className="text-3xl md:text-5xl uppercase tracking-tighter font-extrabold">
            clients
          </h3>
        </div>
        <ClientList />
      </div>

      <Footer />
    </section>
  );
};

export default page;
