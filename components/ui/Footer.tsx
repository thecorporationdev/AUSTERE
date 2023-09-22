"use client";
import React from "react";
import Desc from "../sections/hero/Desc";
import Reveal from "../Reveal";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="pb-[12rem] text-black h-screen mt-4 mb-10">
      <div className="w-full">
        <Reveal>
          <div className="w-full flex items-center justify-center py-24">
            <div className="border-b-2 font-medium border-black py-1 text-2xl md:text-6xl  tracking-normal px-4 uppercase">
              Let&apos;s go to work
            </div>
          </div>
        </Reveal>

        <Desc />
        <Reveal>
          <div className="w-[92%]  mx-auto  mt-[2.8rem] px-3 py-2 max-md:mt-24">
            <div className="md:w-[65%] flex max-sm:mt-10 max-md:justify-center">
              <p className="tracking-tighter text-xs  font-[500]">
                &copy; 2023 AUSTERE All Rights Reserved
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;
