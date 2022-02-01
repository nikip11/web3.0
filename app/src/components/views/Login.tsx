import { useCallback, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { connector } from 'config/web3'
import { Button } from '@mui/material'

export default function Login() {
  const {
    activate,
    active,
    deactivate,
    account,
    error,
    chainId } = useWeb3React()

  const connect = useCallback(() => {
    console.log('connect wallet')
    activate(connector)
    localStorage.setItem('previouslyConnected', 'true')
  }, [activate])

  const disconnect = () => {
    console.log('disconnect wallet')
    deactivate()
    localStorage.removeItem('previouslyConnected')
  }

  useEffect(() => {
    if (localStorage.getItem('previouslyConnected') === 'true') {
      connect()
    }
  }, [connect])

  if (error) {
    return <p>{error}</p>
  }

  return (
    <div>
      {
        active
          ?
          <>
            <Button onClick={disconnect} variant="text" >Close Wallet</Button>
            <p>
              You are connect to {chainId} network. <br />
              Your account is {account}
            </p>
          </>
          : <Button onClick={connect} variant="text">Connect wallet</Button>
      }
    </div>
  )
}

