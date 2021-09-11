import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <>
     <h1>Oos!,404 page error</h1>
     <h2>page, you want not found </h2>
     <NavLink to='/' > Go Back </NavLink>
    </>
  );
};
export default Error;
