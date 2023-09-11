import { shimmer, toBase64 } from "@/lib/image";
import Image from "next/image";
import React from "react";
import image from "../../public/nathan-cima-2JNNpq4nGls-unsplash.jpg";

type Props = {};

const LeadershipCard = (props: Props) => {
  return (
    <div className="">
      <div className=" max-sm:h-[300px] xl:w-[250px] xl:h-[400px] relative overflow-hidden rounded-lg border-2 border-gray-200 bg-gray-100">
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
      <div className="mt-3">
        <p className="font-bold text-[10px] md:text-[12px] text-gray-500">
          Founding partner
        </p>
        <p className="font-bold text-black text-[12px] md:text-base">
          Micheal carouso
        </p>
      </div>
    </div>
  );
};

export default LeadershipCard;
