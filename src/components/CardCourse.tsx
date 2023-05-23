import React from "react";
import Timer from "../counter/Timer";

interface Props {
  id: Key | null | undefined;
  name: string;
  academy: string | undefined;
  date: string;
  description: string;
  link: string | undefined;
}

function CardCourse(props: Props) {
  return (
    <div
      key={props.id}
      className="md:w-5/12 px-4 py-2 m-2 text-gray-700 rounded-xl  bg-gray-200 hover:bg-emerald-200"
    >
      <h1 className=" font-bold mb-2 pt-2 border-b-2 border-slate-400">
        {props.name}
      </h1>
      <p className="font-semibold ">Academy: {props.academy}</p>
      <p className="font-semibold text-sm mb-1">Date: {props.date}</p>
      <p className="py-2">{props.description}</p>
      <div className=" text-sm  flex flex-row">
        <Timer date={props.date} name={"Course"} />
      </div>
    </div>
  );
}

export default CardCourse;
