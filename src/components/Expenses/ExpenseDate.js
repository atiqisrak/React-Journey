import './ExpenseDate.css';
function ExpenseDate(props){
  const day = props.date.toLocaleString('en-US', {day: 'numeric'});
  const month = props.date.toLocaleString('en-US', {month: 'short'});
  const year = props.date.toLocaleString('en-US', {year: 'numeric'});

  return (
    <div className="itemDate justified-center">
        <div className="expenseDateDay">{day}</div>
        <div className="expenseDateMonth">{month}</div>
        <div className="expenseDateYear">{year}</div>
    </div>
  );
}

export default ExpenseDate;