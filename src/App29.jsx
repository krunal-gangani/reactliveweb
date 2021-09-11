// useEffect render thya pasi call thase by default
import React, { useEffect, useState } from "react";

const App29 = () => {
  const [num, setNum] = useState(0);

  // user jyare button par click karse tyare call thase useEffect hook

  useEffect(() => (document.title = `you clicked me ${num} times`), [num]); //onlu num vala button ma num ni value change thase pasi j useeffect call thase
  return (
    <>
      <button onClick={() => setNum(num + 1)}>click me {num}</button>
    </>
  );
};
export default App29;
