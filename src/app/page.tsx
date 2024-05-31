import { getExpenses } from "./api/expenses";
import CreateNewExpense from "./components/CreateNewExpense";
import ExpenseCard from "./components/ExpenseCard";
import SectionButton from "./components/SectionButton";

export default async function Home() {
  const expenses = await getExpenses()
  console.log(expenses)
  return (
    <main className="flex min-h-screen max-w-[900px] items-center flex-col justify-between m-auto p-16">
      <CreateNewExpense></CreateNewExpense>
      <h1>Gastos</h1>
      <div className="flex gap-2">
        <SectionButton section="Comida" />
        <SectionButton section="Ropa" />
        <SectionButton section="Transporte" />
        <SectionButton section="Impuestos" />
        <SectionButton section="Salud" />
        <SectionButton section="Ocio" />
      </div>
      {expenses.map(e => 
        <ExpenseCard key={e.id} expense={e} />
      )}
    </main>
  );
}
