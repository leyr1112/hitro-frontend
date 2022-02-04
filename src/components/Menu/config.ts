import { MenuEntry, menuStatus } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
      {
        label: t('Bridge'),
        href: 'https://www.binance.org/en/bridge',
        target: '_blank',
      },
      {
        label: t('Buy Crypto'),
        href: 'https://ramp.network/buy',
        target: '_blank',
      },
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Pools'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: t('Referral'),
    icon: 'GroupsIcon',
    href: '/referral',
  },
  {
    label: t('GameFi (Coming soon)'),
    icon: 'PredictionsIcon',
    href: '/gamefi',
  },
  {
    label: t('NFH (Coming soon)'),
    icon: 'NftIcon',
    href: '/nfh',
  },
  {
    label: t('IFO (Coming soon)'),
    icon: 'IfoIcon',
    href: '/ifo',
  },
  // {
  //   label: t('Lottery(BNB)'),
  //   icon: 'TicketIcon',
  //   href: '/bnblottery',
  //   status: menuStatus.LIVE,
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   href: '/info',
  // },
  // {
  //   label: 'Games',
  //   icon: 'PredictionsIcon',
  //   href: '/games',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  // {
  //   label: 'Charts',
  //   icon: 'IfoIcon',
  //   items: [
  //     // {
  //     //   label: 'DexGuru',
  //     //   href: 'https://dex.guru/token/0xB67A9caA00506F88B572298bd61eE92a9375844A-bsc',
  //     // },
  //     {
  //       label: 'Poocoin',
  //       href: 'https://poocoin.app/tokens/0xB67A9caA00506F88B572298bd61eE92a9375844A',
  //     },
  //   ],
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'GitHub',
      //   href: 'https://github.com/Digiblocks',
      // },
      {
        label: 'Doc',
        href: '',
        target: '_blank',
      },
    ],
  },
  // {
  //   icon: 'AuditIcon',
  //   label: 'TechRate Audit',
  //   href: 'https://t.me/techrate_audits/1227',
  // },
]

export default config
