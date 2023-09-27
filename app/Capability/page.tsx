import CapabilityHero from "@/components/CapabilitySections/CapabilityHero";
import Footer from "@/components/ui/Footer";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <section className="flex flex-col ">
        <CapabilityHero />
      </section>
      <Footer />
    </>
  );
};

export default page;
