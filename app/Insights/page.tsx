import CapabilityLink from "@/components/ui/Capacitylink";
import Footer from "@/components/ui/Footer";
import React from "react";

import Link from "next/link";
import InsightLink from "@/components/ui/InsightLink";
import Reveal from "@/components/Reveal";
import { InsightsData } from "../Data/data";

type Props = {};

const insights = (props: Props) => {
  return (
    <>
      <section className="w-full flex-col  flex md:mt-10 max-w-[90%] mx-auto pt-32 md:pt-24">
        <Reveal>
          <div className=" w-full max-md:flex-col mx-auto flex items-left justify-center">
            <h1 className="w-full text-4xl md:text-6xl mx-auto xl:text-8xl font-[500] text-left uppercase md:py-10">
              the <br className="md:hidden" /> insights
            </h1>
          </div>
        </Reveal>
        <div className="h-[3px] w-full bg-black mt-10"></div>

        <div className="w-full flex justify-end mt-10 md:my-20 ">
          <div className="lg:w-1/2 flex justify-end ">
            <Reveal>
              <p className=" text-base md:text-[17px] font-[400] leading-[24px] lg:leading-[30px] tracking-wide">
                One of AUSTERE&apos;s defining cultures is our REFRESHING
                approach to ideation, as we constantly push the boundaries and
                think outside the box. We believe that sharing our unique
                thoughts with the world is essential, and we take the time to
                document and present them here. Below, you&apos;ll find some of
                our recent insights on the latest trends in the design industry.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="w-full flex lg:justify-end mt-4">
          <div className=" w-full mt-10 md:mt-20 flex justify-end">
            <div className="w-full ">
              {InsightsData.map((insights) => (
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

export default insights;
