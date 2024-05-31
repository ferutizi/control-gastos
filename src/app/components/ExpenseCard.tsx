import { Expense } from "../../../types"

interface ExpenseCardProps {
  expense: Expense
}

export default function ExpenseCard({expense}: ExpenseCardProps) {
  return(
    <article className="w-80 bg-zinc-950 h-32">
      <div className="flex">
        <h2>{expense.detail}</h2>
        <p>{expense.value}</p>
      </div>
{/*       <div className="flex justify-center bg-red-500 w-fit min-w-28 rounded-lg">
        {expense.section}
      </div> */}
      <p className="text-red-500">{expense.section}</p>
      <p>{expense.date.toString()}</p>
    </article>
  )
}