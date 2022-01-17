import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
	// add simple logic here, if no content for the selected year, simply display a message to the users
	if (props.filteredYearExpenses.length === 0) {
		return (
			<h2 className="expenses-list__fallback">
				There is no expense in this year.
			</h2>
		);
	}

	return (
		<ul className="expenses-list">
			{props.filteredYearExpenses.map((expense) => (
				<ExpenseItem
					key={expense.id}
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
					note={expense.note}
				></ExpenseItem>
			))}
		</ul>
	);
};

export default ExpensesList;
