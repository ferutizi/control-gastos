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
      <button onClick={() => createExpense(newExpense)}>Agregar</button>
    </>
  )
}