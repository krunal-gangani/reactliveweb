import React, { useEffect, useState } from "react";
import axios from "axios";

const CompA = () => {
  const [num, setNum] = useState(1);
  const [name, setName] = useState();
  const [moves, setMoves] = useState();

  useEffect(() => {
    //   alert('hi');  //demo

    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      console.log(res); //data console ma avse as object
      console.log(res.data.name);
      setName(res.data.name);
      setMoves(res.data.moves.length);
    }
    getData();
  });

  return (
    <>
      <h1>
        you chose <span style={{ color: "red" }}>{num} </span>value
      </h1>
      <h1>
        my name is <span style={{ color: "red" }}>{name}</span>
      </h1>
      <h1>
        i have <span style={{ color: "red" }}>{moves}</span> moves
      </h1>
      <select
        value={num}
        onChange={(event) => {
          setNum(event.target.value); //user je select karse tyare value change thase
        }}
      >
        <option value="1"> 1 </option>
        <option value="25"> 25 </option>
        <option value="3"> 3 </option>
        <option value="4"> 4 </option>
        <option value="5"> 5 </option>
      </select>
    </>
  );
};
export default CompA;
