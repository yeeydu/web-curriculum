import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

type Props = {
  date: string | any;
  name: string;
};

export default function Timer({ date, name }: Props) {
  dayjs.extend(relativeTime);
  const [fromY, setFromY] = useState(date);
  const [fromM, setFromM] = useState(date);
  const [fromH, setFromH] = useState(date);
  const [fromMin, setFromMin] = useState(date);
  //const [fromSec, setFromSec] = useState(date);

  function updateTimer() {
    setFromY(dayjs().diff(date, "y"));
    setFromM(dayjs().diff(date, "M"));
    setFromH(dayjs().diff(date, "h"));
    setFromMin(dayjs().diff(date, "m"));
    // setFromSec(dayjs().diff(date, "s"));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      updateTimer();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [updateTimer]);

  return (
    <div className="text-center border-y-2 border-slate-400 ml-6 p-1 m-1">
      <span className="px-1">{fromY} years</span>
      <span className="px-1">{fromM} months</span>
      <span className="px-1">{fromH} hours</span>
      <span className="px-1">{fromMin} minutes</span>
      {/* <span className="px-2">{fromSec} seconds</span> */}
      <span className="px-1">since this {name}</span>
    </div>
  );
}
