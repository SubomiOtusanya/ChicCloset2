import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './component/Login.jsx'
import Home from "./component/Home.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    {/* <Login/> */}
    </>
  )
}

export default App
