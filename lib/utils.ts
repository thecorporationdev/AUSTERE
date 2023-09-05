import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import localFont from "next/font/local";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const matter = localFont({
  src: [
    { path: "../fonts/MatterLight.ttf", style: "light", weight: "200" },
    { path: "../fonts/Matter-Heavy.ttf", style: "heavy" },
    { path: "../fonts/Matter-SemiBold.ttf", style: "semibold" },
    { path: "../fonts/Matter-Medium.ttf", style: "Medium", weight: "400" },
  ],
});
