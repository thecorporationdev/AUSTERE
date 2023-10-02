import Image, { StaticImageData } from "next/image";
import React from "react";
// import image from "../../public/nathan-cima-2JNNpq4nGls-unsplash.jpg";
import Link from "next/link";
import { shimmer, toBase64 } from "@/lib/image";
import Reveal from "../Reveal";
import { cn } from "@/lib/utils";

type Props = {
  image: StaticImageData;
  projectname: string;
  slug: string;
  className?: string;
};

const Project = (props: Props) => {
  const { image, projectname, slug, className } = props;
  return (
    <Link href={`/Workings/${slug}`} className={cn(`group text-sm w-full `)}>
      <Reveal>
        <div
          className={cn(
            `w-full aspect-[2/1] lg:aspect-[2/1.1] relative overflow-hidden max-md:mt-5 bg-gray-100 ${className}`
          )}
        >
          <Image
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64, ${toBase64(
              shimmer(400, 400)
            )}`}
            src={image}
            alt="projectIMAGE"
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="bg-cover group-hover:scale-105 transition-all duration-150  h-full"
          />
        </div>
      </Reveal>

      <Reveal>
        <p className="mt-4 text-[14px] lg:text-base tracking-tighter text-gray-900 font-[500] uppercase ">
          {projectname}
        </p>
      </Reveal>
    </Link>
  );
};

export default Project;
