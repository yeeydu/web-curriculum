import React from "react";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section id="home">
      <div className="vector-home ">
        <div className="flex flex-col text-center items-center  justify-center mx-20  py-12 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52">
          <div className="flex flex-col  md:mt-4 m-10 md:justify-center">
            <img
              src="images/user-image.jpg"
              width={300}
              className=" border-emerald-900 border-2 rounded-3xl shadow-2xl hover:rounded-full hover:shadow-gray-600 "
            />
            <hr className="w-40 h-1 mx-auto my-4 bg-emerald-600 border-0 rounded"></hr>
          </div>
          <div className="flex flex-col w-1/2 md:mt-4  m-10 md:justify-center  ">
            <p className="pb-2 ">
              Hello! I am a web developer, also interested in Cross-platform
              apps. Learning new features about technology is a daily constant.
            </p>
            <button
              className="font-bold  md:w-24 rounded-md bg-emerald-600 px-3.5 py-1.5   text-sm text-white  hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
              onClick={() => {
                navigate("/about");
              }}
            >
              About
            </button>
          </div>
        </div>
      </div>
      <Projects />
      <Contact />
    </section>
  );
}
