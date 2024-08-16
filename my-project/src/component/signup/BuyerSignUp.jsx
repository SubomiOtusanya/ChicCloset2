import LoginPic from "../../assets/Login.png"
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom"
import "./sign-up.css"
import { useState } from "react"
const SignUp = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const user = location.state.user


  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
// console.log("user",user);
  function checkEmail(mail) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(mail);
  }

  let param =useParams()

  console.log("param",param);

  const validateFullName = () => {
    if (fullname === "") {
      console.log("write a name");
      return false;
    }
    else {
      console.log("valid");

      return true
    }
  }
  const validateEmail = () => {
    if (email === "") {
      // setError(email, "Enter valid email");
      console.log("email false");
      return false;

    } else if (!checkEmail(email)) {
      // setError(email, "Please enter a valid email address");
      console.log("email false");
      return false;

    }
    else {
      // setSuccess(email);
      console.log("email true");
      return true;
    }
  }
  const validatePassword = () => {
    if (password.length < 8) {
      return false
    } else {
      return true
    }
  }
  const validateConfirmPassword = () => {
    if (password === confirm) {
      return true
    } else {
      return false
    }
  }
  function validateForm() {

    const isValidEmail = validateEmail();
    const isValidFullName = validateFullName();
    const isValidPassword = validatePassword();
    const isValidConfirmPassword = validateConfirmPassword();

    return isValidConfirmPassword && isValidEmail && isValidFullName && isValidPassword
  }

  



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

          <div className="or"><hr />or<hr /></div>

          <div className="form">
            <p className="text5">Fullname</p>
            <input type="text" id="fullname" name="fullname" onChange={
              (e) => {
                setFullName(e.target.value)
                validateFullName()
              }

            } className="details" placeholder="Name" />
          </div>
          <div className="form">
            <p className="text5">Email</p>
            <input type="text" id="email" className="details" onChange={(e) => {
              setEmail(e.target.value)
              validateEmail()
            }} placeholder="jeffdan@gmail.com" />
          </div>

          <div className="form">
            <p className="text5">Phone number</p>
            <input type="text" id="number" className="details"/>
          </div>

          <div className="form">
            <p className="text5">Address</p>
            <input type="text" id="address" className="details"/>
          </div>

          <div className="form">
            <p className="text5">Username</p>
            <input type="text" id="username" className="details" />
          </div>

          <div className="form">
            <p className="text5">Password</p>
            <div style={{position:"relative"}}>
            <input type={showPassword ? "text" : "password"} id="password" className="details" onChange={(e) => {
              setPassword(e.target.value)
              validatePassword()
            }} placeholder="Password" />
           <i
                className={`bx ${
                  showPassword ? "bxs-show": "bxs-low-vision" 
                } eye`}
                onClick={() => setShowPassword(prev => !prev)}
                style={{ cursor: "pointer" }}
              ></i>

            </div>
          </div>
          
          <div className="form">
            <p className="text5">Confirm Password</p>
            <div style={{position:"relative", }}>
            <input type={showConfirmPassword ? "text" : "password"} id="confPassword" className="details" onChange={(e) => {
              setConfirm(e.target.value)
              validateConfirmPassword()
            }} placeholder="Password" />

           <i
                className={`bx ${
                  showConfirmPassword ? "bxs-show": "bxs-low-vision" 
                } eye`}
                onClick={() => setShowConfirmPassword(prev => !prev)}
                style={{ cursor: "pointer" }}
              ></i>
            </div>
          </div>
          
          <button type="submit" id="continue" className="sign" onClick={() => {
            if (validateForm()) {
              let details = valueRead(user)
              // console.log(`SSSSSS ${JSON.stringify(details)}`)
              fetch('http://127.0.0.1:8000/signup/users/',{
                headers: {
                  "Content-Type": "application/json"
                },
                "method": "POST",
                body: JSON.stringify(details)
              })
              .then( res => {
                return res.json()
              })
              .then(  data => {
                console.log(data)
              })
            } else {
              alert("Email or Password is incorrect")
            }
          }}>Continue</button>
          <div className="login">Have an account? <a onClick={() => navigate("/Login")}>Login</a></div>
        </div>
      </div>
    </>
  )
}
export default SignUp;

const valueRead = (type) => {
  let fullname = document.querySelector('#fullname').value
  let firstname = fullname.split(' ')[0]
  let lastname = fullname.split(' ')[1]
  let email = document.querySelector('#email').value
  let password = document.querySelector('#password').value
  let confPassword = document.querySelector('#confPassword').value
  let number = document.querySelector('#number').value
  let address = document.querySelector('#address').value
  let username = document.querySelector('#username').value

  if (type === "buyer"){
    type = "customer"
  }


  let values = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password,
    phone_no: number,
    username: username,
    address: address,
    user_type: type
  }

  return values


}