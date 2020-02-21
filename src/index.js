import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import Web3Provider, { Connectors } from 'web3-react'

import ThemeProvider, { GlobalStyle } from './theme'
import ApplicationContextProvider, { Updater as ApplicationContextUpdater } from './contexts/Application'
import TransactionContextProvider, { Updater as TransactionContextUpdater } from './contexts/Transactions'
import TokensContextProvider from './contexts/Tokens'
import BalancesContextProvider from './contexts/Balances'
import AllowancesContextProvider from './contexts/Allowances'

import App from './pages/App'
import InjectedConnector from './InjectedConnector'

import './i18n'

if (process.env.NODE_ENV === 'production') {
  ReactGA.initialize('UA-128182339-1')
} else {
  ReactGA.initialize('test', { testMode: true })
}
ReactGA.pageview(window.location.pathname + window.location.search)

const { NetworkOnlyConnector } = Connectors
const Injected = new InjectedConnector({ supportedNetworks: [Number(process.env.REACT_APP_NETWORK_ID || '1')] })
const Network = new NetworkOnlyConnector({ providerURL: process.env.REACT_APP_NETWORK_URL || 'https://mainnet.infura.io/v3/1fda4e6f00554d6abb0a77319097c08c' })
const connectors = { Injected, Network }

function ContextProviders({ children }) {
  return (
    <ApplicationContextProvider>
      <TransactionContextProvider>
        <TokensContextProvider>
          <BalancesContextProvider>
            <AllowancesContextProvider>{children}</AllowancesContextProvider>
          </BalancesContextProvider>
        </TokensContextProvider>
      </TransactionContextProvider>
    </ApplicationContextProvider>
  )
}

function Updaters() {
  return (
    <>
      <ApplicationContextUpdater />
      <TransactionContextUpdater />
    </>
  )
}

ReactDOM.render(
  <ThemeProvider>
    <>
      <GlobalStyle />
      <Web3Provider connectors={connectors} libraryName="ethers.js">
        <ContextProviders>
          <Updaters />
          <App />
        </ContextProviders>
      </Web3Provider>
    </>
  </ThemeProvider>,
  document.getElementById('root')
)
