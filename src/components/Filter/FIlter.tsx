import { ChevronDown } from "lucide-react"
import styles from './Filter.module.scss'

interface IFilterProps {
  title: string
}

const Filter:React.FC<IFilterProps> = ({ title }) => {
  return (
    <div className={styles.filter}>
      <span>{title} <ChevronDown /></span>
      <div className={styles.filterHidden}>
        <ul>
          <li>Фильтр 1</li>
          <li>Фильтр 2</li>
          <li>Фильтр 3</li>
          <li>Фильтр 4</li>
        </ul>
      </div>
    </div>
  )
}

export default Filter