import { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Hamburger from "./Hamburger";
interface MobileNavProps {
  hideModalHandler: (barstate: boolean) => void;
  barstate: boolean;
}

const Mobilenav: FC<MobileNavProps> = (props: MobileNavProps) => {
  const { hideModalHandler, barstate } = props;

  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.4,
        delay: 0.2,
      },
    },
  };
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 botton-0 overflow-hidden flex items-center  text-white text-2xl lg:text-4xl justify-center h-screen w-screen bg-black z-[400] text-center"
        variants={item}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "100vh", opacity: 1 }}
        transition={{ duration: 0.4 }}
        exit="exit"
      >
        <ul className=" flex flex-col gap-y-6 px-2 py-10 uppercase font-black underline underline-offset-8 ">
          <Link href="/">
            <motion.li
              variants={item}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => {
                hideModalHandler(!barstate);
              }}
            >
              The start
            </motion.li>
          </Link>
          <Link href="/Capability">
            <motion.li
              variants={item}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => {
                hideModalHandler(!barstate);
              }}
            >
              capability
            </motion.li>
          </Link>
          <Link href="/TheAgency">
            <motion.li
              variants={item}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => {
                hideModalHandler(!barstate);
              }}
            >
              the agency
            </motion.li>
          </Link>
          <Link href="/Workings">
            <motion.li
              variants={item}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => {
                hideModalHandler(!barstate);
              }}
            >
              workings
            </motion.li>
          </Link>
          <Link href="/Contact">
            <motion.li
              variants={item}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => {
                hideModalHandler(!barstate);
              }}
            >
              contact us
            </motion.li>
          </Link>
        </ul>
      </motion.div>
    </>
  );
};

export default Mobilenav;
