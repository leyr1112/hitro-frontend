import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'HTO-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xC8CAe95DC340F212bFCf3f4cEe01c746A30aeA1A',
    },
    token: tokens.hto,
    quoteToken: tokens.busd,
  },
  {
    pid: 1,
    lpSymbol: 'HTO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x0dF43515108D374C3fd02CC1c63Dd1B1d37bcC01',
    },
    token: tokens.hto,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'HTO-USDT LP',
    lpAddresses: {
      97: '',
      56: '0x5991a037F6F153A5191D82E698F56621403Ce3F9',
    },
    token: tokens.hto,
    quoteToken: tokens.usdt,
  },  
  {
    pid: 3,
    lpSymbol: 'HTO-USDC LP',
    lpAddresses: {
      97: '',
      56: '0x3a8B771cd085343F7C279B483D7C58174DFfa213',
    },
    token: tokens.hto,
    quoteToken: tokens.usdc,
  },
  {
    pid: 4,
    lpSymbol: 'BTCB-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082',
    },
    token: tokens.btcb,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 5,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x74E4716E431f45807DCF19f284c7aA99F18a4fbc',
    },
    token: tokens.eth,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 6,
    lpSymbol: 'DAI-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x66FDB2eCCfB58cF098eaa419e5EfDe841368e489',
    },
    token: tokens.dai,
    quoteToken: tokens.busd,
  },
  {
    pid: 7,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00',
    },
    token: tokens.usdt,
    quoteToken: tokens.busd,
  },
  {
    pid: 8,
    lpSymbol: 'SOL-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x9AD636353BCCb7bF2c23DDA1D5E4aFd021A46224',
    },
    token: tokens.sol,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 9,
    lpSymbol: 'ADA-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x28415ff2C35b65B9E5c7de82126b4015ab9d031F',
    },
    token: tokens.ada,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 10,
    lpSymbol: 'SHIBA-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x6b7b3523a6660a5fcE3c28E1536CC8dd8D57f7E0',
    },
    token: tokens.shiba,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 11,
    lpSymbol: 'wBNB',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.wbnb,
    quoteToken: tokens.busd,
  },
  {
    pid: 12,
    lpSymbol: 'BUSD',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    },
    token: tokens.busd,
    quoteToken: tokens.busd,
  },
  {
    pid: 13,
    lpSymbol: 'BTCB',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0xF45cd219aEF8618A92BAa7aD848364a158a24F33',
    },
    token: tokens.btcb,
    quoteToken: tokens.busd,
  },
  {
    pid: 14,
    lpSymbol: 'ETH',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0x7213a321F1855CF1779f42c0CD85d3D95291D34C',
    },
    token: tokens.eth,
    quoteToken: tokens.busd,
  },
  {
    pid: 15,
    lpSymbol: 'DAI',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0x66FDB2eCCfB58cF098eaa419e5EfDe841368e489',
    },
    token: tokens.dai,
    quoteToken: tokens.busd,
  },
  {
    pid: 16,
    lpSymbol: 'USDT',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00',
    },
    token: tokens.usdt,
    quoteToken: tokens.busd,
  },
  {
    pid: 17,
    lpSymbol: 'USDC',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0x2354ef4DF11afacb85a5C7f98B624072ECcddbB1',
    },
    token: tokens.usdc,
    quoteToken: tokens.busd,
  },
  {
    pid: 18,
    lpSymbol: 'CAKE',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0x804678fa97d91B974ec2af3c843270886528a9E6',
    },
    token: tokens.cake,
    quoteToken: tokens.busd,
  },
  {
    pid: 19,
    lpSymbol: 'SOL',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0xfea6ab80cd850c3e63374bc737479aeec0e8b9a1',
    },
    token: tokens.sol,
    quoteToken: tokens.busd,
  },
  {
    pid: 20,
    lpSymbol: 'SHIBA',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0xc97B349ab68361E6b6E911D0Cf6D3f74187c6B72',
    },
    token: tokens.shiba,
    quoteToken: tokens.busd,
  },
  {
    pid: 21,
    lpSymbol: 'ADA',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0x1E249DF2F58cBef7EAc2b0EE35964ED8311D5623',
    },
    token: tokens.ada,
    quoteToken: tokens.busd,
  },
  {
    pid: 22,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
]

export default farms
