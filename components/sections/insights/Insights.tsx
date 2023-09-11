import Arrow from "@/components/icons/Arrow";
import InsightLink from "@/components/ui/InsightLink";
import React from "react";

type Props = {};

const Insights = (props: Props) => {
  return (
    <section className="md:px-14 py-10">
      <div className="w-full">
        <div className="lg:w-[53%] flex justify-between capitalize items-center text-center ">
          <h3 className="text-3xl md:text-5xl uppercase tracking-tighter font-extrabold">
            insights
          </h3>
          <p className=" text-xs lg:text-base text-gray-600 mt-3 md:mt-0">
            our lastest news , views and more
          </p>
        </div>
        <div className=" w-full mt-10 md:mt-28 flex justify-end">
          <div className="w-full md:w-[65%] ">
            <InsightLink />
            <InsightLink />
            <InsightLink />
            <InsightLink />
            <InsightLink />
            <InsightLink />
          </div>
        </div>
        <div className="w-full mt-3 md:mt-16 flex justify-end">
          <div className=" w-1/2 flex justify-end md:justify-start ">
            <div className="flex items-center underline underline-offset-2 text-gray-500 ">
              <h1 className="text-xs md:text-base tracking-tighter uppercase mb-2 text-gray-600 ">
                AllNews
              </h1>
              <Arrow />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
