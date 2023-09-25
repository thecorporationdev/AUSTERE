import { shimmer, toBase64 } from "@/lib/image";
import Image from "next/image";
import React from "react";
import image from "../../../public/nathan-cima-2JNNpq4nGls-unsplash.jpg";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import Reveal from "@/components/Reveal";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <section className="max-w-[90%] mx-auto py-32 md:py-24">
        <Reveal>
          <div className="flex w-full">
            <h1 className="w-full text-4xl md:text-6xl mx-auto xl:text-8xl font-[500] text-left uppercase md:py-10">
              the
              <br className="md:hidden" /> workings
            </h1>
          </div>
        </Reveal>
        <div className="h-[3px] w-full bg-black mt-10" />

        <div className="w-full flex gap-x-20 mt-10 flex-col md:flex-row">
          <div className="w-full ">
            <div className=" w-full flex flex-col gap-y-10 items-center justify-center ">
              <div className="h-[300px] w-full  relative overflow-hidden  bg-gray-100 ">
                <Image
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64, ${toBase64(
                    shimmer(400, 400)
                  )}`}
                  src={image}
                  alt="boatimage"
                  fill
                  // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-all duration-150 bg-center h-full"
                />
              </div>
              <div className=" h-[300px] w-full   relative overflow-hidden  bg-gray-100">
                <Image
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64, ${toBase64(
                    shimmer(400, 400)
                  )}`}
                  src={image}
                  alt="boatimage"
                  fill
                  // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-all duration-150 bg-center h-full"
                />
              </div>
            </div>
          </div>
          <div className="w-full max-md:mt-10">
            <div className="w-full pb-10">
              <h1 className="font-[400] text-2xl md:text-3xl">IBOATS</h1>
            </div>
            <Reveal>
              <p className=" text-[12px] md:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum eum eius ipsa qui earum! Dolorem earum quae maiores
                laboriosam, ullam repellendus dignissimos ea? Esse ipsum animi
                doloremque quas nisi nemo! Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Asperiores nam, voluptatum libero
                earum nemo, fuga veniam rem consequuntur ad esse, non eveniet
                eligendi nisi aliquam amet sint deleniti nesciunt quas?Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Amet,
                aliquid suscipit! Ut asperiores, eos nulla facere sunt numquam.
                Esse exercitationem culpa repudiandae quam aspernatur,
                consequatur asperiores hic distinctio illum ducimus!
              </p>
            </Reveal>
            <div className=" h-[300px] w-full    relative overflow-hidden  bg-gray-100 mt-10">
              <Image
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64, ${toBase64(
                  shimmer(400, 400)
                )}`}
                src={image}
                alt="boatimage"
                fill
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-all duration-150 bg-center h-full"
              />
            </div>
            <div className=" h-[300px] w-full    relative overflow-hidden  bg-gray-100 mt-10">
              <Image
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64, ${toBase64(
                  shimmer(400, 400)
                )}`}
                src={image}
                alt="boatimage"
                fill
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-all duration-150 bg-center h-full"
              />
            </div>
          </div>
        </div>

        <div className="h-[3px] w-full bg-black mt-10"></div>
        <div className="max-lg:px-3 mt-14  md:mt-10">
          <h3 className="uppercase font-bold text-base md:text-xl mb-4">
            Other projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 ">
            <Projectrelated />
            <Projectrelated />
            <Projectrelated />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;

function Projectrelated(props: Props) {
  return (
    <Link href="/Workings/id" className="group text-sm w-full">
      <div className=" h-[400px] relative overflow-hidden bg-gray-100">
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

      <p className="mt-2 text-xl tracking-tighter text-gray-900 font-[400]">
        IBoats
      </p>
    </Link>
  );
}
