import styles from './Menu.module.scss'
import Search from '../Search/Search'
import Link from 'next/link'
import Container from "../Container/Container"

const menu = [
  { id: 1, title: 'Наручные часы', link: '/watch' },
  { id: 2, title: 'Интерьерные', link: '/watch/premium' },
  { id: 3, title: 'Rolex', link: '/watch/rolex' },
  { id: 4, title: 'Casio', link: 'watch/casio' },
  { id: 5, title: 'Аксессуары', link: '/accessories' },
  { id: 6, title: 'Бренды', link: '/brands' },
]

const Menu:React.FC = () => {
  return (
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
  )
}

export default Menu
