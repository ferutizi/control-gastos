export type NewExpense = {
  detail: string
  date: string
  value: number
  section: string
} 

export type Expense = {
  id: number
  date: Date
  detail: string
  section: string
  value: number
} 

export type Section = 'comida' | 'ropa' | 'transporte' | 'impuestos' | 'salud' | 'ocio' | 'todo';