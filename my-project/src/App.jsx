import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './component/Login.jsx'
import Home from './component/Home/Home.jsx'
import Sldier from './component/Home/Sldier.jsx'
import Categories from './component/Home/Categories.jsx'
import Navbar from './component/Product/Navbar.jsx'
import PopularProduct from './component/PopularProduct.jsx'
import Sidebar from './component/Product/Sidebar.jsx'
// import SignUp from './component/SignUp.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Home/>
    <Sldier />
    <Categories />
    {/* <SignUp /> 
    <PopularProduct /> */}
    {/* <Navbar name="David"/> */}
    <Sidebar/>
    </>
  )
}

export default App
