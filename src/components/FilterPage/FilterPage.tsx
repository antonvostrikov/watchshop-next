import Filter from "../Filter/FIlter"
import styles from './FilterPage.module.scss'

const FilterPage:React.FC = () => {
  return (
    <div className={styles.filterPage}>
      <div className={styles.filterPageLeft}>
        <Filter title="Пол" />
        <Filter title="Бренд" />
        <Filter title="Функицональность" />
      </div>
      <div className={styles.filterPageRight}>
        <Filter title="По популярности" />
      </div>
    </div>
  )
}

export default FilterPage