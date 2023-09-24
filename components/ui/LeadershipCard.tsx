"use client";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";
import React from "react";
import image from "../../public/nathan-cima-2JNNpq4nGls-unsplash.jpg";
import { shimmer, toBase64 } from "@/lib/image";
import Reveal from "../Reveal";

type Props = {
  cardId: number;
  isOpen: boolean;
  toggleOverlay: (cardId: number) => void;
};

const LeadershipCard = ({ cardId, isOpen, toggleOverlay }: Props) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const controls = useAnimation();

  const toggle = () => {
    toggleOverlay(cardId);
  };

  const closeOverlay = () => {
    toggleOverlay(-1);
  };

  return (
    <Reveal>
      <div className="relative">
        <motion.div
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: "9%" },
          }}
          transition={{ duration: 0.5 }}
          className={`absolute h-[88%] w-full bg-black text-white top-0 left-0 z-[30] ${
            isOpen ? "" : "pointer-events-none" // Disable pointer events when hidden
          }`}
        >
          <button
            className="absolute top-4 right-4 text-black font-bold"
            onClick={closeOverlay}
          >
            <RxCross1 className="text-white" />
          </button>
          <p className="mt-10 md:mt-14 text-xs md:text-sm px-3 text-left text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            recusandae quo, delectus deleniti architecto dolorum necessitatibus
            molestiae quas quaerat nostrum natus voluptatibus repellendus ullam
            eligendi nihil velit fugit sapiente debitis.
          </p>
        </motion.div>
        <div className="max-sm:h-[300px] sm:h-[250px] xl:w-[250px] xl:h-[400px] relative overflow-hidden  border-2">
          <Image
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64, ${toBase64(
              shimmer(250, 400)
            )}`}
            src="/ttd.jpeg"
            alt="BOAT IMAGE"
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-all duration-150 bg-top h-full"
          />
        </div>
        <div className="mt-3 flex justify-between">
          <div className="">
            <p className="font-bold text-[10px] md:text-[12px] text-gray-500">
              Founding partner
            </p>
            <p className="font-bold text-black text-[12px] md:text-base">
              Micheal carouso
            </p>
          </div>
          <div className="cursor-pointer" onClick={toggle}>
            {isOpen ? (
              <FiArrowUpRight className="text-2xl font-semibold transition-all ease-in duration-300" />
            ) : (
              <FiArrowDownRight className="text-2xl font-semibold transition-all ease-in duration-300" />
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default LeadershipCard;
