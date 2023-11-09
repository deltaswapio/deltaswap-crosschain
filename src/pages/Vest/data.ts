import { ChainId } from "../../config/chainConfig/chainId"
import {spportChainArr} from '../../config/chainConfig'
function useChain (data:any) {
  const list:any = {}
  // console.log(spportChainArr)
  for (const c in  data) {
    if (!spportChainArr.includes(c)) continue
    list[c] = {
      ...data[c]
    }
  }
  return list
}
const BASE_INFO = {
  name: 'DELTA',
  symbol: 'DELTA',
  decimals: 18,
  label: 'delta'
}

const VENFT_BASE_INFO = {
  name: 'veDELTA NFT',
  symbol: 'veDELTA',
  decimals: 18
}


const veMULTI:any = useChain({
  [ChainId.PLQ]: {
    ...VENFT_BASE_INFO,
    address: '0xFc04de084548a033D6fAB40e4CfB27C832f9f35E'
  },
})

const MULTI_TOKEN:any = useChain({
  [ChainId.PLQ]: {
    ...BASE_INFO,
    address: '0x6aF48997671584672e084Bf2296473677598ee58'
  },
})

const REWARD_TOKEN:any = useChain({
  [ChainId.PLQ]: {
    name: 'Wrapped PLQ',
    symbol: 'wPLQ',
    decimals: 18,
    address: '0x5ebcdf1de1781e8b5d41c016b0574ad53e2f6e1a'
  },
})

const REWARD:any = useChain({
  [ChainId.PLQ]: {
    address: '0xfB44597e54CE168A2D97b0cD19aAebc96d9F7684'
  },
})

const INIT_TIME = 365
const MIN_DAY = 6
// const INIT_TIME = 0
// const MIN_DAY = 0

export {
  BASE_INFO,
  VENFT_BASE_INFO,
  veMULTI,
  MULTI_TOKEN,
  REWARD_TOKEN,
  REWARD,
  INIT_TIME,
  MIN_DAY
}