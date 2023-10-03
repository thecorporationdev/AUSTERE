import Arrow from "@/components/icons/Arrow";
import InsightLink from "@/components/ui/InsightLink";
import Link from "next/link";
import React from "react";
import { InsightsData } from "@/app/Data/data";
import insights from "@/app/Insights/page";

type Props = {};

const Insights = (props: Props) => {
  return (
    <section className="mt-10">
      <div className="w-full">
        <div className="lg:w-[53%] flex justify-between capitalize items-center text-center ">
          <h3 className="text-2xl md:text-3xl uppercase tracking-tighter font-[500]">
            the insights
          </h3>
        </div>
        <div className="w-full mt-10 md:mt-20 flex justify-end">
          <div className="w-full ">
            {InsightsData.map((insights) => (
              <Link href={`/Insights/${insights.id}`} key={insights.id}>
                <InsightLink title={insights.title} />
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full mt-3 md:mt-16 flex justify-end">
          <div className=" w-1/2 flex justify-end md:justify-start ">
            <div className="flex items-center underline underline-offset-2 ">
              <Link href="/Insights">
                <h1 className="text-xs md:text-base tracking-tighter uppercase mb-2  font-light ">
                  All insights
                </h1>
              </Link>

              <Arrow />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
