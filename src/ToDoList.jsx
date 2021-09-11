import React from "react";

const ToDoList = (props) => {
  return (
    <>
      <div className="todo_style">
        <i
          style={{ color: "red" }}
          className="fa fa-times"
          aria-hidden="true"
          onClick={() => {
            props.onSelect(props.id);
          }}
          // onClick={props.onSelect}  //khali demo mate
        />
        <li>{props.text}</li>
      </div>
    </>
  );
};

export default ToDoList;
