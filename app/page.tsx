import Discover from "@/components/sections/Discover/Discover";
import Projects from "@/components/sections/projects/Projects";
import CarouselSection from "@/components/sections/SwiperSection/CarouselSection";
import Desc from "@/components/sections/hero/Desc";
import Hero from "@/components/sections/hero/Hero";
import Insights from "@/components/sections/insights/Insights";
import Footer from "@/components/ui/Footer";
import Capability from "@/components/sections/Capability/Capability";

export default function Home() {
  return (
    <>
      <main className="bg-butter h-screen font-bold py-20">
        <section className="max-w-[90%] mx-auto">
          <Hero />

          <Projects />
          {/* <Discover /> */}
        </section>
        {/* <CarouselSection /> */}
        <Capability />
        <section className="max-w-[90%] mx-auto">
          <Insights />
        </section>

        <Footer />
      </main>
    </>
  );
}
