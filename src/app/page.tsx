import { getExpensesRequest } from "./api/expenses";

export default async function Home() {
  const expenses = await getExpensesRequest()
  console.log(expenses)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
