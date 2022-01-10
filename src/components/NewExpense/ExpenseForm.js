import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState('');
	// when the change event occurs, we automatically get the "event"
	const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
	};

    const [enteredAmount, setEnteredAmount] = useState('');
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const [enteredDate, setEnteredDate] = useState('');
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        // prevent the form from being sending to the server, so the page will NOT be reloaded
        event.preventDefault();

        // handle it by using js here
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };

        console.log(expenseData);
    }

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" onChange={titleChangeHandler} />
				</div>
                <div>Entered Title: {enteredTitle}</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						onChange={amountChangeHandler}
					/>
				</div>
                <div>Entered Amount: {enteredAmount}</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2019-01-01"
						max="2022-12-31"
						onChange={dateChangeHandler}
					/>
				</div>
                <div>Entered Date: {enteredDate}</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
