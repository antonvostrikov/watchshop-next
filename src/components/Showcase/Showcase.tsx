import styles from './Showcase.module.scss'
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
          <Image src={pictureBig} width={0} height={0} sizes="100vw" alt="smart-watch" />
        </div>
        <div className={styles.pictureTop}>
          <Image src={pictureTop} width={0} height={0} sizes="100vw" alt="rolex" />
        </div>
        <div className={styles.pictureBottom}>
          <Image src={pictureBottom} width={0} height={0} sizes="100vw" alt="casio" />
        </div>
      </Container>
    </section>
  )
}

export default Showcase