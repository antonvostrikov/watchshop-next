import { Search } from "lucide-react"
import Modal from "../Modal/Modal"
import styles from './Search.module.scss'
import ProductCard from "../ProductCard/ProductCard"

interface IModalSearchProps {
  closeModalSearch: () => void
}

const ModalSearch:React.FC<IModalSearchProps> = ({ closeModalSearch }) => {
  return (
    <div className={styles.modalSearch}>
      <Modal width="1200px" closeModal={closeModalSearch}>
        <div className={styles.modalSearchForm}>
          <form>
            <input type="text" placeholder="Поиск" />
            <Search />
          </form>
        </div>
        <div className={styles.modalSearchItems}>
          <ProductCard imageHeight={300} imageWidth={200} titleSize="18px" priceSize="18px"/>
          <ProductCard imageHeight={300} imageWidth={200} titleSize="18px" priceSize="18px"/>
          <ProductCard imageHeight={300} imageWidth={200} titleSize="18px" priceSize="18px"/>
          <ProductCard imageHeight={300} imageWidth={200} titleSize="18px" priceSize="18px"/>
          <ProductCard imageHeight={300} imageWidth={200} titleSize="18px" priceSize="18px"/>
          <ProductCard imageHeight={300} imageWidth={200} titleSize="18px" priceSize="18px"/>
        </div>
      </Modal>
    </div>
  )
}

export default ModalSearch