'use client'

import { ChevronDown } from "lucide-react"
import styles from './Filter.module.scss'
import React from 'react'
import useDropdown from "@/hooks/useDropdown"

interface IFilterProps {
  title: string
}

const Filter:React.FC<IFilterProps> = ({ title }) => {
  const { dropdownIs, setDropdownIs, dropdownRef } = useDropdown()

  return (
    <div className={styles.filter}>
      <span onClick={() => setDropdownIs(!dropdownIs)}>{title} <ChevronDown /></span>
      { dropdownIs && <div className={styles.filterHidden} ref={dropdownRef}>
        <ul>
          <li>Фильтр 1</li>
          <li>Фильтр 2</li>
          <li>Фильтр 3</li>
          <li>Фильтр 4</li>
        </ul>
      </div> }
    </div>
  )
}

export default Filter