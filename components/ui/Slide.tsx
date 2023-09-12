import React from "react";
import { BiLoaderCircle } from "react-icons/bi";

type Props = {
  word: string;
};

const Slide = (props: Props) => {
  const { word } = props;
  return (
    <div className="border-2 border-black rounded-xl py-16 flex flex-col  items-center justify-center px-14">
      <BiLoaderCircle className="animate-spin text-3xl" />
      <h1 className="text-base tracking-tighter">{word}</h1>
    </div>
  );
};

export default Slide;
