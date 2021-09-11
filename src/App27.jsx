// createcontext
import React, { createContext } from "react";
import ComA from "./ComA";

const FirstName = createContext();
const LastName = createContext();

// provider will provide value ->"krunal" directly to component C -> ComC

// otherwise we had to pass components in chain like -> App -> ComA -> ComB -> ComC then value will provide from ComC

const App27 = () => {
  return (
    <>
      <FirstName.Provider value={"krunal"}> <LastName.Provider value="gangani"> <ComA />  </LastName.Provider> </FirstName.Provider>
      {/*  <ComA />  normaly props pass kari ne deep ma value moklvama ave se  */}
       
    </>
  );
};
export default App27;
export { FirstName ,LastName};
