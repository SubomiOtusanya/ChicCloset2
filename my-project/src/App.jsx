import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './component/Login.jsx'
import Home from './component/Home/Home.jsx'
import Sldier from './component/Home/Sldier.jsx'
import Categories from './component/Home/Categories.jsx'
import PopularProduct from './component/PopularProduct.jsx'
import Banner from "./component/Banner.jsx"
import Sidebar from './component/Product/Sidebar.jsx'
// import SignUp from './component/SignUp.jsx'
import ProductHomePage from './component/Product/ProductHomePage.jsx'
import Footer from './component/Home/Footer.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Home/> */}
    {/* <Sldier /> */}
    {/* <Categories /> */}
    {/* <SignUp />  */}
    {/* <PopularProduct /> */}
    {/* <Banner />  */}
     {/* <ProductHomePage/> */}
    <Footer/>
    </>
  )
} 

export default App
