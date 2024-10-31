import { useState } from 'react'
import './App.css'
import './index.css'
import ContentsArea from './components/ContentsArea'
import Auth from './components/Auth'


function App() {
  const [allowed, setAllowed] = useState(false)
  return (
    <>
    {!allowed
    ? <Auth
    setAllowed={setAllowed}
    />
    : <></>}
    {allowed
    ?<ContentsArea/>
    : <></>}
    </>
  )
}

export default App
