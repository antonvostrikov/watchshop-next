import { Container } from 'lucide-react'
import styles from './CartEmpty.module.scss'

const CartEmpty:React.FC = () => {
  return (
    <div className={styles.cartEmpty}>
      <h2>Корзина пуста</h2>
      <p>Если вы наполняли корзину при прошлом визите, авторизуйтесь, чтобы увидеть выбранные товары</p>
    </div>
  )
}

export default CartEmpty