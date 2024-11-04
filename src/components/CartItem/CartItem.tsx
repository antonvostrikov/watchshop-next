import styles from './CartItem.module.scss'
import CartImage from '../../../public/images/casioCard.jpg'
import Image from 'next/image'
import { Minus, Plus, X } from 'lucide-react'

const CartItem:React.FC = () => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemImage}>
        <Image src={CartImage} alt="Cart Image" height={200}/>
      </div>
      <div className={styles.cartItemTitle}>
        <h3>Casio GA-2140RE-1A</h3>
      </div>
      <div className={styles.cartItemCount}>
        <span className={styles.countTitle}>Количество</span>
        <div className={styles.itemCount}>
          <span><Minus /></span>
          <span>1</span>
          <span><Plus /></span>
        </div>
      </div>
      <div className={styles.cartItemTotal}>
        <span>Итого</span>
        <span>23 990 Р</span>
      </div>
      <div className={styles.cartItemClose}>
        <span><X /></span>
      </div>
    </div>
  )
}

export default CartItem