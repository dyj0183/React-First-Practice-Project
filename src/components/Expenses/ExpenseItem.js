// import React is not necessary in this case but we still can do it
import React from "react";

// use the css file we created
import "./ExpenseItem.css";
// use ExpenseDate component
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import Note from "./ExpenseNote";

// a component in React is just a sepcial kind of function
// props is an object that contains key value pairs data passed in from App.js
const ExpenseItem = (props) => {
	return (
		<li>
			<Card className="expense-item">
				<ExpenseDate date={props.date} />
				<div className="expense-item__description">
					<h2>{props.title}</h2>
					<Note note={props.note}></Note>
					<div className="expense-item__price">$ {props.amount}</div>
				</div>
			</Card>
		</li>
	);
};

export default ExpenseItem;
