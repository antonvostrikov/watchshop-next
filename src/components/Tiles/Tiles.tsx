import styles from './Tiles.module.scss'

import Container from '../Container/Container'
import { Gift, HandCoins, Store, Truck } from 'lucide-react'
import Tile from './TIle'

const Tiles:React.FC = () => {
  const truck = <Truck />
  const gift = <Gift />
  const pay = <HandCoins />
  const shop = <Store />

  return (
    <section className={styles.sectionTiles}>
      <Container className={styles.wrapperTiles}>
        <div className={styles.tileMain}>
          <h3>Будьте в курсе акций и последних предложений</h3>
          <form>
            <input type="email" placeholder="Введите email" />
            <button>Подписаться</button>
          </form>
          <p>Нажимая “Подписаться”, я даю <u>согласие на обработку персональных данных</u></p>
        </div>
        <Tile title="Доставка по всей россии" image={truck} />
        <Tile title="Более 100 брендов" image={gift} />
        <Tile title="Оплата любым способом" image={pay} />
        <Tile title="15 магазинов по всей России" image={shop} />

      </Container>
    </section>
  )
}

export default Tiles