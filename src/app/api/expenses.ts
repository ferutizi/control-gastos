import { NewExpense } from "../../../types"

const API = 'http://localhost:3000/api'

interface Expense {
  id: number
  date: Date
  detail: string
  section: string
  value: number
}

export const createExpense = (expense: NewExpense) => {
  try {
    fetch(`${API}/expenses`, {
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
    const res = fetch(`${API}/expenses`, {
      method: 'GET',
    })
    const expenses: Promise<Expense[]> = (await res).json()

    return expenses   
  } catch (error) {
    console.log("Error", error)
    throw error
  }
}

export const getExpenseById = async (id: Expense["id"]): Promise<Expense> => {
  try {
    const res = fetch(`${API}/expenses/${id}`, {
      method: 'GET',
    })
    const expense: Promise<Expense> = (await res).json()

    return expense 
  } catch (error) {
    console.log("Error", error)
    throw error
  }
}