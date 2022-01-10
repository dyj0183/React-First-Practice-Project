import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

// JS new Date starts counting Month from 0 to 11
const expenses = [
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
		amount: 795.00,
		date: new Date(2022, 0, 1),
		note: "",
	},
	{
		id: "e3",
		title: "Car Insurance",
		amount: 25.99,
		date: new Date(2022, 0, 1),
		note: "Note: Renew in March",
	},
	{
		id: "e4",
		title: "Health Insurance",
		amount: 10.99,
		date: new Date(2022, 0, 1),
		note: "Note: Pay again in February",
	},
];

const App = () => {
	return (
		<div>
			<h2 className="welcome">Welcome to Yu-Chun's React Monthly Expenses Report!</h2>
			<NewExpense/>
			<Expenses expenses={expenses} />
		</div>
	);
}

export default App;
