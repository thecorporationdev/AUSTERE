import Desc from "@/components/sections/hero/Desc";
import Header from "@/components/sections/hero/Header";
import Hero from "@/components/sections/hero/Hero";

export default function Home() {
  return (
    <main className="bg-butter h-screen max-w-[90%] mx-auto">
      <Header />
      <Hero />
      <Desc />
    </main>
  );
}
