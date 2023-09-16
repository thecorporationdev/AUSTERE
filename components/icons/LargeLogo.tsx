import { cn } from "@/lib/utils";
import * as React from "react";
import { motion } from "framer-motion";

interface titansProps extends React.SVGProps<SVGSVGElement> {
  classes?: string;
  barstate?: boolean;
}

export const LargeLogo: React.FC<titansProps> = ({
  classes,
  barstate,
  ...props
}) => (
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 209.98 33.06"
    className={cn(classes)}
    {...props}
  >
    <defs>
      <style>{`.cls-1,.cls-2{fill:${
        barstate ? "#fff" : "#303030"
      };}.cls-1{fill-rule:evenodd;}`}</style>
    </defs>
    <g id="Layer_1-2" data-name="Layer_1">
      <g id="_2425308915984" data-name={2425308915984}>
        <motion.path
          className="cls-1"
          d="M28.17,27.9,17.51.47H10.62L0,27.9ZM14.06,6l6.73,18.1H7.34Z"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />
        <motion.path
          className="cls-1"
          d="M55.73.47V23.06a9.67,9.67,0,0,1-1.19,4.84h6.24a15.84,15.84,0,0,0,.64-4.58V.47ZM40,27.9a9.68,9.68,0,0,1-1.19-4.85V.47H33.15V23.31a15.87,15.87,0,0,0,.63,4.59Z"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
          className="cls-1"
          d="M79.61,0c-3.91,0-7.09.94-9.49,2.87a9.28,9.28,0,0,0-3.65,7.72c0,13.46,21.28,6.83,21.28,15.86a5.34,5.34,0,0,1-.2,1.45h5.87a11.28,11.28,0,0,0,.12-1.66c0-13.77-21.28-7-21.28-16,0-3.5,2.86-5.64,7.19-5.64,4.54,0,7.46,2.51,7.62,6.68H92.6a10.51,10.51,0,0,0-3.71-8.24A13.78,13.78,0,0,0,79.61,0Z"
        />
        <polygon
          className="cls-1"
          points="95.14 0.47 95.14 5.53 106.2 5.53 106.2 27.9 111.89 27.9 111.89 5.53 122.95 5.53 122.95 0.47 95.14 0.47"
        />
        <polygon
          className="cls-1"
          points="151.57 0.47 126.75 0.47 126.75 27.9 132.43 27.9 132.43 20.76 150.01 20.76 150.01 15.91 132.43 15.91 132.43 5.53 151.57 5.53 151.57 0.47"
        />
        <polygon
          className="cls-1"
          points="209.96 0.47 185.13 0.47 185.13 27.9 190.82 27.9 190.82 20.76 208.4 20.76 208.4 15.91 190.82 15.91 190.82 5.53 209.96 5.53 209.96 0.47"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
          className="cls-1"
          d="M175.16,11.16c0,4.07-2.35,7-7.72,7h-7V4.38h7C172.86,4.38,175.16,7,175.16,11.16ZM155.7.47V27.9h4.75V22h5.73l3.46,5.94h5.54l-3.78-6.31c6.1-1.35,8.66-5.79,8.66-10.43C180.06,5.21,176,.47,167.44.47Z"
        />
        <rect
          className="cls-2"
          x={0.01}
          y={31.87}
          width={209.97}
          height={1.19}
        />
      </g>
    </g>
  </svg>
);
