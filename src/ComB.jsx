// useContext
import React, { useContext } from "react";
import ComC from "./ComC";

import { FirstName, LastName } from "./App27";


const ComB = () => {

  const fname = useContext(FirstName);
  const lname = useContext(LastName);

  return (
    <>
     <ComC />  {/* pela ComC call thy jase pasi nichenu execute thase */}
     <h1>my name is {fname} {lname} </h1>  {/* direct component B ne data jase and pela createcontext jetlu complex pan nathi */}
    </>
  );
};
export default ComB;