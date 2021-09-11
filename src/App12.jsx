import React from "react";
import { useState } from "react/cjs/react.development";

const App12 = () => {
  let time = new Date().toLocaleTimeString();

  const [cTime, setCTime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCTime(time);
  };

  setInterval(updateTime, 1000); //1000millisec(1 sec) ae varamvar updatetime function call thase

  return (
    <>
      <h1>{cTime}</h1>
    </>
  );
};

export default App12;
