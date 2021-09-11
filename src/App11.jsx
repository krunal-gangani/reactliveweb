import React from "react";
import { useState } from "react/cjs/react.development";

const App11 = () => {

  let newTime = new  Date().toLocaleTimeString();
    
      const [curTime, setTime] = useState(newTime);
    //   console.log(state);
    
   const updateTime = () => {

    let newCTime = new Date().toLocaleTimeString();
    setTime(newCTime); //click karvathi time refresh thy jase

    // newTime = new  Date().toLocaleTimeString();
    // setTime(newTime);  //aa rite pan chale

   }

      return (
        <>
          <h1>{curTime}</h1>
          <button onClick={updateTime}>Get Time</button>
        </>
      );

}

export default App11;