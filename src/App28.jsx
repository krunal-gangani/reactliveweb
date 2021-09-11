// useEffect render thya pasi call thase by default
import React, { useEffect, useState } from "react";

const App28 = () => {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);

  // user jyare button par click karse tyare call thase useEffect hook

  // useEffect(() => alert("i am clicked"),[]); //jyare refresh karse tyare j useEffect call thase
  useEffect(() => alert("i am clicked"), [num]); //only num vala button ma num ni value change thase pasi j useeffect call thase
  return (
    <>
      <button onClick={() => setNum(num + 1)}>click me {num}</button>
      <br />
      <br />
      <button onClick={() => setNums(nums + 1)}>click me {nums}</button>
    </>
  );
};
export default App28;
