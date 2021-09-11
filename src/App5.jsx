import React from "react";
import {add,sub,mul,div} from './App4_calsi';

function App(){
    return (
        <>
        <ol>
          <li>addition of two number is {add(40,6)}</li>
          <li>subtraction of two number is {sub(40,6)}</li>
          <li>multiplication of two number is {mul(40,6)}</li>
          <li>division of two number is {div(40,6)}</li>
        </ol>
      </>
    )
}

export default App;