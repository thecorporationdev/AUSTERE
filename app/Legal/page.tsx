import React from "react";
import Footer from "@/components/ui/Footer";
import Reveal from "@/components/Reveal";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <section className="pt-32 md:pt-24">
        <Reveal>
          <div className="flex w-full max-sm:px-3 md:max-w-[90%] mx-auto ">
            <h1 className="w-full text-4xl md:text-6xl mx-auto xl:text-8xl font-[400] text-left uppercase md:py-10">
              the <br className="md:hidden" /> legal statement
            </h1>
          </div>
        </Reveal>
        <div className="h-[3px] w-full bg-black mt-10 px-3 md:max-w-[90%] mx-auto " />

        <div className="w-full mt-6 max-md:px-5 md:max-w-[90%] mx-auto ">
          <h3 className="text-xl uppercase lg:text-3xl font-bold ">
            website legal statement
          </h3>
          <p className="mt-3 text-base md:text-[17px] leading-[24px] lg:leading-[30px]">
            Website Legal Statement for{" "}
            <a href="www.theaustere.xyz" className="text-blue-400">
              www.theaustere.xyz{" "}
            </a>
            Thank you for visiting www.theaustere.xyz. We strive to provide a
            safe and enjoyable online experience for all of our users. Please
            take a moment to review our legal statement, which outlines the
            terms and conditions governing the use of our website.
          </p>
          <p className="mt-3 text-base md:text-[17px] leading-[24px] lg:leading-[30px]">
            <span className="uppercase font-[400] ml-1">
              1. Acceptance of Terms
            </span>{" "}
            By accessing and using{" "}
            <a href="www.theaustere.xyz" className="text-blue-400">
              www.theaustere.xyz{" "}
            </a>
            , you agree to comply with and be bound by the terms and conditions
            outlined in this legal statement. If you do not agree with any of
            these terms, please refrain from using our website.
          </p>
          <p className="mt-3 text-base md:text-[17px] leading-[24px] lg:leading-[30px]">
            <span className="uppercase font-[400] ml-1">
              {" "}
              2. intellectual Property :{" "}
            </span>
            All content and materials on www.theaustere.xyz, including but not
            limited to text, graphics, logos, images, and software, are the
            property of The Austere or its licensors and are protected by
            copyright and intellectual property laws. You may not use,
            reproduce, distribute, or modify any content from our website
            without prior written consent.
          </p>
          <p className="mt-3 text-base md:text-[17px] leading-[24px] lg:leading-[30px]">
            <span className="uppercase font-[400] ml-1">
              3. Limitation of Liability:{" "}
            </span>{" "}
            In no event shall The Austere, its affiliates, or its partners be
            liable for any direct, indirect, incidental, consequential, or
            punitive damages arising from the use of or inability to use
            www.theaustere.xyz. We make no warranties or representations
            regarding the accuracy or completeness of the content on our
            website.
          </p>
          <p className="mt-3 text-base md:text-[17px] leading-[24px] lg:leading-[30px] ml-1">
            <span className="uppercase font-[400] ml-1">
              4. Third-Party Links:
            </span>
            www.theaustere.xyz may contain links to external websites or
            resources that are not owned or controlled by The Austere. We are
            not responsible for the content or privacy practices of any
            third-party websites. Accessing these links is at your own risk, and
            we recommend reviewing the terms and privacy policies of those
            websites.
          </p>
          <p className="mt-3 text-base md:text-[17px] leading-[24px] lg:leading-[30px] ml-1">
            <span className="uppercase font-[400]"> 5. Privacy Policy: </span>{" "}
            We respect your privacy and are committed to protecting your
            personal information. Please review our Privacy Policy to understand
            how we collect, use, and disclose your data when you visit
            www.theaustere.xyz.
          </p>
          <p className="mt-3 text-base md:text-[17px] leading-[24px] lg:leading-[30px]">
            <span className="uppercase font-[400] ml-1">
              6. Changes to the Legal Statement:
            </span>{" "}
            The Austere reserves the right to modify or update this legal
            statement at any time without prior notice. By continuing to use our
            website after any changes, you acknowledge and agree to be bound by
            the revised terms and conditions.
          </p>
          <p className="mt-3 text-base md:text-[17px] leading-[24px] lg:leading-[30px]">
            We hope you find this legal statement clear and helpful. If you have
            any questions or concerns regarding our terms and conditions, please
            contact us at [insert contact information]. Thank you for your
            cooperation.
          </p>
        </div>

        <div className="h-[3px] max-w-[90%] mx-auto  bg-black mt-10"></div>
      </section>
      <Footer />
    </>
  );
};

export default page;
