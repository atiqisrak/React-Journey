import React from "react";
import Card from "./components/UI/Card";
import Expenses from "./components/Expenses/Expenses";
import './App.css'
import LottieController from './components/UI/LottieController';
import Lottief1 from "./components/UI/Lotties1";
import NewExpense from './components/NewExpense/NewExpense';

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
        <LottieController/>
        <h2>Let's test your brain</h2>
      </div>
      <NewExpense/>
      <Expenses items={items} />
    </Card>
  );
}

export default App;
