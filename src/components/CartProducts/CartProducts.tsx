'use client'

import { useRouter } from "next/navigation"
import CartItem from "../CartItem/CartItem"
import styles from './CartProducts.module.scss'

const CartProducts:React.FC = () => {
  const router = useRouter()

  return (
    <div className={styles.cartProducts}>
    
    </div>
  )
}

export default CartProducts