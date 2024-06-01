export type NewExpense = {
  date?: Date
  detail: string
  section: string
  value: number
} 

export type Expense = {
  id: number
  date: Date
  detail: string
  section: string
  value: number
} 

export type Section = 'comida' | 'ropa' | 'transporte' | 'impuestos' | 'salud' | 'ocio';