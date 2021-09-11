import React from "react";
import { useState } from "react/cjs/react.development";

// onchange handler ma uses jetla letter type karse tem tem reflect thase and leter print kari shakase by event.target.value
// jema event parameter ae input field ne store karse as obj
const App14 = () => {

   const [Name,setName] = useState("");

   const [fullname,setfullname] = useState("");
    const inputEvent = (event) => {

       console.log(event.target.value);
       setName(event.target.value);

    }

   const onSubmit = () => {

    setfullname(Name);

   }

   return (
       <>
       <div>
           <h1>Hello {Name}</h1>
           <h1>Hello {fullname}</h1>
       <input type="text" placeholder="Enter Name" onChange={inputEvent} value={Name} />
       <button onClick={onSubmit}>Click Me 👍</button>
       </div>
       </>
   )

}

export default App14;