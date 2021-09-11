import React from "react";
import "./index.css";
import Netflix from "./Netflix";
import Amazone from "./Amazone";

const Favorite = "amazone";
// const Favorite = "netflix";

// const FavSeries = () => {
//   if (Favorite === "netflix") {
//     return <Netflix />;
//   } else {
//     return <Amazone />;
//   }
// };

const App8 = () => {
  return (
    <>
      <h1 className="heading_style"> List of my top 5 netflix Series </h1>

      {/* <FavSeries /> */}

      {/* we can use ternary operator also */}

      {Favorite === "netflix" ? <Netflix /> : <Amazone />}
    </>
  );
};

export default App8;
