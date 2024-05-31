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

export type Section = 'Comida' | 'Ropa' | 'Transporte' | 'Impuestos' | 'Salud' | 'Ocio';