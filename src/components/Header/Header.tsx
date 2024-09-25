'use client'

import React from 'react'
import Link from 'next/link'
import styles from './Header.module.scss'
import Container from '../Container/Container'
import { User, ShoppingCart, ChevronDown, Search, MapPin } from 'lucide-react'

const menu = [
  { id: 1, title: 'Наручные часы' },
  { id: 2, title: 'Интерьерные' },
  { id: 3, title: 'Rolex' },
  { id: 4, title: 'Casio' },
  { id: 5, title: 'Аксессуары' },
  { id: 6, title: 'Бренды' },
]

const location = [
  { id: 1, location: 'Москва' },
  { id: 2, location: 'Санкт-Петербург' },
  { id: 3, location: 'Ростов' },
  { id: 4, location: 'Владивосток' },
  { id: 5, location: 'Сочи' },
]

const Header:React.FC = () => {  
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <Link href="#" className={styles.location}><MapPin /> Москва</Link>
        <span>8 (800) 000-00-00</span>
        <span>+7 (495) 000-00-00</span>
        <Link href="#">Заказать звонок</Link>
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