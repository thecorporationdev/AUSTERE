"use client";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { shimmer, toBase64 } from "@/lib/image";
import Reveal from "../Reveal";
import { BiPlus } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

type Props = {
  cardId: number;
  description: string;
  name: string;
  position: string;
  isOpen: boolean;
  image: StaticImageData;
  toggleOverlay: (cardId: number) => void;
};

const LeadershipCard = ({
  cardId,
  isOpen,
  toggleOverlay,
  description,
  name,
  image,
  position,
}: Props) => {
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
            className="absolute top-2 right-2 text-black font-bold"
            onClick={closeOverlay}
          >
            <RxCross1 className="text-white" />
          </button>
          <p className="mt-6 md:mt-14 text-[9px] sm:text-xs px-3 text-left text-white">
            {description}
          </p>
        </motion.div>
        <div className="max-sm:h-[400px] sm:h-[300px]  xl:w-[250px] lg:h-[450px] xl:h-[350px]  relative overflow-hidden  border-2">
          <Image
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64, ${toBase64(
              shimmer(250, 400)
            )}`}
            src={image}
            alt="partners image"
            quality={100}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-all duration-150 bg-top h-full"
          />
        </div>
        <div className="mt-3 flex justify-between">
          <div className="">
            <p className="text-base md:text-[17px] text-gray-500">{position}</p>
            <p className=" text-black text-base md:text-[17px]">{name}</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <BiPlus className="text-2xl cursor-pointer animate-pulse" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{name}</DialogTitle>
                <DialogDescription>{position}</DialogDescription>
              </DialogHeader>
              <p className="leading-[30px]">{description}</p>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </Reveal>
  );
};

export default LeadershipCard;
