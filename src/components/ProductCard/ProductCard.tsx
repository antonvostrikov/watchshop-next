import styles from './ProductCard.module.scss'
import Image from 'next/image'

import imageProduct from '../../../public/images/CasioCard.jpg'

interface IProductCardProps {
  imageWidth?: number
  imageHeight?: number
  titleSize?: string
  priceSize?: string
}

const ProductCard:React.FC<IProductCardProps> = ({ imageWidth=200, imageHeight=300, titleSize="18px", priceSize="18px" }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.productCardImage}>
        <Image src={imageProduct.src} alt="Product Image" width={imageWidth} height={imageHeight} />
      </div>
      <div className={styles.productCardTitle}>
        <h3 style={{ fontSize: titleSize }}>Casio G-SHOCK GM-2100-1AER</h3>
      </div>
      <div className={styles.productCardPrice}>
        <span style={{ fontSize: priceSize }}>12 000 руб</span>
      </div>
    </div>
  )
}

export default ProductCard