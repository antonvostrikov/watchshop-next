import { Search } from "lucide-react"
import Modal from "../Modal/Modal"
import styles from './Search.module.scss'

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
      </Modal>
    </div>
  )
}

export default ModalSearch