'use client'

import { ChangeEvent, FormEvent, useState } from "react"
import { NewExpense } from "../../../types"
import { createExpense } from "../api/expenses"



export default function CreateNewExpense() {
  const today = new Date(Date.now())
  const day = today.getDate().toString().padStart(2, '0')
  const month = ((today.getMonth()) + 1).toString().padStart(2, '0')
  const year = today.getFullYear().toString()
  const date = year.concat("-", month, "-", day)

  const [expenseForm, setExpenseForm] = useState<NewExpense>({
    detail: '',
    value: 0,
    date: date,
    section: ''
  })
  const [modal, setModal] = useState(true)

  const handleChange= (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    setExpenseForm({
      ...expenseForm,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    createExpense(expenseForm)
  }

  return(
    <>
      <button
        className={`w-96 ${modal ? 'bg-stone-400 hover:bg-stone-500' : 'bg-violet-400 hover:bg-violet-500'} text-2xl rounded-lg rounded-b-3xl shadow-md text-white font-bold transition-all ease-in-out duration-200`}
        onClick={() => setModal(!modal)}
      >{modal ? 'Cancelar' : '+'}
      </button>
      {modal && 
        <>
          <form onSubmit={handleSubmit} className={`flex flex-col justify-between w-[26rem] p-4 border border-t-green-500 border-t-[3px] rounded-lg h-32`}>
            <div className="flex justify-between">
              <input name="detail" onChange={(e) => handleChange(e)} required={true} placeholder="Detalle del gasto..." className="bg-slate-100 rounded-md pl-2 py-1" />
              <label className="flex items-center gap-2">$ 
                <input name="value" onChange={(e) => handleChange(e)} required={true} className="bg-slate-100 rounded-md px-2 py-1 text-end w-28" placeholder="0.00"/>
              </label>
            </div>
            <div className="flex justify-between">
              <input type="date" value={expenseForm.date} required={true} className="bg-slate-100 rounded-md px-2 py-1 w-36" placeholder="Fecha"/>
              <select name="section" onChange={handleChange} required={true} className="bg-slate-100 rounded-md px-2 py-1">
                <option value="" disabled hidden>Sección</option>
                <option value="comida">comida</option>
                <option value="ropa">ropa</option>
                <option value="transporte">transporte</option>
                <option value="impuestos">impuestos</option>
                <option value="salud">salud</option>
                <option value="ocio">ocio</option>
              </select>
              <button
                className="border px-4 rounded-md border-green-500 hover:bg-green-500 hover:text-white"
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