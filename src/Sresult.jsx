import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; 

const Sresult = (props) => {

  const img = `https://source.unsplash.com/600x400/?${props.name}`;

   return (
       <>
       <div className="text-center">
           <img src={img} alt='error' />
        </div>
        </>
   )

}
export default Sresult; 