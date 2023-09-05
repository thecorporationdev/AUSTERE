import Desc from "@/components/Desc";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-butter h-screen max-w-[90%] mx-auto">
      <Header />
      <Hero />
      <Desc />
    </main>
  );
}
