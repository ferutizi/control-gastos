import { getExpenses } from "./api/expenses";
import CreateNewExpense from "./components/CreateNewExpense";
import ExpenseCard from "./components/ExpenseCard";
import SectionButton from "./components/SectionButton";

export default async function Home() {
  const expenses = await getExpenses()

  return (
    <main className="flex min-h-screen max-w-[900px] items-center flex-col justify-center gap-10 m-auto p-16">
      <div className="flex gap-2">
        <SectionButton section="comida" />
        <SectionButton section="ropa" />
        <SectionButton section="transporte" />
        <SectionButton section="impuestos" />
        <SectionButton section="salud" />
        <SectionButton section="ocio" />
      </div>
      <CreateNewExpense />
      {expenses.map(e => 
        <ExpenseCard key={e.id} expense={e} />
      )}
    </main>
  );
}
