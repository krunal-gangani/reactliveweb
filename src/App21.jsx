import React from "react";
import { useState } from "react/cjs/react.development";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import { Tooltip } from "@material-ui/core";

const App21 = () => {
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
            <Tooltip title="Add">
              <Button onClick={IncreNum} className="btn_green">
                <AddIcon />
              </Button>
            </Tooltip>
            <Tooltip title="Delete">
              <Button onClick={decreNum} className="btn_red">
                {" "}
                <DeleteIcon />{" "}
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default App21;
