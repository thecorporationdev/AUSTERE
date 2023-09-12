import { shimmer, toBase64 } from "@/lib/image";
import Image from "next/image";
import React from "react";
import image from "../../public/nathan-cima-2JNNpq4nGls-unsplash.jpg";
import LeadershipCard from "../ui/LeadershipCard";
import Arrow from "../icons/Arrow";

type Props = {};

const Leadership = (props: Props) => {
  return (
    <section className="w-full max-w-[90%] mx-auto h-screen md:h-auto mt-20">
      <div className="w-full ">
        <h3 className=" text-2xl md:text-4xl font-extrabold tracking-tighter uppercase">
          Leadership
        </h3>
      </div>

      <div className="mt-20 w-full h-full">
        <div className="w-full h-auto sm:h-full grid grid-cols-2 xl:flex justify-end gap-x-4 gap-y-5 md:gap-x-10 md:gap-y-14 ">
          <LeadershipCard />
          <LeadershipCard />
          <LeadershipCard />
          <div className=" max-sm:h-[300px] xl:w-[250px] xl:h-[400px] flex items-center justify-center relative overflow-hidden rounded-lg border-2 border-black">
            <p className="tracking-tighter underline underline-offset-2 flex items-center justify-center text-[10px] font-bold uppercase md:text-base">
              joinourteam <Arrow />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
