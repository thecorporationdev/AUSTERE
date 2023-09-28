import "./globals.css";
import type { Metadata } from "next";
import { Unbounded } from "next/font/google";

const unbound = Unbounded({
  subsets: ["latin"],
});

import Header from "@/components/sections/hero/Header";

export const metadata: Metadata = {
  title:
    "AUSTERE  —  AFRICA'S FOREMOST HUMAN — CENTERED MINIMALIST DESIGN AGENCY",
  description:
    "AUSTERE  —  AFRICA'S FOREMOST HUMAN — CENTERED MINIMALIST DESIGN AGENCY",
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
      <body className={`${unbound.className} tracking-tight text-black`}>
        <Header /> <main>{children}</main>
      </body>
    </html>
  );
}
