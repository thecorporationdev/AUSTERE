"use client";
import { shimmer, toBase64 } from "@/lib/image";
import Image from "next/image";

import React, { useState } from "react";
import image from "../../public/nathan-cima-2JNNpq4nGls-unsplash.jpg";
import LeadershipCard from "../ui/LeadershipCard";
import Arrow from "../icons/Arrow";

interface ParentProps {
  cardId: number;
  isOpen: boolean;
  toggleOverlay: (cardId: number) => void;
}

const Leadership = (props: ParentProps) => {
  const [openCardId, setOpenCardId] = useState(null);

  const toggleOverlay = (cardId: any) => {
    // Close the currently open card if it's the same as the clicked card
    if (openCardId === cardId) {
      setOpenCardId(null);
    } else {
      // Open the clicked card
      setOpenCardId(cardId);
    }
  };

  const cardsData = [
    {
      id: 1,
      name: "micheal carouso",
    },
    {
      id: 22,
      name: "micheal carouso",
    },
    {
      id: 2,
      name: "micheal carouso",
    },
    {
      id: 90,
      name: "micheal carouso",
    },
  ];
  return (
    <section className="w-full mx-auto h-screen md:h-auto mt-28">
      <div className="w-full ">
        <h3 className=" text-2xl md:text-4xl font-[500] tracking-tighter uppercase">
          Leadership
        </h3>
      </div>

      <div className="mt-16 w-full h-full">
        <div className="w-full h-auto sm:h-full grid grid-cols-2 xl:flex justify-end gap-x-4 gap-y-5 md:gap-x-10 md:gap-y-14 ">
          {cardsData.map((data, index) => (
            <LeadershipCard
              key={index}
              cardId={data.id} // Unique identifier for each card
              isOpen={openCardId === data.id}
              toggleOverlay={toggleOverlay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
