import React from "react";

function App2() {
  let CurrentDate = new Date();
  let CurrentTime = CurrentDate.toLocaleTimeString();
  let CurrentHour = CurrentDate.getHours();

  let cssStyle = {};
  let greeting = "";

  if (CurrentHour >= 1 && CurrentHour < 12) {
    greeting = "Good morning";
    cssStyle.color = "green";
  } else if (CurrentHour >= 12 && CurrentHour < 19) {
    greeting = "Good afternoon";
    cssStyle.color = "Orange";
  } else {
    greeting = "Good night";
    cssStyle.color = "Black";
  }

  return (
    <>
      <div>
        <h1>
          Hello Sir , Time is {CurrentTime} and hour is {CurrentHour} ,so{" "}
          <span style={cssStyle}> {greeting} </span>
        </h1>
      </div>
    </>
  );
}
export default App2;
