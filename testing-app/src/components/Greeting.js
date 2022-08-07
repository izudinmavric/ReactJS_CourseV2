import React, { useState } from "react";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };
  return (
    <div>
      <h1>Hello world</h1>
      {/* <p>It's good to see you!</p> */}
      {!changedText && <p>It's good to see you!</p>}
      {changedText && <p>Changed!</p>}

      <button onClick={changeTextHandler}></button>
    </div>
  );
};

export default Greeting;
