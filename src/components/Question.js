import React, { useState } from "react";
import "./styles.css";

const items = {
  question: "What is React?",
  answer: "It is a library not a framework",
};

const Question = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className="container" onClick={() => setShowAnswer(!showAnswer)}>
      <div>{showAnswer ? items.answer : items.question}</div>
    </div>
  );
};

export default Question;
