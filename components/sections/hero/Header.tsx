"use client";
import React from "react";
import LargeLogo from "../../icons/LargeLogo";
import { Button } from "../../ui/button";
import Hamburger from "../../ui/Hamburger";
import { useState } from "react";
import { LogoMotionDiv } from "@/components/ui/MotionDiv";
import SmallBtn from "@/components/ui/SmallBtn";

type Props = {};

const Header = (props: Props) => {
  const [bar, setbar] = useState<boolean>(false);
  return (
    <header className="py-2 md:px-16">
      <LogoMotionDiv className="px-5 md:px-14 py-2 flex items-center justify-between w-full ">
        <div className="flex justify-between w-full items-center">
          <LargeLogo classes=" h-10 w-24 md:w-32 " />

          <div className="flex gap-x-20 items-center ">
            <SmallBtn className="hidden md:flex font-bold">
              {" "}
              Getintouch
            </SmallBtn>

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
