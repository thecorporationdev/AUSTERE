"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter, useParams } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const path = useParams();
  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.div
          key={Math.random().toFixed()}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 1,
          }}
          variants={{
            initialState: {
              opacity: 0,
              //   clipPath: "polygon(100% 50%, 0 50%, 0 100%, 100% 50%)",
            },
            animateState: {
              opacity: 1,
              //   clipPath: "polygon(100% 100%, 0 100%, 0 0, 100% 0)",
            },
            exitState: {
              //   clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
            },
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
