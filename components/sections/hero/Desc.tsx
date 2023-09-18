import React from "react";
import Arrow from "../../icons/Arrow";
import { DescMotionDiv, LineMotionDiv } from "../../ui/MotionDiv";

type Props = {};

const Desc = (props: Props) => {
  return (
    <section className="mt-6 md:mt-20 w-[92%] mx-auto flex-col flex ">
      <LineMotionDiv className="h-[3px] w-full bg-black">.</LineMotionDiv>
      <div className="flex justify-end">
        <div className=" md:w-[80%]  md:h-[30vh] mt-3 flex flex-col md:flex-row justify-between ">
          <div className="flex flex-col gap-y-0  font-bold uppercase tracking-tight">
            <span className="mt-0 text-xs">AFRICA&apos;S FOREMOST</span>
            <span className="text-xs">HUMAN CENTERED</span>
            <span className="mt-0 text-xs ">AFRICA&apos;S FOREMOST</span>
            <span className="text-xs">MINIMALIST</span>
            <span className="text-xs">DESIGN AGENCY</span>
          </div>
          <div className=" mt-4 md:mt-0 md:w-[50%] h-full flex flex-col md:flex-row md:justify-start ">
            <div className=" w-[100%] flex  flex-col md:flex-row  justify-end">
              {/* <div className="flex flex-col gap-y-[0.3rem] ">
                <span className="uppercase tracking-normal text-base font-semibold ">
                  we&apos;re hiring
                </span>

                <a className="flex items-center w-28 underline">
                  <span className="text-[0.7rem] tracking-normal font-semibold cursor-pointer hover:scale-105 transition-all duration-75 ease-linear">
                    SeeJobOpenings
                  </span>
                  <Arrow className=" h-3 underline underline-offset-1 " />
                </a>
              </div> */}

              <div className="flex mt-3 md:mt-0 flex-col justify-start font-semibold">
                <ul className="text-xs">
                  <li className="underline text-xs">8 IBM Haruna Street</li>
                  <li className="underline text-xs">
                    Utako District Abuja-FCT 900211
                  </li>
                </ul>
                <div className="my-8 text-xs">
                  <div className="">+234 (09) 291 0060</div>
                  <div className="mt-3 underline underline-offset-1 tracking-tight">
                    office@thecorporation.xyz
                  </div>
                </div>

                <ul className="capitalize undeline text-xs">
                  <li className="underline ">dribble</li>
                  <li className="underline ">facebook</li>
                  <li className="underline">twitter</li>
                  <li className="underline">linkedin</li>
                </ul>

                <ul className="mt-24 text-xs uppercase">
                  <li className="capitalize">legal</li>
                  <li className="capitalize">privacy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Desc;
