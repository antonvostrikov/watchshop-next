import styles from './Filters.module.scss'

interface IFilterPriceProps {
  dropdown: boolean
}

const FilterPrice:React.FC<IFilterPriceProps> = ({ dropdown }) => {
  return (
    dropdown && <div className={styles.filterList}>
      <form>
        <span>от</span>
        <input type="text" placeholder='960' id={styles.inputFrom} />
        <span>до</span>
        <input type="text" placeholder='140000' id={styles.inputTo} />
      </form>
    </div>
  )
}

export default FilterPrice