import React, { SVGProps } from "react";

const Arrow: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.25}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-move-up-right"
    {...props}
  >
    <path d="M13 5h6v6m0-6L5 19" />
  </svg>
);

export default Arrow;
