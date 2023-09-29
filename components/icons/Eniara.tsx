import * as React from "react";

type icontype = {
  className?: string;
};

const Enaira = ({ className, ...props }: icontype) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={136.619}
    height={109.159}
    style={{
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision",
      //   imageRendering: "optimizeQuality",
      fillRule: "evenodd",
      clipRule: "evenodd",
    }}
    viewBox="0 0 2214.6 1769.48"
    className={className}
    {...props}
  >
    <path
      d="M1307.35 428.87v236.86h-217.24L945.64 428.87H730.93v236.86H444.42c92-280.08 355.6-482.3 666.44-482.3 310.84 0 574.43 202.22 666.44 482.3h-286.52V428.87h-183.43zm0 513.58h-48.47l-56.89-93.26h105.35v93.26zm-392.99 0v-93.26h72.76l56.89 93.26H914.36zm1300.24-93.26V665.73h-246.32C1870.84 283.02 1523.91 0 1110.85 0 697.79 0 350.86 283.02 253.44 665.73H-.01v183.46h730.92v93.26H-.01v183.43h259.37c104.97 371.45 446.46 643.6 851.48 643.6 137.68 0 268.01-31.44 384.18-87.56l-96.13-157.6c-87.88 39.66-185.39 61.72-288.06 61.72-302.59 0-560.42-191.63-658.76-460.16H730.9v199.83h183.44v-199.83h241.54l121.87 199.83h213.01v-199.83h723.82V942.45h-723.82v-93.26h723.82z"
      style={{
        fill: "#303030",
        fillRule: "nonzero",
      }}
    />
  </svg>
);
export default Enaira;
