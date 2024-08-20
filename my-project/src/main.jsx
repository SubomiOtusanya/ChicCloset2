import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from "./component/Login.jsx";
import Buyven	 from './component/signup/Buyven.jsx';
import BuyerSignUp from './component/signup/BuyerSignUp.jsx';
import VendorSignUp from './component/signup/VendorSignUp.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },

  {
    path: "/Login",
    element: <Login/>
  },

  {
    path :"/Buyven",
    element:<Buyven />
  },
  {
    path :"/buyer",
    element:<BuyerSignUp/>
  },
  {
    path :"/vendor",
    element:<VendorSignUp/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  < RouterProvider router ={router}/>
)
