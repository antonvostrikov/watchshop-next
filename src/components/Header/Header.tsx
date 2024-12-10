'use client'

import React from 'react'
import Link from 'next/link'
import styles from './Header.module.scss'
import Container from '../Container/Container'
import { User, ShoppingCart, MapPin, Heart } from 'lucide-react'
import Location from '../Location/Location'
import Enter from '../Enter/Enter'

interface ILocationActive {
  id: number
  location: string
}

interface IHeaderProps {
  color?: string
}

const Header:React.FC<IHeaderProps> = ({ color="#fff" }) => {  
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

      <div className={styles.headerBottom} style={{ background: color }}>
        <Container className={styles.headerBottomWrapper}>
          <div className={styles.headerTitle}>
            <h1><Link href="/">Watchshop</Link></h1>
          </div>
          <div className={styles.headerButtons}>
            <span onClick={() => setEnterIs(!enterIs)}><User /> Вход</span>
            <Link href="/favorite"><span><Heart /> Избранное</span></Link>
            <Link href="/cart"><span><ShoppingCart /> Корзина</span></Link>
          </div>
        </Container>
      </div>
    </header>
  )
}

export default Header