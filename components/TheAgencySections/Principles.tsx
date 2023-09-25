import React from "react";
import { BsArrowDownLeft, BsArrowDownRight } from "react-icons/bs";
import Reveal from "../Reveal";

type Props = {};

const Principles = (props: Props) => {
  return (
    <section className=" w-full flex mt-14 flex-col md:justify-start md:items-center sm:h-[70vh]">
      <div className="w-full flex md:justify-start ">
        <div className="w-full md:w-1/2">
          <div className="w-full flex justify-between items-center md:w-8/12">
            <Reveal>
              <h3 className=" w-full tracking-tighter max-md:text-4xl  font-[500]  md:text-4xl uppercase">
                our core <br /> principles
              </h3>
            </Reveal>
          </div>
        </div>
      </div>
      <div className="w-full flex md:justify-end max-md:mt-10">
        <div className="md:w-1/2 mt-10 md:mt-0 space-y-4  min-[400px]:space-y-10 w-full">
          <Principle
            title="people"
            p="we employ and empower creative thinkers"
          />
          <Principle
            title="process"
            p="we employ and empower creative thinkers"
          />
          <Principle
            title="tools"
            p="we employ and empower creative thinkers"
          />
        </div>
      </div>
    </section>
  );
};

export default Principles;

function Principle({ title, p }: { title: string; p: string }) {
  return (
    <div className=" border-t-2 border-black flex flex-col-reverse md:flex-row  md:justify-between mb-2  md:items-center">
      <Reveal>
        <h3 className="w-full text-5xl mt-2 font-[500] capitalize tracking-tight max-md:text-left py-1">
          {title}
        </h3>
      </Reveal>

      <p className="break-words w-full whitespace-normal flex md:items-center md:justify-center text-[14px] min-[400px]:mt-4 font-[400] sm:mt-3 sm:w-1/2 lg:w-4/12 md:text-right">
        {p}
      </p>
    </div>
  );
}

{
  /* <div className="flex flex-col md:flex-row md:gap-x-20">
        <div className="md:w-2/5 flex justify-between items-center">
          <h3 className="tracking-tighter font-black text-2xl md:text-4xl uppercase">
            our core <br /> principles
          </h3>
          <BsArrowDownRight className=" text-3xl md:text-5xl " />
        </div>
        <div className="flex-1 md:py-10 mt-10">
          <Principle
            title="people"
            p="we employ and empower creative thinkers"
          />
          <Principle
            title="process"
            p="we employ and empower creative thinkers"
          />
          <Principle
            title="tools"
            p="we employ and empower creative thinkers"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:gap-x-20 mt-10">
        <div className="md:w-2/5 flex justify-between items-center">
          <h3 className="tracking-tighter font-black text-2xl md:text-4xl uppercase">
            our
            <br /> Values
          </h3>
        </div>
        <div className="flex-1 md:py-10"></div>
      </div> */
}
