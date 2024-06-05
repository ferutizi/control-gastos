import dynamic from "next/dynamic"
import { Expense, Section } from "../../../types"
import IconTrash from "./IconTrash"
import { useState } from "react"
import EditButton from "./EditButton"

interface ExpenseCardProps {
  expense: Expense
}

export const sections: { [key in Section]: string } = {
  "todo": "border-t-stone-800",
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

  function editButton() {
    return(
      <EditButton expense={expense} />
    )
  }

  const DynamicEditButton =  dynamic(async () => editButton, {ssr: false}) 

  return(
    <article className={`flex flex-col justify-between w-[26rem] ${sectionClass} p-4 border border-t-[3px] rounded-lg h-32`}>
      <div className="flex justify-between">
        <h2 className="break-words w-[70%]">{expense.detail}</h2>
        <p>$ {expense.value}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-500">{expense.date.toString()}</p>
        <div className="flex gap-4">
        <DynamicEditButton />
        <IconTrash id={expense.id} />
        </div>
      </div>
    </article>
  )
}