import Reveal from "@/components/Reveal";
import ClientList from "@/components/WorkingsSections/ClientList";
import ProjectList from "@/components/WorkingsSections/ProjectList";
import Footer from "@/components/ui/Footer";
import { Metadata } from "next";
import React from "react";

type Props = {};

export const metadata: Metadata = {
  title: "Workings",
  description: "workings page to show our works and achiements",
  icons: {
    icon: "./AUSTEREICO.png",
  },
};

const page = (props: Props) => {
  return (
    <>
      <section className=" max-sm:max-w-[94%] sm:w-[85%]  md:w-[90%] md:max-w-[90%] mx-auto text-black pt-32 md:pt-24">
        <Reveal>
          <div className=" w-full max-md:flex-col mx-auto flex items-center justify-center">
            <h1 className="w-full text-4xl md:text-6xl mx-auto xl:text-8xl font-[500] text-left uppercase md:py-10">
              THE <br className="md:hidden" /> workings
            </h1>
          </div>
        </Reveal>
        <div className="h-[3px] w-full bg-black mt-10"></div>

        <div className="w-full flex justify-end mt-10 md:my-20 ">
          <div className="lg:w-1/2 flex justify-end ">
            <Reveal>
              <p className=" text-base md:text-[17px] font-[400] leading-[24px] lg:leading-[30px]">
                We have had the privilege of working on numerous briefs,
                showcasing our expertise and creativity. While some of our
                clients have chosen not to have their content featured as case
                studies for strategic reasons, others have gladly agreed. The
                following projects highlight our recent work, including those
                that were not commissioned but still possess strong design
                appeal. Our intention is not only to showcase our past
                accomplishments but also to demonstrate what we are capable of
                achieving.
              </p>
            </Reveal>
          </div>
        </div>

        <ProjectList />

        <div className="w-full mt-10 md:mt-20">
          <div className="w-full">
            <h3 className="text-2xl md:text-3xl uppercase tracking-tighter font-[500]">
              the clientele
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
