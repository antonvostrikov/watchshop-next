import styles from './Modal.module.scss'

interface IModalWindowBody {
  children: React.ReactNode,
  title?: string
}

const ModalWindowBody:React.FC<IModalWindowBody> = ({ children, title }) => {
  return (
    <div className={styles.modalWindowBody}>
      { title && <h2 className={styles.modalWindowTitle}>{title}</h2> }
      { children }
    </div>
  )
}

export default ModalWindowBody