import React from "react";
import { Trustbank, Sec } from "../icons/logo1";

const clients = [
  { id: 1, logo: <Trustbank /> },
  { id: 1, logo: <Sec /> },
];

type Props = {};

const ClientList = (props: Props) => {
  return (
    <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-4 md:mt-20">
      {clients.map((logo, i) => (
        <Clientbox key={logo.id} logo={logo.logo} />
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
    <div className="border-2 border-black rounded-xl  flex  items-center justify-center py-10 ">
      <div className="h-30 w-40">{logo}</div>
    </div>
  );
}
