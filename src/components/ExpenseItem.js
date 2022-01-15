import foodImage from '../assets/img/cp.png';
import './ExpenseItem.css';
function ExpenseItem(){
    
    const expenseDate = new Date(2021, 2, 28);
    const expenseTitle = 'Chicken Chap';
    const expenseAmount = 294;
    
    return (
      <div>
        <div className="items">
          <div className="singleItem">
            
          <h2 className="itemDate justified-center">{expenseDate.toISOString()}</h2>
            <img src={foodImage} alt="food item" />
            <h2 className="itemName justified-start">{expenseTitle}</h2>
            <h2 className="itemPrice justified-center">{expenseAmount}</h2>
          </div>
          <div className="singleItem">
          <h2 className="itemDate justified-center">March 12, 2021</h2>
            <img src={foodImage} alt="food item" />
            <h2 className="itemName justified-start">Beef Chap</h2>
            <h2 className="itemPrice justified-center">BDT 249</h2>
          </div>
          <div className="singleItem">
          <h2 className="itemDate justified-center">April 16, 2021</h2>
            <img src={foodImage} alt="food item" />
            <h2 className="itemName justified-start">Mutton Rezala</h2>
            <h2 className="itemPrice justified-center">BDT 310</h2>
          </div>
        </div>
      </div>
    );
  }
  
  export default ExpenseItem;