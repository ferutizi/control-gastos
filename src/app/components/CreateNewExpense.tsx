'use client'

import { ChangeEvent, FormEvent, useState } from "react"
import { NewExpense, Section } from "../../../types"
import { createExpense } from "../api/expenses"
import { sections } from "./ExpenseCard"



export default function CreateNewExpense() {
  const today = new Date(Date.now())
  const day = today.getDate().toString().padStart(2, '0')
  const month = ((today.getMonth()) + 1).toString().padStart(2, '0')
  const year = today.getFullYear().toString()
  const date = year.concat("-", month, "-", day)

  const initialValue = {
    detail: '',
    value: 0,
    date: date,
    section: ""
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
    createExpense(expenseForm)
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

  const handleNewExpense = () => {
    setModal(!modal)
    setExpenseForm(initialValue)
  }

  const sectionClass = sections[expenseForm.section as Section]
  const btnStyles = sectionsBtn[expenseForm.section as Section]

  return(
    <>
      <button
        className={`w-96 ${modal ? 'bg-stone-400 hover:bg-stone-500' : 'bg-violet-400 hover:bg-violet-500'} text-2xl rounded-lg rounded-b-3xl shadow-md text-white font-bold transition-all ease-in-out duration-200`}
        onClick={() => handleNewExpense()}
      >{modal ? 'Cancelar' : '+'}
      </button>
      {modal && 
        <>
          <form onSubmit={handleSubmit} className={`flex flex-col justify-between w-[26rem] p-4 border ${sectionClass ? sectionClass : 'border-t-stone-800'} border-t-[3px] rounded-lg h-32`}>
            <div className="flex justify-between">
              <input name="detail" onChange={(e) => handleChange(e)} required={true} placeholder="Detalle del gasto..." className="bg-slate-100 rounded-md pl-2 py-1" />
              <label className="flex items-center gap-2">$ 
                <input name="value" onChange={(e) => handleChange(e)} required={true} className="bg-slate-100 rounded-md px-2 py-1 text-end w-28" placeholder="0.00"/>
              </label>
            </div>
            <div className="flex justify-between">
              <input type="date" name="date" value={expenseForm.date} onChange={(e) => handleChange(e)} required={true} className="bg-slate-100 rounded-md px-2 py-1 w-36" placeholder="Fecha"/>
              <select name="section" onChange={handleChange} required={true} className="bg-slate-100 rounded-md px-2 py-1">
                <option value="" hidden>Sección</option>
                <option value="comida">Comida</option>
                <option value="ropa">Ropa</option>
                <option value="transporte">Transporte</option>
                <option value="impuestos">Impuestos</option>
                <option value="salud">Salud</option>
                <option value="ocio">Ocio</option>
              </select>
              <button
                className={`border px-4 rounded-md ${btnStyles ? btnStyles : 'bg-stone-800'} text-white transition-all ease-out duration-200`}
                >Agregar
              </button>
            </div>
          </form>
          <hr className="border-gray w-full" />
        </>
      }
    </>
  )
}