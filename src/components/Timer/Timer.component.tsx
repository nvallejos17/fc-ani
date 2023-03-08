import { useState, useEffect } from 'react'
import {
  TimerWrapper,
  TimerItem,
  TimerItemValue,
  TimerItemLabel,
} from './Timer.styles'

function calculateTimeLeft(targetDate: Date) {
  const differenceInMs = +targetDate - +new Date()

  return differenceInMs > 0
    ? {
        days: Math.floor(differenceInMs / (1000 * 60 * 60 * 24)),
        hours: Math.floor((differenceInMs / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((differenceInMs / 1000 / 60) % 60),
        seconds: Math.floor((differenceInMs / 1000) % 60),
      }
    : null
}

type ITimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

type ITimerProps = {
  targetDate: Date
}

const Timer = ({ targetDate }: ITimerProps) => {
  const [timeLeft, setTimeLeft] = useState<ITimeLeft | null>(
    calculateTimeLeft(targetDate)
  )

  useEffect(() => {
    const id = setTimeout(
      () => setTimeLeft(calculateTimeLeft(targetDate)),
      1000
    )

    return () => clearTimeout(id)
  })

  return (
    <>
      {timeLeft ? (
        <TimerWrapper>
          <TimerItem>
            <TimerItemValue>{timeLeft.days}</TimerItemValue>
            <TimerItemLabel>Días</TimerItemLabel>
          </TimerItem>

          <TimerItem>
            <TimerItemValue>{timeLeft.hours}</TimerItemValue>
            <TimerItemLabel>Horas</TimerItemLabel>
          </TimerItem>

          <TimerItem>
            <TimerItemValue>{timeLeft.minutes}</TimerItemValue>
            <TimerItemLabel>Minutos</TimerItemLabel>
          </TimerItem>

          <TimerItem>
            <TimerItemValue>{timeLeft.seconds}</TimerItemValue>
            <TimerItemLabel>Segundos</TimerItemLabel>
          </TimerItem>
        </TimerWrapper>
      ) : null}
    </>
  )
}

export default Timer
