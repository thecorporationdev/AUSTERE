import React from "react";
import Reveal from "../Reveal";

type Props = {};

const Locationsdets = (props: Props) => {
  return (
    <Reveal>
      <div className="w-full flex flex-col md:flex-row justify-between gap-x-10">
        <div className=" w-full md:justify-start flex">
          <div className="border-black border-t-2 md:w-[85%] max-md:mt-4">
            <div className="flex  justify-between md:justify-start">
              <div className="md:w-3/4 flex  flex-col md:flex-row justify-between mt-2">
                <h1 className="font-[500] text-4xl">ABV</h1>
                <p className="md:w-4/12 text-[12px] font-[400] leading-none mt-3 tracking-wide">
                  8 IBM Haruna Street Utako District Abuja-FCT 900211
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full flex md:justify-end">
          <div className="border-black border-t-2 md:w-[85%] max-md:mt-4">
            <div className="flex md:justify-end">
              <div className="md:w-3/4 flex-col-reverse  md:flex-row  justify-between mt-2 flex">
                <p className="md:w-4/12 text-[12px]  font-[400] leading-none mt-3 tracking-wide">
                  38 TF Kuboye Street Lekki Phase I Lagos State 100211
                </p>
                <h1 className="font-[500] text-4xl">LOS</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default Locationsdets;
