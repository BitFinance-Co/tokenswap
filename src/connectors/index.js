import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import { PortisConnector } from '@web3-react/portis-connector'

import { NetworkConnector } from './Network'
import { FortmaticConnector } from './Fortmatic'

const POLLING_INTERVAL = 10000

export const network = new NetworkConnector({
  urls: { 1: process.env.REACT_APP_NETWORK_URL },
  pollingInterval: POLLING_INTERVAL
})

export const injected = new InjectedConnector({
  supportedChainIds: [1]
})

export const walletconnect = new WalletConnectConnector({
  rpc: { 1: process.env.REACT_APP_NETWORK_URL },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: false,
  pollingInterval: POLLING_INTERVAL
})

export const fortmatic = new FortmaticConnector({
  apiKey: process.env.REACT_APP_FORTMATIC_KEY,
  chainId: 1
})

export const portis = new PortisConnector({
  dAppId: process.env.REACT_APP_PORTIS_ID,
  networks: [1]
})

export const walletlink = new WalletLinkConnector({
  url: process.env.REACT_APP_NETWORK_URL,
  appName: 'Uniswap',
  appLogoUrl:
    'https://imgur.com/JTlR2WX'
})
