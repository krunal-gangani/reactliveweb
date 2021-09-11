import React from "react";
import { useState } from "react/cjs/react.development";

// onchange handler ma uses jetla letter type karse tem tem reflect thase and leter print kari shakase by event.target.value
// jema event parameter ae input field ne store karse as obj
const App15 = () => {
  const [Name, setName] = useState("");

  const [fistname, setfirstname] = useState("");

  const [lastname, setlastname] = useState("");

  const [lastnamenew, setlastnamenew] = useState("");

  const inputEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };
  const inputEventTwo = (event) => {
    console.log(event.target.value);
    setlastname(event.target.value);
  };

  const onSubmits = (events) => {
    events.preventDefault(); //submit no defalt behaviour rokva mate use thay se
    setfirstname(Name);
    setlastnamenew(lastname);
  };

  return (
    <>
      <form onSubmit={onSubmits}>
        <div>
          <h1>
            Hello {Name}
            {lastname}
          </h1>
          <h1>
            Hello {fistname}
            {lastnamenew}
          </h1>
          <input
            type="text"
            placeholder="Enter Name"
            onChange={inputEvent}
            value={Name}
          />
          <br />
          <input
            type="text"
            placeholder="Enter last Name"
            onChange={inputEventTwo}
            value={lastname}
          />
          <button type="submit" onClick={onSubmits}>
            Submit Me 👍
          </button>
        </div>
      </form>
    </>
  );
};

export default App15;
