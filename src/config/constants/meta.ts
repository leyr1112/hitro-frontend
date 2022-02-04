import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'HitroSwap',
  description:
    'The most popular AMM on BSC by user count! Earn HTO through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by HTO), NFTs, and more, on a platform you can trust.',
  image: 'https://hitroswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('HitroSwap')}`,
      }
    case '/games':
      return {
        title: `${t('Games')} | ${t('HitroSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('HitroSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('HitroSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Staking')} | ${t('HitroSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('HitroSwap')}`,
      }
    case '/bnblottery':
      return {
        title: `${t('Lottery(BNB)')} | ${t('HitroSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('HitroSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('HitroSwap')}`,
      }
    case '/referral':
      return {
        title: `${t('Referral')} | ${t('HitroSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('HitroSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Info')} | ${t('HitroSwap')}`,
      }
    default:
      return null
  }
}
