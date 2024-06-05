import { NewExpense } from "../../../types"

const API = 'http://localhost:3000/api'

interface Expense {
  id: number
  date: Date
  detail: string
  section: string
  value: number
}

export const createExpense = async (expense: NewExpense) => {
  try {
    await fetch(`${API}/expenses`, {
      cache: 'no-store',
      method: 'POST',
      body: JSON.stringify(expense),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch(error) {
    console.log("Error", error)
    throw error
  }
}

export const getExpenses = async (): Promise<Expense[]> => {
  try {
    const res = await fetch(`${API}/expenses`, {
      cache: 'no-store',
      method: 'GET',
    })
    const expenses: Promise<Expense[]> = res.json()

    return expenses   
  } catch (error) {
    console.log("Error", error)
    throw error
  }
}

export const getExpenseById = async (id: Expense["id"]): Promise<Expense> => {
  try {
    const res = await fetch(`${API}/expenses/${id}`, {
      cache: 'no-store',
      method: 'GET',
    })
    const expense: Promise<Expense> = (await res).json()

    return expense 
  } catch (error) {
    console.log("Error", error)
    throw error
  }
}

export const updateExpense = async (id: Expense["id"], expense: NewExpense) => {
  try {
    await fetch(`${API}/expenses/${id}`, {
      cache: 'no-store',
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(expense)
    })
  } catch (error) {
    console.log("Error", error)
    throw error
  }
}

export const deleteExpense = async (id: Expense["id"]) => {
  try {
    await fetch(`${API}/expenses/${id}`, {
      cache: 'no-store',
      method: 'DELETE',
    })
  } catch (error) {
    console.log("Error", error)
    throw error
  }
}
