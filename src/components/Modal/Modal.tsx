import { X } from 'lucide-react'
import styles from './Modal.module.scss'

interface IModalProps {
  children?: React.ReactNode
  title?: string
  closeModal: () => void
}

const Modal:React.FC<IModalProps> = ({ children, title, closeModal }) => {
  return (
    <div className={styles.wrapperModal} onClick={closeModal}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalClose}>
          <span onClick={closeModal}><X /></span>
        </div>
        <div className={styles.modalTitle}>
          <h2>{title}</h2>
        </div>
        <div className={styles.modalContent}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal