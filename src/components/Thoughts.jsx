import React, { useState, useEffect } from "react";

const Thoughts = () => {
  const [posts, setPosts] = useState([]);
  const [onChangeInput, setOnChangeInput] = useState("");
  const [times, setTimes] = useState([]);

  const getTimes = (index) => {
    return times.slice(index, index + 1);
  };

  const renderedPosts = posts.map((post, index) => {
    return (
      <div className="item" key={getTimes(index)}>
        <h3 className="title">{post}</h3>
        <p className="time">{`Posted at ${getTimes(index)}`}</p>
        <button
          className="removeThought"
          onClick={() => {
            const thoughtsRevised = [...posts];
            thoughtsRevised.splice(index, 1);
            setPosts([...thoughtsRevised]);
          }}
        >
          Delete
        </button>
      </div>
    );
  });

  useEffect(() => {
    // console.log(showPost);
  });

  return (
    <div className="container">
      <div className="searchBar">
        <input
          type="text"
          className="post"
          onChange={(event) => setOnChangeInput(event.target.value)}
        />
        <button
          className="addPost"
          onClick={() => {
            setPosts([...posts, onChangeInput]);
            setTimes([...times, new Date().toLocaleTimeString()]);
          }}
        >
          Add Thought
        </button>
      </div>
      <div className="posts">
        {renderedPosts.length === 0 ? "There Are No Thoughts" : renderedPosts}
      </div>
    </div>
  );
};

export default Thoughts;
