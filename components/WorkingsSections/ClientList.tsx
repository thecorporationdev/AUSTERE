import React from "react";
import Slide from "../ui/Slide";

type Props = {};

const ClientList = (props: Props) => {
  return (
    <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-4 md:mt-20">
      <Clientbox word="client" />
      <Clientbox word="client" /> <Clientbox word="client" />{" "}
      <Clientbox word="client" /> <Clientbox word="client" />{" "}
      <Clientbox word="client" /> <Clientbox word="client" />{" "}
      <Clientbox word="client" /> <Clientbox word="client" />{" "}
      <Clientbox word="client" />{" "}
    </div>
  );
};

export default ClientList;

type Propsclient = {
  word: string;
};

function Clientbox(props: Propsclient) {
  const { word } = props;
  return (
    <div className="border-2 border-black rounded-xl py-16 flex flex-col  items-center justify-center px-14">
      <h1 className="text-base tracking-tighter">{word}</h1>
    </div>
  );
}
