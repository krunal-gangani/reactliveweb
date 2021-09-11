import React from "react";
import { useState } from "react/cjs/react.development";

// onchange handler ma uses jetla letter type karse tem tem reflect thase and leter print kari shakase by event.target.value
// jema event parameter ae input field ne store karse as obj
const App17 = () => {
  const [fullname, setfullName] = useState({
    fname: "",
    lname: "",
    email:"",
    phone:""
  });

  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
    // console.log(event.target.placeholder);

    // const value = event.target.value;
    // const name = event.target.name;

    const {value,name} = event.target; //object desstructuring

    setfullName((preValue) => {
      //  console.log(preValue);//usestate valo object hase jene fullname and setfullname vanne access kari shke se liki object

      if (name === "fname") {
        return {
          fname: value,
          lname: preValue.lname,
          email : preValue.email,
          phone : preValue.phone
        };
      } else if (name === "lname") {
        return {
          fname: preValue.fname,
          lname: value,
          email : preValue.email,
          phone : preValue.phone
        };
      } else if (name === "email") {
        return {
          fname: preValue.fname,
          lname: preValue.lname,
          email : value,
          phone : preValue.phone
        };
      } else if (name === "phone") {
        return {
          fname: preValue.fname,
          lname: preValue.lname,
          email : preValue.email,
          phone : value
        };
      }
    });
  };

  const onSubmits = (events) => {
    events.preventDefault(); //submit no defalt behaviour rokva mate use thay se
    alert("form submited");
    setfullName(events.target.value);

  };

  return (
    <>
      <form onSubmit={onSubmits}>
        <div>
          <h1>
            Hello {fullname.fname} {fullname.lname}{" "}
          </h1>
          <p>{fullname.email}</p>
          <p>{fullname.phone}</p>
          <input
            type="text"
            placeholder="Enter Name"
            onChange={inputEvent}
            name="fname"
            value={fullname.fname}
          />
          <br />
          <input
            type="text"
            placeholder="Enter last Name"
            onChange={inputEvent}
            name="lname"
            value={fullname.lname}
          />
          <br />
          <input
            type="email"
            placeholder="Enter Your Email"
            onChange={inputEvent}
            name="email"
            value={fullname.email}
            autoComplete='off'
          />
          <br />
          <input
            type="number"
            placeholder="Enter Phone Number"
            onChange={inputEvent}
            name="phone"
            value={fullname.phone}
          />
          <button type="submit" onClick={onSubmits}>
            Submit Me 👍
          </button>
        </div>
      </form>
    </>
  );
};

export default App17;
