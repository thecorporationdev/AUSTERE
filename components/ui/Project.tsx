import Image, { StaticImageData } from "next/image";
import React from "react";
// import image from "../../public/nathan-cima-2JNNpq4nGls-unsplash.jpg";
import Link from "next/link";
import { shimmer, toBase64 } from "@/lib/image";
import Reveal from "../Reveal";

type Props = {
  image: StaticImageData;
  projectname: string;
  slug: string;
};

const Project = (props: Props) => {
  const { image, projectname, slug } = props;
  return (
    <Link href={`/Workings/${slug}`} className="group text-sm w-full">
      <Reveal>
        <div className="h-[300px] md:h-[400px] relative overflow-hidden  bg-gray-100">
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
        <p className="mt-4 text-[14px] md:text-base tracking-tighter text-gray-900 font-[500] uppercase ">
          {projectname}
        </p>
      </Reveal>
    </Link>
  );
};

export default Project;
