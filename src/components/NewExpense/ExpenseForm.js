import React, { Component } from 'react';
import './ExpenseForm.css';

class Expenseform extends Component {
    render() {

        const titleChangeHandler = (event) => {
            console.log(event);
        };

        return (
            <form>
                <div className='new-expense-controls'>
                    <div className='new-expense-control'>
                        <label>Title</label>
                        <input type='text' placeholder='Garlic Naan' onChange={titleChangeHandler}></input>
                    </div>
                    <div className='new-expense-control'>
                        <label>Amount</label>
                        <input type='number' min="0.01" step="0.01" placeholder='244'></input>
                    </div>
                    <div className='new-expense-control'>
                        <label>Date</label>
                        <input type='date' min="2019-01-01" max="2022-12-31" onfocus="(this.type='date')" onblur="(this.type='text')"></input>
                    </div>
                </div>
                <div className="new-expense-actions">
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        );
    }
}

export default Expenseform;
