"use client";
import React from "react";
import LargeLogo from "../../icons/LargeLogo";
import { Button } from "../../ui/button";
import Hamburger from "../../ui/Hamburger";
import { useState } from "react";
import { LogoMotionDiv } from "@/components/ui/MotionDiv";

type Props = {};

const Header = (props: Props) => {
  const [bar, setbar] = useState<boolean>(false);
  return (
    <header className="py-2">
      <LogoMotionDiv className="px-5 md:px-14 py-2 flex items-center justify-between w-full ">
        <div className="flex justify-between w-full items-center">
          <LargeLogo classes=" h-10 w-24 md:w-32 " />

          <div className="flex gap-x-20 items-center ">
            <Button className="py-[0.5rem]  items-center justify-center bg-transparent font-medium border-gray-500 px-2 text-gray-500 border-2 rounded-xl  h-5 text-xs leading-none hover:text-white hidden md:flex">
              Getintouch
            </Button>

            <Hamburger
              barstate={bar}
              barfunction={setbar}
              className={`z-[8000]`}
            />
          </div>
        </div>
      </LogoMotionDiv>
    </header>
  );
};

export default Header;
