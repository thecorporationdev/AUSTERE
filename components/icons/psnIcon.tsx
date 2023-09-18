import * as React from "react";

interface titansProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const Psn: React.FC<titansProps> = ({ className, ...props }) => (
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
    viewBox="0 0 579.94 249.05"
    {...props}
  >
    <defs>
      <style>{".fil0{fill:#303030;fill-rule:nonzero}"}</style>
    </defs>
    <g id="Layer_x0020_1">
      <g id="_2518802425584">
        <path
          className="fil0"
          d="M31.33 117.75V85.51h17.04c12.46 0 17.77 6.23 17.77 16.12s-5.31 16.12-17.77 16.12H31.33zm66.69-16.12c0-23.63-15.76-41.4-47.27-41.4H0v128.61h31.33v-46.17h19.42c32.79 0 47.27-19.79 47.27-41.04zm219.53-41.4v79.69l-52.39-79.69h-31.33v128.6h31.33v-79.32l52.39 79.32h31.33V60.23z"
        />
        <path
          d="M108.16 0h109.82v249.05H108.16V0zm103.46 150.82c0-43.06-63.57-32.98-63.57-55.33 0-8.06 5.68-11.91 13.19-11.73 8.43.18 14.29 5.13 14.84 13.37h33.89c-1.28-24.55-20.15-38.47-48.19-38.47-26.93 0-46.9 13.56-46.9 37.92-.37 45.62 63.94 32.8 63.94 56.61 0 7.51-5.86 12.09-15.02 12.09-8.79 0-15.02-4.76-15.94-14.66h-33.34c.91 26.02 22.53 39.76 50.2 39.76 30.05 0 46.9-17.96 46.9-39.57z"
          style={{
            fill: "#303030",
          }}
        />
        <path
          className="fil0"
          d="M388.17 76.49v-9.98h5.46c3.88 0 5.6 1.87 5.6 5.01 0 3.05-1.72 4.97-5.6 4.97h-5.46zm18.14-4.97c0-5.95-4.13-10.62-12.39-10.62h-12.63v34.31h6.88V82.04h5.75c8.85 0 12.39-5.31 12.39-10.52zm24.78-10.67h-19.91v34.36h19.91v-5.6h-13.03v-9.09h11.55v-5.46h-11.55v-8.6h13.03v-5.6zm24.43 10.72c0 3.1-1.72 5.11-5.55 5.11h-5.75V66.6h5.75c3.83 0 5.55 1.92 5.55 4.97zM437.33 60.9v34.31h6.88V81.84h3.24l7.57 13.37h7.96l-8.21-13.91c5.51-1.47 7.82-5.7 7.82-9.88 0-5.75-4.13-10.52-12.39-10.52h-12.88zm-32.05 71.48c0-12.09-17.6-8.26-17.6-15.14 0-2.8 2.02-4.13 4.72-4.03 2.95.05 4.77 1.82 4.92 4.08h7.57c-.44-6.19-5.26-9.78-12.29-9.78-7.08 0-12.09 3.74-12.09 9.93-.05 12.44 17.65 7.96 17.65 15.39 0 2.46-1.92 4.18-5.16 4.18-3.2 0-5.01-1.82-5.21-4.57h-7.37c.1 6.49 5.6 10.22 12.73 10.22 7.82 0 12.14-4.87 12.14-10.27zm25.86-24.43h-19.91v34.36h19.91v-5.6h-13.03v-9.09h11.55v-5.46h-11.55v-8.6h13.03v-5.6zm4.57 17.16c0 10.27 7.52 17.5 17.4 17.5 7.62 0 13.81-4.03 16.13-11.11h-7.91c-1.62 3.34-4.57 4.97-8.26 4.97-6 0-10.27-4.42-10.27-11.36 0-6.98 4.28-11.36 10.27-11.36 3.69 0 6.64 1.62 8.26 4.92h7.91c-2.31-7.03-8.51-11.11-16.13-11.11-9.88 0-17.4 7.28-17.4 17.55zm72.9-.05c0-10.27-7.77-17.55-17.55-17.55-9.68 0-17.6 7.28-17.6 17.55 0 10.32 7.91 17.6 17.6 17.6 9.73 0 17.55-7.28 17.55-17.6zm-28.07 0c0-6.98 4.28-11.36 10.52-11.36 6.19 0 10.47 4.38 10.47 11.36 0 6.98-4.28 11.45-10.47 11.45-6.24 0-10.52-4.47-10.52-11.45zm55.65-17.11v23.6l-15.58-23.6h-6.88v34.36h6.88v-23.55l15.58 23.55h6.88v-34.36h-6.88zm25.66.05h-11.99v34.31h11.99c10.96 0 18.09-6.73 18.09-17.11 0-10.42-7.13-17.21-18.09-17.21zm-5.11 28.46V113.8h4.87c7.23 0 11.31 4.28 11.31 11.4 0 7.13-4.08 11.26-11.31 11.26h-4.87zm-152.98 18.58v23.6l-15.58-23.6h-6.88v34.36h6.88v-23.55l15.58 23.55h6.88v-34.36h-6.88zm33.58 0h-19.91v34.36h19.91v-5.6h-13.03v-9.09h11.55v-5.46h-11.55v-8.6h13.03v-5.6zm13.18 34.41 8.06-.05 6.74-24.43 6.44 24.43h8.11l9.59-34.31h-7.42l-6.1 26.5-6.59-26.5h-7.67l-6.98 26.64-6.05-26.64h-7.37l9.24 34.36zm67.4-9.98c0-12.09-17.6-8.26-17.6-15.14 0-2.8 2.02-4.13 4.72-4.03 2.95.05 4.77 1.82 4.92 4.08h7.57c-.44-6.19-5.26-9.78-12.29-9.78-7.08 0-12.09 3.74-12.09 9.93-.05 12.44 17.65 7.96 17.65 15.39 0 2.46-1.92 4.18-5.16 4.18-3.2 0-5.01-1.82-5.21-4.57h-7.37c.1 6.49 5.6 10.22 12.73 10.22 7.82 0 12.14-4.87 12.14-10.27z"
        />
      </g>
    </g>
  </svg>
);
export default Psn;