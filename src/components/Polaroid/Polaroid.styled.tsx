import styled, { css } from 'styled-components'

export const PolaroidWrapper = styled.div`
  perspective: 1000px;
  aspect-ratio: 88 / 107;
`

export const PolaroidFlipper = styled.div<{ isFlipped: boolean }>(
  ({ isFlipped }) => css`
    position: relative;
    width: 100%;
    height: 100%;
    transform: rotateY(${isFlipped ? '180deg' : '0deg'});
    transform-style: preserve-3d;
    transition: 1s;
  `
)

const PolaroidPane = styled.div`
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 2px;
  background-color: white;
  box-shadow: 2px 2px 16px lightgrey;
`

const frontGap = (4.5 * 100) / 88

export const PolaroidFront = styled(PolaroidPane)`
  justify-content: flex-start;
  padding: ${frontGap}%;
  transform: rotateY(0deg);
`

export const PolaroidFrontFrame = styled.img`
  display: block;
  aspect-ratio: 79 / 79;
  width: 100%;
  object-fit: cover;
  border-radius: 2px;
`

export const PolaroidFrontTitle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PolaroidBack = styled(PolaroidPane)`
  justify-content: center;
  padding: 2rem;
  transform: rotateY(180deg);
`
