import React from "react";
import { useState } from "react/cjs/react.development";

const App13 = () => {
  const purple = "#8e44ad";

  const [bg, setbg] = useState(purple);
  const [Name, setName] = useState("Click Me");
  const bgChange = () => {
    //    console.log('click'); //click karvathi console ma click print thase
    let newBg = "#34495e";
    setbg(newBg);
    setName("doubleClick😈");
  };

  const bgBack = () => {
    setbg(purple);
    setName("Click Me");
  };
  return (
    <>
      <div style={{ backgroundColor: bg }}>
        <button onClick={bgChange} onDoubleClick={bgBack}>
          {Name}
        </button>
        {/* <button onMouseOver={bgChange} onMouseLeave={bgBack}>
          {Name}
        </button> */}
      </div>
    </>
  );
};

export default App13;
