import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import localFont from "next/font/local";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const unbounded = localFont({
  src: [{ path: "../fonts/unbounded.ttf", style: "light", weight: "200" }],
});
