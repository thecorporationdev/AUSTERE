import React from "react";
import Titan from "../icons/Titan";
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
import { cn } from "@/lib/utils";

const clients = [
  { id: 1, logo: <Titan /> },
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
    id: 5,
    logo: <Nisal />,
  },
  {
    id: 6,
    logo: <Cbn2 />,
  },
  {
    id: 7,
    logo: <NDic />,
  },
  {
    id: 8,
    logo: <Nnf />,
  },
  {
    id: 9,
    logo: <Zam />,
  },
];

type Props = {};

const ClientList = (props: Props) => {
  return (
    <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-4 md:mt-20">
      {clients.map((logo, i) => (
        <Clientbox key={logo.id} logo={logo.logo} id={logo.id} />
      ))}
    </div>
  );
};

export default ClientList;

type Propsclient = {
  word?: string;
  logo: any;
  id: number;
};

function Clientbox(props: Propsclient) {
  const { id, word, logo } = props;

  return (
    <Reveal>
      <div className="border-2 border-black  flex  items-center justify-center py-14 px-14 md:px-1">
        <div
          className={cn(
            "h-[4.5rem] w-[4.5rem] flex items-center justify-center",
            id === 8 ? "h-[4.5rem] w-[5.5rem]" : ""
          )}
        >
          {logo}
        </div>
      </div>
    </Reveal>
  );
}
