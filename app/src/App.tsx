import './App.css'
import { Web3ReactProvider } from '@web3-react/core'
import { getLibrary } from 'config/web3'
import { BrowserRouter } from 'react-router-dom'
import { Suspense } from 'react'
import Routes from 'routes/Routes'

const App = () => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Suspense>
    </Web3ReactProvider>
  )
}

export default App
