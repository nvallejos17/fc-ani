import { useState } from 'react'
import {
  PolaroidWrapper,
  PolaroidFlipper,
  PolaroidFront,
  PolaroidFrontFrame,
  PolaroidFrontTitle,
  PolaroidBack,
} from './Polaroid.styled'

type IPolaroidProps = React.ComponentPropsWithRef<'div'> & {
  message: string
  src: string
  title: string
}

const Polaroid = ({ message, src, title, ...otherProps }: IPolaroidProps) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const onClick = () => setIsFlipped(!isFlipped)

  return (
    <PolaroidWrapper onClick={onClick} {...otherProps}>
      <PolaroidFlipper isFlipped={isFlipped}>
        <PolaroidFront>
          <PolaroidFrontFrame src={src} alt={title} />
          <PolaroidFrontTitle>
            {title}
            <i className="fa-solid fa-camera-rotate"></i>
          </PolaroidFrontTitle>
        </PolaroidFront>

        <PolaroidBack>{message}</PolaroidBack>
      </PolaroidFlipper>
    </PolaroidWrapper>
  )
}

export default Polaroid
