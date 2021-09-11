import React from "react";
import Sdata from "./Sdata";
import Card from "./App6_Cards";
import "./index.css";

const App7 = () => {
  return (
    <>
      <h1 className="heading_style"> List of my top 5 netflix Series </h1>

      {Sdata.map((cValue) => {
        return (
          <Card
            key={cValue.id}
            imgsrc={cValue.imgsrc}
            title={cValue.title}
            sname={cValue.sname}
            link={cValue.link}
          />
        );
      })}
      {/* {Sdata.filter((item) => item.title.includes("Net")).map((cValue) => {
      {/* {Sdata.filter((item) => item.title.includes("Ama")).map((cValue) => {
        return (
          <Card
            key={cValue.id}
            imgsrc={cValue.imgsrc}
            title={cValue.title}
            sname={cValue.sname}
            link={cValue.link}
          />
        );
      })} */}
    </>
  );
};

export default App7;
