import * as React from "react";

type icontype = {
  className?: string;
};
const Nisal = ({ className, ...props }: icontype) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={117.11}
    height={117.11}
    style={{
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision",

      fillRule: "evenodd",
      clipRule: "evenodd",
    }}
    viewBox="0 0 77.95 77.95"
    {...props}
  >
    <path
      d="M25.09 4.4 29.43.07l48.45 48.46-4.33 4.33zm-6.25 6.26 4.33-4.33 48.46 48.45-4.34 4.33zm-6.26 6.25 4.33-4.33 48.46 48.46-4.33 4.33zm-6.25 6.26 4.33-4.33 48.45 48.45-4.33 4.34zM.07 29.43l4.33-4.34 48.46 48.46-4.33 4.33zM46.76 0l4.33 4.33-6.87 6.86-4.33-4.33zm6.71 6.72 4.33 4.33-6.86 6.86-4.33-4.33zm6.72 6.71 4.33 4.33-6.86 6.87-4.33-4.33zm6.71 6.72 4.34 4.33-6.87 6.86-4.33-4.33zm6.72 6.71 4.33 4.34-6.86 6.86-4.33-4.33zM6.86 39.89l4.33 4.33-6.86 6.87L0 46.76zm6.72 6.72 4.33 4.33-6.86 6.86-4.33-4.33zm6.72 6.71 4.33 4.34-6.87 6.86-4.33-4.33zm6.71 6.72 4.33 4.33-6.86 6.87-4.33-4.34zm6.72 6.72 4.33 4.33-6.86 6.86-4.34-4.33z"
      style={{
        fill: "#303030",
      }}
    />
  </svg>
);
export default Nisal;
