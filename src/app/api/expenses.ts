const API = 'http://localhost:3000/api'

interface Expense {
  id: number
  date: Date
  detail: string
  section: string
  value: number
}

export const createExpenseRequest = (expense: Expense) => {
  fetch(`${API}/expenses`, {
    method: 'POST',
    body: JSON.stringify(expense),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export const getExpensesRequest = async (): Promise<Expense[]> => {
  try {
    const res = fetch(`${API}/expenses`, {
      method: 'GET',
    })
    const expenses: Promise<Expense[]> = (await res).json()
    console.log(expenses)
    return expenses
  } catch (error) {
    console.log("Error", error)
    throw error
  }
}