import { shimmer, toBase64 } from "@/lib/image";
import Image from "next/image";
import React from "react";
import image from "../../public/nathan-cima-2JNNpq4nGls-unsplash.jpg";
import SmallBtn from "../ui/SmallBtn";
import Arrow from "../icons/Arrow";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
type Props = {};

const ProjectItem = (props: Props) => {
  return (
    <div className=" w-full  border-b-2 border-gray-400 py-4 ">
      <div className="w-full flex flex-col lg:flex-row justify-between gap-y-4">
        <div className="lg:w-5/12">
          <div className=" h-[350px] relative overflow-hidden rounded-lg border-2 border-gray-200 bg-gray-100">
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
        </div>
        <div className="lg:w-6/12 ">
          <div className="w-[90%] mx-auto">
            <div className="flex h-full w-full flex-col gap-y-4 lg:gap-y-10">
              <div className="w-full">
                <SmallBtn className="text-sm md:text-base mt-1 md:mt-0">
                  strategy
                </SmallBtn>
                /
                <SmallBtn className="text-sm md:text-base mt-1 md:mt-0">
                  development
                </SmallBtn>
              </div>
              <div className="w-full flex justify-between lg:mt-20 ">
                <h2 className="font-bold text-2xl lg:text-3xl uppercase">
                  iboats
                </h2>
                <Link href="Workings/20">
                  <FiArrowUpRight className="text-5xl font-semibold" />
                </Link>
              </div>
              <p className="font-bold  text-[12px] md:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                esse, fuga ratione illo nam corporis qui est dolorem ex
                blanditiis temporibus neque accusantium deserunt iste. Placeat
                earum incidunt iste dignissimos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
