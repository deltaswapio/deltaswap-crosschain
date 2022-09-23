import {getLocalRPC} from './methods'
import {VERSION, USE_VERSION} from '../constant'
import {ChainId} from './chainId'

export const XANA_MAIN_CHAINID = ChainId.XANA
export const XANA_MAINNET = getLocalRPC(XANA_MAIN_CHAINID, '')
export const XANA_MAIN_EXPLORER = ''

export const XANA_TEST_CHAINID = ChainId.XANA_TEST
export const XANA_TESTNET = getLocalRPC(XANA_TEST_CHAINID, '')
export const XANA_TEST_EXPLORER = 'https://testnet.avascan.info/blockchain/xanachain'

const symbol = 'XANA'

const bridgeToken:any = {
  [VERSION.V7]: {
    bridgeInitToken: '',
    bridgeInitChain: '',
    crossBridgeInitToken: ''
  },
}

export default {
  [XANA_MAIN_CHAINID]: {
    ...bridgeToken[USE_VERSION],
    swapRouterToken: '',
    multicalToken: '',
    v1FactoryToken: '',
    v2FactoryToken: '',
    nodeRpc: XANA_MAINNET,
    nodeRpcList: [
      XANA_MAINNET,
    ],
    chainID: XANA_MAIN_CHAINID,
    lookHash: XANA_MAIN_EXPLORER + '/tx/',
    lookAddr: XANA_MAIN_EXPLORER + '/address/',
    lookBlock: XANA_MAIN_EXPLORER + '/block/',
    explorer: XANA_MAIN_EXPLORER,
    symbol: symbol,
    name: 'XANACHAIN',
    networkName: 'XANACHAIN mainnet',
    type: 'main',
    label: XANA_MAIN_CHAINID,
  },
  [XANA_TEST_CHAINID]: {
    ...bridgeToken[USE_VERSION],
    swapRouterToken: '',
    multicalToken: '',
    v1FactoryToken: '',
    v2FactoryToken: '',
    nodeRpc: XANA_TESTNET,
    nodeRpcList: [
      XANA_TESTNET,
    ],
    chainID: XANA_TEST_CHAINID,
    lookHash: XANA_TEST_EXPLORER + '/tx/',
    lookAddr: XANA_TEST_EXPLORER + '/address/',
    lookBlock: XANA_TEST_EXPLORER + '/block/',
    explorer: XANA_TEST_EXPLORER,
    symbol: symbol,
    name: 'XANACHAIN',
    networkName: 'XANACHAIN testnet',
    type: 'test',
    label: XANA_TEST_CHAINID,
  },
}