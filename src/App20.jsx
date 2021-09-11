import React from "react";
import { useState } from "react/cjs/react.development";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";

const App20 = () => {
  const [num, setNum] = useState(5);

  const IncreNum = () => {
    setNum(num + 1);
  };

  const decreNum = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      alert("number can not be nagative");
      setNum(0);
    }
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>{num}</h1>
          <div className="btn_div">
            <button onClick={IncreNum}>
              {/* <i className="fa fa-plus" aria-hidden="true" /> */}
              <AddIcon />
            </button>
            <button onClick={decreNum}>
              {" "}
              <DeleteIcon />{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App20;
