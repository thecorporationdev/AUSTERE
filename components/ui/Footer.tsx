import React from "react";
import Desc from "../sections/hero/Desc";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="pt-20 pb-33  h-screen mt-24">
      <div className="w-full">
        <div className="w-full flex items-center justify-center">
          <div className="border-b-2 font-extrabold border-black py-1 text-4xl md:text-6xl  tracking-normal px-4">
            Let&apos;s go to work
          </div>
        </div>

        <Desc />
        <div className="w-[92%]  mx-auto  mt-4 px-3 py-2 max-md:mt-24">
          <div className="md:w-[65%] flex max-sm:mt-10 max-sm:justify-center">
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
