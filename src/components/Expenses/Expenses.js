import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import React, { useState } from 'react';

const Expenses = (props) => {
	// set default year to be 2020
	const [filteredYear, setFilteredYear] = useState("2020");

	const filterYearHandler = (selectedFilterYear) => {
		setFilteredYear(selectedFilterYear);
		console.log(selectedFilterYear);
	}

	return (
		<Card className="expenses">
			<ExpensesFilter selected={filteredYear} onFilterYear={filterYearHandler}/>
			<ExpenseItem
				title={props.expenses[0].title}
				amount={props.expenses[0].amount}
				date={props.expenses[0].date}
				note={props.expenses[0].note}
			></ExpenseItem>
			<ExpenseItem
				title={props.expenses[1].title}
				amount={props.expenses[1].amount}
				date={props.expenses[1].date}
				note={props.expenses[1].note}
			></ExpenseItem>
			<ExpenseItem
				title={props.expenses[2].title}
				amount={props.expenses[2].amount}
				date={props.expenses[2].date}
				note={props.expenses[2].note}
			></ExpenseItem>
			<ExpenseItem
				title={props.expenses[3].title}
				amount={props.expenses[3].amount}
				date={props.expenses[3].date}
				note={props.expenses[3].note}
			></ExpenseItem>
		</Card>
	);
};

export default Expenses;
