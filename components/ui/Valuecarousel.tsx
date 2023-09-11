"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import Slide from "@/components/ui/Slide";
import Values from "../TheAgencySections/Values";

type Props = {};

const array = [
  { id: 1, word: "Algorithm" },
  { id: 2, word: "Blockchain" },
  { id: 3, word: "Cybersecurity" },
  { id: 4, word: "Encryption" },
  { id: 5, word: "AugmentedReality" },
  { id: 6, word: "ArtificialIntelligence" },
  { id: 7, word: "CloudComputing" },
  { id: 8, word: "DataAnalytics" },
  { id: 9, word: "MachineLearning" },
  { id: 10, word: "VirtualReality" },
  { id: 11, word: "QuantumComputing" },
  { id: 12, word: "InternetOfThings" },
  { id: 13, word: "DevOps" },
  { id: 14, word: "BigData" },
  { id: 15, word: "API" },
  { id: 16, word: "5G" },
  { id: 17, word: "Cryptocurrency" },
  { id: 18, word: "Robotics" },
  { id: 19, word: "Biotechnology" },
  { id: 20, word: "Automation" },
  { id: 21, word: "Nanotechnology" },
  { id: 22, word: "NetworkSecurity" },
  { id: 23, word: "SoftwareDevelopment" },
  { id: 24, word: "Hardware" },
  { id: 25, word: "WearableTech" },
];
const ValueCarousel = (props: Props) => {
  const breakpoints = {
    300: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1300: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  };
  return (
    <section className=" mt-10 mb-20 xl:hiddem">
      <Swiper
        breakpoints={breakpoints}
        className="mySwiper transition-all "
        loop={true}
        direction="horizontal"
        speed={5000}
        effect="fade"
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {array.map((slide, I) => (
          <SwiperSlide key={I}>
            <Values />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ValueCarousel;
