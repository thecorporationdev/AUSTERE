import React, { ReactNode } from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
};

const SmallBtn = (props: Props) => {
  const { children, className } = props;
  return (
    <Button
      className={cn(
        `py-[0.5rem] capitalize items-center justify-center bg-transparent font-medium px-2 text-gray-500 border-none  h-5 text-xs leading-none hover:text-white ${className}`
      )}
    >
      {children}
    </Button>
  );
};

export default SmallBtn;
