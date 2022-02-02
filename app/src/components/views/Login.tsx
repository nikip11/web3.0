import { useCallback, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { connector } from 'config/web3'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const { activate, active, deactivate, account, error, chainId } = useWeb3React()
  const navigate = useNavigate()

  const connect = useCallback(() => {
    activate(connector)
    localStorage.setItem('previouslyConnected', 'true')
  }, [activate])

  const disconnect = () => {
    deactivate()
    localStorage.removeItem('previouslyConnected')
    localStorage.removeItem('user')
    navigate('/')
  }

  useEffect(() => {
    if (localStorage.getItem('previouslyConnected') === 'true') {
      connect()
      if (account && chainId) {
        localStorage.setItem('user', JSON.stringify({ account, chainId }))
      }
    }
  }, [connect, account, chainId])

  if (error) {
    return <p>{error}</p>
  }

  return (
    <div>
      {active ? (
        <>
          <Button onClick={disconnect} variant="outlined" size="small">
            Close Wallet
          </Button>
          {/* <p>
            You are connect to {chainId} network. <br />
            Your account is {account}
          </p> */}
        </>
      ) : (
        <Button onClick={connect} variant="outlined" size="small">
          Connect wallet
        </Button>
      )}
    </div>
  )
}
