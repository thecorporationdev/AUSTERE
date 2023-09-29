import React from "react";
import Reveal from "../Reveal";

type Props = {};

const Value = (props: Props) => {
  return (
    <Reveal>
      <div className=" h-[250px] w-full md:h-[263px] md:w-[263px] text-3xl font-[600] uppercase border-2 border-black flex items-center justify-center">
        Value
      </div>
    </Reveal>
  );
};

export default Value;
