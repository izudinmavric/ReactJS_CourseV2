import React, { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };
  return (
    <div>
      <h1>Hello world</h1>
      {/* <p>It's good to see you!</p> */}
      {!changedText && <Output>It's good to see you</Output>}
      {changedText && <Output>Changed!</Output>}

      <button onClick={changeTextHandler}></button>
    </div>
  );
};

export default Greeting;
