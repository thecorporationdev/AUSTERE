import { shimmer, toBase64 } from "@/lib/image";
import Image from "next/image";
import React from "react";
import image from "../../public/nathan-cima-2JNNpq4nGls-unsplash.jpg";
import SmallBtn from "../ui/SmallBtn";
import Arrow from "../icons/Arrow";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import Reveal from "../Reveal";
type Props = {};

const ProjectItem = (props: Props) => {
  return (
    <div className=" w-full  border-b-2 border-gray-400 py-4 ">
      <Link href="Workings/20" className="hover:scale-105">
        <div className="w-full flex flex-col lg:flex-row justify-between gap-y-4">
          <div className="lg:w-5/12">
            <Reveal>
              <div className=" h-[350px] relative overflow-hidden  bg-gray-100">
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
            </Reveal>
          </div>
          <div className="lg:w-6/12 ">
            <div className="w-[90%] mx-auto">
              <div className="flex h-full w-full flex-col gap-y-4 lg:gap-y-10">
                <div className="w-full flex justify-between lg:mt-20 ">
                  <h2 className="font-[400] text-2xl lg:text-3xl uppercase">
                    iboats
                  </h2>

                  <FiArrowUpRight className="text-5xl font-semibold mb-4 " />
                </div>
                <Reveal>
                  <p className="font-[300]  text-[12px] md:text-sm tracking-normal leading-[20px] md:leading-[30px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi esse, fuga ratione illo nam corporis qui est dolorem
                    ex blanditiis temporibus neque accusantium deserunt iste.
                    Placeat earum incidunt iste dignissimos.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectItem;
