import styles from './CartItem.module.scss'
import ImageCart from '../../../public/images/casioCard.jpg'
import Image from 'next/image'
import { Minus, Plus, X } from 'lucide-react'

const CartItem:React.FC = () => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemImage}>
        <Image src={ImageCart} alt="Cart Image" />
      </div>
      <div className={styles.cartItemTitle}>
        <h3>Casio EFR-526L-1A</h3>
      </div>
      <div className={styles.cartItemCount}>
        <span>Количество</span>
        <div className={styles.itemsCount}>
          <Minus />
          <span>0</span>
          <Plus />
        </div>
      </div>
      <div className={styles.cartItemTotal}>
        <span>Итого</span>
        <div className={styles.total}>14 990 Р</div>
      </div>
      <div className={styles.cartItemClose}>
        <X />
      </div>
    </div>
  )
}

export default CartItem