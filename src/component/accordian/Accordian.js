import React from "react";
import { questions } from "./api";
import { useState } from "react/cjs/react.development";

import MyAccordian from "./MyAccordian";

const Accordian = () => {
  const [data] = useState(questions); //bydefault quesions ae current data hase

  return (
    <>
      <section className="main_div">
          <div className="center_div">
          <h1>My BioData Demo</h1>
        {data.map((curEle) => {
          const { id } = curEle;

          return <MyAccordian key={id} {...curEle} />;
        })}
        </div>
      </section>
    </>
  );
};
export default Accordian;
