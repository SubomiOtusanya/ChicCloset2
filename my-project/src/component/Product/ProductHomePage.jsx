import { react } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Sidebar from './Sidebar.jsx';
import "./ProductHomePage.css"
import NewItem from '../NewItem.jsx';
import Cart from '../cart.jsx';


function ProductHomePage() {

  return (
    <>
      <div className="Home-container" style={{ height: "100vh" }}>
        <div style={{ width: "20%" }}>
          <Sidebar />
        </div>
        <div style={{ width: "80%"}}>
          <Navbar />
          <NewItem />
          <Cart />
        </div>
      </div>
    </>

  )
}

export default ProductHomePage
