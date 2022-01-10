// import React is not necessary in this case but we still can do it
import React, { useState } from 'react';

// use the css file we created
import "./ExpenseItem.css";
// use ExpenseDate component
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import Note from "./ExpenseNote";

// a component in React is just a sepcial kind of function
// props is an object that contains key value pairs data passed in from App.js
const ExpenseItem = (props) => {
	// useState will call this component (function) again when it was executed
	const [title, setTitle] = useState(props.title);

	const clickHandler = () => {
		setTitle("New Title!");
	}

	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<Note note={props.note}></Note>
				<div className="expense-item__price">$ {props.amount}</div>
			</div>
			<button onClick={clickHandler}>Update Title</button>
		</Card>
	);
}

export default ExpenseItem;
