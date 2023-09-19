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
      <div className=" h-[400px] relative overflow-hidden  bg-gray-100">
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

      <p className="mt-4 text-xl tracking-tighter text-gray-900 font-light">
        IBoats
      </p>
    </Link>
  );
};

export default Project;
