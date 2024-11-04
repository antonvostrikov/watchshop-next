import { Heart } from "lucide-react"
import styles from './ProductAbout.module.scss'

const ProductAbout:React.FC = () => {
  return (
    <div className={styles.productAbout}>
      <h2>Японские наручные часы Casio Edifice EFR-526L-1A с хронографом</h2>
      <span className={styles.productMale}>Мужские</span>
      <span className={styles.productPrice}>12 990 Р</span>
      <div className={styles.productAboutButtons}>
        <div className={styles.productAboutAdd}>
          <button className={styles.productBtnAdd}>Добавить в корзину</button>
          <button className={styles.productBtnFav}><Heart /></button>
        </div>
        <div className={styles.productAboutOrder}>
          <button>Заказать в магазин</button>
        </div>
      </div>
      <div className={styles.productAboutAsk}>
        <span>Задать вопрос по модели</span>
      </div>
    </div>
  )
}

export default ProductAbout