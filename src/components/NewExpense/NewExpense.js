import React, { useState } from "react";

import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const newExpenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};

		props.onNewExpenseData(newExpenseData);
		// hide the form after we add a new expense (submit the form)
		setIsDisplayForm(false);
	};

    // set up the state for displaying and hiding form
	const [isDisplayForm, setIsDisplayForm] = useState(false);

	const displayFormHandler = () => {
		setIsDisplayForm(true);
	};

	// if this function is called, means users click on cancel in the form, so we want to hide the form
	const hideFormHandler = () => {
		setIsDisplayForm(false);
	};

	return (
		<div className="new-expense">
			{!isDisplayForm && (
				<button onClick={displayFormHandler}>Add New Expense</button>
			)}
			{isDisplayForm && (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					onHideForm={hideFormHandler}
				></ExpenseForm>
			)}
		</div>
	);
};

export default NewExpense;
