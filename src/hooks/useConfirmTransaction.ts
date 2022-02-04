import { useEffect, useReducer, useRef } from 'react'
import { noop } from 'lodash'
import { useWeb3React } from '@web3-react/core'
import { ethers } from 'ethers'
import useToast from 'hooks/useToast'
import { useTranslation } from 'contexts/Localization'

type LoadingState = 'idle' | 'loading' | 'success' | 'fail'

type Action =
  | { type: 'confirm_sending' }
  | { type: 'confirm_receipt' }
  | { type: 'confirm_error' }

interface State {
  confirmState: LoadingState
}

const initialState: State = {
  confirmState: 'idle',
}

const reducer = (state: State, actions: Action): State => {
  switch (actions.type) {
    case 'confirm_sending':
      return {
        ...state,
        confirmState: 'loading',
      }
    case 'confirm_receipt':
      return {
        ...state,
        confirmState: 'success',
      }
    case 'confirm_error':
      return {
        ...state,
        confirmState: 'fail',
      }
    default:
      return state
  }
}

interface OnSuccessProps {
  state: State
  receipt: ethers.providers.TransactionReceipt
}

interface ConfirmTransaction {
  onConfirm: () => Promise<ethers.providers.TransactionResponse>
  onSuccess: ({ state, receipt }: OnSuccessProps) => void
}

const useConfirmTransaction = ({
  onConfirm,
  onSuccess = noop,
}: ConfirmTransaction) => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const [state, dispatch] = useReducer(reducer, initialState)
  const { toastError } = useToast()

  return {
    isConfirming: state.confirmState === 'loading',
    isConfirmed: state.confirmState === 'success',
    handleConfirm: async () => {
      dispatch({ type: 'confirm_sending' })
      try {
        const tx = await onConfirm()
        const receipt = await tx.wait()
        if (receipt.status) {
          dispatch({ type: 'confirm_receipt' })
          onSuccess({ state, receipt })
        }
      } catch (error) {
        dispatch({ type: 'confirm_error' })
        toastError(t('Error'), t('Please try again. Confirm the transaction and make sure you are paying enough gas!'))
      }
    },
  }
}

export default useConfirmTransaction
