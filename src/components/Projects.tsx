import React from "react";
import projects from "../data/projects.json";
import Card from "./Card";
import Timer from "../counter/Timer";

export default function Projects() {
  return (
    <section id="projects">
      <div className=" text-justify items-center justify-center text-lg mx-10 md:flex-row md:space-x-4 ">
        <h1 className="text-center font-bold text-4xl mb-10 py-20 sm:py-32">
          Projects
          <hr className="w-32 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-row justify-center">
          <div className="flex flex-wrap text-lg mb-16 ">
            {projects.map((item: any, id: any) => {
              return (
                <div key={item.id} className="md:w-6/12">
                  <Card
                    id={item.id}
                    link={item.link}
                    image={item.image}
                    name={item.name}
                    description={item.description}
                    github={item.github}
                    date={item.date}
                  />
                  {/* <div className="flex flex-row mb-4 text-sm ml-16 p-0 w-8/12">
                    <Timer date={item.date} name={"Project"} />
                  </div> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
