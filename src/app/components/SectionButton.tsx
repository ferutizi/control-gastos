'use client'

import { Section } from "../../../types";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

interface SectionButtonProps {
  section: Section;
  sectionParam: string | undefined
}

const sections: { [key in Section]: string[] } = {
  "todo": ['hover:text-stone-900', 'border-t-stone-950', 'text-stone-900 font-bold'],
  "comida": ['hover:text-green-700', 'border-t-green-500', 'text-green-700 font-bold'],
  "ropa": ['hover:text-amber-700', 'border-t-amber-500', 'text-amber-700 font-bold'],
  "transporte": ['hover:text-violet-700', 'border-t-violet-500', 'text-violet-700 font-bold'],
  "impuestos": ['hover:text-red-700', 'border-t-red-500', 'text-red-700 font-bold'],
  "salud": ['hover:text-cyan-700', 'border-t-cyan-500', 'text-cyan-700 font-bold'],
  "ocio": ['hover:text-pink-700', 'border-t-pink-500', 'text-pink-700 font-bold'],
}

export default function SectionButton({section, sectionParam}: SectionButtonProps) {

  const searchParams = useSearchParams()
  const pathName = usePathname()
  const { replace } = useRouter()

  const handleSearchSection = (term: string) => {
    const params = new URLSearchParams(searchParams)
    if (term !== 'todo') {
      params.set('section', term)
    } else {
      params.delete('section')
    }

    replace(`${pathName}?${params.toString()}`)
  }

  const buttonStyle = 'border rounded-lg px-1 min-w-24 h-8 hover:font-bold border-t-[3px]'
  const isActive = section == sectionParam
  const sectionClass = sections[section] || ''
  const isAll = !sectionParam

  return(
    <button
      onClick={() => handleSearchSection(section)}
      className={`${buttonStyle} ${sectionClass[0]} ${sectionClass[1]} ${isActive && sectionClass[2]} ${isAll && section === 'todo' && 'font-bold'} `}>
      {section}
    </button>
  )
}