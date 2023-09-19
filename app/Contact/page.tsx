import Footer from "@/components/ui/Footer";
import SmallBtn from "@/components/ui/SmallBtn";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <section className="max-w-[90%] mx-auto ">
        <div className=" w-full max-md:flex-col mx-auto flex items-left justify-center ">
          <h1 className="w-full text-4xl md:text-6xl mx-auto xl:text-8xl font-[500] text-left uppercase md:py-10">
            the contacts
          </h1>
        </div>
        <div className="h-[3px] w-full bg-black mt-10"></div>

        <div className="w-full flex justify-end py-10 flex-col">
          <div className=" w-full lg:w-[70%] flex gap-y-14 flex-col ">
            <div className="w-full">
              <p className="mb-4 font-bold text-base">
                Brief TC on what you need
              </p>
              <div className="h-[190px] lg:w-[400px] py-10 px-4 lg:px-8 border-2 border-black flex flex-col rounded-lg justify-between">
                <p className="text-2xl md:text-3xl font-bold">Project work:</p>
                <div className="flex justify-evenly lg:justify-between w-full">
                  <SmallBtn> 10,000</SmallBtn>
                  <SmallBtn> 10,000</SmallBtn>
                  <SmallBtn> 10,000</SmallBtn>
                </div>
              </div>
            </div>
            <div className="w-full">
              <form className=" lg:w-[600px] py-10 px-4 lg:px-8 border-2 border-black flex flex-col justify-between rounded-lg">
                <p className="text-2xl md:text-3xl font-bold capitalize pb-6 ">
                  more info:
                </p>
                <div className="flex justify-between w-full flex-col gap-y-10 mt-10 ">
                  <Input placeholder="your email" className="border-gray-400" />
                  <Textarea
                    className="resize-none border-gray-400"
                    placeholder="A few words about your project"
                  />
                </div>
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
