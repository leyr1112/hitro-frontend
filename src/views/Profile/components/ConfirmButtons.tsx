import React from 'react'
import styled from 'styled-components'
import { ChevronRightIcon, Button as UIKitButton, AutoRenewIcon, ChevronDownIcon, Box, Flex } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'

export enum ButtonArrangement {
  ROW = 'row',
  SEQUENTIAL = 'sequential',
}

interface ConfirmButtonsProps {
  isConfirming: boolean
  isConfirmDisabled: boolean
  onConfirm: () => void
  buttonArrangement?: ButtonArrangement
  confirmLabel?: string
  confirmId?: string
}

const StyledConfirmButtonRow = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;

  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: 1fr 24px 1fr;
  }
`

const Button = styled(UIKitButton)`
  width: 100%;

  ${({ theme }) => theme.mediaQueries.md} {
    min-width: 160px;
  }
`

const iconAttrs = { width: '24px', color: 'textDisabled' }

const ChevronRight = styled(ChevronRightIcon).attrs(iconAttrs)`
  display: none;

  ${({ theme }) => theme.mediaQueries.md} {
    display: block;
  }
`

const ChevronBottom = styled(ChevronDownIcon).attrs(iconAttrs)`
  display: block;

  ${({ theme }) => theme.mediaQueries.md} {
    display: none;
  }
`

const spinnerIcon = <AutoRenewIcon spin color="currentColor" />

const ConfirmButtons: React.FC<ConfirmButtonsProps> = ({
  isConfirming,
  isConfirmDisabled,
  onConfirm,
  buttonArrangement = ButtonArrangement.ROW,
  confirmLabel,
  confirmId,
}) => {
  const { t } = useTranslation()
  const confirmButtonText = confirmLabel ?? t('Confirm')

  const ConfirmRow = () => {
    return (
      <StyledConfirmButtonRow>
        <Flex justifyContent="center">
          <ChevronRight />
          <ChevronBottom />
        </Flex>
        <Box>
          <Button
            id={confirmId}
            onClick={onConfirm}
            disabled={isConfirmDisabled}
            isLoading={isConfirming}
            endIcon={isConfirming ? spinnerIcon : undefined}
          >
            {isConfirming ? t('Confirming') : confirmButtonText}
          </Button>
        </Box>
      </StyledConfirmButtonRow>
    )
  }

  const ConfirmSequential = () => {
    return (
      <>
        <Box>
          <Button
            id={confirmId}
            onClick={onConfirm}
            disabled={isConfirmDisabled}
            isLoading={isConfirming}
            endIcon={isConfirming ? spinnerIcon : undefined}
          >
            {isConfirming ? t('Confirming') : confirmButtonText}
          </Button>
        </Box>
      </>
    )
  }

  return buttonArrangement === ButtonArrangement.ROW ? ConfirmRow() : ConfirmSequential()
}

export default ConfirmButtons
