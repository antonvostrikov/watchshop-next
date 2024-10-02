import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import Container from '../Container/Container'
import styles from './Footer.module.scss'

import Link from 'next/link'

const menu = [
  { id: 1, title: 'Наручные часы' },
  { id: 2, title: 'Интерьерные' },
  { id: 3, title: 'Rolex' },
  { id: 4, title: 'Casio' },
  { id: 5, title: 'Аксессуары' },
  { id: 6, title: 'Бренды' },
]

const about = [
  { id: 1, title: 'Новости' },
  { id: 2, title: 'Подписка' },
  { id: 3, title: 'Скидки' },
  { id: 4, title: 'Контакты' },
  { id: 5, title: 'Франшиза' },
  { id: 6, title: 'Карьера' }
]

const buyers = [
  { id: 1, title: 'Скидки' },
  { id: 2, title: 'Блог' },
  { id: 3, title: 'Частые вопросы' },
]

const work = [
  { id: 1, title: 'Заказ' },
  { id: 2, title: 'Доставка' },
  { id: 3, title: 'Гарантия' },
  { id: 4, title: 'Возврат' },
]

const Footer:React.FC = () => {
  return (
    <footer className={styles.footerBottom}>
      <Container prefix="footer" className={styles.footerWrapper}>
        <div className={styles.footerBlock}>
          <h4>Каталог</h4>
          <ul>
            { menu.map(m => <li key={m.id}><Link href="#">{m.title}</Link></li>) }
          </ul>
        </div>
        <div className={styles.footerBlock}>
          <h4>О компании</h4>
          <ul>
            { about.map(a => <li key={a.id}><Link href="#">{a.title}</Link></li>) }
          </ul>
        </div>
        <div className={styles.footerBlock}>
          <h4>Покупателям</h4>
          <ul>
            { buyers.map(b => <li key={b.id}><Link href="#">{b.title}</Link></li>) }
          </ul>
        </div>
        <div className={styles.footerBlock}>
          <h4>Как мы работаем</h4>
          <ul>
            { work.map(w => <li key={w.id}><Link href="#">{w.title}</Link></li>) }
          </ul>
        </div>
        <div className={styles.footerBlock}>
          <h4>Свяжитесь с нами</h4>
        </div>
        <div className={styles.footerBlock}>
          <h4>Мы в социальных сетях</h4>
          <ul className={styles.listSocial}>
            <li><Facebook /></li>
            <li><Youtube /></li>
            <li><Twitter /></li>
            <li><Instagram /></li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}

export default Footer