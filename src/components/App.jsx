import React, { useState } from "react";

function App() {
  let now = new Date().toLocaleTimeString("en-GB");
  // console.log(now);
  const [time, newTime] = useState(now);

  function GetTime() {
    const New = new Date().toLocaleTimeString("en-GB");
    newTime(New);
  }
  setInterval(GetTime, 1000);

  return (
    <div className="container">
      <h1> {time} </h1>
      <button onClick={GetTime}>Get Time</button>
    </div>
  );
}

export default App;
