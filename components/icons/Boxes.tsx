interface titansProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const Boxes: React.FC<titansProps> = ({ className, ...props }) => (
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
    viewBox="0 0 70.75 64.17"
    {...props}
  >
    <defs>
      <style>{".fil0{fill:#303030}"}</style>
    </defs>
    <g id="Layer_x0020_1">
      <g id="_2518570999744">
        <path
          className="fil0"
          d="M26.92 10.04h8.07v26.83h-8.07zm18.43 5.97h-8.07v10.36h8.07zm12.64 2.29v8.07h10.48V18.3zM37.28 36.73H63.2v-8.07H37.28zm10.35 2.28h23.12v8.08l-23.12-.01zM9.15 47.08h25.84v-8.07H9.15zM0 36.73h24.63v-8.07H0z"
        />
        <path
          className="fil0"
          d="M26.92 39.01h8.07V59.6h-8.07zm10.36 25.16h8.07V39.01h-8.07zM55.7 0h-8.07v26.37h8.07zm-8.07 59.53h8.07V49.38h-8.07zM16.56 16.01h8.07v10.36h-8.07zm0 42.51h8.07v-9.15h-8.07z"
        />
      </g>
    </g>
  </svg>
);
