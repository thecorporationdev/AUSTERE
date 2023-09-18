import { shimmer, toBase64 } from "@/lib/image";
import Image from "next/image";
import React from "react";
import image from "../../../public/nathan-cima-2JNNpq4nGls-unsplash.jpg";
import Link from "next/link";
import Footer from "@/components/ui/Footer";

type Props = {};

const page = (props: Props) => {
  return (
    <section className="max-w-[90%] mx-auto ">
      <div className="flex w-full">
        <h1 className="w-full text-4xl md:text-6xl mx-auto xl:text-8xl font-extrabold text-left uppercase md:py-10">
          project details
        </h1>
      </div>
      <div className="h-[3px] w-full bg-black mt-10" />

      <div className="w-full flex justify-end mt-10 md:my-20 ">
        <div className="lg:w-1/2 flex justify-end ">
          <p className=" text-xs md:text-[18px] font-bold leading-[20px] lg:leading-[35px] tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            laboriosam dolore ipsum tempore voluptate illo fugit, facere aliquid
            facilis, laudantium aperiam suscipit eaque minima mlor sit amet
            illo?axime. Minus consectetur tenetur officia illo? Lorem ipsum do
          </p>
        </div>
      </div>

      <div className="w-full mb-10">
        <div className="lg:w-[55%] flex justify-between h-[10vh] items-end  py-4">
          <h2 className="text-xl md:text-4xl font-bold">iboats</h2>
        </div>
      </div>
      <div className="w-full">
        <div className=" h-[450px] relative overflow-hidden  bg-gray-100">
          <Image
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64, ${toBase64(
              shimmer(400, 400)
            )}`}
            src={image}
            alt="boatimage"
            fill
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-all duration-150 bg-center h-full"
          />
        </div>
      </div>

      <div className="w-full mt-6 max-md:px-3 ">
        <h3 className="text-xl lg:text-3xl font-bold ">
          CORPORATE CULTURE DEPENDS ON WHAT YOUR CEO SAYS
        </h3>
        <p className="mt-3 text-[12px] md:text-[14px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus doloremque consequatur pariatur quo consequuntur sequi
          expedita dignissimos culpa! Ratione corporis minus fugit voluptas
          laborum? Dolor cupiditate dolores voluptates et placeat? Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Neque itaque tempora
          accusamus suscipit sapiente atque, magni doloremque eos repudiandae,
          quas rem nesciunt recusandae veritatis ullam laudantium, accusantium
          asperiores eius ipsam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Itaque omnis quo accusantium perspiciatis? Et
          doloribus quas provident explicabo quis consequatur numquam, est
          laboriosam, nesciunt, adipisci soluta. Provident cum incidunt ipsa.
        </p>
        <p className="mt-3 text-[12px] md:text-[14px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus doloremque consequatur pariatur quo consequuntur sequi
          expedita dignissimos culpa! Ratione corporis minus fugit voluptas
          laborum? Dolor cupiditate dolores voluptates et placeat? Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Neque itaque tempora
          accusamus suscipit sapiente atque, magni doloremque eos repudiandae,
          quas rem nesciunt recusandae veritatis ullam laudantium, accusantium
          asperiores eius ipsam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Itaque omnis quo accusantium perspiciatis? Et
          doloribus quas provident explicabo quis consequatur numquam, est
          laboriosam, nesciunt, adipisci soluta. Provident cum incidunt ipsa.
        </p>
        <p className="mt-3 text-[12px] md:text-[14px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus doloremque consequatur pariatur quo consequuntur sequi
          expedita dignissimos culpa! Ratione corporis minus fugit voluptas
          laborum? Dolor cupiditate dolores voluptates et placeat? Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Neque itaque tempora
          accusamus suscipit sapiente atque, magni doloremque eos repudiandae,
          quas rem nesciunt recusandae veritatis ullam laudantium, accusantium
          asperiores eius ipsam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Itaque omnis quo accusantium perspiciatis? Et
          doloribus quas provident explicabo quis consequatur numquam, est
          laboriosam, nesciunt, adipisci soluta. Provident cum incidunt ipsa.
        </p>
        <p className="mt-3 text-[12px] md:text-[14px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus doloremque consequatur pariatur quo consequuntur sequi
          expedita dignissimos culpa! Ratione corporis minus fugit voluptas
          laborum? Dolor cupiditate dolores voluptates et placeat? Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Neque itaque tempora
          accusamus suscipit sapiente atque, magni doloremque eos repudiandae,
          quas rem nesciunt recusandae veritatis ullam laudantium, accusantium
          asperiores eius ipsam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Itaque omnis quo accusantium perspiciatis? Et
          doloribus quas provident explicabo quis consequatur numquam, est
          laboriosam, nesciunt, adipisci soluta. Provident cum incidunt ipsa.
        </p>
      </div>

      <div className="max-lg:px-3  md:mt-6 lg:mt-10   mt-20 ">
        <h3 className="uppercase font-bold text-base md:text-xl mb-4">
          Other projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 ">
          <Projectrelated />
          <Projectrelated />
          <Projectrelated />
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default page;

function Projectrelated(props: Props) {
  return (
    <Link href="/" className="group text-sm w-full">
      <div className=" h-[400px] relative overflow-hidden bg-gray-100">
        <Image
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64, ${toBase64(
            shimmer(400, 400)
          )}`}
          src={image}
          alt="BOAT IMAGE"
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-all duration-150 bg-top h-full"
        />
      </div>

      <p className="mt-2 text-xl tracking-tighter text-gray-900 font-bold">
        IBoats
      </p>
    </Link>
  );
}
