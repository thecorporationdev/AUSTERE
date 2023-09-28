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
        <section className="">
          <section className="max-w-[90%] mx-auto">
            <Hero />
          </section>

          <section className="max-sm:max-w-[94%] max-w-[90%] mx-auto">
            <Projects />
          </section>

          {/* <Discover /> */}
        </section>
        {/* <CarouselSection /> */}
        <section>
          <Capability />
        </section>

        <section className="max-w-[90%] mx-auto">
          <Insights />
        </section>

        <Footer />
      </main>
    </>
  );
}
