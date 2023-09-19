import React from "react";
import { Trustbank, Sec } from "../icons/treustandsec";
import Psn from "../icons/psnIcon";
import Nfvb from "../icons/nfvbicon";
import { Eye } from "../icons/eye";
import Nama from "../icons/Nama";
import { Boxes } from "../icons/Boxes";
import { Cbn } from "../icons/cbn";
import { Secs } from "../icons/Secs";
import { Mango } from "../icons/Mango";

const clients = [
  { id: 1, logo: <Trustbank /> },
  { id: 2, logo: <Secs /> },
  { id: 30, logo: <Mango /> },
  {
    id: 3,
    logo: <Psn />,
  },
  {
    id: 4,
    logo: <Nfvb />,
  },
  {
    id: 89,
    logo: <Eye />,
  },
  {
    id: 5,
    logo: <Nama />,
  },
  {
    id: 6,
    logo: <Boxes />,
  },
  {
    id: 9,
    logo: <Cbn />,
  },
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
    <div className="border-2 border-black  flex  items-center justify-center py-14 px-14 md:px-1">
      <div className="h-[5.5rem] w-[5.5rem] flex items-center justify-center">
        {logo}
      </div>
    </div>
  );
}
