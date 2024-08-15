import LoginPic from "../../assets/Login.png"
import { Navigate, useNavigate } from "react-router-dom"
import "./sign-up.css"
import { useState } from "react"
const Login = () => {
  const navigate = useNavigate()

  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

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
          <div className="text3">Sign up</div>
          <div className="text4">Create an account</div>
          <div className="google"><div className="flat-color-icons--google"></div>Sign in with google</div>

          <div className="or"><hr/>or<hr/></div>

          <div className="form">
            <p className="text5">Fullname</p>
            <input type="text" id="fullname" name="fullname" onChange={
              (e)=> {setFullName(e.target.value)
              console.log(fullname);}

            } className="details" placeholder="Name" />
          </div>
          <div className="form">
            <p className="text5">Email</p>
            <input type="text" id="fullname" className="details" onChange ={(e)=> {setEmail(e.target.value)
               console.log(fullname);}} placeholder="jeffdan@gmail.com" />
          </div>
          <div className="form">
            <p className="text5">Password</p>
            <input type="password" id="fullname"className="details" placeholder="Password" />
          </div>
          <div className="form">
            <p className="text5">Confirm Password</p>
            <input type="text" id="fullname" className="details" placeholder="jeffdan@gmail.com" />
          </div> 
          <button type="submit" id="continue" className="sign">Continue</button>
          <div className="login">Have an account? <a onClick={()=> navigate("/Buyven")}>Login</a></div>
        </div>
      </div>
    </>
  )
}
export default Login;