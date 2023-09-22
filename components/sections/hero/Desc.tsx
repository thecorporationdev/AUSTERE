"use client";
import Reveal from "@/components/Reveal";
import React from "react";

type Props = {};

const Desc = (props: Props) => {
  return (
    <section className="mt-6 md:mt-16 w-[92%] mx-auto flex-col flex">
      <div className="h-[3px] w-full bg-black"></div>
      <div className="flex justify-end">
        <div className=" md:w-[80%]  md:h-[30vh] mt-3 flex flex-col md:flex-row justify-between ">
          <div className="flex flex-col gap-y-1  font-[500] uppercase ">
            <span className="mt-0 text-xs">AFRICA&apos;S FOREMOST</span>
            <span className="text-xs">HUMAN CENTERED</span>
            <span className="text-xs">MINIMALIST DESIGN AGENCY</span>
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

              <div className="flex mt-3 md:mt-0 flex-col justify-start font-semibold gap-y-8 md:gap-y-12">
                <ul className="text-xs font-[500]">
                  <Reveal>
                    <li className="underline text-xs text-light">
                      8 IBM Haruna Street
                    </li>
                  </Reveal>

                  <Reveal>
                    <li className="underline text-xs text-light">
                      Utako District Abuja-FCT 900211
                    </li>
                  </Reveal>
                </ul>
                <Reveal>
                  <div className=" text-light text-xs font-[500]">
                    <div className=" underline-offset-1 underline hover:scale-105">
                      <a href="tel:+23492910050">+234 929 10050</a>
                    </div>
                    <div className=" underline underline-offset-1 hover:scale-105">
                      <a href="mailto:office@thecorporation.xyz ">
                        office@thecorporation.xyz
                      </a>
                    </div>
                  </div>
                </Reveal>

                <ul className="capitalize undeline text-xs  font-[500]">
                  <Reveal>
                    <li className="underline ">
                      <a href="https://www.behance.net/TheAustereAFR">
                        behance
                      </a>
                    </li>
                  </Reveal>
                  <Reveal>
                    <li className="underline ">
                      <a href="https://web.facebook.com/TheAustereAFR">
                        facebook
                      </a>
                    </li>
                  </Reveal>
                  <li className="underline">
                    <a href="https://twitter.com/TheAustereAFR">twitter</a>
                  </li>
                  <li className="underline">
                    <a href="ttps://www.instagram.com/TheAustereAFR/">
                      instagram
                    </a>
                  </li>
                </ul>

                <ul className=" text-xs uppercase font-[500]">
                  <li className="capitalize font-medium underline underline-offset-1">
                    legal
                  </li>
                  <li className="capitalize font-medium underline underline-offset-1">
                    privacy
                  </li>
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

// https://www.behance.net/TheAustereAFR

// https://web.facebook.com/TheAustereAFR

// https://twitter.com/TheAustereAFR

// https://www.instagram.com/TheAustereAFR/
