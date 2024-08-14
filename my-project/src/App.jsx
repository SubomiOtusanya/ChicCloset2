import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './component/Login.jsx'
import Home from './component/Home/Home.jsx'
import Sldier from './component/Home/Sldier.jsx'
import Categories from './component/Home/Categories.jsx'
// import SignUp from './component/SignUp.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    <Sldier />
    <Categories />
    {/* <SignUp /> */}
    </>
  )
}

export default App
