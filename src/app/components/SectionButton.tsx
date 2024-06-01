'use client'

import { Section } from "../../../types";

interface SectionButtonProps {
  section: Section;
}

const sections: { [key in Section]: string[] } = {
  "todo": ['hover:text-stone-900', 'border-t-stone-950'],
  "comida": ['hover:text-green-700', 'border-t-green-500'],
  "ropa": ['hover:text-amber-700', 'border-t-amber-500'],
  "transporte": ['hover:text-violet-700', 'border-t-violet-500'],
  "impuestos": ['hover:text-red-700', 'border-t-red-500'],
  "salud": ['hover:text-cyan-700', 'border-t-cyan-500'],
  "ocio": ['hover:text-pink-700', 'border-t-pink-500'],
}

export default function SectionButton({section}: SectionButtonProps) {
  const sectionClass = sections[section] || ''

  return(
    <button className={`border rounded-lg px-1 min-w-24 h-8 ${sectionClass[0]} ${sectionClass[1]} hover:font-bold border-t-[3px]`}>
      {section}
    </button>
  )
}