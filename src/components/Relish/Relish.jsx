import React, { useState } from "react";

const items = [
  {
    name: "Branston Pickle",
    description: "A british pickle that is brown in colour",
  },
  {
    name: "Fruit Chutney",
    description: "A chutney, surprisingly made of fruits",
  },
  { name: "Onion Jam", description: "A sweet chutney made of onions" },
  {
    name: "Tomato Relish",
    description: "A classic made with apples and tomatoes",
  },
  { name: "Picalilli", description: "Its a yellow one that tastes weird" },
  {
    name: "Mango Chutney",
    description: "A spicy one, served with Indian currys",
  },
];

const Relish = () => {
  const [relishList, setRelishList] = useState(items);

  const noRelishes = () => {
    return (
      <div>
        <h1 className="notForgetText">Don't Forget About Relishes</h1>
        <button className="showAgain" onClick={() => setRelishList(items)}>
          OK
        </button>
      </div>
    );
  };

  const renderRelish = () => {
    const relishes = relishList.map((item) => {
      return (
        <div className="item" key={item.name}>
          <h3 className="title">{item.name}</h3>
          <p className="info">{item.description}</p>
          <button
            className="notShowButton"
            onClick={() => {
              setRelishList(relishList.filter((f) => f !== item));
            }}
          >
            Not Right Now
          </button>
        </div>
      );
    });
    return relishList.length === 0 ? noRelishes() : relishes;
  };

  return <div className="container">{renderRelish()}</div>;
};

export default Relish;
