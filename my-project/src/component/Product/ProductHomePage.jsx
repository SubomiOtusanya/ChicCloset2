import { react } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Sidebar from './Sidebar.jsx';
import "./ProductHomePage.css"

// import SignUp from './component/SignUp.jsx'

function ProductHomePage() {

  return(
    <>
    <div className="Home-container" st>
      <div style={{width:"20%"}}>
        <Sidebar/>
        </div>
        <div style={{width:"80%"}}>
        <Navbar/>
        </div>
    </div>
     </>

  )
}

export default ProductHomePage
