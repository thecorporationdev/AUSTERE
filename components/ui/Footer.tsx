import React from "react";
import Desc from "../sections/hero/Desc";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="pt-20 ">
      <div className="w-full">
        <div className="w-full flex items-center justify-center">
          <div className="border-2 font-extrabold border-black  px-3 py-2 text-2xl md:text-6xl rounded-[4rem] tracking-tighter">
            Let&apos;s go to work
          </div>
        </div>

        <Desc />
        <div className="w-full mt-4 px-3 py-2">
          <div className="md:w-[65%] flex justify-between ">
            <p className="tracking-tighter text-xs  font-semibold">
              &copy; 2023TCMedia All Rights Reserved
            </p>
            <div className="flex items-center justify-between font-semibold w-3/12 tracking-tighter capitalize text-xs ">
              <p>legal</p>
              <p>privacy</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
