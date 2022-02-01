import web3 from 'web3'
import { InjectedConnector } from '@web3-react/injected-connector'

const ETHEREUM_NETWORK_ID: number = 1

export const connector = new InjectedConnector({
    supportedChainIds: [ETHEREUM_NETWORK_ID]
})

export const getLibrary = (provider: any) => { new web3(provider)}
