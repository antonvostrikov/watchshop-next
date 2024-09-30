import cn from 'classnames'

interface IContainerProps {
  className?: string
  children?: React.ReactNode
  prefix?: string
}

const Container:React.FC<IContainerProps> = ({ prefix = 'standart', className, children }) => {
  return (
    <div className={cn(`container-${prefix}`, className)}>
      { children }
    </div>
  )
}

export default Container