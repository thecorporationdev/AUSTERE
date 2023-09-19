import React from "react";
import Desc from "../sections/hero/Desc";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="pb-32  h-screen mt-4">
      <div className="w-full">
        <div className="w-full flex items-center justify-center py-24">
          <div className="border-b-2 font-medium border-black py-1 text-2xl md:text-6xl  tracking-normal px-4 uppercase">
            Let&apos;s go to work
          </div>
        </div>

        <Desc />
        <div className="w-[92%]  mx-auto  mt-14 px-3 py-2 max-md:mt-24">
          <div className="md:w-[65%] flex max-sm:mt-10 max-md:justify-center">
            <p className="tracking-tighter text-xs  font-semibold">
              &copy; 2023TCMedia All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
