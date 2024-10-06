import styles from './ProductCard.module.scss'
import Image from 'next/image'

import imageProduct from '../../../public/images/CasioCard.jpg'

const ProductCard:React.FC = () => {
  return (
    <div className={styles.productCard}>
      <div className={styles.productCardImage}>
        <Image src={imageProduct.src} alt="Product Image" width={300} height={400} />
      </div>
      <div className={styles.productCardTitle}>
        <h3>Casio G-SHOCK GM-2100-1AER</h3>
      </div>
      <div className={styles.productCardPrice}>
        <span>12 000 руб</span>
      </div>
    </div>
  )
}

export default ProductCard