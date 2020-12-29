import React, { useState } from "react";
import "./styles.css";

const ColorPicker = () => {
  const [colors, setColors] = useState({
    red: 0,
    green: 0,
    blue: 0,
  });
  return (
    <div className="container">
      <div
        className="circle"
        onClick={() =>
          setColors({
            red: Math.floor(Math.random() * 255),
            green: Math.floor(Math.random() * 255),
            blue: Math.floor(Math.random() * 255),
          })
        }
        style={{
          backgroundColor: `rgb(${colors.red}, ${colors.green}, ${colors.blue})`,
        }}
      >
        <div className="rgb-value">
          {`RGB(${colors.red}, ${colors.green}, ${colors.blue})`}
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
