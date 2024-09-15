import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Login from './component/Login.jsx';
import Home from './component/Home/Home.js';
import Sldier from './component/Home/Sldier.js';
import Categories from './component/Home/Categories.js';
import PopularProduct from './component/PopularProduct.jsx';
import Banner from './component/Banner.js';
import Sidebar from './component/Product/Sidebar.jsx';
// import SignUp from './component/SignUp.jsx'
import ProductHomePage from './component/Product/ProductHomePage.jsx';
import Footer from './component/Home/Footer.js';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Home/> */}
      {/* <Sldier /> */}
      {/* <Categories /> */}
      {/* <SignUp />  */}
      {/* <PopularProduct /> */}
      {/* <Banner />  */}
      {/* <ProductHomePage/> */}
      <Footer />
    </>
  );
}

export default App;
