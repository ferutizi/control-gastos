import { getExpenses } from "./api/expenses";
import CreateNewExpense from "./components/CreateNewExpense";

export default async function Home() {
  const expenses = await getExpenses()
  console.log(expenses)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CreateNewExpense></CreateNewExpense>
      <h1>Expenses</h1>
      {expenses.map(e => 
        <div key={e.id}>
          <h2>{e.detail}</h2>
          <p>{e.date.toString()}</p>
          <p>{e.section}</p>
          <p>${e.value}</p>
        </div>
      )}
    </main>
  );
}
