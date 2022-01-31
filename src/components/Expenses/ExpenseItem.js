import React, { useState } from 'react';
import foodImage from '../../assets/img/cp.png';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import '../UI/ChangeButton.css';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    console.log('ExpenseItem evaluated by React');

    const clickHandler = () => {
      setTitle('Dhur!');
      console.log(title);
    };
    return (
      <div>
        <Card className="items">
          <div className="singleItem">
            <ExpenseDate date={props.date} />
            <div className="justified-center">
              <img src={foodImage} alt="food item" />
            </div>
            <h2 className="itemName justified-start">{title}</h2>
            <h2 className="itemPrice justified-center">BDT {props.amount}</h2>
            <div className="buttonHolder justified-center">
              <button className="chng" onClick={clickHandler}>Change Title</button>
            </div>
          </div>
        </Card>
      </div>
    );
  }
  
  export default ExpenseItem;