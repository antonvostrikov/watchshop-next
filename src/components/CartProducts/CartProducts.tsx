'use client'

import { useRouter } from "next/navigation"
import CartItem from "../CartItem/CartItem"
import styles from './CartProducts.module.scss'

const CartProducts:React.FC = () => {
  const router = useRouter()

  return (
    <div className={styles.cartProducts}>
      <div className={styles.cartProductsHeader}>
        <h2>Корзина</h2>  
        <span onClick={() => router.back()}>Назад к покупкам</span>
      </div>
      <CartItem />
      <CartItem />
      <CartItem />
      <div className={styles.cartProductsFooter}>
        <span>Всего:</span>
        <span>44 990 Р</span>
      </div>
    </div>
  )
}

export default CartProducts