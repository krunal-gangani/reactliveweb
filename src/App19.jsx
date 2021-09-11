import React from "react";
import { useState } from "react/cjs/react.development";
import ToDoList from "./ToDoList";

// onchange handler ma uses jetla letter type karse tem tem reflect thase and leter print kari shakase by event.target.value
// jema event parameter ae input field ne store karse as obj
const App19 = () => {
  const [inputList, setInputList] = useState("");

  const [items, setItems] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      //oldItems is olddata from usestate as array

      return [...oldItems, inputList];
    });
    setInputList(""); //empty karva mate
  };

  const deleteItem = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrele, index) => {
        return index !== id;
      });
    });

    alert("Item deleted");
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDO List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Items"
            value={inputList}
            onChange={itemEvent}
          />
          <button onClick={listOfItems}> + </button>
          <ol>
            {/* <li>{inputList}</li> */}

            {items.map((itemV, index) => {
              return (
                <ToDoList
                  key={index}
                  text={itemV}
                  id={index}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App19;
