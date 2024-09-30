interface ITileProps {
  className?: string
  image?: React.ReactNode
  title?: string
}

const Tile:React.FC<ITileProps> = ({ className, image, title }) => {
  return (
    <div className={className}>
      {image}
      {title}
    </div>
  )
}

export default Tile