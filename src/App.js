// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hi! I'm <code>GhostBOT</code> Welcome to my world.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import Card from './components/Card';
import ExpenseItem from './components/ExpenseItem';

function App(){

  const expenses = [
    {
      id: 'm1',
      title: 'Shrimp saslik',
      amount: 144,
      date: new Date(2021, 7, 14)
    },
    {
      id: 'm2',
      title: 'Vegetable curry',
      amount: 196,
      date: new Date(2021, 8, 17)
    },
    {
      id: 'm3',
      title: 'Chicken Curry',
      amount: 214,
      date: new Date(2021, 9, 5)
    },
    {
      id: 'm4',
      title: 'Chicken Saslik',
      amount: 254,
      date: new Date(2021, 11, 8)
    },
  ];

  return (
    <Card>
      <div className="intro">
        <h2>Let's test your brain</h2>
      </div>
      <ExpenseItem
      title={expenses[0].title}
      amount={expenses[0].amount}
      date={expenses[0].date}
      />
      <ExpenseItem
      title={expenses[1].title}
      amount={expenses[1].amount}
      date={expenses[1].date}
      />
      <ExpenseItem
      title={expenses[2].title}
      amount={expenses[2].amount}
      date={expenses[2].date}
      />
      <ExpenseItem
      title={expenses[3].title}
      amount={expenses[3].amount}
      date={expenses[3].date}
      />
    </Card>
  )
}

export default App;