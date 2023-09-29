import React from "react";
import { Trustbank } from "../icons/treustandsec";
import Nfvb from "../icons/nfvbicon";
import { Eye } from "../icons/eye";
import { Boxes } from "../icons/Boxes";
import { Cbn } from "../icons/cbn";
import Reveal from "../Reveal";
import Enaira from "../icons/Eniara";
import Mango2 from "../icons/Mango2";
import Nisal from "../icons/Nisal";
import Cbn2 from "../icons/Cbn2";
import NDic from "../icons/Ndic";
import Zam from "../icons/Zam";
import Nnf from "../icons/Nnf";

const clients = [
  { id: 1, logo: <Trustbank /> },
  { id: 2, logo: <Eye /> },
  { id: 30, logo: <Enaira /> },
  {
    id: 3,
    logo: <Mango2 />,
  },
  {
    id: 4,
    logo: <Boxes />,
  },
  {
    id: 89,
    logo: <Nisal />,
  },
  {
    id: 5,
    logo: <Cbn2 />,
  },
  {
    id: 6,
    logo: <NDic />,
  },
  {
    id: 9,
    logo: <Nnf />,
  },
  {
    id: 239,
    logo: <Zam />,
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
    <Reveal>
      <div className="border-2 border-black  flex  items-center justify-center py-14 px-14 md:px-1">
        <div className=" h-[6rem] w-[6rem]  md:h-[5.5rem] md:w-[5.5rem] flex items-center justify-center">
          {logo}
        </div>
      </div>
    </Reveal>
  );
}
