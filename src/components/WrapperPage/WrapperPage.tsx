import ProductCard from '../ProductCard/ProductCard'
import styles from './WrapperPage.module.scss'

const WrapperPage:React.FC = () => {
  return (
    <div className={styles.wrapperPage}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  )
}

export default WrapperPage