import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

// JS new Date starts counting Month from 0 to 11
const DUMMY_EXPENSES_DATA = [
	{
		id: "e1",
		title: "Grocery",
		amount: 56.12,
		date: new Date(2022, 0, 3),
		note: "Note: From Walmart",
	},
	{
		id: "e2",
		title: "Rent",
		amount: 795.0,
		date: new Date(2022, 0, 1),
		note: "",
	},
	{
		id: "e3",
		title: "Car Insurance",
		amount: 25.99,
		date: new Date(2020, 0, 1),
		note: "Note: Renew in March",
	},
	{
		id: "e4",
		title: "Health Insurance",
		amount: 10.99,
		date: new Date(2019, 0, 1),
		note: "Note: Pay again in February",
	},
];

const App = () => {
	// set up the initial data to be the Dummy Expenses Data
	const [expensesData, setExpensesData] = useState(DUMMY_EXPENSES_DATA);

	// we receive newExpenseData from NewExpense.js
	// this function and state will be able to take user's new input and render it on the screen
	const newExpenseDataHandler = (newExpenseData) => {
		// if we update the state that depends on the previous state, then we should use the function
		// instead of using setExpensesData([newExpenseData, ...DUMMY_EXPENSES_DATA])
		setExpensesData((prevExpensesData) => {
			return [newExpenseData, ...prevExpensesData];
		});
	};

	return (
		<div>
			<h2 className="welcome">
				Welcome to Yu-Chun's React Monthly Expenses Report!
			</h2>
			<NewExpense onNewExpenseData={newExpenseDataHandler} />
			<Expenses expenses={expensesData} />
		</div>
	);
};

export default App;
