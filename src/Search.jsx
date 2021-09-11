import React, { useState } from "react";
import Sresult from "./Sresult";

const Search = () => {

   const [img,setImg] = useState('');

   const inputEvent = (event) => {

   const data = event.target.value;
//    console.log(data);
   setImg(data); //user je llakhse te setImg ma store thto jase

   }

  return (
    <>
      <div className="searchbar">
        <input type="text" placeholder="Search Anything" onChange={inputEvent} value={ img } />
      </div>
      <Sresult name={img}/>
    </>
  );
};

export default Search;