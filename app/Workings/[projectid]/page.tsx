import { shimmer, toBase64 } from "@/lib/image";
import Image from "next/image";
import React from "react";

import Footer from "@/components/ui/Footer";
import Reveal from "@/components/Reveal";
import { workings } from "@/app/Data/data";
import Project from "@/components/ui/Project";
import { cn, pickRandomObjects } from "@/lib/utils";
import { Metadata } from "next";

type Props = {
  params: { projectid: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const projectdata = workings.find(
    (project) => project.id === params.projectid
  );

  return {
    title: projectdata?.brandname || "works",
    description: `This is austere's workings named ${
      projectdata?.brandname || "anonymous"
    }`,
    icons: {
      icon: "./AUSTEREICO.png",
    },
  };
}

const page = (props: Props) => {
  const { params } = props;

  const randomObjects = pickRandomObjects(workings, 3);
  const projectdata = workings.find(
    (project) => project.id === params.projectid
  );

  return (
    <>
      <section className="max-sm:max-w-[94%] max-lg:w-[90%] md:max-w-[90%] mx-auto pt-32 md:pt-24">
        <div className="flex w-full">
          <h1 className="w-full text-4xl md:text-6xl mx-auto xl:text-8xl font-[500] text-left uppercase md:py-10">
            the
            <br className="md:hidden" /> workings
          </h1>
        </div>

        <div className="h-[3px] w-full bg-black mt-10" />

        <div className="w-full flex gap-x-5 mt-10 flex-col md:flex-row">
          <div className="w-full">
            <div className=" w-full flex flex-col  items-center justify-center ">
              <div className="w-full  pb-2 md:hidden">
                <h1 className={cn(`font-[500] text-xl md:text-2xl uppercase`)}>
                  {projectdata?.brandname}
                </h1>
              </div>
              <Reveal>
                <div className="text-base md:text-[17px] leading-[24px] lg:leading-[30px] md:hidden flex flex-col gap-y-3.5">
                  {projectdata?.description.map((data) => (
                    <p key={data.id}>{data.text}</p>
                  ))}
                </div>
              </Reveal>
              {projectdata?.images.slice(0, 14).map((image, idx) => (
                <div
                  className=" w-full aspect-[2/1.1] relative overflow-hidden border-gray-300  border-2   bg-gray-100 mt-5"
                  key={idx}
                >
                  <Image
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64, ${toBase64(
                      shimmer(400, 400)
                    )}`}
                    src={image}
                    alt="boatimage"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="group-hover:scale-105 transition-all duration-150 bg-cover h-full"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full  max-md:mt-4">
            <div className="w-full h-[230px] sm:h-[300px] lg:h-[400px] pb-2 hidden md:block mt-4">
              <h1
                className={cn(`font-[500] mt-4 text-xl lg:text-3xl uppercase`)}
              >
                {projectdata?.brandname}
              </h1>

              <div className="text-base lg:text-[17px] leading-[24px] lg:leading-[30px] hidden md:flex flex-col mt-6 gap-y-3.5">
                {projectdata?.description.map((data) => (
                  <p key={data.id}> {data.text}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="h-[3px] w-full bg-black mt-10"></div>
        <div className="max-lg:px-3 mt-14  md:mt-10">
          <h3 className="uppercase font-bold text-base md:text-xl mb-4">
            Other workings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 ">
            {randomObjects.map((projectrelated: any, idx: number) => (
              <Project
                className=" w-full aspect-[2/1.1] "
                key={idx}
                image={projectrelated.images?.[0]}
                projectname={projectrelated?.brandname}
                slug={projectrelated?.id}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;

// function Projectrelated(props: Props) {
//   return (
//     <Link href="/Workings/id" className="group text-sm w-full">
//       <div className=" h-[400px] relative overflow-hidden bg-gray-100">
//         <Image
//           placeholder="blur"
//           blurDataURL={`data:image/svg+xml;base64, ${toBase64(
//             shimmer(400, 400)
//           )}`}
//           src={image}
//           alt="BOAT IMAGE"
//           fill={true}
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//           className="object-cover group-hover:scale-105 transition-all duration-150 bg-top h-full"
//         />
//       </div>

//       <p className="mt-2 text-xl tracking-tighter text-gray-900 font-[400]">
//         IBoats
//       </p>
//     </Link>
//   );
// }
