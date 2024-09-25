import styles from './Showcase.module.scss'
import smartWatch from '../../../public/images/smart-watch.jpg'
import rolex from '../../../public/images/rolex.jpg'
import casio from '../../../public/images/casio.jpg'
import Image from 'next/image'
import Container from '../Container/Container'

interface IShowcase {
  pictureBig: string
  pictureTop: string
  pictureBottom: string
}

const Showcase: React.FC<IShowcase> = ({ pictureBig, pictureTop, pictureBottom }) => {

  return (
    <section className={styles.sectionShowcase}>
      <Container className={styles.showcaseWrapper}>
        <div className={styles.pictureMain}>
          <Image src={pictureBig} alt="smart-watch" />
        </div>
        <div className={styles.pictureTop}>
          <Image src={pictureTop} alt="rolex" />
        </div>
        <div className={styles.pictureBottom}>
          <Image src={pictureBottom} alt="casio" />
        </div>
      </Container>
    </section>
  )
}

export default Showcase