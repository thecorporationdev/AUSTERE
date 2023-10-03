import CapabilityHero from "@/components/CapabilitySections/CapabilityHero";
import ClientList from "@/components/WorkingsSections/ClientList";
import Footer from "@/components/ui/Footer";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <section className="flex flex-col ">
        <CapabilityHero />

        <section className="w-full">
          <div className="max-w-[90%] mx-auto">
            <div className="w-full">
              <h3 className="text-2xl md:text-3xl uppercase tracking-tighter font-[500]">
                the clientele
              </h3>
            </div>
            <ClientList />
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default page;
