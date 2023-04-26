import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`flex flex-row w-full z-50 m-0 text-white p-6 border-0 justify-between md:px-20  dark:bg-gray-900`}
    >
      <Link to={"/"}>
        <h1 className="flex justify-start font-bold">Yeeyson Curriculum</h1>
      </Link>
      <div className="m-0 p-0 ">
        <div className={`md:hidden mr-14`}>
          <button onClick={() => setIsOpen(!isOpen)}>
            <AiOutlineMenu size={26} />
          </button>
        </div>
        <div
          className={`flex justify-self-center mt-4 md:flex md:pb-2 md:mt-0 
          ${isOpen ? "block" : "hidden"}`}
        >
          <div
            className="justify-between md:flex font-bold"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Link className="px-2 block" to={"/"}>
              Home
            </Link>
            <Link className="px-2 block" to="about">
              About
            </Link>
            <Link className="px-2 block" to="projects">
              Projects
            </Link>
            <Link className="px-2 block" to="contact">
              Contact
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
