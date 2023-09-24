import React from "react";
import Reveal from "../Reveal";

type Props = {};

const Value = (props: Props) => {
  return (
    <Reveal>
      <div className="md:h-[263px] md:w-[263px] rounded-full border-2 border-black flex items-center justify-center">
        Value
      </div>
    </Reveal>
  );
};

export default Value;
