import CapabilityLink from "@/components/ui/Capacitylink";
import Footer from "@/components/ui/Footer";
import React from "react";
import { RelatedinsightLink } from "./[insightsid]/page";
import Link from "next/link";
import InsightLink from "@/components/ui/InsightLink";

type Props = {};

const insights = (props: Props) => {
  return (
    <>
      <section className="w-full flex-col  flex md:mt-10 max-w-[90%] mx-auto">
        <div className=" w-full max-md:flex-col mx-auto flex items-left justify-center">
          <h1 className="w-full text-4xl md:text-6xl mx-auto xl:text-8xl font-[500] text-left uppercase md:py-10">
            the insights
          </h1>
        </div>
        <div className="h-[3px] w-full bg-black mt-10"></div>

        <div className="w-full flex justify-end mt-10 md:my-20 ">
          <div className="lg:w-1/2 flex justify-end ">
            <p className=" text-xs md:text-[18px] font-[400] leading-[20px] lg:leading-[30px] tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              laboriosam dolore ipsum tempore voluptate illo fugit, facere
              aliquid facilis, laudantium aperiam suscipit eaque minima maxime.
              Minus consectetur tenetur officia illo? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Magnam laboriosam dolore ipsum
              tempore vo illo?
            </p>
          </div>
        </div>

        <div className="w-full flex lg:justify-end mt-4">
          <div className=" w-full mt-10 md:mt-20 flex justify-end">
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

export default insights;
