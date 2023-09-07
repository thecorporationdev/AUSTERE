import "./globals.css";
import type { Metadata } from "next";
import { matter } from "@/lib/utils";
import Footer from "@/components/ui/Footer";

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
      <body className={`${matter.className}`}>{children}</body>
    </html>
  );
}
