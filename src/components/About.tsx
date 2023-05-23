import React from "react";
import skills from "../data/skills.json";
import courses from "../data/courses.json";
import Timer from "../counter/Timer";
import CardCourse from "./CardCourse";

export default function About() {
  return (
    <section id="about">
      <div className=" text-justify items-center justify-center text-lg mx-20 py-20 md:flex-row   ">
        <h1 className="m-10 text-center font-bold text-3xl">
          About me
          <hr className="w-40 h-1 mx-auto my-4 bg-emerald-600 border-0 rounded"></hr>
        </h1>
        <div>
          <p>
            I started as a self-taught web developer with a strong desire for
            innovative and design while i was working with web content for
            WordPress sites and social networks. Video editing and many other
            things that came throughout the way.
          </p>
          <br />
          <p>
            Getting to know much more of technology was my daily bread. I took
            several online courses and a Web & Mobile course that boost my
            scatered knowledge more concistent and pratical.
          </p>
        </div>
        <div className=" flex-row text-center items-center  mx-20 py-12    md:py-30">
          <h1 className="text-center font-bold text-2xl mb-6">
            My skills
            <hr className="w-24 h-1 mx-auto my-4 bg-emerald-300 border-0 rounded"></hr>
          </h1>
          <div className="flex flex-wrap flex-row justify-center ">
            {skills.map((item: any, id: any) => {
              return (
                <p
                  className="md:w-fit px-3 py-1 mr-2 mt-2 text-gray-700 rounded font-semibold bg-gray-300 hover:bg-emerald-200"
                  key={id}
                >
                  {item.skill}
                  <span className="text-sm bg-gray-200 p-0.5 rounded  align-super">
                    {item.level}
                  </span>
                </p>
              );
            })}
          </div>
          <p className="text-xs mt-3 text-center ">
            <span className="">- 3 Advanced </span>
            <span className="">- 2 Intermediate </span>
            <span className="">- 1 Begginer - </span>
          </p>
        </div>
        <div>
          <h1 className="text-center font-bold text-2xl mb-10">
            Courses
            <hr className="w-24 h-1 mx-auto my-4 bg-emerald-300 border-0 rounded"></hr>
          </h1>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-wrap mb-10 justify-center">
            {courses.map((item: any, id: any) => {
              return (
                <CardCourse
                  id={item.id}
                  name={item.name}
                  academy={item.academy}
                  date={item.date}
                  description={item.description}
                  link={item.link}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
