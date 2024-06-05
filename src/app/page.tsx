import { getExpenses } from "./api/expenses";
import CreateNewExpense from "./components/CreateNewExpense";
import ExpenseCard from "./components/ExpenseCard";
import SectionButton from "./components/SectionButton";

export default async function Home({
  searchParams
}: {
  searchParams?: {
    section?: string
  }
}) {
  const sectionParam = searchParams?.section 
  const expenses = await getExpenses()

  return (
    <main className="flex min-h-screen max-w-[900px] items-center flex-col justify-start gap-10 m-auto p-6 lg:p-16">
      <div className="flex gap-2 flex-wrap justify-center">
        <SectionButton section="todo" />
        <SectionButton section="comida" />
        <SectionButton section="ropa" />
        <SectionButton section="transporte" />
        <SectionButton section="impuestos" />
        <SectionButton section="salud" />
        <SectionButton section="ocio" />
      </div>
      <CreateNewExpense />
      <section className="flex flex-col-reverse gap-8">
        {expenses
        .filter(expense => !sectionParam || expense.section === sectionParam)
        .map(e => 
          <ExpenseCard key={e.id} expense={e} />
        )}
      </section>
    </main>
  );
}
