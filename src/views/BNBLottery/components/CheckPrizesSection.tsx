import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Card, Button, Heading, Flex, useModal, AutoRenewIcon } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { LotteryStatus } from 'config/constants/types'
import { useTranslation } from 'contexts/Localization'
import { useGetUserLotteriesGraphData, useLottery } from 'state/bnblottery/hooks'
import ConnectWalletButton from 'components/ConnectWalletButton'
import BigNumber from 'bignumber.js'
import ClaimPrizesModal from './ClaimPrizesModal'
import useGetUnclaimedRewards, { FetchStatus } from '../hooks/useGetUnclaimedRewards'

const StyledCard = styled(Card)`
  width: 100%;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 520px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    width: 756px;
  }
`

const TicketImage = styled.img`
  height: 60px;
  ${({ theme }) => theme.mediaQueries.sm} {
    height: 100px;
  }
`

const TornTicketImage = styled.img`
  height: 54px;
  ${({ theme }) => theme.mediaQueries.sm} {
    height: 84px;
  }
`

const CheckPrizesSection = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const {
    isTransitioning,
    currentRound: { status },
  } = useLottery()
  const { fetchAllRewards, unclaimedRewards, fetchStatus } = useGetUnclaimedRewards()
  const userLotteryData = useGetUserLotteriesGraphData()
  const [hasCheckedForRewards, setHasCheckedForRewards] = useState(false)
  const [hasRewardsToClaim, setHasRewardsToClaim] = useState(false)
  const [onPresentClaimModal] = useModal(<ClaimPrizesModal roundsToClaim={unclaimedRewards} />, false)
  const isFetchingRewards = fetchStatus === FetchStatus.IN_PROGRESS
  const lotteryIsNotClaimable = status === LotteryStatus.CLOSE
  const isCheckNowDisabled = !userLotteryData.account || lotteryIsNotClaimable

  useEffect(() => {
    if (fetchStatus === FetchStatus.SUCCESS) {
      // Manage showing unclaimed rewards modal once per page load / once per lottery state change
      if (unclaimedRewards.length > 0 && !hasCheckedForRewards) {
        setHasRewardsToClaim(true)
        setHasCheckedForRewards(true)
        onPresentClaimModal()
      }

      if (unclaimedRewards.length === 0 && !hasCheckedForRewards) {
        setHasRewardsToClaim(false)
        setHasCheckedForRewards(true)
      }
    }
  }, [unclaimedRewards, hasCheckedForRewards, fetchStatus, onPresentClaimModal])

  useEffect(() => {
    // Clear local state on account change, or when lottery isTransitioning state changes
    setHasRewardsToClaim(false)
    setHasCheckedForRewards(false)
  }, [account, isTransitioning])

  const getBody = () => {
    if (!account) {
      return (
        <StyledCard>
          <Flex alignItems="center" justifyContent="center" pt="36px" pb="36px" pl="24px" pr="24px">
            {/* <TicketImage src="/images/lottery/ticket-l.png" alt="lottery ticket" /> */}
            <Flex mx={['4px', null, '16px']} flexDirection="column" alignItems="center">
              <Heading textAlign="center" color="secondary">
                {t('Connect your wallet')}
              </Heading>
              <Heading textAlign="center" color="secondary" mb="24px">
                {t("to check if you've won!")}
              </Heading>
              <ConnectWalletButton width="190px">Unlock Wallet</ConnectWalletButton>
            </Flex>
            {/* <TicketImage src="/images/lottery/ticket-r.png" alt="lottery ticket" /> */}
          </Flex>
        </StyledCard>
      )
    }
    if (hasCheckedForRewards && !hasRewardsToClaim) {
      return (
        <StyledCard>
          <Flex alignItems="center" justifyContent="center" pt="36px" pb="36px" pl="24px" pr="24px">
            {/* <TornTicketImage src="/images/lottery/torn-ticket-l.png" alt="torn lottery ticket" /> */}
            <Flex mx={['4px', null, '16px']} flexDirection="column">
              <Heading textAlign="center" color="secondary">
                {t('No prizes to collect')}...
              </Heading>
              <Heading textAlign="center" color="secondary">
                {t('Better luck next time!')}
              </Heading>
            </Flex>
            {/* <TornTicketImage src="/images/lottery/torn-ticket-r.png" alt="torn lottery ticket" /> */}
          </Flex>
        </StyledCard>
      )
    }
    if (hasCheckedForRewards && hasRewardsToClaim) {
      return (
        <StyledCard>
          <Flex alignItems="center" justifyContent="center" pt="36px" pb="36px" pl="24px" pr="24px">
            {/* <TicketImage src="/images/lottery/ticket-l.png" alt="lottery ticket" /> */}
            <Flex mx={['4px', null, '16px']} flexDirection="column">
              <Heading textAlign="center" color="secondary">
                {t('Congratulations!')}
              </Heading>
              <Heading textAlign="center" color="secondary">
                {t('Why not play again')}
              </Heading>
            </Flex>
            {/* <TicketImage src="/images/lottery/ticket-r.png" alt="lottery ticket" /> */}
          </Flex>
        </StyledCard>
      )
    }
    const checkNowText = () => {
      if (lotteryIsNotClaimable) {
        return `${t('Calculating rewards')}...`
      }
      if (isFetchingRewards) {
        return t('Checking')
      }
      return t('Check Now')
    }
    return (
      <StyledCard>
        <Flex alignItems="center" justifyContent="center" pt="36px" pb="36px" pl="24px" pr="24px">
          {/* <TicketImage src="/images/lottery/ticket-l.png" alt="lottery ticket" /> */}
          <Flex mx={['4px', null, '16px']} flexDirection="column">
            <Heading textAlign="center" color="secondary" mb="24px">
              {t('Are you a winner?')}
            </Heading>
            <Button
              disabled={isCheckNowDisabled}
              onClick={fetchAllRewards}
              isLoading={isFetchingRewards}
              endIcon={isFetchingRewards ? <AutoRenewIcon color="currentColor" spin /> : null}
            >
              {checkNowText()}
            </Button>
          </Flex>
          {/* <TicketImage src="/images/lottery/ticket-r.png" alt="lottery ticket" /> */}
        </Flex>
      </StyledCard>
    )
  }

  return <Flex>{getBody()}</Flex>
}

export default CheckPrizesSection
