import Discover from "@/components/sections/Discover/Discover";
import Projects from "@/components/sections/projects/Projects";
import CarouselSection from "@/components/sections/SwiperSection/CarouselSection";
import Desc from "@/components/sections/hero/Desc";
import Header from "@/components/sections/hero/Header";
import Hero from "@/components/sections/hero/Hero";
import Insights from "@/components/sections/insights/Insights";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <main className="bg-butter h-screen font-bold ">
        <section className="max-w-[90%] mx-auto font-bold">
          <Hero />
          <Desc />
          <Projects />
          <Discover />
        </section>
        <CarouselSection />
        <section className="max-w-[90%] mx-auto">
          <Insights />
        </section>
        <Footer />
      </main>
    </>
  );
}
