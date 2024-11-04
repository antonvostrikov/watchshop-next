import styles from './TitlePage.module.scss'

interface ITitleProps {
  title?: string
}

const TitlePage:React.FC<ITitleProps> = ({ title }) => {
  return (
    <div className={styles.titlePage}>
        <h2>{title}</h2>
    </div>
  )
}

export default TitlePage