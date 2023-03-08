import Container from '../Container/Container.container'
import { SectionWrapper } from './Section.styled'

type ISectionProps = React.ComponentPropsWithRef<'section'>

const Section = ({ children, ...otherProps }: ISectionProps) => {
  return (
    <SectionWrapper {...otherProps}>
      <Container>{children}</Container>
    </SectionWrapper>
  )
}

export default Section
