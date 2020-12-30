import React, { useState } from "react";

const TodoList = () => {
  const [list, setList] = useState([]);
  const [listControl, setListControl] = useState("");

  const renderedList = list.map((item, index) => {
    return (
      <div
        className="item"
        key={index}
        onClick={() => setList(list.filter((f) => f !== item))}
      >
        <p className="content">{item}</p>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="addBar">
        <input
          type="text"
          name="input text"
          id="inputTextId"
          className="inputText"
          onChange={(e) => setListControl(e.target.value)}
        />
        <button
          className="addTodo"
          onClick={() => setList([...list, listControl])}
        >
          Add Todo
        </button>
      </div>
      <div className="result">{renderedList}</div>
    </div>
  );
};

export default TodoList;
