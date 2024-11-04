import CartEmpty from "@/components/CartEmpty/CartEmpty"
import Container from "@/components/Container/Container"
import styles from '../../components/CartEmpty/CartEmpty.module.scss'
import CartProducts from "@/components/CartProducts/CartProducts"

const CartPage:React.FC = () => {
  return (
    <section className={styles.sectionCart}>
      <Container prefix="product">
        {/* <CartEmpty /> */}
        <CartProducts />
      </Container>
    </section>
  )
}

export default CartPage