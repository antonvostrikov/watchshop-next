import styles from './Filters.module.scss'

interface IFilterDefaultProps {
  dropdown: boolean
  list: string[]
}

const FilterDefault:React.FC<IFilterDefaultProps> = ({ dropdown, list }) => {
  return (
    dropdown && <div className={styles.filterList}>
      <ul>
        { list.map((li, idx) => <li key={idx}><input type="checkbox" />{li}</li>) }
      </ul>
    </div>
  )
}

export default FilterDefault