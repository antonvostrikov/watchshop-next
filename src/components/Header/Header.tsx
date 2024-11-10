'use client'

import React from 'react'
import Link from 'next/link'
import styles from './Header.module.scss'
import Container from '../Container/Container'
import { User, ShoppingCart, MapPin, Heart } from 'lucide-react'
import Location from '../Location/Location'
import Enter from '../Enter/Enter'
import Search from '../Search/Search'

const menu = [
  { id: 1, title: 'Наручные часы', link: '/watch' },
  { id: 2, title: 'Интерьерные', link: '/watch/premium' },
  { id: 3, title: 'Rolex', link: '/watch/rolex' },
  { id: 4, title: 'Casio', link: 'watch/casio' },
  { id: 5, title: 'Аксессуары', link: '/accessories' },
  { id: 6, title: 'Бренды', link: '/brands' },
]

interface ILocationActive {
  id: number
  location: string
}

const Header:React.FC = () => {  
  const [locationIs, setLocationIs] = React.useState(false)
  const [enterIs, setEnterIs] = React.useState(false)
  const [locationActive, setLocationActive] = React.useState<ILocationActive>({ id: 1, location: 'Москва' })

  return (
    <header className={styles.header}>
      { locationIs && <Location setLocationIs={setLocationIs} /> }
      { enterIs && <Enter setEnterIs={setEnterIs}/> }
      
      <div className={styles.headerTop}>
        <Container className={styles.headerTopWrapper}>
          <span onClick={() => setLocationIs(!locationIs)} className={styles.location}><MapPin /> {locationActive.location}</span>
          <span>8 (800) 000-00-00</span>
          <span>+7 (495) 000-00-00</span>
          <span className={styles.call}>Заказать звонок</span>
        </Container>
      </div>

      <Container className={styles.headerMiddle}>
        <div className={styles.headerTitle}>
          <h1><Link href="/">Watchshop</Link></h1>
        </div>
        <div className={styles.headerButtons}>
          <span onClick={() => setEnterIs(!enterIs)}><User /> Вход</span>
          <Link href="/favorite"><span><Heart /> Избранное</span></Link>
          <Link href="/cart"><span><ShoppingCart /> Корзина</span></Link>
        </div>
      </Container>

      <Container className={styles.headerBottom}>
        <div className={styles.headerSearch}>
          <Search />
        </div>
        <div className={styles.headerMenu}>
          <nav>
            <ul>
              { menu.map(m => <li key={m.id}><Link href={m.link}>{m.title}</Link></li>) } 
            </ul>
          </nav>
        </div>
      </Container>  
    </header>
  )
}

export default Header