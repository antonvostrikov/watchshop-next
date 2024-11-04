import Modal from "../Modal/Modal"

import styles from './Enter.module.scss'

interface IEnterProps {
  setEnterIs: (enterIs: boolean) => void
}

const Enter:React.FC<IEnterProps> = ({ setEnterIs }) => {
  return (
    <Modal title="Вход или регистрация" closeModal={() => setEnterIs(false)}>
      <div className={styles.enter}>
        <form>
          <input type="phone" placeholder="Телефон" />
          <button>Продолжить</button>
        </form>
      </div>
    </Modal>  
  )
}

export default Enter