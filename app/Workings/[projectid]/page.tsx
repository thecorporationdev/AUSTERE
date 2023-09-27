import { shimmer, toBase64 } from "@/lib/image";
import Image from "next/image";
import React from "react";
import image from "../../../public/nathan-cima-2JNNpq4nGls-unsplash.jpg";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import Reveal from "@/components/Reveal";
import { workings } from "@/app/Data/data";
import Project from "@/components/ui/Project";

type Props = {
  params: { projectid: string };
};

const page = (props: Props) => {
  const { params } = props;
  function pickRandomObjects(arr: any, numObjectsToPick: number) {
    if (numObjectsToPick >= arr.length) {
      return [...arr];
    }

    const shuffledArray = arr.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      // Shuffle the array using Fisher-Yates shuffle algorithm
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }

    // Pick the first numObjectsToPick elements from the shuffled array
    return shuffledArray.slice(0, numObjectsToPick);
  }
  const randomObjects = pickRandomObjects(workings, 3);
  const projectdata = workings.find(
    (project) => project.id === params.projectid
  );

  return (
    <>
      <section className="max-w-[90%] mx-auto pt-32 md:pt-24">
        <div className="flex w-full">
          <h1 className="w-full text-4xl md:text-6xl mx-auto xl:text-8xl font-[500] text-left uppercase md:py-10">
            the
            <br className="md:hidden" /> workings
          </h1>
        </div>

        <div className="h-[3px] w-full bg-black mt-10" />

        <div className="w-full flex gap-x-20 mt-10 flex-col md:flex-row">
          <div className="w-full ">
            <div className=" w-full flex flex-col  items-center justify-center ">
              {projectdata?.images.slice(0, 4).map((image, idx) => (
                <div
                  className=" h-[300px] md:h-[400px] w-full relative overflow-hidden border-gray-400  border-2   bg-gray-100 mt-5"
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
          <div className="w-full max-md:mt-10">
            <div className="w-full pb-10">
              <h1 className="font-[400] text-2xl md:text-3xl uppercase">
                {projectdata?.brandname}
              </h1>
            </div>
            <Reveal>
              <p className="text-base md:text-[17px]">
                {projectdata?.description}
              </p>
            </Reveal>

            <div className="">
              {projectdata?.images.slice(4, 7).map((image, idx) => (
                <div
                  className="  h-[300px] md:h-[400px] w-full relative overflow-hidden border-gray-400  border-2 bg-gray-100 mt-5"
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
                    className="bg-cover group-hover:scale-105 transition-all duration-150  h-full"
                  />
                </div>
              ))}
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
