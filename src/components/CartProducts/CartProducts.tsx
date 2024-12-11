'use client'

import { useRouter } from "next/navigation"
import styles from './CartProducts.module.scss'
import CartItem from "../CartItem/CartItem"

const CartProducts:React.FC = () => {
  const router = useRouter()

  return (
    <>
      <div className={styles.cartProductsTitle}>
        <h2>Корзина</h2>
        <span onClick={() => router.back()}>Назад к покупкам</span>
      </div>
      <div className={styles.cartProducts}>
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </>
  )
}

export default CartProducts