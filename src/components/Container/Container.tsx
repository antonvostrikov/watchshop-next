import cn from 'classnames'

interface IContainerProps {
  classNames?: string
  children?: React.ReactNode
}

const Container:React.FC<IContainerProps> = ({ classNames, children }) => {
  return (
    <div className={cn('container', classNames)}>
      { children }
    </div>
  )
}

export default Container