import React from "react";
import skills from "../data/skills.json";
import courses from "../data/courses.json";
import Timer from "../counter/Timer";

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
                <div
                  key={id}
                  className="md:w-5/12 px-4 py-2 m-2 text-gray-700 rounded-xl  bg-gray-200 hover:bg-emerald-200"
                >
                  <h1 className=" font-bold mb-2 pt-2 border-b-2 border-slate-400">
                    {item.name}
                  </h1>
                  <p className="font-semibold ">Academy: {item.academy}</p>
                  <p className="font-semibold text-sm mb-1">
                    Date: {item.date}
                  </p>
                  <p key={id} className="py-2">
                    {item.description}
                  </p>
                  <div className=" text-sm  flex flex-row">
                    <Timer date={item.date} name={"Course"} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
