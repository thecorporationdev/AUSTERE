import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import localFont from "next/font/local";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const unbounded = localFont({
  src: [{ path: "../fonts/unbounded.ttf", style: "light", weight: "200" }],
});

export function pickRandomObjects(arr: any, numObjectsToPick: number) {
  if (numObjectsToPick >= arr.length) {
    return [...arr];
  }

  const shuffledArray = arr.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    // Shuffle the array using Fisher-Yates shuffle algorithm
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  // Pick the first numObjectsToPick elements from the shuffled array
  return shuffledArray.slice(0, numObjectsToPick);
}
