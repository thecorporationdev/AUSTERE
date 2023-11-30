import * as React from "react";
interface titansProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}
export const Zam: React.FC<titansProps> = ({ className, ...props }) => (
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
    viewBox="0 0 94.97 94.97"
    {...props}
  >
    <defs>
      <style>{".fil0{fill:#303030}"}</style>
    </defs>
    <g id="Layer_x0020_1">
      <g id="_2442665354320">
        <path
          className="fil0"
          d="M3.24 91.73h88.49V3.24H3.24v88.49zm91.73 0v3.24H0V0h94.97v91.73z"
        />
        <path
          className="fil0"
          d="M58.64 61.21c-1.18.29-2.74 1.09-3.19 1.71-.65.89 1.69 2.72 2.38 2.14.36-.28 0-.31.49-.69.72-.55 1.53-.83 2.43-1.09 3.26-.92 5.02-.15 3.47-2.13.35.11.76.47.92.93-.08-.9-1.03-1.47-1.83-1.6-.9-.15-1.76.02-2.65.19l-.01.01-.92.27-.71.22-.39.05zM43.18 39.17c.69-1.65-1.3-3.83-2.59-4.02-2.09-.31-4.13.39-6.07.65-2.75.37-14.15 2.44-15.12 5.35-.54 1.61 1.78 3.63 2.79 3.95 1.41.46 6.03-1.62 6.61-1.78.51-.13.91-.13 1.4-.29.77-.25 1.76-.86 2.37-.95-.37.55-4.3 3.02-5.2 3.65-1.73 1.22-3.6 2.68-4.85 4.06-2.24 2.48-4 2.52-5.12 3.79-.76.86-1.31 1.66-.53 3.09.37.67 1.46 1.9 2.49 2 .78.07 7.33-3.72 8.88-4.48 2.75-1.36 9.54-4.26 12.5-5.32.93-.33 2.71-.73 3.23-1.22.17-.31-.61-3.27-2.87-3.02-3.52.38-8.51 2.36-12.02 3.41-.79.24-1.52.56-2.24.77.41-.85 6.25-4.6 7.6-5.52 1.35-.93 2.6-1.71 4.02-2.6 3.99-2.51 3.05-.96 4.74-1.52zm-.2 17.51c.73-.85-1.12-2.67-1.53-2.9-1.19-.7-2.57-.26-3.87.07-1.24.31-2.44.65-3.66.96-3.14.78-7.55 2.22-10.31 3.55-.64.31-.87.59-1.45.92-.51.29-.92.61-1.31.95-.9.78-1.47 1.08-2.27 2.26-.8 1.18.81 2.45 1.43 2.8 1.25.7 2.42-.27 3.31-.81 2.48-1.53 3.16-2.01 5.9-3.35 1.66-.81 4.78-2.16 6.51-2.75 1.51-.51 3.78-1.23 5.36-1.53.69-.13 1.63.16 1.91-.17zm10.44 3.97c.48-.17 1.6.37 1.08-.72-.19-.4-.69-.89-1.04-1.09-1.13-.67-2.12-.47-3.43-.15-1.66.4-5.03 1.31-6.47 1.98-.6.28-.88.55-.52 1.32.47 1 1.47 1.7 2.58 1.4 1.66-.45 2.99-1.06 4.6-1.72 1.07-.44 2.11-.64 3.2-1.02z"
        />
        <path
          className="fil0"
          d="M56.08 53.35c-.18-.16-.4-.36-.68-.5-.49-.24-.86-.22-1.35-.35-.59-2.04-.37-8.53-.18-11.12.1-1.33.12-2.48.14-3.82.01-.86.3-1.23-.77-2.04-.54-.41-1.44-.83-2.18-.73-.56.08-.69.5-.9 1-.78 1.86-1.5 3.62-2.21 5.58-.34.93-.65 1.48-1.1 2.8-.33.97-.63 1.93-.97 2.93-.69 2.04-1.18 3.96-1.68 6.11-.57 2.43-1.18 3.57.7 4.17.48.15 1.03.52 1.37.54 1.17.06 4.88-2.15 5.6-2.01.31.14.42 1.16 1.51 2.04.5.4 1.68 1.22 2.58.64.02-.42-.43-.6-.85-1.57-.19-.45-.57-1.38-.54-1.89.4-.15.98-.31 1.5-.3v-1.48zm-7.95.82c.4.01 1.56-.5 1.96-.65 1.7-.63.91.41.43-3.65-.04-.33-.18-1.97-.34-2.24l-2.05 6.55zm26.26-21.36.02.02s-.02-.01-.02-.02zm-.58 32.35h-.15c-.07 0-.14-.01-.21-.03-1.22-.27-1.73-1.34-2.01-2.45-.16-.65-.2-1.26-.29-1.93-.05-.35-.01-.77-.06-1.08-.12-.89.09-2.21.1-3.18 0-.28.04-.3.06-.52l.35-3.53-.23.56c-.58 1.6-1.76 4.32-2.95 5.5-.3.3-.44.49-.85.69-1.16.57-2.43-.05-3.18-.97-.87-1.07-1.5-2.98-1.79-4.37-.14-.64-.41-1.98-.41-2.61h-.11c0 .33-.76 4.66-.85 5.82-.07.82-.03 1.45-.12 2.39-.02.23-.09.43-.23.57-.36.35-2.04.86-2.44.87-.12-.23-.22-.37-.34-.57a2.1 2.1 0 0 1-.24-.61l-.16-1.58v-.14c.01-.27.06-.4.06-.75l.22-2.35c.15-1.04.29-2.06.45-3.03.57-3.4 1.61-9.06 1.61-12.37 0-.38-.06-.49-.06-.85 0-.8-.22-1.41-.4-2.17.17-.08.36-.1.51-.17 0-.18-.06-.5-.09-.71-.03-.24-.02-.47-.02-.72.92-.44 1.89-.08 2.65.49 1.26.95 1.43 2.13 1.61 3.58.26 2.06.4 4.21.68 6.23.42 3.1.62 5.87 1.25 9.02.06.28.1.44.16.7.05.18.14.48.16.7h.11c.05-.23.22-.5.33-.76 1.15-2.9 2.8-9.44 3.62-12.47l1.46-5.04c.32-1.15.73-2.26 1.01-3.26l.81-2.38c.1-.27.19-.54.29-.79l.68-1.43c.17.09.43.24.63.29-.01.45-.54 1.55-.57 1.88.04-.04.03-.03.07-.1.04-.07.02-.03.05-.12.39-.91.65-1.71 2.18-.94 1.78.89 1.39 2.27 1.08 3.74-1.06 4.93-2.06 9.73-2.76 14.76-.31 2.21-.44 3.88-.62 6.11-.02.22.01.46-.01.68-.11 1.28-.15 4.47.02 5.81.05.37.1.82.16 1.21.07.43.22.75.22 1.09-.22.05-.48.15-.68.17 0 .44.03.71-.22.92-.13.12-.32.2-.54.22zm.64-32.52.02.02s-.02-.01-.02-.02zm.06-.17.02.02s-.02-.01-.02-.02zm.06-.17.02.02s-.02-.01-.02-.02zm.06-.11c0-.15.09-.01.03 0 0 0-.03.16-.03 0zm.06-.17c0-.15.09-.01.03 0 0 0-.03.16-.03 0zm.11-.23-.03.12.03-.12zm.06-.17c0 .27 0 .11-.06.17 0-.27 0-.11.06-.17z"
        />
      </g>
    </g>
  </svg>
);
export default Zam;