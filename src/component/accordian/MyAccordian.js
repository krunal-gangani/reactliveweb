import React from "react";
import { useState } from "react/cjs/react.development";

const MyAccordian = ({question,answer}) => {
  
  const [show,setShow] = useState(false);

    return (
      <>
       <div className="main_heading">
           <p onClick={() => setShow(!show) } style={{cursor : 'pointer'}} > {show ? '➖' : '➕'} </p>
           <h3>{question}</h3>
       </div>
       { show && <p className="answers">{answer}</p>}
      </>
    );
  };
  export default MyAccordian;
  