import React from "react";
import { Trustbank } from "../icons/logo1";

const clients = [Trustbank];

type Props = {};

const ClientList = (props: Props) => {
  return (
    <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-4 md:mt-20">
      {clients.map((logo, i) => (
        <Clientbox key={i} logo={logo} />
      ))}
    </div>
  );
};

export default ClientList;

type Propsclient = {
  word?: string;
  logo: any;
};

function Clientbox(props: Propsclient) {
  const { word, logo } = props;
  return (
    <div className="border-2 border-black rounded-xl py-16 flex flex-col  items-center justify-center px-14">
      <div className="text-base tracking-tighter h-40 w-40">{logo}</div>
    </div>
  );
}
