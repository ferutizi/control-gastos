'use client'

import { NewExpense } from "../../../types"
import { createExpense } from "../api/expenses"



export default function CreateNewExpense() {
  const newExpense: NewExpense = {
    detail: 'Gasolina',
    section: 'transporte',
    value: 20000
  }
  return(
    <>
      <button className="w-96 bg-violet-400 rounded-lg text-2xl rounded-b-3xl shadow-md text-white font-bold hover:bg-violet-500 transition-all ease-in-out duration-200" onClick={() => createExpense(newExpense)}>+</button>
    </>
  )
}