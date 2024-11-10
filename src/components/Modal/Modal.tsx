import React from 'react'
import styles from './Modal.module.scss'
import ModalWindow from './ModalWindow'
import ModalWindowHeader from './ModalWindowHeader'
import ModalWindowBody from './ModalWindowBody'

interface IModalProps {
  children: React.ReactNode,
  width?: string,
  title?: string
  closeModal: () => void
}

const Modal:React.FC<IModalProps> = ({ children, width='500px', title, closeModal }) => {
  return (
    <div className={styles.modalWrapper} onClick={closeModal}>
      <ModalWindow width={width}>
        <ModalWindowHeader closeModal={closeModal} />
        <ModalWindowBody title={title}>
          { children }
        </ModalWindowBody>
      </ModalWindow> 
    </div>
  )
}

export default Modal