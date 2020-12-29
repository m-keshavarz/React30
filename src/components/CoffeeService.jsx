import React, { useState } from "react";

const CoffeeService = () => {
  const [revenue, setRevenue] = useState([]);
  const [customers, setCustomers] = useState(0);
  const [bill, setBill] = useState([]);

  const menuItems = [
    { name: "Coffee", price: 2 },
    { name: "Mojito", price: 4 },
    { name: "Carrot Cake", price: 3 },
    { name: "Cheese Cake", price: 5 },
    { name: "Burger", price: 5 },
    { name: "Pizza", price: 7 },
    { name: "steak", price: 12 },
  ];

  const onClickAddItems = (price) => {
    setBill([...bill, price]);
  };

  const onClickPayHandler = (bill) => {
    if (bill === 0) {
      alert("You have to add items first. No Orders Detected.");
      return;
    } else {
      setRevenue([...revenue, bill]);
      setCustomers(customers + 1);
      setBill([0]);
      alert("Thanks for paying.");
    }
  };

  const renderedMenuItems = menuItems.map(({ name, price }, index) => {
    return (
      <div className="item" key={index}>
        <h3 className="title">{name}</h3>
        <p className="priceTag">${price}</p>
        <button className="addToBill" onClick={() => onClickAddItems(price)}>
          Order
        </button>
      </div>
    );
  });

  const totalBill = bill.length === 0 ? 0 : bill.reduce((a, b) => a + b);

  return (
    <div className="container">
      <div className="revenueInfo">
        <p className="info">{`Revenue: ${
          revenue.length === 0 ? "0" : revenue.reduce((a, b) => a + b)
        } Dollars Customers: ${customers}`}</p>
      </div>
      <div className="menuItems">
        {renderedMenuItems.length === 0
          ? "No Menu Items Added"
          : renderedMenuItems}
      </div>
      <div className="bill">
        <h3 className="title">Your Bill</h3>
        <p>Total: {totalBill}</p>
        <button
          className="payBill"
          onClick={() => onClickPayHandler(totalBill)}
        >
          Pay Your Bill
        </button>
      </div>
    </div>
  );
};

export default CoffeeService;
