import React, { useState } from "react";

const OrderBill = () => {
  const [bill, setBill] = useState([0]);

  const onAddClick = (price) => {
    setBill([...bill, price]);
  };

  const onPayClick = () => {
    const emptyState = [0];
    setBill(emptyState);
  };

  const resultBill = bill.reduce((a, b) => a + b);

  return (
    <div className="container">
      <div className="item">
        <h3 className="title">Gin</h3>
        <p className="description">$3</p>
        <button className="addOrder" onClick={() => onAddClick(3)}>
          Add
        </button>
      </div>
      <div className="item">
        <h3 className="title">Vodka</h3>
        <p className="description">$5</p>
        <button className="addOrder" onClick={() => onAddClick(5)}>
          Add
        </button>
      </div>
      <div className="item">
        <h3 className="title">Water</h3>
        <p className="description">$8</p>
        <button className="addOrder" onClick={() => onAddClick(8)}>
          Add
        </button>
      </div>
      <div className="item">
        <h3 className="title">Tequila</h3>
        <p className="description">$2</p>
        <button className="addOrder" onClick={() => onAddClick(2)}>
          Add
        </button>
      </div>
      <div className="payBill">
        <h3 className="payTitle">Your Bill</h3>
        <p className="totalPay">${resultBill}</p>
        <button className="payButton" onClick={() => onPayClick()}>
          Pay
        </button>
      </div>
    </div>
  );
};

export default OrderBill;
