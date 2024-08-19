import "../component/login.css"
import LoginPic from "../assets/Login.png"
import { Navigate, useNavigate } from "react-router-dom"
import Logo from "../assets/LOGO.png"

const Login = () => {
  const navigate = useNavigate()

  return (
    <>
    <div className="containers">
        <div className="imgs">
          <p className="texting">Welcome to ChicCloset</p>
          <p className="texting1">Discover a world of fashion tailored just for you</p>
          <img src={LoginPic} className="image1" />
        </div>
        <div className="contents">
            <img src={Logo} alt="chiccloset logo" className="imaging"/>
          <div className="tmsg3">Login</div>
          <div className="tmsg4">Welcome back!</div>
          <div className="googles"><div className="flat-color-icons--google"></div>Sign in with google</div>

          <div className="orline"><hr/>or<hr/></div>

          <div className="forming">
            <p className="tmsg5">Username</p>
            <input type="text" id="fullnames" placeholder="jeffdan@gmail.com" />
          </div>
          <div className="forming">
            <p className="tmsg5">Password</p>
            <input type="password" id="fullnames" placeholder="Password" />
          </div>
          <button type="submit" id="continues">Login</button>
          <div className="logins">Don't have an account? <a onClick={()=> navigate("/Buyven")}>Sign up</a></div>
        </div>
      </div>
    </>
  )
}
export default Login;