import cn from 'classnames'

interface IContainerProps {
  className?: string
  children?: React.ReactNode
}

const Container:React.FC<IContainerProps> = ({ className, children }) => {
  return (
    <div className={cn('container', className)}>
      { children }
    </div>
  )
}

export default Container