import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Desc from "./Desc";

type Props = {};

const Heropage = (props: Props) => {
  return (
    <section>
      <Header />
      <Hero />
      <Desc />
    </section>
  );
};

export default Heropage;
