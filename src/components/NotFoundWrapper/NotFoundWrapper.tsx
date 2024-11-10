import Search from '../Search/Search'
import styles from './NotFoundWrapper.module.scss'

const NotFoundWrapper:React.FC = () => {
  return (
    <div className={styles.notFoundWrapper}>
      <h4>Страница не найдена</h4>
      <h2>404</h2>
      <p>К сожалению, страницу или продукт, который вы ищете, не удается найти прямо сейчас, попробуйте воспользоваться поиском ниже.</p>
      <div className={styles.searchNotFound}>
        <Search searchWidth="350px" />
      </div>
    </div>
  )
}

export default NotFoundWrapper