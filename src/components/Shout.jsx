import React, { useState } from "react";
import "./styles.css";

const Shout = () => {
  const [shoutText, setShoutText] = useState("");

  return (
    <div className="container">
      <div className="input-text">
        <input
          type="text"
          onChange={(event) => setShoutText(event.target.value)}
        />
      </div>
      <div className="shout-text">{shoutText.toUpperCase()}</div>
    </div>
  );
};

export default Shout;
