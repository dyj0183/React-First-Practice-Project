import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

import React, { useState } from "react";

const Expenses = (props) => {
	// set default year to be 2020
	const [filteredYear, setFilteredYear] = useState("2020");

	const filterYearHandler = (selectedFilterYear) => {
		setFilteredYear(selectedFilterYear);
	};

	// filter out the expenses based on the year users selected, js filter returns a new array
	// filteredYear is type "string", props.expenses[0].date.getFullYear() is type "number", so we need to use toString()
	const filteredYearExpenses = props.expenses.filter(
		(expense) => expense.date.getFullYear().toString() === filteredYear
	);

	return (
		<Card className="expenses">
			<ExpensesFilter
				selected={filteredYear}
				onFilterYear={filterYearHandler}
			/>
			<ExpensesList filteredYearExpenses={filteredYearExpenses}/>
		</Card>
	);
};

export default Expenses;
