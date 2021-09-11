import React from "react";
import Card from "./App6_Cards";
import Sdata from "./Sdata";

const Amazone = () => {

   return (

    <Card 
    
    key = {Sdata[6].id}
    imgsrc={Sdata[6].imgsrc}
    title={Sdata[6].title}
    sname={Sdata[6].sname}
    link={Sdata[6].link} 

    />

   )

}

export default Amazone;