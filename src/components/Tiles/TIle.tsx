import styles from './Tiles.module.scss'

interface ITileProps {
  image?: React.ReactNode
  title?: string
}

const Tile:React.FC<ITileProps> = ({ image, title }) => {
  return (
    <div className={styles.tile}>
      {image}
      <span>{title}</span>
    </div>
  )
}

export default Tile