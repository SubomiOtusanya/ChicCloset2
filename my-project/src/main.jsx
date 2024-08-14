import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from "./component/Login.jsx";
import Buyven	 from './component/Buyven.jsx';
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
    element:<Buyven/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  < RouterProvider router ={router}/>
)
