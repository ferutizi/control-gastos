import { Expense, Section } from "../../../types"

interface ExpenseCardProps {
  expense: Expense
}

const sections: { [key in Section]: string } = {
  "comida": 'border-t-green-500',
  "ropa": 'border-t-amber-500',
  "transporte": 'border-t-violet-500',
  "impuestos": 'border-t-red-500',
  "salud": 'border-t-cyan-500',
  "ocio": 'border-t-pink-500'
}

export default function ExpenseCard({expense}: ExpenseCardProps) {
  const section = expense.section.toLowerCase() as Section
  const sectionClass = sections[section]

  return(
    <article className={`flex flex-col justify-between w-[26rem] ${sectionClass} p-4 border border-t-[3px] rounded-lg h-32`}>
      <div className="flex justify-between">
        <h2 className="break-words w-[70%]">{expense.detail}</h2>
        <p>$ {expense.value}</p>
      </div>
      <p className="opacity-60">{expense.date.toString()}</p>
    </article>
  )
}