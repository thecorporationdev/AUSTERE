import { shimmer, toBase64 } from "@/lib/image";
import Image from "next/image";
import React from "react";
import image from "../../../public/nathan-cima-2JNNpq4nGls-unsplash.jpg";
import Link from "next/link";
import Footer from "@/components/ui/Footer";

import SmallBtn from "@/components/ui/SmallBtn";
import { FiArrowUpRight } from "react-icons/fi";
import InsightLink from "@/components/ui/InsightLink";
import Reveal from "@/components/Reveal";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <section className="py-32 md:py-24">
        <Reveal>
          <div className="flex w-full max-w-[90%] mx-auto ">
            <h1 className="w-full text-4xl md:text-6xl mx-auto xl:text-8xl font-[400] text-left uppercase md:py-10">
              the <br className="md:hidden" /> insights
            </h1>
          </div>
        </Reveal>
        <div className="h-[3px] w-full bg-black mt-10 max-w-[90%] mx-auto " />

        <div className="w-full mb-10 max-w-[90%] mx-auto ">
          <div className="lg:w-[55%] flex justify-between h-[10vh] items-end py-4 mt-4">
            <h2 className="text-xl md:text-4xl font-[400]"> INSIGHT TOPIC</h2>
          </div>
        </div>
        <div className="w-full">
          <div className=" h-[450px] relative overflow-hidden  bg-gray-100">
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

        <div className="w-full mt-6 max-md:px-3 max-w-[90%] mx-auto ">
          <h3 className="text-xl lg:text-3xl font-bold ">
            CORPORATE CULTURE DEPENDS ON WHAT YOUR CEO SAYS
          </h3>
          <p className="mt-3 text-[12px] md:text-[14px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus doloremque consequatur pariatur quo consequuntur
            sequi expedita dignissimos culpa! Ratione corporis minus fugit
            voluptas laborum? Dolor cupiditate dolores voluptates et placeat?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
            itaque tempora accusamus suscipit sapiente atque, magni doloremque
            eos repudiandae, quas rem nesciunt recusandae veritatis ullam
            laudantium, accusantium asperiores eius ipsam. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Itaque omnis quo accusantium
            perspiciatis? Et doloribus quas provident explicabo quis consequatur
            numquam, est laboriosam, nesciunt, adipisci soluta. Provident cum
            incidunt ipsa.
          </p>
          <p className="mt-3 text-[12px] md:text-[14px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus doloremque consequatur pariatur quo consequuntur
            sequi expedita dignissimos culpa! Ratione corporis minus fugit
            voluptas laborum? Dolor cupiditate dolores voluptates et placeat?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
            itaque tempora accusamus suscipit sapiente atque, magni doloremque
            eos repudiandae, quas rem nesciunt recusandae veritatis ullam
            laudantium, accusantium asperiores eius ipsam. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Itaque omnis quo accusantium
            perspiciatis? Et doloribus quas provident explicabo quis consequatur
            numquam, est laboriosam, nesciunt, adipisci soluta. Provident cum
            incidunt ipsa.
          </p>
          <p className="mt-3 text-[12px] md:text-[14px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus doloremque consequatur pariatur quo consequuntur
            sequi expedita dignissimos culpa! Ratione corporis minus fugit
            voluptas laborum? Dolor cupiditate dolores voluptates et placeat?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
            itaque tempora accusamus suscipit sapiente atque, magni doloremque
            eos repudiandae, quas rem nesciunt recusandae veritatis ullam
            laudantium, accusantium asperiores eius ipsam. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Itaque omnis quo accusantium
            perspiciatis? Et doloribus quas provident explicabo quis consequatur
            numquam, est laboriosam, nesciunt, adipisci soluta. Provident cum
            incidunt ipsa.
          </p>
          <p className="mt-3 text-[12px] md:text-[14px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus doloremque consequatur pariatur quo consequuntur
            sequi expedita dignissimos culpa! Ratione corporis minus fugit
            voluptas laborum? Dolor cupiditate dolores voluptates et placeat?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
            itaque tempora accusamus suscipit sapiente atque, magni doloremque
            eos repudiandae, quas rem nesciunt recusandae veritatis ullam
            laudantium, accusantium asperiores eius ipsam. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Itaque omnis quo accusantium
            perspiciatis? Et doloribus quas provident explicabo quis consequatur
            numquam, est laboriosam, nesciunt, adipisci soluta. Provident cum
            incidunt ipsa.
          </p>
        </div>

        <div className="h-[3px] max-w-[90%] mx-auto  bg-black mt-10"></div>
        <div className="max-lg:px-3  mt-10 md:mt-20 max-w-[90%] mx-auto ">
          <h3 className="uppercase font-bold text-base md:text-xl mb-4">
            More insights
          </h3>
          <div className="flex flex-col items-end justify-center">
            <div className="w-full ">
              <Link href="/Insights/20">
                <InsightLink />
              </Link>
              <Link href="/Insights/20">
                <InsightLink />
              </Link>
              <Link href="/Insights/20">
                <InsightLink />
              </Link>
              <Link href="/Insights/20">
                <InsightLink />
              </Link>
              <Link href="/Insights/20">
                <InsightLink />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
function RelatedinsightLink(props: Props) {
  return (
    <div className="w-full mt-4">
      <div className="flex border-b-2 border-gray-500 justify-between  py-2 lg:py-5">
        <div className="tracking-[-0.02] text-base md:text-3xl capitalize font-semibold">
          digital producer
        </div>
        <div className="flex text-gray-500 font-semibold  gap-x-4 lg:gap-x-6">
          <SmallBtn className="text-[11px]">blog</SmallBtn>
          <SmallBtn className="text-[11px]">2000</SmallBtn>
        </div>
        <FiArrowUpRight className="text-5xl font-semibold" />
      </div>
      <p className="text-xs md:text-sm font-[300] leading-[20px] lg:leading-[30px] tracking-wide">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga odit
        voluptatum molestias dolorem maxime aliquam qui culpa ut laudantium
        temporibus praesentium atque, possimus illo ab inventore pariatur porro
        nisi deleniti.
      </p>
    </div>
  );
}
