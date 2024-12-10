import Container from "@/components/Container/Container"
import styles from '../../components/CartProducts/CartProducts.module.scss'
import CartProducts from "@/components/CartProducts/CartProducts"
import Header from "@/components/Header/Header"

const CartPage:React.FC = () => {
  return (
    <>
      <Header color="#f8f8f8" />
      <section className={styles.sectionCart}>
        <Container prefix="cart">
          <CartProducts />
        </Container>
      </section>
    </>
  )
}

export default CartPage