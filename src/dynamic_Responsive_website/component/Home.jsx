import React from "react";
import web from "../../image/pic1.jpg";
import Common from "./Common";
const Home = () => {
  return (
    <>
      <Common
        name="Grow your codding skills with Kathiyawadi Coders"
        img={web}
        visit="/service"
        btname="Get started"
      />
    </>
  );
};

export default Home;
