'use client'

import { ChangeEvent, FormEvent, useState } from "react"
import { Expense, NewExpense, Section } from "../../../types"
import { sections } from "./ExpenseCard"
import { updateExpense } from "../api/expenses"

interface EditButtonProps {
  expense: Expense
}

export default function EditButton({expense}: EditButtonProps) {
  const initialValue = {
    detail: expense.detail,
    value: expense.value,
    date: expense.date.toString(),
    section: expense.section
  }

  const [expenseForm, setExpenseForm] = useState<NewExpense>(initialValue)
  const [modal, setModal] = useState(false)

  const handleChange= (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    setExpenseForm({
      ...expenseForm,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    updateExpense(expense.id, expenseForm)
    location.reload()
  }

  const sectionsBtn: { [key in Section]: string } = {
    "todo": 'border-stone-950 bg-stone-950',
    "comida": 'border-green-500 bg-green-500',
    "ropa": 'border-amber-500 bg-amber-500',
    "transporte": 'border-violet-500 bg-violet-500',
    "impuestos": 'border-red-500 bg-red-500',
    "salud": 'border-cyan-500 bg-cyan-500',
    "ocio": 'border-pink-500 bg-pink-500'
  }

  const handleEditExpense = () => {
    setModal(!modal)
  }

  const sectionClass = sections[expenseForm.section as Section]
  const btnStyles = sectionsBtn[expenseForm.section as Section]
  return(
    <>
    <button onClick={() => setModal(true)}>
      <svg className="icon-edit" fill="rgb(107, 114, 128)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M17.263 2.177a1.75 1.75 0 0 1 2.474 0l2.586 2.586a1.75 1.75 0 0 1 0 2.474L19.53 10.03l-.012.013L8.69 20.378a1.753 1.753 0 0 1-.699.409l-5.523 1.68a.748.748 0 0 1-.747-.188.748.748 0 0 1-.188-.747l1.673-5.5a1.75 1.75 0 0 1 .466-.756L14.476 4.963ZM4.708 16.361a.26.26 0 0 0-.067.108l-1.264 4.154 4.177-1.271a.253.253 0 0 0 .1-.059l10.273-9.806-2.94-2.939-10.279 9.813ZM19 8.44l2.263-2.262a.25.25 0 0 0 0-.354l-2.586-2.586a.25.25 0 0 0-.354 0L16.061 5.5Z"></path></svg>
    </button>
    {modal && 
      <>
        <form onSubmit={handleSubmit} className={`flex flex-col justify-between w-[26rem] p-4 border ${sectionClass ? sectionClass : 'border-t-stone-800'} border-t-[3px] rounded-lg h-32`}>
          <div className="flex justify-between">
            <input name="detail" value={expenseForm.detail} onChange={(e) => handleChange(e)} required={true} placeholder="Detalle del gasto..." className="bg-slate-100 rounded-md pl-2 py-1" />
            <label className="flex items-center gap-2">$ 
              <input name="value" value={expenseForm.value} onChange={(e) => handleChange(e)} required={true} className="bg-slate-100 rounded-md px-2 py-1 text-end w-28" placeholder="0.00"/>
            </label>
          </div>
          <div className="flex justify-between">
            <input type="date" name="date" value={expenseForm.date} onChange={(e) => handleChange(e)} required={true} className="bg-slate-100 rounded-md px-2 py-1 w-36" placeholder="Fecha"/>
            <select name="section" defaultValue={expenseForm.section} onChange={handleChange} required={true} className="bg-slate-100 rounded-md px-2 py-1">
              <option value="" hidden>Sección</option>
              <option value="comida">Comida</option>
              <option value="ropa">Ropa</option>
              <option value="transporte">Transporte</option>
              <option value="impuestos">Impuestos</option>
              <option value="salud">Salud</option>
              <option value="ocio">Ocio</option>
            </select>
            <button
              onClick={() => handleEditExpense}
              className={`border px-4 rounded-md ${btnStyles ? btnStyles : 'bg-stone-800'} text-white transition-all ease-out duration-200`}
              >Modificar
            </button>
          </div>
        </form>
      </>
    }
    </>
  )
}