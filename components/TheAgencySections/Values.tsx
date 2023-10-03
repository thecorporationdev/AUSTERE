import React from "react";
import Value from "../ui/Value";
import ValueCarousel from "../ui/Valuecarousel";
import Reveal from "../Reveal";

const values = [
  { id: 1, values: "tactical" },
  { id: 2, values: "refreshing" },
  { id: 3, values: "affirmative" },
  { id: 4, values: "dependable" },
  { id: 5, values: "energetic" },
];

type Props = {};

const Values = (props: Props) => {
  return (
    <div className="max-sm:mt-32 mt-24">
      <div className="w-full flex ">
        <Reveal>
          <div className="flex justify-between items-start flex-col md:flex-row">
            <h3 className="tracking-tighter  text-3xl md:text-4xl w-full uppercase  md:py-0 font-[500]">
              brand <br />
              values
            </h3>

            <div className="w-full md:border-t-2 md:border-black flex flex-col">
              <Reveal>
                <p className="mt-2 text-base md:text-[17px]  text-left leading-[24px] md:leading-[28px]">
                  AUSTERE&apos;s values play a vital role in shaping our
                  identity and reputation. These values serve as guiding
                  principles that define our perspectives and impact our
                  interactions with stakeholders and audiences, allowing us to
                  establish a strong and authentic presence in the market.
                </p>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>

      {/* <ValueCarousel /> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mt-10 md:mt-24 gap-y-6 gap-x-4 max-sm:mt-16 ">
        {values.map((data) => (
          <Value key={data.id} value={data?.values} />
        ))}
      </div>
    </div>
  );
};

export default Values;
