import CartEmpty from "@/components/CartEmpty/CartEmpty"
import Container from "@/components/Container/Container"
import styles from '../../components/CartEmpty/CartEmpty.module.scss'

const CartPage:React.FC = () => {
  return (
    <section className={styles.sectionCart}>
      <Container>
        <CartEmpty />
      </Container>
    </section>
  )
}

export default CartPage