import React from "react";
import { FirstName, LastName } from "./App27";

// consumer will consume value of provide directly from App and will accept function

const ComC = () => {
  return (
    <>
      <FirstName.Consumer>
        {(fname) => {
          return (
            <LastName>
              {(lname) => {
                return (
                  <h1>
                    My name is {fname} {lname}
                  </h1>
                );
              }}
            </LastName>
          );
        }}
      </FirstName.Consumer>
      <h1>My name is kaushik</h1>
    </>
  );
};
export default ComC;
