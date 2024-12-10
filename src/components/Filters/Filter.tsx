'use client'

import useDropdown from '@/hooks/useDropdown'
import styles from './Filters.module.scss'
import FilterDefault from './FilterDefault'
import FilterPrice from './FilterPrice'

interface IFilterProps {
  title: string
  list?: string[]
  type?: string
}

const Filter:React.FC<IFilterProps> = ({ title, list, type }) => {
  const { dropdown, setDropdown, dropdownRef } = useDropdown()

  return (
    <div className={styles.filter} ref={dropdownRef}>
      <div className={styles.filterTitle}>
        <span className={dropdown ? styles.filterTitleActive : ''} onClick={() => setDropdown(!dropdown)}>{title}</span>
      </div>
      { type === 'price' && <FilterPrice dropdown={dropdown} /> }
      { type !== 'price' && list && <FilterDefault dropdown={dropdown} list={list} /> }
    </div>
  )
}

export default Filter