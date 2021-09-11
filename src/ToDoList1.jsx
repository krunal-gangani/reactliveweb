import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { useState } from "react/cjs/react.development";
import List1 from "./List1";

const ToDoList1 = () => {

  const [item,setItem] = useState("");
  const [newitem,setnewItem] = useState([]);

  const itemEvent = (event) => { //input field ni property access kari shakase by event object parameter and user je type karse te value attribute ma store thase

   setItem(event.target.value);

  }

  const listOfItems = () => {  //user je lkhe te array ma stroe thy ne print thy jse

   setnewItem((prevItem)=>{

    return [...prevItem,item];

   })
   setItem('');

  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDoList</h1>
          <br />
          <input type="text" value={item} placeholder="Add an Items" onChange={itemEvent}  />
          <Button  className="newBtn" onClick={listOfItems}>
            <AddIcon />
          </Button>

          <br />

          <ol>
            {/* <li>{item}</li> */}  {/* demo for event.target.value */}

            {newitem.map((value,index) => {  //map ma key name ni property hovi joy e badha child pase je unique id darshave se

             return <List1 text={value} key={index}/>
            })}

          </ol>
        </div>
      </div>
    </>
  );
};
export default ToDoList1;
