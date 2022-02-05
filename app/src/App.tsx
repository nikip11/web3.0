import './App.css'
import { Web3ReactProvider } from '@web3-react/core'
import { getLibrary } from 'config/web3'
import { BrowserRouter } from 'react-router-dom'
import { Suspense } from 'react'
import Routes from 'routes/Routes'
import { ToastContextProvider } from './contexts/toastContext'

const App = function () {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ToastContextProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </Suspense>
      </ToastContextProvider>
    </Web3ReactProvider>
  )
}

export default App
