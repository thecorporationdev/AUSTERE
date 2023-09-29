import * as React from "react";
interface titansProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}
export const Mango2: React.FC<titansProps> = ({ className, ...props }) => (
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
    viewBox="0 0 169.98 169.32"
    {...props}
  >
    <defs>
      <style>{".fil0{fill:#303030}"}</style>
    </defs>
    <g id="Layer_x0020_1">
      <g id="_2406541319120">
        <path
          className="fil0"
          d="M33.23 19.85H46.2V147.9H33.23zm27.99-12.1H74.2v151.56H61.22zm34.36.23h12.97v152.25H95.58zM74.44 122.02v-12.98h21.14v12.98zm49.13-101.7h12.97v126.03h-12.97z"
        />
        <path
          className="fil0"
          d="M84.99 0c46.94 0 84.99 38.05 84.99 84.99 0 21.12-7.71 40.44-20.46 55.3v-22.04c5.15-9.96 8.05-21.27 8.05-33.26 0-40.09-32.5-72.58-72.58-72.58-40.09 0-72.58 32.5-72.58 72.58 0 11.83 2.83 23 7.85 32.87v22.2C7.63 125.23 0 106 0 84.99 0 38.05 38.05 0 84.99 0z"
        />
        <path
          className="fil0"
          d="M33.23 135.87c3.9 3.97 8.25 7.49 12.97 10.48v14.28a84.373 84.373 0 0 1-12.97-8.23v-16.53zm27.99 17.72a71.86 71.86 0 0 0 12.97 3.18v12.52c-4.44-.56-8.77-1.47-12.97-2.69v-13.02zm34.35 3.21c4.47-.65 8.81-1.72 12.97-3.14v13c-4.2 1.21-8.53 2.11-12.97 2.66V156.8zm27.99-10.33c4.72-2.97 9.07-6.46 12.97-10.4v16.48c-4.05 3.1-8.39 5.84-12.97 8.18v-14.25z"
        />
      </g>
    </g>
  </svg>
);
export default Mango2;
