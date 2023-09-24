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
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import SmallLogo from "@/components/icons/SmallLogo";

type Props = {};

const Header = (props: Props) => {
  const [bar, setbar] = useState<boolean>(false);
  const [hidden, sethidden] = useState(false);
  const [logochange, setlogochange] = useState(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 50) {
      // sethidden(true);
      setlogochange(true);
    } else {
      // sethidden(false);
      setlogochange(false);
    }
  });

  return (
    <>
      <AnimatePresence>
        {bar && <Mobilenav hideModalHandler={setbar} barstate={bar} />}
      </AnimatePresence>
      {logochange ? (
        <header
          className={`py-2 md:px-12  fixed w-screen top-0 left-0 z-[3000000] transition-colors duration-100 ${
            bar
              ? "bg-transparent"
              : "bg-white backdrop:filter transition-all duration-200"
          } `}
        >
          <Link href="/" className="">
            <SmallLogo
              barstate={bar}
              className=" h-8 w-10 md:w-16 z-[90000] sticky transition-all duration-150 top-2"
            />
          </Link>
        </header>
      ) : (
        <motion.header
          transition={{ duration: 0.35, ease: "easeInOut" }}
          variants={{ hidden: { y: "-100%" }, visible: { y: 0 } }}
          animate={hidden ? "hidden" : "visible"}
          initial=""
          className={`py-2 md:px-12  fixed w-screen top-0 left-0 z-[3000000] transition-colors duration-100 ${
            bar ? "bg-transparent" : "bg-white transition-all duration-200"
          } `}
        >
          <LogoMotionDiv className="px-5 md:px-8 py-2 flex items-center justify-between w-full ">
            <div className="flex justify-between w-full items-center">
              <Link href="/">
                <LargeLogo
                  classes=" h-10 w-20 md:w-28 z-[90000] sticky transition-all duration-150"
                  barstate={bar}
                />
              </Link>

              <div className="flex gap-x-20 items-center ">
                <Hamburger
                  barstate={bar}
                  barfunction={setbar}
                  className={`z-[8000] fixed`}
                />
              </div>
            </div>
          </LogoMotionDiv>
        </motion.header>
      )}
    </>
  );
};

export default Header;
