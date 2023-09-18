import React from "react";
import Project from "../../ui/Project";
import Arrow from "../../icons/Arrow";
import Link from "next/link";

type Props = {};

const Projects = (props: Props) => {
  return (
    <section className=" mt-16 md:mt-28 w-full">
      <h1 className=" text-2xl md:text-3xl tracking-tighter uppercase mb-4 font-extrabold">
        Projects
      </h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-10 mt-3 md:mt-4 w-full">
        <Project />
        <Project />
        <Project />
        <Project />
      </section>

      <Link href="/Workings" className="group">
        <div className="w-full md:mt-16 flex justify-end">
          <div className=" w-1/2 flex justify-end md:justify-start ">
            <div className="flex items-center underline underline-offset-2 text-gray-500 ">
              <h1 className="text-[12px] md:text-[14px] tracking-tighter uppercase mb-2 text-gray-600 font-semibold  ">
                AllProjects
              </h1>
              <Arrow className="group-hover:scale-105  " />
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Projects;
