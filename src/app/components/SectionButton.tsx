'use client'

import { Section } from "../../../types";

interface SectionButtonProps {
  section: Section;
}

const sections: { [key in Section]: string } = {
  "Comida": 'text-green-700 border-t-green-500',
  "Ropa": 'text-amber-700 border-t-amber-500',
  "Transporte": 'text-violet-700 border-t-violet-500',
  "Impuestos": 'text-red-700 border-t-red-500',
  "Salud": 'text-cyan-700 border-t-cyan-500',
  "Ocio": 'text-pink-700 border-t-pink-500',
}

export default function SectionButton({section}: SectionButtonProps) {
  const sectionClass = sections[section] || ''

  return(
    <button className={`border rounded-lg px-1 min-w-24 h-8 ${sectionClass} font-bold border-t-[3px]`}>
      {section}
    </button>
  )
}