import './App.css'
import Login from 'components/views/Login'
import { Web3ReactProvider } from '@web3-react/core'
import { getLibrary } from 'config/web3'


function App() {

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="">
        <Login />
      </div>
    </Web3ReactProvider>
  );
}

export default App
