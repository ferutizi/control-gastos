'use client'

import { NewExpense } from "../../../types"
import { createExpense } from "../api/expenses"



export default function CreateNewExpense() {
  const newExpense: NewExpense = {
    detail: 'Empanadas',
    section: 'Comida',
    value: 8000
  }
  return(
    <>
      <button onClick={() => createExpense(newExpense)}>Agregar</button>
    </>
  )
}