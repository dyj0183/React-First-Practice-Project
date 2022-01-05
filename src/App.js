import Expenses from "./components/Expenses";

const expenses = [
	{
		id: "e1",
		title: "Grocery",
		amount: 56.12,
		date: new Date(2022, 1, 3),
		note: "from Walmart",
	},
	{
		id: "e2",
		title: "Rent",
		amount: 795.00,
		date: new Date(2022, 1, 1),
		note: "",
	},
	{
		id: "e3",
		title: "Car Insurance",
		amount: 25.99,
		date: new Date(2022, 1, 1),
		note: "Pay again in March",
	},
	{
		id: "e4",
		title: "Health Insurance",
		amount: 10.99,
		date: new Date(2022, 1, 1),
		note: "Pay in February",
	},
];

function App() {
	return (
		<div>
			<h2 className="welcome">Welcome to Yu-Chun's React Monthly Expenses Report!</h2>
			<Expenses expenses={expenses} />
		</div>
	);
}

export default App;
