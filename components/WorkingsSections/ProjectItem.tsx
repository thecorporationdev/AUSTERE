import { shimmer, toBase64 } from "@/lib/image";
import Image, { StaticImageData } from "next/image";
import React from "react";

import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import Reveal from "../Reveal";
type Props = {
  image: StaticImageData;
  projectname: string;
  description: string;
  slug: string;
};

const ProjectItem = (props: Props) => {
  const { image, projectname, slug, description } = props;
  const truncatedDescription =
    description.length > 400
      ? description.slice(0, 400 - 3) + "..." // Subtract 3 characters for "..."
      : description;

  return (
    <div className=" w-full  border-b-2 border-gray-400 py-4 ">
      <Link href={`Workings/${slug}`} className="hover:scale-105">
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
              <div className="flex h-full w-full flex-col gap-y-4 lg:gap-y-8">
                <div className="w-full flex justify-between lg:mt-10 ">
                  <h2 className="font-[400] text-base lg:text-2xl uppercase">
                    {projectname}
                  </h2>

                  <FiArrowUpRight className="text-5xl font-semibold mb-4 " />
                </div>
                <Reveal>
                  <p className="font-[300] text-[15px] md:text-[17px] tracking-wide leading-[20px] md:leading-[28px]">
                    {truncatedDescription}
                    {description.length > 400 && (
                      <Link href={`Workings/${slug}`}>
                        <p className="text-blue-500 inline-block text-xs">
                          Read more
                        </p>
                      </Link>
                    )}
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
