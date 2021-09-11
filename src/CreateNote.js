import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    const { value, name } = event.target; //user je lakhse te batadse

    setNote((prevData) => {
      return { ...prevData, [name]: value };
    });

    // console.log(note);
  };

  const addEvent = () => {

  props.passNote(note);//indirectly passnote call thase
  setNote({
    title: "",
    content: "",
  })
  }

  return (
    <>
      <div className="main_note">
        <form>
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={InputEvent}
            placeholder="Title"
            autoComplete="off"
          />
          <textarea
            rows=""
            cols=""
            name="content"
            value={note.content}
            onChange={InputEvent}
            placeholder="write a note"
          ></textarea>
          <Button onClick={addEvent}>
            <AddIcon className="plus_sign" />
          </Button>
        </form>
      </div>
    </>
  );
};
export default CreateNote;
