import React from "react";

const SlotM = (props) => {
  //   let x = "😄";//demo
  //   let y = "😄";
  //   let z = "😁";
  //   let x = props.x; //object destructuring
  //   let y = props.y;
  //   let z = props.z;

  let { x, y, z } = props; //object destructuring

  if (x === y && y === z) {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x} {y} {z}
          </h1>
          <h1>this is matching</h1>
          <hr />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x} {y} {z}
          </h1>
          <h1>this is Not matching</h1>
        </div>
        <hr />
      </>
    );
  }
};

export default SlotM;
