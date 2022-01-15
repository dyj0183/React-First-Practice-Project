import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import React, { useState } from "react";

const Expenses = (props) => {
	// set default year to be 2020
	const [filteredYear, setFilteredYear] = useState("2020");

	const filterYearHandler = (selectedFilterYear) => {
		setFilteredYear(selectedFilterYear);
		console.log(selectedFilterYear);
	};

	return (
		<Card className="expenses">
			<ExpensesFilter
				selected={filteredYear}
				onFilterYear={filterYearHandler}
			/>

			{props.expenses.map((expense) => (
				<ExpenseItem
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
					note={expense.note}
				></ExpenseItem>
			))}

		</Card>
	);
};

export default Expenses;
