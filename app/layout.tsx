import "./globals.css";
import type { Metadata } from "next";
import { unbounded } from "@/lib/utils";

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
      <body className={`${unbounded.className} tracking-normal font-bold`}>
        <Header /> <main>{children}</main>
      </body>
    </html>
  );
}
