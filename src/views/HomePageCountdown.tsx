import BigNumber from 'bignumber.js'
import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import styled from 'styled-components'

const minuteSeconds = 60
const hourSeconds = 3600
const daySeconds = 86400

const timerProps = {
  isPlaying: true,
  size: 112,
  strokeWidth: 12,
  trailColor: '#1FC7D44F',
}

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  )
}

// eslint-disable-next-line no-bitwise
const getTimeSeconds = (time) => (minuteSeconds - time) | 0
// eslint-disable-next-line no-bitwise
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0
// eslint-disable-next-line no-bitwise
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0
// eslint-disable-next-line no-bitwise
const getTimeDays = (time) => (time / daySeconds) | 0

const TimerBox = styled.div`
  display: flex;
  justify-content: center;
  align: center;
  font-family: sans-serif;
  font-size: 20px;
  text-align: center;
  padding-top: 20px;
  margin-bottom: 20px;
`

const CircleBox = styled.div`
  padding-left: 3px;
  padding-right: 3px;
`

export interface Props {
    startHarvestTimeStamp: number
    harvestTimeStampInterval: number
  }

const HomePageCountdown: React.FC<Props> = ({
    startHarvestTimeStamp,
    harvestTimeStampInterval,
  }) => {
    const startTime = Date.now() / 1000
    const remainingTime = (startHarvestTimeStamp >= startTime)? (startHarvestTimeStamp - startTime) : (startHarvestTimeStamp + harvestTimeStampInterval - startTime)
    const days = Math.ceil(remainingTime / daySeconds)

    const daysDuration = days * daySeconds

    return (
      <TimerBox>
        <CircleBox>
            <CountdownCircleTimer
            {...timerProps}
            colors="#1FC7D4"
            duration={daysDuration}
            initialRemainingTime={remainingTime}
            >
            {({ elapsedTime }) => renderTime('days', getTimeDays(daysDuration - elapsedTime))}
            </CountdownCircleTimer>
        </CircleBox>
        <CircleBox>
            <CountdownCircleTimer
            {...timerProps}
            colors="#1FC7D4"
            duration={daySeconds}
            initialRemainingTime={remainingTime % daySeconds}
            onComplete={(totalElapsedTime) => [remainingTime - totalElapsedTime > hourSeconds, 10]}
            >
            {({ elapsedTime }) => renderTime('hours', getTimeHours(daySeconds - elapsedTime))}
            </CountdownCircleTimer>
        </CircleBox>
        <CircleBox>
            <CountdownCircleTimer
            {...timerProps}
            colors="#1FC7D4"
            duration={hourSeconds}
            initialRemainingTime={remainingTime % hourSeconds}
            onComplete={(totalElapsedTime) => [remainingTime - totalElapsedTime > minuteSeconds, 10]}
            >
            {({ elapsedTime }) => renderTime('minutes', getTimeMinutes(hourSeconds - elapsedTime))}
            </CountdownCircleTimer>
        </CircleBox>
        <CircleBox>
            <CountdownCircleTimer
            {...timerProps}
            colors="#1FC7D4"
            duration={minuteSeconds}
            initialRemainingTime={remainingTime % minuteSeconds}
            onComplete={(totalElapsedTime) => [remainingTime - totalElapsedTime > 0, 10]}
            >
            {({ elapsedTime }) => renderTime('seconds', getTimeSeconds(elapsedTime))}
            </CountdownCircleTimer>
        </CircleBox>
      </TimerBox>
    )
}

export default HomePageCountdown
