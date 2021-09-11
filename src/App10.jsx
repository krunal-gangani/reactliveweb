import React, { useState } from "react";

// let count=1;

const App10 = () => {
  const IncNum = () => {
    // setcount(6);//click karva ma avse to 6 thy jase
    setcount(count + 1);
    // console.log("clicked" + count++); //console ma avse jyare click karva ma ave tyare
  };

//   const state = useState();
  const [count, setcount] = useState(0);
//   console.log(state);//console ma arraya ma 2 item avse[undefined,function] -> [currentdata,updatedata(func)]

  return (
    <>
      <h1>{count}</h1>
      <button onClick={IncNum}>Click Me</button>
    </>
  );
};

export default App10;
