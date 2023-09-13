import Footer from "@/components/ui/Footer";
import SmallBtn from "@/components/ui/SmallBtn";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { FiArrowDownRight } from "react-icons/fi";

type Props = {};

const page = (props: Props) => {
  return (
    <section className="max-w-[90%] mx-auto ">
      <div className="w-full md:px-10">
        <div className="lg:w-[72%] xl:w-[70%] flex justify-between items-center">
          <FiArrowDownRight className="text-4xl lg:text-8xl font-semibold" />
          <p className="text-4xl md:text-7xl font-bold">LETS WORK!</p>
        </div>

        <section className="w-full mt-20">
          <div className=" w-full lg:w-[65%] flex flex-col lg:flex-row justify-between items-center">
            <h2 className="w-full mb-3 lg:mb-0 text-2xl lg:text-4xl font-bold ">
              01
            </h2>
            <div className="w-full">
              <p className="mb-4">brief TC on what you need</p>
              <div className="h-[190px] lg:w-[400px] py-10 px-4 lg:px-8 border-2 border-black flex flex-col justify-between">
                <p className="text-2xl md:text-3xl font-bold">Project work:</p>
                <div className="flex justify-evenly lg:justify-between w-full">
                  <SmallBtn> 10,000</SmallBtn>
                  <SmallBtn> 10,000</SmallBtn>
                  <SmallBtn> 10,000</SmallBtn>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full mt-20">
          <div className="w-full lg:w-[77%] xxl:w-[75%] flex  flex-col lg:flex-row justify-between items-center">
            <h2 className="w-full mb-4 md:mb-0 text-2xl lg:text-4xl font-bold ">
              02
            </h2>
            <div className="w-full">
              <form className=" lg:w-[600px] py-10 px-4 lg:px-8 border-2 border-black flex flex-col justify-between rounded-lg">
                <p className="text-2xl md:text-3xl font-bold capitalize pb-6 ">
                  more info:
                </p>
                <div className="flex justify-between w-full flex-col gap-y-10 mt-10 ">
                  <Input placeholder="your email" className="border-gray-300" />
                  <Textarea
                    className="resize-none"
                    placeholder="A few words about your project"
                  />
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </section>
  );
};

export default page;
