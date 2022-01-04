// use the css file we created
import "./ExpenseItem.css";

// a component in React is just a sepcial kind of function
// props is an object that contains key value pairs data passed in from App.js
function ExpenseItem(props) {

	return (
		<div className="expense-item">
			<div>{props.date.toISOString()}</div>
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">$ {props.amount}</div>
			</div>
		</div>
	);
}

export default ExpenseItem;
