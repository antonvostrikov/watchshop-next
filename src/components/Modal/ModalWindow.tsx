import React from 'react'
import styles from './Modal.module.scss'

interface IModalWindow {
  children: React.ReactNode
  width?: string
}

const ModalWindow:React.FC<IModalWindow> = ({ children, width }) => {
  return (
    <div className={styles.modalWindow} style={{ width: `${width}` }} onClick={(e) => e.stopPropagation()}>
      { children }
    </div>
  )
}

export default ModalWindow