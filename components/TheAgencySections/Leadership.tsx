import { shimmer, toBase64 } from "@/lib/image";
import Image from "next/image";
import React from "react";
import image from "../../public/nathan-cima-2JNNpq4nGls-unsplash.jpg";
import LeadershipCard from "../ui/LeadershipCard";
import Arrow from "../icons/Arrow";

type Props = {};

const Leadership = (props: Props) => {
  return (
    <section className="w-full mx-auto h-screen md:h-auto mt-28">
      <div className="w-full ">
        <h3 className=" text-2xl md:text-4xl font-[500] tracking-tighter uppercase">
          Leadership
        </h3>
      </div>

      <div className="mt-16 w-full h-full">
        <div className="w-full h-auto sm:h-full grid grid-cols-2 xl:flex justify-end gap-x-4 gap-y-5 md:gap-x-10 md:gap-y-14 ">
          <LeadershipCard />
          <LeadershipCard />
          <LeadershipCard />
          <LeadershipCard />
        </div>
      </div>
    </section>
  );
};

export default Leadership;
