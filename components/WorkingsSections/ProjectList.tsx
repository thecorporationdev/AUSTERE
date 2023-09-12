import React from "react";
import ProjectItem from "./ProjectItem";
import Footer from "../ui/Footer";
import Arrow from "../icons/Arrow";

type Props = {};

const ProjectList = (props: Props) => {
  return (
    <section className="lg:px-12 mt-20">
      <div className="w-full">
        <h1 className="text-2xl md:text-3xl font-bold uppercase ">projects</h1>
      </div>

      {/* <div className="border-b-2 flex md:justify-end border-gray-300 w-full mt-4">
        <div className="lg:w-1/2">
          <ul className="flex gap-x-2 justify-between items-center capitalize w-[90%] mx-auto font-bold">
            <li className="border-b-2 border-black ">all</li>
            <li>design</li>
            <li>strategy</li>
            <li>creative</li>
            <li>development</li>
          </ul>
        </div>
      </div> */}

      <div className="mt-4">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <div className="w-full md:mt-16 flex justify-end mt-4">
          <div className="w-1/2 flex justify-end md:justify-start ">
            <div className="flex items-center underline underline-offset-2 text-gray-500 ">
              <h1 className="text-base tracking-tighter uppercase mb-2 text-gray-600 font-bold ">
                showmore
              </h1>
              <Arrow />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectList;