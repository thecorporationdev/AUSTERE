import HeroAgency from "@/components/TheAgencySections/HeroAgency";
import Leadership from "@/components/TheAgencySections/Leadership";
import Principles from "@/components/TheAgencySections/Principles";
import Values from "@/components/TheAgencySections/Values";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <section className="max-w-[90%] mx-auto snap-mandatory snap-y">
      <HeroAgency />
      <Principles />
      <Values />
      <Leadership />
    </section>
  );
};

export default page;
