import React from "react";
import web from '../../image/coders1.jpg'
import Common from "./Common";
const About = () => {
  return (
    <>
      <Common
        name="Welcome to about page"
        img={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
