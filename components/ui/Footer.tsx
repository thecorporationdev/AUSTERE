import React from "react";
import Desc from "../sections/hero/Desc";
import Reveal from "../Reveal";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="pb-[12rem] text-black h-screen mt-4 mb-10">
      <div className="w-full">
        <div className="w-full flex items-center justify-center py-24">
          <Reveal>
            <Link href="/Contact">
              <div className="border-b-2 hover:scale-105  uppercase transition-all duration-150 font-medium border-black py-1 text-2xl md:text-6xl  tracking-normal px-4 ">
                Let&apos;s go to work
              </div>
            </Link>
          </Reveal>
        </div>

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
      <div className="w-full bg-white h-[30vh]"></div>
    </footer>
  );
};

export default Footer;
