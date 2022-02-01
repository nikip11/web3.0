import './App.css'
// import Login from 'components/views/Login'
import { Web3ReactProvider } from '@web3-react/core'
import { getLibrary } from 'config/web3'
import Layout from 'components/layout/Layout'

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      {/* <Login /> */}
      <Layout />
    </Web3ReactProvider>
  )
}

export default App
