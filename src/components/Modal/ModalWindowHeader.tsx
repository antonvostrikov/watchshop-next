import { X } from 'lucide-react'
import styles from './Modal.module.scss'

interface IModalWindowHeader {
  closeModal: () => void
}

const ModalWindowHeader:React.FC<IModalWindowHeader> = ({ closeModal }) => {
  return (
    <div className={styles.modalWindowHeader}>
      <span onClick={closeModal}><X /></span>
    </div>
  )
}

export default ModalWindowHeader