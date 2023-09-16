import * as React from "react";
interface titansProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}
export const Eye: React.FC<titansProps> = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    className={className}
    style={{
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision",

      fillRule: "evenodd",
      clipRule: "evenodd",
    }}
    viewBox="0 0 224.06 254.05"
    {...props}
  >
    <defs>
      <style>{".fil0{fill:#303030}"}</style>
    </defs>
    <g id="Layer_x0020_1">
      <g id="_2518802456016">
        <path
          className="fil0"
          d="M72.2 125.95h18.86v100.36H72.2zm31.23-29.57h18.85v157.67h-18.85zm31.22 29.57h18.85v100.36h-18.85z"
        />
        <path
          className="fil0"
          d="M112.03 0c61.87 0 112.03 50.16 112.03 112.03 0 36.24-17.21 68.45-43.89 88.93l-15.57-15.11c23.03-16.43 38.05-43.37 38.05-73.82 0-50.04-40.57-90.61-90.61-90.61-50.05 0-90.62 40.57-90.62 90.61 0 31.01 15.58 58.37 39.33 74.71h-.01l-15.78 15.03C17.67 181.34 0 148.75 0 112.03 0 50.16 50.16 0 112.03 0z"
        />
      </g>
    </g>
  </svg>
);
