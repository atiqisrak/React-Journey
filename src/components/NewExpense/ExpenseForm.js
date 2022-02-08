import React, { useState } from 'react';
import './ExpenseForm.css';

const Expenseform = (props) => {

        const [enteredTitle, setEnteredTitle] = useState('');
        const [enteredAmount, setEnteredAmount] = useState('');
        const [enteredDate, setEnteredDate] = useState('');

        // const [userInput, setUserInput] = useState({
        //     enteredTitle: '',
        //     enteredAmount: '',
        //     enteredDate: ''
        // })

        const titleChangeHandler = (event) => {
            setEnteredTitle(event.target.value);
            
            // ALT 1
            // setUserInput({
            //     ...userInput,
            //     enteredTitle: event.target.value,
            // })

            // ALT 2
            // setUserInput((prevState) => {
            //     return { ...prevState, enteredTitle: event.target.value };
            // });
        };
        
        const amountChangeHandler = (event) => {
            setEnteredAmount(event.target.value);

            // ALT 1
            // setUserInput({
            //     ...userInput,
            //     enteredAmount: event.target.value,
            // });
            
            // ALT 2
            // setUserInput((prevState) => {
            //     return { ...prevState, enteredAmount: event.target.value };
            // });
        };

        const dateChangeHandler = (event) => {
            setEnteredDate(event.target.value);

            // ALT 1
            // setUserInput({
            //     ...userInput,
            //     enteredDate: event.target.value,
            // })

            // ALT 2
            // setUserInput((prevState) => {
            //     return { ...prevState, enteredDate: event.target.value };
            // });
        };

        const submitHandler = (event) => {
            // Prevent reload on submit
            event.preventDefault();

            // Concat new data
            const expenseData = {
                title: enteredTitle,
                amount: enteredAmount,
                date: new Date(enteredDate)
            };

            console.log(expenseData);
            
            // To clear the field after submission
            props.onSaveExpenseData(expenseData);
            setEnteredTitle('');
            setEnteredAmount('');
            setEnteredDate('');
        };

        return (
          <form onSubmit={submitHandler}>
            <div className="new-expense-controls">
              <div className="new-expense-control">
                <label>Title</label>
                <input
                  type="text"
                  placeholder="Garlic Naan"
                  value={enteredTitle}
                  onChange={titleChangeHandler}
                ></input>
              </div>
              <div className="new-expense-control">
                <label>Amount</label>
                <input
                  type="number"
                  min="0.01"
                  step="0.01"
                  placeholder="244"
                  value={enteredAmount}
                  onChange={amountChangeHandler}
                ></input>
              </div>
              <div className="new-expense-control">
                <label>Date</label>
                <input
                  type="date"
                  min="2019-01-01"
                  max="2022-12-31"
                  value={enteredDate}
                  onChange={dateChangeHandler}
                ></input>
              </div>
            </div>
            <div className="new-expense-actions">
              <button type="submit">Add Expense</button>
            </div>
          </form>
        );
    }

export default Expenseform;
