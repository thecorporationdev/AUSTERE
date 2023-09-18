"use client";
import React from "react";
import { LargeLogo } from "@/components/icons/LargeLogo";
import Hamburger from "../../ui/Hamburger";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { LogoMotionDiv } from "@/components/ui/MotionDiv";
import SmallBtn from "@/components/ui/SmallBtn";
import Mobilenav from "@/components/ui/Mobilenav";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  const [bar, setbar] = useState<boolean>(false);

  return (
    <>
      <AnimatePresence>
        {bar && <Mobilenav hideModalHandler={setbar} barstate={bar} />}
      </AnimatePresence>
      <header className="py-2 md:px-14 ">
        <LogoMotionDiv className="px-5 md:px-8 py-2 flex items-center justify-between w-full ">
          <div className="flex justify-between w-full items-center">
            <Link href="/">
              <LargeLogo
                classes=" h-10 w-24 md:w-32 z-[90000] sticky "
                barstate={bar}
              />
            </Link>

            <div className="flex gap-x-20 items-center ">
              {/* <SmallBtn className="hidden md:flex font-bold">
                Getintouch
              </SmallBtn> */}

              <Hamburger
                barstate={bar}
                barfunction={setbar}
                className={`z-[8000] fixed`}
              />
            </div>
          </div>
        </LogoMotionDiv>
      </header>
    </>
  );
};

export default Header;
