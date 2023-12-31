"use client";
import React, { useState } from "react";
import LeadershipCard from "../ui/LeadershipCard";
import Reveal from "../Reveal";
import { leadershipdata } from "@/app/Data/data";

interface ParentProps {
  cardId?: number;
  isOpen?: boolean;
  toggleOverlay?: (cardId: number) => void;
}

const Leadership = (props: ParentProps) => {
  const [openCardId, setOpenCardId] = useState(null);

  const toggleOverlay = (cardId: any) => {
    if (openCardId === cardId) {
      setOpenCardId(null);
    } else {
      setOpenCardId(cardId);
    }
  };

  return (
    <section className="w-full mx-auto md:h-auto mt-28">
      <div className="w-full ">
        <Reveal>
          <h3 className=" text-3xl md:text-4xl font-[500] tracking-tighter uppercase">
            Leadership
          </h3>
        </Reveal>
      </div>

      <div className="mt-16 w-full h-full">
        <div className="w-full h-auto sm:h-full grid grid-cols-1 sm:grid-cols-2 xl:flex justify-end gap-x-4 gap-y-5 md:gap-x-10 md:gap-y-14 ">
          {leadershipdata.map((data, index) => (
            <LeadershipCard
              key={index}
              cardId={data.id} // Unique identifier for each card
              isOpen={openCardId === data.id}
              toggleOverlay={toggleOverlay}
              name={data.name}
              description={data.remark}
              position={data.role}
              image={data.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
