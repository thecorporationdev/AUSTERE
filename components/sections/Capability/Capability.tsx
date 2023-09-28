"use client";
import { designCategories } from "@/app/Data/data";
import Reveal from "@/components/Reveal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CapabilityLink from "@/components/ui/Capacitylink";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

type Props = {};

const Capability = (props: Props) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handleArrowClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="w-full flex  flex-col mt-4  bg-black text-white py-10 ">
      <div className=" w-full max-w-[90%] mx-auto">
        <div className="uppercase text-2xl md:text-3xl  mb-16">
          the capability
        </div>
        {designCategories.map((design, idx) => (
          <Capabilityhero
            key={idx}
            index={idx}
            activeIndex={activeIndex}
            onArrowClick={handleArrowClick}
            title={design.category}
            description={design.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Capability;

type Propscapa = {
  index: number;
  activeIndex: number | null;
  onArrowClick: (index: number) => void;
  title: string;
  description: string;
};

function Capabilityhero(props: Propscapa) {
  const { index, activeIndex, onArrowClick, title, description } = props;
  const isOpen = index === activeIndex;
  return (
    <Reveal>
      <div className="w-full mt-4">
        <div
          className="flex border-b-2 border-black justify-between cursor-pointer py-2"
          onClick={() => onArrowClick(index)}
        >
          <div className="tracking-[-0.02] text-xl md:text-2xl capitalize font-semibold">
            {title}
          </div>

          <FiArrowUpRight
            className={` max-md:text-3xl md:text-5xl font-semibold cursor-pointer animate-pulse ${
              isOpen ? "rotate-90" : ""
            }`}
          />
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.p
              key={index}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="text-base font-[300] md:text-[17px]  mt-2 flex flex-wrap tracking-tight mb-2 leading-[24px] lg:leading-[30px]"
            >
              {description}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}
