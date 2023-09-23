import * as React from "react";
import { motion } from "framer-motion";
interface titansProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}
const svgvariants = {
  hidden: {
    rotate: -5,
  },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 2, ease: "easeInOut" },
  },
};
export const SmallLogo = ({ className, ...props }: any) => (
  <motion.svg
    variants={svgvariants}
    initial="hidden"
    animate="visible"
    className={className}
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 28.17 32.59"
    {...props}
  >
    <defs>
      <style>{".cls-1{fill:#303030;fill-rule:evenodd;}"}</style>
    </defs>
    <g id="Layer_1-2" data-name="Layer_1">
      <motion.path
        variants={pathVariants}
        className="cls-1"
        d="M28.17,27.43,17.5,0H10.62L0,27.43ZM14.06,5.53l6.73,18.1H7.33l6.73-18.1Z"
      />
      <polygon
        className="cls-1"
        points="0.01 31.41 28.17 31.41 28.17 32.59 0.01 32.59 0.01 31.41"
      />
    </g>
  </motion.svg>
);
export default SmallLogo;
