import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { Card, Box, Flex, Heading, Skeleton, CardBody } from '@pancakeswap/uikit'
import { LotteryStatus } from 'config/constants/types'
import Page from 'components/Layout/Page'
import PageSection from 'components/PageSection'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import { useFetchLottery, useLottery } from 'state/bnblottery/hooks'
import { useWeb3React } from '@web3-react/core'
import BigNumber from 'bignumber.js'
import useRefresh from 'hooks/useRefresh'
import {
  TITLE_BG,
  GET_TICKETS_BG,
  FINISHED_ROUNDS_BG,
  FINISHED_ROUNDS_BG_DARK,
  CHECK_PRIZES_BG,
} from './pageSectionStyles'
import useGetNextLotteryEvent from './hooks/useGetNextLotteryEvent'
import useStatusTransitions from './hooks/useStatusTransitions'
import Hero from './components/Hero'
import NextDrawCard from './components/NextDrawCard'
import Countdown from './components/Countdown'
import HistoryTabMenu from './components/HistoryTabMenu'
import YourHistoryCard from './components/YourHistoryCard'
import AllHistoryCard from './components/AllHistoryCard'
import CheckPrizesSection from './components/CheckPrizesSection'
import HowToPlay from './components/HowToPlay'
import useShowMoreUserHistory from './hooks/useShowMoreUserRounds'
import Divider from './components/Divider'

const LotteryPage = styled(Page)`
  min-height: calc(100vh - 64px);
`
const StyledLotteryCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  max-width: 437px;
  width: 100%;
  border-radius: 16px;
  margin-top: 16px;
  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: auto;
    margin-right: auto;
    max-width: 437px;
    width: 100%;
    border-radius: 16px;
  }
`

const StyledLotteryCardBody = styled(CardBody)`
  padding: 32px 16px 16px;
`

const BNBLottery = () => {
  useFetchLottery()
  useStatusTransitions()
  const { t } = useTranslation()
  const {
    currentRound: { status, endTime },
  } = useLottery()
  const [historyTabMenuIndex, setHistoryTabMenuIndex] = useState(0)
  const endTimeAsInt = parseInt(endTime, 10)
  const { nextEventTime, postCountdownText, preCountdownText } = useGetNextLotteryEvent(endTimeAsInt, status)
  const { numUserRoundsRequested, handleShowMoreUserRounds } = useShowMoreUserHistory()

  return (
    <LotteryPage>
      <Hero/>
      <Divider />
      <Flex alignItems="center" justifyContent="center" flexDirection="column" pt="24px" pb="24px">
        {status === LotteryStatus.OPEN && (
          <Heading scale="lg" mb="24px" textAlign="center" color="secondary">
            {t('Get your tickets now!')}
          </Heading>
        )}
        <Flex alignItems="center" justifyContent="center" mb="24px">
          {nextEventTime && (postCountdownText || preCountdownText) ? (
            <Countdown
              nextEventTime={nextEventTime}
              postCountdownText={postCountdownText}
              preCountdownText={preCountdownText}
            />
          ) : (
            <Skeleton height="41px" width="250px" />
          )}
        </Flex>
        <NextDrawCard/>
      </Flex>
      <Divider />
      <Flex alignItems="center" justifyContent="center" flexDirection="column" pt="24px" pb="24px">
        <CheckPrizesSection/>
      </Flex>
      <Divider />
      <Flex width="100%" flexDirection="column" alignItems="center" justifyContent="center" pt="24px" pb="100px">
        <Heading mb="24px" scale="xl" textAlign="center" color="secondary">
          {t('Finished Rounds')}
        </Heading>
        <Box mb="24px">
          <HistoryTabMenu
            activeIndex={historyTabMenuIndex}
            setActiveIndex={(index) => setHistoryTabMenuIndex(index)}
          />
        </Box>
        {historyTabMenuIndex === 0 ? (
          <AllHistoryCard/>
        ) : (
          <YourHistoryCard
            handleShowMoreClick={handleShowMoreUserRounds}
            numUserRoundsRequested={numUserRoundsRequested}
          />
        )}
      </Flex>
      <Divider />
      <HowToPlay />
    </LotteryPage>
  )
}

export default BNBLottery
