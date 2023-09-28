"use client";
import React from "react";
import SmallBtn from "./SmallBtn";

import { FiArrowUpRight } from "react-icons/fi";
import Reveal from "../Reveal";
import Image, { StaticImageData } from "next/image";
import { shimmer, toBase64 } from "@/lib/image";

type Props = {
  title: string;
  description: string;
  image: StaticImageData;
};

const CapabilityLink = (props: Props) => {
  const { title, description, image } = props;
  return (
    <Reveal>
      <div className="w-full mt-4">
        <div className="flex max-w-[90%] mx-auto border-b-2 border-black justify-between  py-2">
          <div className="tracking-[-0.02] text-2xl md:text-3xl capitalize font-semibold">
            {title}
          </div>

          {/* <FiArrowUpRight className="text-5xl font-semibold" /> */}
        </div>
        <div className="w-full mt-6">
          <div className=" h-[400px] lg:h-[700px] relative overflow-hidden  bg-gray-100">
            <Image
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64, ${toBase64(
                shimmer(400, 400)
              )}`}
              src={image}
              alt="boatimage"
              fill
              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-all duration-150 bg-center h-full"
            />
          </div>
        </div>
        <p className="text-base max-w-[90%] mx-auto md:text-[17px] mt-2 tracking-wide mb-10 leading-[24px] lg:leading-[30px] ">
          {description}
        </p>
      </div>
    </Reveal>
  );
};

export default CapabilityLink;
