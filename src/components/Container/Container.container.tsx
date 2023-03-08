import { ContainerWrapper } from './Container.styled'

type IContainerProps = React.ComponentPropsWithRef<'div'>

const Container = (props: IContainerProps) => {
  return <ContainerWrapper {...props} />
}

export default Container
