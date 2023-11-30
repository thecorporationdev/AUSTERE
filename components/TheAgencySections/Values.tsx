import React from "react";
import Value from "../ui/Value";
import ValueCarousel from "../ui/Valuecarousel";
import Reveal from "../Reveal";
import ValuesSlider from "../ui/Slider";

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
    <div className="max-sm:mt-24 max-md:mt-36 mt-24 ">
      <div className="w-full flex ">
        <Reveal>
          <div className="flex justify-between items-start flex-col md:flex-row mb-4">
            <h3 className="tracking-tighter  text-3xl md:text-4xl w-full uppercase  md:py-0 font-[500]">
              brand <br />
              values
            </h3>

            <div className="w-full md:border-t-2 md:border-black flex flex-col mt-4">
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

      <div className=" mt-8 mb-32 ">
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 max-lg:gap-y-4 xl:grid-cols-5 gap-x-2">
          {values.map((data) => (
            <Value key={data.id} value={data?.values} />
          ))}
        </div>

        <div className="sm:hidden">
          <ValuesSlider />
        </div>
      </div>
    </div>
  );
};

export default Values;
