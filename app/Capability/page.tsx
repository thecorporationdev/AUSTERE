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
        <ClientList />
      </section>
      <Footer />
    </>
  );
};

export default page;
