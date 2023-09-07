import React from "react";
import Project from "../../ui/Project";
import Arrow from "../../icons/Arrow";

type Props = {};

const Projects = (props: Props) => {
  return (
    <section className="md:px-16 mt-10 w-full">
      <h1 className="text-5xl tracking-tighter uppercase mb-4 font-light">
        Projects
      </h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 mt-3 md:mt-4 w-full">
        <Project />
        <Project />
        <Project />
        <Project />
      </section>
      <div className="w-full md:mt-16 flex justify-end">
        <div className=" w-1/2 flex justify-end md:justify-start ">
          <div className="flex items-center underline underline-offset-2 text-gray-500 ">
            <h1 className="text-base tracking-tighter uppercase mb-2 text-gray-600 ">
              AllProjects
            </h1>
            <Arrow />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
