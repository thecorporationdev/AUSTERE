import Image from "next/image";
import React from "react";
import image from "../../public/nathan-cima-2JNNpq4nGls-unsplash.jpg";
import Link from "next/link";
import { shimmer, toBase64 } from "@/lib/image";
import { Button } from "./button";
import SmallBtn from "./SmallBtn";

type Props = {};

const Project = (props: Props) => {
  return (
    <Link href="/" className="group text-sm w-full">
      <div className=" h-[400px] relative overflow-hidden rounded-lg border-2 border-gray-200 bg-gray-100">
        <Image
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64, ${toBase64(
            shimmer(400, 400)
          )}`}
          src={image}
          alt="BOAT IMAGE"
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-all duration-150 bg-top h-full"
        />
      </div>
      <div className="flex gap-x-3 mt-4 flex-wrap font-semibold ">
        <SmallBtn className="text-sm md:text-base mt-1 md:mt-0">
          strategy
        </SmallBtn>
        /
        <SmallBtn className="text-sm md:text-base mt-1 md:mt-0">
          development
        </SmallBtn>
        /
        <SmallBtn className="text-sm md:text-base m-1 md:mt-0">
          development
        </SmallBtn>
      </div>
      <p className="mt-2 text-xl tracking-tighter text-gray-900 font-bold">
        IBoats
      </p>
    </Link>
  );
};

export default Project;
