import React, { Key } from "react";
import { Link, To } from "react-router-dom";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

interface Props {
  id: Key | null | undefined;
  link: string;
  image: string | undefined;
  name: string;
  description: string;
  github: string | undefined;
}

export default function Card(props: Props) {
  return (
    <section>
      <div>
        <div className="items-center justify-center text-lg mx-20 pb-4 shadow border rounded-xl m-2 p-2 hover:bg-gray-400">
          <div key={props.id}>
            <div className=" flex-row">
              <div className="flex mt-1 justify-center">
                <Link to={props.link} target="_blank">
                  <img
                    className="rounded-xl shadow-xl hover:opacity-70 "
                    src={props.image}
                    alt={"project image"}
                    width="100%"
                    height={400}
                  />
                </Link>
              </div>
              <div className="mt-8 mx-4">
                <h1 className="text-2xl font-bold mb-4">{props.name}</h1>
                <p className="text-lg leading-7 mb-4 dark:text-neutral-500">
                  {props.description}
                </p>
                <div className="flex space-x-2 align-bottom">
                  <Link to={props.github} target="_blank">
                    <BsGithub
                      size={24}
                      className="hover:-translate-y-1 transition-transform cursor-pointer"
                    />
                  </Link>
                  <Link to={props.link} target="_blank">
                    <BsArrowUpRightSquare
                      size={24}
                      className="hover:-translate-y-1 transition-transform cursor-pointer"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
