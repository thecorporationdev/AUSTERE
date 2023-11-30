"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

/**
 *
 * @param {*} param0
 * @returns
 * TACTICAL in our approach
 * REFRESHING with our ideation
 * AFFIRMATIVE in our outlook
 * DEPENDABLE in our relationships
 * ENERGETIC in our delivery
 */

function ValuesSlider() {
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
  }, [embla, onSelect]);

  return (
    <div className="w-full flex flex-row mx-auto items-center justify-center border border-black h-[350px] px-2 ">
      <span className="w-full md:w-auto md:mr-8 flex md:block">
        <button
          className="hover:opacity-50 cursor-pointer disabled:opacity-25 mx-auto  active:ring-black ml-2"
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
        >
          <svg
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 md:w-10 h-8 md:h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
        </button>
      </span>
      <div className="w-10/12 h-[400px] flex items-center justify-center  text-center p-6 md:py-10 px-8 uppercase ">
        <div className="embla overflow-hidden  " ref={viewportRef}>
          <div className="embla__container flex justify-between gap-x-40   h-full w-full ">
            <div className="embla__slide  flex items-center justify-center w-[500px] ml-7 lg:ml-28 flex-col px-10">
              <h3 className="text-[23px] md:text-2xl tracking-wide font-bold mb-2 mt-3  md:mt-10  ">
                Tactical
              </h3>
            </div>

            <div className="embla__slide flex items-center justify-center w-[500px] flex-col">
              <h3 className="text-[23px] md:text-2xl tracking-wide font-bold mb-2 mt-3   md:mt-10 ">
                REFRESHING
              </h3>
            </div>

            <div className="embla__slide flex items-center justify-center w-[500px] flex-col">
              <h3 className="text-[23px] md:text-2xl tracking-wide font-bold mb-2 mt-3  md:mt-10">
                AFFIRMATIVE
              </h3>
            </div>
            {/*  */}
            {/*  */}
            <div className="embla__slide flex items-center justify-center w-[500px] flex-col">
              <h3 className="text-[23px] md:text-2xl tracking-wide font-bold mb-2 mt-3   md:mt-10">
                DEPENDABLE
              </h3>
            </div>
            {/*  */}
            {/*  */}
            <div className="embla__slide flex items-center justify-center flex-col lg:ml-20">
              <h3 className="text-[23px] md:text-2xl tracking-wide font-bold mb-2 mt-3  md:mt-10 px-10">
                ENERGETIC
              </h3>
            </div>
          </div>
        </div>
      </div>
      <span className="w-full md:w-auto md:ml-8 flex md:block">
        <button
          className="hover:opacity-50 cursor-pointer disabled:opacity-25 mx-auto  active:ring-black mr-2"
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
        >
          <svg
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 md:w-10 h-8 md:h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </span>
    </div>
  );
}
export default ValuesSlider;
