import "../component/login.css"
import LoginPic from "../assets/Login.png"
import { Navigate, useNavigate } from "react-router-dom"
import "./login.css"

const Login = () => {
  const navigate = useNavigate()

  return (
    <>
    <div className="container">
        <div className="img">
          <p className="text">Welcome to ChicCloset</p>
          <p className="text1">Discover a world of fashion tailored just for you</p>
          <img src={LoginPic} className="image1" />
        </div>
        <div className="content">
          <div className="logo">
            <div className="normal">C</div>
            <div className="updown">C</div>
          </div>
          <div className="text3">Login</div>
          <div className="text4">Welcome back!</div>
          <div className="googles"><div className="flat-color-icons--google"></div>Sign in with google</div>

          <div className="or"><hr/>or<hr/></div>

          <div className="form">
            <p className="text5">Username</p>
            <input type="text" id="fullnames" placeholder="jeffdan@gmail.com" />
          </div>
          <div className="form">
            <p className="text5">Password</p>
            <input type="password" id="fullnames" placeholder="Password" />
          </div>
          <button type="submit" id="continues">Login</button>
          <div className="login">Don't have an account? <a onClick={()=> navigate("/Buyven")}>Sign up</a></div>
        </div>
      </div>
    </>
  )
}
export default Login;