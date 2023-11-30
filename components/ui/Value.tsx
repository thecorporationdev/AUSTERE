import React from "react";
import Reveal from "../Reveal";

type Props = {
  value?: string;
};

const Value = (props: Props) => {
  const { value } = props;
  return (
    <Reveal>
      <div className=" h-[250px] w-full md:h-[263px] text-xl xl:text-2xl font-[600] uppercase border-2 border-black flex items-center justify-center">
        {value}
      </div>
    </Reveal>
  );
};

export default Value;
