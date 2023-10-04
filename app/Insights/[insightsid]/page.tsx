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
import { InsightsData } from "@/app/Data/data";
import { pickRandomObjects } from "@/lib/utils";
import insights from "../page";

type Props = {
  params: { insightsid: number };
};

const page = (props: Props) => {
  const { params } = props;
  const randomObjects = pickRandomObjects(InsightsData, 3);

  const insight = InsightsData.find(
    (insight) => +insight.id === +params.insightsid
  );

  return (
    <>
      <section className="pt-32 md:pt-24">
        <Reveal>
          <div className="flex w-full max-w-[90%] mx-auto ">
            <h1 className="w-full text-4xl md:text-6xl mx-auto xl:text-8xl font-[400] text-left uppercase md:py-10">
              the <br className="md:hidden" /> insights
            </h1>
          </div>
        </Reveal>
        <div className="h-[3px] w-full bg-black mt-10 max-w-[90%] mx-auto " />

        <div className="w-full flex justify-end mt-10 md:my-20 ">
          <div className=" max-sm:max-w-[90%] max-sm:mx-auto lg:w-1/2 flex justify-end h-[20vh]"></div>
        </div>

        <div className="w-full mt-4">
          <div className="flex max-w-[90%] mx-auto border-b-2 border-black justify-between  py-2">
            <div className="tracking-[-0.02] text-base md:text-3xl capitalize font-semibold">
              {insight?.title}
            </div>
          </div>
          <div className="w-full mt-6">
            <div className=" aspect-[2/1.2] lg:aspect-[2/1]  w-full relative overflow-hidden  bg-gray-100">
              <Image
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64, ${toBase64(
                  shimmer(400, 400)
                )}`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={insight?.image || image}
                alt="boatimage"
                fill
                className="bg-cover  group-hover:scale-105 transition-all duration-150 bg-center h-full w-full"
              />
            </div>
          </div>
          <p className="text-base max-w-[90%] mx-auto md:text-[17px] mt-10  mb-10 leading-[24px] lg:leading-[30px]">
            {insight?.description}
          </p>
          <div className="max-w-[90%] mx-auto md:text-[17px] mt-1">
            {insight?.points.map((points) => (
              <div key={points.id} className="">
                <p className="text-base mb-6">
                  <span className="mr-1 font-semibold ">{points.id}.</span>
                  <span className="uppercase font-semibold text-base mr-2">
                    {points.point}
                  </span>
                  {points.pointdesc}
                </p>
              </div>
            ))}
          </div>

          <div className="">
            <p className="text-base max-w-[90%] mx-auto md:text-[16px] mt-10  mb-10 leading-[24px] lg:leading-[30px] ">
              <span className="font-bold uppercase mr-1">conclusion :</span>
              {insight?.conclusion}
            </p>
          </div>
        </div>
        <div className="h-[3px] max-w-[90%] mx-auto  bg-black mt-10"></div>
        <div className="max-lg:px-3  mt-10 md:mt-20 max-w-[90%] mx-auto ">
          <h3 className="uppercase font-bold text-base md:text-xl mb-4">
            More insights
          </h3>
          <div className="flex flex-col items-end justify-center">
            <div className="w-full ">
              {randomObjects.map((insights: any) => (
                <Link href={`/Insights/${insights.id}`} key={insights.id}>
                  <InsightLink title={insights.title} />
                </Link>
              ))}
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
