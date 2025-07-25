import React from "react";
import { projects } from "./data";
// import { designs } from "./data";
const Project = () => {
  return (
    <div
      id="/project"
      className="md:h-full w-full  flex flex-col  md:top-0 top-[4rem] "
    >
      <div className="font-montserrat text-3xl">My Projects </div>
      <div className=" grid md:grid-cols-3    justify-center md:gap-[8rem] gap-[6rem]  md:p-[6rem] p-6 ">
        {projects.map((project, index) => (
          <div
            id={index}
            className="md:h-[35rem] h-fit md:w-[25rem]  w-fit p-3 font-montserrat flex flex-col gap-4 text-xl border-solid border-2 text-justify  rounded-[2rem] shadow-md shadow-white"
          >
            <h1 className="font-semibold text-3xl text-center">
              {project.Title}
            </h1>
            <h1>{project.Description}</h1>
            <img src={project.image} className="my-10"></img>
            <a href={project.link} className="italic underline ">
              Visit Website
            </a>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Project;
