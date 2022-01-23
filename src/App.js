import React from "react";
import Card from "./components/UI/Card";
import Expenses from "./components/Expenses/Expenses";
// import ExpenseItem from './components/ExpenseItem';

const App = () => {
  const items = [
    {
      id: "m1",
      title: "Shrimp saslik",
      amount: 144,
      date: new Date(2021, 7, 14),
    },
    {
      id: "m2",
      title: "Vegetable curry",
      amount: 196,
      date: new Date(2021, 8, 17),
    },
    {
      id: "m3",
      title: "Chicken Curry",
      amount: 214,
      date: new Date(2021, 9, 5),
    },
    {
      id: "m4",
      title: "Chicken Saslik",
      amount: 254,
      date: new Date(2021, 11, 8),
    },
  ];

  // return React.createElement(
  //   "Card",
  //   {},
  //   React.createElement(
  //     "div",
  //     {},
  //     React.createElement("h2", {}, "Let's test your brain")
  //   ),
  //   React.createElement(Expenses, {items: items})
  // );

  return (
    <Card>
      <div className="intro">
        <h2>Let's test your brain</h2>
      </div>
      <Expenses items={items} />
    </Card>
  );
}

export default App;
