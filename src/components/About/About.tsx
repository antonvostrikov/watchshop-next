import Container from '../Container/Container'
import styles from './About.module.scss'

const About:React.FC = () => {
  return (
    <section className={styles.sectionAbout}>
      <Container className={styles.aboutWrapper}>
        <div className={styles.aboutBlock}>
          <h3>Интернет-магазин WatchShop основан в 2010 году</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id massa sit amet ligula congue rhoncus at et nunc. Duis bibendum in neque ut finibus. Integer accumsan blandit ex, ut iaculis quam faucibus et. Aenean suscipit et sapien eu sodales. Fusce egestas lectus et tortor tincidunt dignissim. Suspendisse mauris tortor, gravida vel tincidunt eu, interdum vel nisi. Nunc accumsan elementum.</p>
        </div>
        <div className={styles.aboutBlock}>
          <h3>Оплата и возврат</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id massa sit amet ligula congue rhoncus at et nunc. Duis bibendum in neque ut finibus. Integer accumsan blandit ex, ut iaculis quam faucibus et. Aenean suscipit et sapien eu sodales. Fusce egestas lectus et tortor tincidunt dignissim. Suspendisse mauris tortor, gravida vel tincidunt eu, interdum vel nisi. Nunc accumsan elementum.</p>
        </div>
        <div className={styles.aboutBlock}>
          <h3>Доставка и самовывоз</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id massa sit amet ligula congue rhoncus at et nunc. Duis bibendum in neque ut finibus. Integer accumsan blandit ex, ut iaculis quam faucibus et. Aenean suscipit et sapien eu sodales. Fusce egestas lectus et tortor tincidunt dignissim. Suspendisse mauris tortor, gravida vel tincidunt eu, interdum vel nisi. Nunc accumsan elementum.</p>
        </div>
      </Container>
    </section>
  )
}

export default About