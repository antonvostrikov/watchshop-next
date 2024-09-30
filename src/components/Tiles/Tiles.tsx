import styles from './Tiles.module.scss'

import Container from '../Container/Container'
import { Truck } from 'lucide-react'
import Tile from './TIle'

const Tiles:React.FC = () => {
  const truck = <Truck />

  return (
    <section className={styles.sectionTiles}>
      <Container className={styles.wrapperTiles}>
        <div className={styles.tile}>
          <h3>Будьте в курсе акций и последних предложений</h3>
          <form>
            <input type="email" placeholder="Введите email" />
            <button>Подписаться</button>
          </form>
          <p>Нажимая “Подписаться”, я даю <u>согласие на обработку персональных данных</u></p>
        </div>
        <Tile title="Доставка по всей россии" image={truck} />
        <div className={styles.tile}>

        </div>
        <div className={styles.tile}>

        </div>
        <div className={styles.tile}>

        </div>
      </Container>
    </section>
  )
}

export default Tiles