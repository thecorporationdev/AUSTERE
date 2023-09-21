import Footer from "@/components/ui/Footer";
import SmallBtn from "@/components/ui/SmallBtn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <section className="max-w-[90%] mx-auto  text-black">
        <div className=" w-full max-md:flex-col mx-auto flex items-left justify-center ">
          <h1 className="w-full text-4xl md:text-6xl mx-auto xl:text-8xl font-[500] text-left uppercase md:py-10">
            the contacts
          </h1>
        </div>
        <div className="h-[3px] w-full bg-black mt-10"></div>
        <div className="w-full flex justify-end mt-10 md:my-20 ">
          <div className="lg:w-1/2 flex justify-end ">
            <p className=" text-xs md:text-[18px] font-[400] leading-[20px] lg:leading-[40px] tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              laboriosam dolore ipsum tempore voluptate illo fugit, facere
              aliquid facilis, laudantium aperiam suscipit eaque minima maxime.
              Minus consectetur tenetur officia illo? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Magnam laboriosam dolore ipsum
              tempore vo illo?
            </p>
          </div>
        </div>

        <div className="w-full flex justify-end py-10 ">
          <div className=" w-full lg:w-[70%] flex gap-y-14 flex-col ">
            <div className="w-full">
              <p className="font-bold text-base">
                contact AUSTERE on what you need
              </p>
            </div>
            <div className="w-full">
              <form className=" lg:w-full py-10 px-4 lg:px-8 border-t-2 border-b-2  border-black flex flex-col justify-between">
                <p className="text-2xl md:text-3xl font-bold capitalize pb-6 ">
                  more info:
                </p>
                <div className="flex justify-between md:w-1/2 flex-col gap-y-10 mt-10 ">
                  <Input
                    placeholder="your fullname"
                    className="border-gray-500 rounded-none"
                  />
                  <Input
                    placeholder="your phone number"
                    className="border-gray-500 rounded-none"
                  />
                  <Input
                    placeholder="your email"
                    className="border-gray-500 rounded-none"
                  />
                  <Textarea
                    className="resize-none border-gray-400 rounded-none"
                    placeholder="message"
                  />
                </div>

                <button className="border-b-2 text-left flex items-center justify-center text-sm border-black bg-ransparent w-2/12 bg-transparent mt-8 text-black px-0 py-0 hover:bg-transparent hover:text-black hover:border-b-2 hover:border-black">
                  send
                  <FiArrowUpRight className="  text-2xl font-semibold transition-all ease-in duration-300" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
