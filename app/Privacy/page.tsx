import React from "react";
import Footer from "@/components/ui/Footer";
import Reveal from "@/components/Reveal";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <section className="pt-32 md:pt-24">
        <Reveal>
          <div className="flex w-full max-w-[90%] mx-auto ">
            <h1 className="w-full text-4xl md:text-6xl mx-auto xl:text-8xl font-[400] text-left uppercase md:py-10">
              the <br className="md:hidden" /> privacy
            </h1>
          </div>
        </Reveal>
        <div className="h-[3px] w-full bg-black mt-10 max-w-[90%] mx-auto " />

        <div className="w-full mt-6 max-md:px-3 max-w-[90%] mx-auto ">
          <h3 className="text-xl uppercase lg:text-3xl font-bold ">
            privacy policy statement
          </h3>
          <p className="mt-3 text-[15px] md:text-[17px] leading-[20px] lg:leading-[30px]">
            We take your privacy seriously at www.theaustere.xyz. This privacy
            policy statement is designed to provide you with information on how
            we collect, use, and protect your personal data when you visit our
            website.
          </p>
          <p className="mt-3 text-[15px] md:text-[17px] leading-[20px] lg:leading-[30px]">
            <span className="uppercase font-[400]">
              1. Collection of Information:
            </span>{" "}
            We may collect certain information when you visit our website, such
            as your IP address, browser type, and operating system. This
            information is used to analyze trends, administer the site, and
            gather demographic information for internal purposes. We do not
            collect any personally identifiable information unless you
            voluntarily provide it to us.
          </p>
          <p className="mt-3 text-[15px] md:text-[17px] leading-[20px] lg:leading-[30px]">
            <span className="uppercase font-[400]">
              {" "}
              2. Use of Information:{" "}
            </span>
            Any personal information you provide to us will be used solely for
            the purpose for which it was given. We may use your information to
            respond to your inquiries, improve our website and services, and
            personalize your experience. We may also use your information to
            send you updates and promotional offers, but you have the option to
            unsubscribe from these communications at any time.
          </p>
          <p className="mt-3 text-[15px] md:text-[17px] leading-[20px] lg:leading-[30px]">
            <span className="uppercase font-[400]">
              3. Protection of Information:{" "}
            </span>{" "}
            We have implemented various security measures to safeguard your
            personal information and prevent unauthorized access, use, or
            disclosure. However, please be aware that no method of transmission
            over the internet or electronic storage is completely secure, and we
            cannot guarantee absolute security.
          </p>
          <p className="mt-3 text-[15px] md:text-[17px] leading-[20px] lg:leading-[30px]">
            <span className="uppercase font-[400]"> 4. Cookies: </span> Our
            website uses cookies to enhance your browsing experience. These
            cookies are small text files that are stored on your device and
            collect certain information, such as your preferences and website
            activity. You have the option to disable cookies in your browser
            settings, but please note that this may affect the functionality of
            our website.
          </p>
          <p className="mt-3 text-[15px] md:text-[17px] leading-[20px] lg:leading-[30px]">
            <span className="uppercase font-[400]">
              {" "}
              5. Third-Party Websites:{" "}
            </span>{" "}
            Our website may contain links to third-party websites that are not
            controlled or operated by us. We are not responsible for the privacy
            practices or content of these websites. We encourage you to review
            the privacy policies of any third-party websites you visit.
          </p>
          <p className="mt-3 text-[15px] md:text-[17px] leading-[20px] lg:leading-[30px]">
            <span className="uppercase font-[400]">6. Childrens Privacy:</span>{" "}
            Our website is not intended for children under the age of 13. We do
            not knowingly collect or solicit personal information from children.
            If you are a parent or guardian and believe that your child has
            provided us with personal information, please contact us
            immediately.
          </p>
          <p className="mt-3 text-[15px] md:text-[17px] leading-[20px] lg:leading-[30px]">
            <span className="uppercase font-[400]"> 7. Consent: </span> By using
            our website, you consent to the collection and use of your personal
            information as outlined in this privacy policy statement.
          </p>
          <p className="mt-3 text-[15px] md:text-[17px] leading-[20px] lg:leading-[30px]">
            <span className="uppercase font-[400]">
              8. Changes to the Policy:
            </span>
            We reserve the right to update or modify this privacy policy
            statement at any time. Any changes will be effective immediately
            upon posting on our website. It is your responsibility to review
            this policy periodically to stay informed about any updates.
          </p>
          <p className="mt-3 text-[15px] md:text-[17px] leading-[20px] lg:leading-[30px]">
            If you have any questions or concerns about our privacy policy
            statement, please contact us.
          </p>
        </div>

        <div className="h-[3px] max-w-[90%] mx-auto  bg-black mt-10"></div>
      </section>
      <Footer />
    </>
  );
};

export default page;
