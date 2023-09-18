import "./globals.css";
import type { Metadata } from "next";

import { Unbounded } from "next/font/google";

const unbound = Unbounded({
  subsets: ["latin"],
});

import Header from "@/components/sections/hero/Header";

export const metadata: Metadata = {
  title: "AUSTERE",
  description: "Profile website of Austere",
  icons: {
    icon: "./AUSTEREICO.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${unbound.className} tracking-normal font-bold text-black`}
      >
        <Header /> <main>{children}</main>
      </body>
    </html>
  );
}
