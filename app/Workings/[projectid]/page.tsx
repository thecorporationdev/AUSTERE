import { shimmer, toBase64 } from "@/lib/image";
import Image from "next/image";
import React from "react";
import image from "../../../public/nathan-cima-2JNNpq4nGls-unsplash.jpg";
import ProjectItem from "@/components/WorkingsSections/ProjectItem";
import Project from "@/components/ui/Project";
import Link from "next/link";
import Footer from "@/components/ui/Footer";

type Props = {};

const page = (props: Props) => {
  return (
    <section className="max-w-[90%] mx-auto ">
      <div className="w-full mb-10">
        <div className="lg:w-[55%] flex justify-between h-[30vh] items-end lg:px-10 py-4">
          <h2 className="text-xl md:text-4xl font-bold">iBoats ideospahere</h2>
          <h3 className="text-xl md:text-4xl font-bold">iBoats ideosphere</h3>
        </div>
      </div>
      <div className="lg:px-10 w-full">
        <div className=" h-[450px] relative overflow-hidden rounded-lg border-2 border-gray-200 bg-gray-100">
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

      <div className="w-full mt-6 px-3 md:px-10">
        <h3 className="text-xl lg:text-3xl font-bold ">
          CORPORATE CULTURE DEPENDS ON WHAT YOUR CEO SAYS
        </h3>
        <p className="mt-3">
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
      <div className="w-full mt-6 px-3 md:px-10">
        <h3 className="text-xl lg:text-3xl font-bold ">
          CORPORATE CULTURE DEPENDS ON WHAT YOUR CEO SAYS
        </h3>
        <p className="mt-3">
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
      <div className="w-full mt-6 px-3 md:px-10">
        <h3 className="text-xl lg:text-3xl font-bold ">
          CORPORATE CULTURE DEPENDS ON WHAT YOUR CEO SAYS
        </h3>
        <p className="mt-3 ">
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

      <div className="grid grid-cols-1 md:grid-cols-3  px-3 lg:px-10  gap-x-4">
        <Projectrelated />
        <Projectrelated />
        <Projectrelated />
      </div>

      <Footer />
    </section>
  );
};

export default page;

function Projectrelated(props: Props) {
  return (
    <Link href="/" className="group text-sm w-full">
      <div className=" h-[400px] relative overflow-hidden rounded-lg border-2 border-gray-200 bg-gray-100">
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
