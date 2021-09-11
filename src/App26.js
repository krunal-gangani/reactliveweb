import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; //bootstrap ne import pan karvu padse
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const App26 = () => {
  const [addItem, setAddItem] = useState([]); //initial data ma empty array hase

  const addNote = (note) => {
    //  alert('I am clicked');

    setAddItem((prevData) => {
      return [...prevData, note];
    });
  };

  const onDelete = (id) => {
    setAddItem((oldData) => {
    return oldData.filter((curData, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      {/* <Note /> */}
      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}
      <Footer />
    </>
  );
};
export default App26;
