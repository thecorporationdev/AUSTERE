import * as React from "react";
interface titansProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}
export const Mango: React.FC<titansProps> = ({ className, ...props }) => (
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
    viewBox="0 0 2919.33 2298.38"
    {...props}
  >
    <defs>
      <style>{".fil0{fill:#303030}"}</style>
    </defs>
    <g id="Layer_x0020_1">
      <g id="_2514468709600">
        <path
          className="fil0"
          d="M2030.35 2040.82c121.82 0 236.82-87.06 236.82-195.77 0-25.86 1.87-22.64-3.15-44.2h-271.56c0 94.19-18.05 75.78 88.42 75.78h101.04c-3.39 40.69-75.82 94.73-138.93 94.73-52.14 0-78.93-7.07-118.24-36.49-37.56-28.1-49.12-63.95-49.12-108.76 0-102.19 152.28-169.86 250.73-102.32 20.31 13.94 17.77 10.89 49.24 10.75 21.04-.09 42.11-.01 63.16-.01-30.16-45.05-74.18-77.47-126.63-94.4-190.33-61.44-399.35 120.16-280.75 299.69 35.44 53.65 109.81 100.99 198.98 100.99zm495.75-202.09c0-136.25 178.35-179.53 264.37-106.48 112.29 95.38 25.12 239.1-97.01 239.1h-18.95c-72.51 0-148.41-61.24-148.41-132.62zm-75.78-18.94v25.26c0 108.71 115.02 195.77 236.83 195.77 94.58 0 176.44-54.8 208.44-116.78 19.33-37.42 31.27-80.9 18.35-132.12-6.72-26.67-11.95-36.66-24.48-57.62-61.17-102.35-224.05-142.63-344.27-65.93-12.82 8.19-35.31 25.81-44.39 37.7-22.82 29.9-50.48 68.07-50.48 113.72zm-1256.74-179.98v393.16h75.78v-282.65c13.57 9.09 23.55 21.97 35.53 33.95l202.63 214.17c15.37 19.92 26.45 21.28 29.53 34.53h76.5v-399.1h-73.49c-6.11 7-2.29 23.86-2.29 62.78v230.5c-12.34-8.26-52.56-57.63-68.67-73.42-13.11-12.84-20.07-23.31-33.21-36.26l-136.77-150.57c-13.84-17.92-15.82-15.45-28.31-33.02h-75.26c-1.26 1.48-1.97 3.42-1.97 5.94zM707.31 1848.2c0-72.06-8.47-78.42 21.29-108.17 59.96-59.94 149.89-46.91 194.25 3.16 7.84 8.85 18.13 19.76 18.13 32.39v110.51c-43.62 0-45.32 14.74-125.38-16.71-55.6-21.84-60.75-26.15-108.28-21.19zm-75.78-85.25v277.86h75.78c0-104-12.96-119.99 41.05-119.99 50.87 0 149.2 61.88 192.62 41.05v78.94h75.79V1766.1c0-12.77-20.58-45.77-27.63-54.47-90.05-111.07-237.35-112.03-328.25-4.6-7.8 9.21-29.35 42.07-29.35 55.91zM63.15 1630.33H0v406.37h75.78v-276.9c9.34 6.26 24.82 26.24 32.92 36.55 8.41 10.7 71.3 87.88 93.18 109.52h45.96l59.42-69.31c22.3-26.54 43.2-51.29 65.33-76.76v276.9h75.79v-406.37h-72.13l-1.37 1.77c-1.04 1.41-2.33 3.29-4.01 5.76l-17.65 22.21-84.92 109.67h.01l-42.93 55.95-4.85-6.54-151.54-188.82h-5.84zm125.54 145.96 31.84 42.86-151.54-188.82h2.78l51.15 63.63c22.95 29.12 48.68 61.16 65.77 82.33zm327.71 449.25v25.28c15.02-10.14 38.83 16.33 65.98 7.43v-32.72c-6.42-11.61-18.78-19.47-32.99-19.47-14.2 0-26.56 7.86-32.99 19.47zm82.1 36.97v33.67h-16.13v-21.98c-14.36 11.2-53.68-23.18-65.98-3.81v25.79H500.5v-33.27l-.23.06v-38.46c7.68-19.61 26.77-33.51 49.11-33.51s41.44 13.89 49.12 33.51v38zm275.44 33.28v-103.87h16.13v103.87z"
        />
        <path
          className="fil0"
          d="M873.94 2251.92h77.04v-16.13h-77.04zm0-43.87h87.99v-16.13h-87.99zm0 87.74h87.99v-16.14h-87.99zm-244.43-73.85c0 39.18 75.09 23.14 75.09 41.57 0 17.1-19.3 20.11-33.53 20.11-14.26 0-23.03-8.23-24.13-21.46h-18.77c0 25.88 19.17 34.98 39.24 36.2h9.89c12.49-.72 24.15-3.97 30.45-7.57 14.55-8.31 21.61-36.27 4.17-48.02-13.51-9.12-63.65-7.11-63.65-19.5 0-15.79 14.59-18.77 28.16-18.77 15.36 0 20.19 7.44 25.48 17.43H718c-6.64-28.5-17.7-32.18-48.28-32.18-21.37 0-40.22 11.23-40.22 32.18zm125.67 0c0 39.18 75.09 23.14 75.09 41.57 0 17.1-19.3 20.11-33.52 20.11-14.26 0-23.03-8.23-24.14-21.46h-18.77c0 25.88 19.18 34.98 39.25 36.2h9.89c12.48-.72 24.14-3.97 30.45-7.57 14.55-8.31 21.61-36.27 4.17-48.02-13.52-9.12-63.65-7.11-63.65-19.5 0-15.79 14.59-18.77 28.16-18.77 15.37 0 20.2 7.44 25.48 17.43h16.09c-6.64-28.5-17.69-32.18-48.27-32.18-21.37 0-40.22 11.23-40.22 32.18zm229.74-13.89h87.99v-16.13h-87.99z"
        />
        <path
          className="fil0"
          d="M1036.98 2191.92v104.31h-16.14v-104.31zm741.43 60.94h-51.09v-16.13h67.92c.39 2.39.59 4.83.59 7.32 0 29.01-26.93 52.53-60.16 52.53-33.22 0-60.16-23.52-60.16-52.53s26.93-52.53 60.16-52.53c21.3 0 40.01 9.67 50.7 24.26h-21.05c-7.81-6.25-18.22-10.06-29.65-10.06-24.25 0-43.91 17.16-43.91 38.34 0 21.18 19.66 38.34 43.91 38.34 20.77 0 38.18-12.6 42.74-29.53zm-638.6-60.76h16.13v103.89h-16.13zm98.65 0h16.12v103.89h-16.12z"
        />
        <path
          className="fil0"
          d="m1238.46 2192.1 12.4 11.66-48.58 57.72-4.84-18.01zm-82.33 0-12.4 11.66 48.57 57.72 4.7-18.01z"
        />
        <path
          className="fil0"
          d="M1202.28 2261.48h-9.98l.18-11.07 2.32-6.35 4.9-.39zm96.99-35.5v25.28c15.02-10.14 38.83 16.33 65.98 7.43v-32.72c-6.42-11.61-18.78-19.46-32.99-19.46-14.2 0-26.56 7.86-32.99 19.46zm82.11 36.97v33.67h-16.13v-21.98c-14.36 11.2-53.68-23.18-65.98-3.81v25.79h-15.89v-33.27l-.24.06v-38.46c7.69-19.61 26.78-33.51 49.12-33.51 22.34 0 41.44 13.89 49.12 33.51v38zm31.67-70.85h16.14v103.89h-16.14z"
        />
        <path
          className="fil0"
          d="m1429.19 2192.1-11.96 11.66 87.47 92.23-.51-21.26z"
        />
        <path
          className="fil0"
          d="M1504.1 2192.1h16.12v103.89h-16.12zm59.67 33.88v25.28c15.02-10.14 38.83 16.33 65.98 7.43v-32.72c-6.42-11.61-18.79-19.46-32.98-19.46-14.2 0-26.57 7.86-32.99 19.46zm82.1 36.97v33.67h-16.13v-21.98c-14.36 11.2-53.67-23.18-65.98-3.81v25.79h-15.88v-33.27l-.24.06v-38.46c7.69-19.61 26.78-33.51 49.12-33.51 22.34 0 41.43 13.89 49.11 33.51v38zm176.23 33.28v-103.87h16.13v103.87z"
        />
        <path
          className="fil0"
          d="M1822.1 2252.36h77.04v-16.13h-77.04zm0-43.87h87.99v-16.13h-87.99zm0 87.74h87.99v-16.13h-87.99zm118.68-104.13h16.13v103.89h-16.13zm98.65 0h16.13v103.89h-16.13z"
        />
        <path
          className="fil0"
          d="m2039.43 2192.1 12.41 11.66-48.58 57.72-4.84-18.01zm-82.32 0-12.41 11.66 48.58 57.72 4.7-18.01z"
        />
        <path
          className="fil0"
          d="M2003.26 2261.48h-9.98l.18-11.07 2.31-6.35 4.91-.39zm75.66 34.75v-103.87h16.13v103.87z"
        />
        <path
          className="fil0"
          d="M2078.92 2252.36h77.04v-16.13h-77.04zm0-43.87h87.98v-16.13h-87.98zm0 87.74h87.98v-16.13h-87.98zm118.34-104.13h16.13v103.89h-16.13z"
        />
        <path
          className="fil0"
          d="m2213.39 2192.1-11.96 11.66 87.48 92.23-.52-21.26z"
        />
        <path
          className="fil0"
          d="M2288.3 2192.1h16.13v103.89h-16.13zm42.79 16.39h87.98v-16.13h-87.98z"
        />
        <path
          className="fil0"
          d="M2383.14 2192.36v104.32h-16.13v-104.32zM1067.03 150.59h98.41v971.4h-98.41zm212.36-91.81h98.41v1149.75h-98.41zm260.62 1.75h98.41v1155h-98.41zm-160.34 865.1v-98.41h160.34v98.41zm372.7-771.47h98.41v956.05h-98.41z"
        />
        <path
          className="fil0"
          d="M1459.67 0c356.07 0 644.73 288.66 644.73 644.73 0 160.22-58.46 306.78-155.2 419.54V897.04c39.05-75.59 61.11-161.37 61.11-252.32 0-304.1-246.53-550.63-550.63-550.63S909.05 340.62 909.05 644.72c0 89.75 21.49 174.48 59.58 249.34v168.39c-95.82-112.52-153.68-258.36-153.68-417.74 0-356.07 288.66-644.73 644.73-644.73z"
        />
        <path
          className="fil0"
          d="M1067.03 1030.72c29.59 30.1 62.6 56.8 98.41 79.49v108.31a645.218 645.218 0 0 1-98.41-62.43v-125.38zm212.36 134.44c31.6 10.94 64.5 19.09 98.41 24.15v95.01a642.812 642.812 0 0 1-98.41-20.41v-98.75zm260.62 24.38a547.24 547.24 0 0 0 98.41-23.85v98.65a641.204 641.204 0 0 1-98.41 20.16v-94.97zm212.36-78.35a553.26 553.26 0 0 0 98.41-78.89v124.98a645.179 645.179 0 0 1-98.41 62.03v-108.12z"
        />
      </g>
    </g>
  </svg>
);