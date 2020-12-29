import React, { useState } from "react";
import "./styles.css";

const FruitFacts = () => {
  const [showBox, setShowBox] = useState(false);

  const facts = {
    Banana: "I am yellow in skin",
    Peach: "I have a fuzzy skin",
    Apple: "I tend to be crunchy",
  };

  const onClickShow = () => {
    if (showBox) {
      return (
        <div className="box">
          <div className="first">
            <h3 className="title">Banana</h3>
            <p className="fact">{facts.Banana}</p>
          </div>
          <div className="second">
            <h3 className="title">Peach</h3>
            <p className="fact">{facts.Peach}</p>
          </div>
          <div className="third">
            <h3 className="title">Apple</h3>
            <p className="fact">{facts.Apple}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="container">
      <button className="showButton" onClick={() => setShowBox(!showBox)}>
        {showBox ? "Fruit Facts are boring" : "Show Fruit Facts"}
      </button>
      {onClickShow()}
    </div>
  );
};

export default FruitFacts;
