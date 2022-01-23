import foodImage from '../../assets/img/cp.png';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    
    return (
      <div>
        <Card className="items">
          <div className="singleItem">
            <ExpenseDate date={props.date} />
            <div className="justified-center"><img src={foodImage} alt="food item" /></div>
            <h2 className="itemName justified-start">{props.title}</h2>
            <h2 className="itemPrice justified-center">BDT {props.amount}</h2>
          </div>
        </Card>
      </div>
    );
  }
  
  export default ExpenseItem;