'use client'

import React from 'react'
import Link from 'next/link'
import styles from './Header.module.scss'
import Container from '../Container/Container'
import { User, ShoppingCart, Search, MapPin } from 'lucide-react'
import Location from '../Location/Location'

const menu = [
  { id: 1, title: 'Наручные часы' },
  { id: 2, title: 'Интерьерные' },
  { id: 3, title: 'Rolex' },
  { id: 4, title: 'Casio' },
  { id: 5, title: 'Аксессуары' },
  { id: 6, title: 'Бренды' },
]

interface ILocationActive {
  id: number
  location: string
}

const Header:React.FC = () => {  
  const [locationIs, setLocationIs] = React.useState(false)
  const [locationActive, setLocationActive] = React.useState<ILocationActive>({ id: 1, location: 'Москва' })

  return (
    <header className={styles.header}>
      { locationIs && <Location setLocationIs={setLocationIs} /> }
      <div className={styles.headerTop}>
        <span onClick={() => setLocationIs(!locationIs)} className={styles.location}><MapPin /> {locationActive.location}</span>
        <span>8 (800) 000-00-00</span>
        <span>+7 (495) 000-00-00</span>
        <span className={styles.call}>Заказать звонок</span>
      </div>

      <Container className={styles.headerMiddle}>
        <div className={styles.headerTitle}>
          <h1>Watchshop</h1>
        </div>
        <div className={styles.headerButtons}>
          <span><User /> Вход</span>
          <span><ShoppingCart /> Корзина</span>
        </div>
      </Container>

      <Container className={styles.headerBottom}>
        <div className={styles.headerSearch}>
          <form>
            <input type="text" placeholder="Поиск" />
            <Search />
          </form>
        </div>
        <div className={styles.headerMenu}>
          <nav>
            <ul>
              { menu.map(m => <li key={m.id}><Link href="#">{m.title}</Link></li>) } 
            </ul>
          </nav>
        </div>
      </Container>  
    </header>
  )
}

export default Header