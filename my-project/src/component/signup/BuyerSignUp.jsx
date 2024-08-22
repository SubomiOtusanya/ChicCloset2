import { Navigate, useNavigate, useParams } from "react-router-dom"
import "./sign-up.css"
import { useState } from "react"
import SignInSignOut from "../../pages/signInsignOut"
import nigerianStates from "./State"
const SignUp = () => {
  const navigate = useNavigate()
  // const location = useLocation()
  // const user = location.state.user


  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  // State variables for managing form inputs and visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("")
  const [username, setUsername] = useState("")
  const [option, setOption] =useState("")
  // console.log("user",user);


  function checkEmail(mail) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(mail);
  }
  function checkNumber(number) {
    const re = /^[0-9]{1,12}$/;
    return re.test(number)
  }

  // let param =useParams()

  // console.log("param",param);

  // fullname validation

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

  // Address Validation
  const validateAddress = () => {
    if (address === "") {
      console.log("write an Address")
      return false;
    }
    else {
      console.log("valid");
      return true
    }
  }

  // number Validation
  const validateNumber = () => {
    if (number === "") {
      console.log("write an number")
      return false;
    }
    else if (!checkNumber(number)) {
      console.log("wrong");

      return false
    }
    else {
      console.log("valid")
      return true
    }
  }

  // username Validation

  const validateUsername = () => {
    if (username === "") {
      console.log("write a username")
      return false;
    }
    else {
      console.log("valid")
      return true
    }
  }

  // Email validation

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

  // Password Validation
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


  //State Validation

  const validateOption =() => {
    if (option === ""){
      console.log("pick an option")
      return false
    }else{
      return true
    }
  }

  // Form Validation

  function validateForm() {

    const isValidEmail = validateEmail();
    const isValidFullName = validateFullName();
    const isValidPassword = validatePassword();
    const isValidConfirmPassword = validateConfirmPassword();
    const isValidateNumber = validateNumber();
    const isValidateAddress = validateAddress();
    const isValidateUsername = validateUsername();
    const isValidateOption = validateOption();

    return isValidConfirmPassword && isValidEmail && isValidFullName && isValidPassword && isValidateNumber && isValidateAddress && isValidateUsername && isValidateOption;
  }





  return (
    <>
      <div className="container">
        <SignInSignOut />

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
            <input type="text" id="number" className="details" onChange={(e) => {
              setNumber(e.target.value)
              validateNumber()
            }} />
          </div>

          <div className="form">
            <p className="text5">Address</p>
            <input type="text" id="address" className="details" onChange={(e) => {
              setAddress(e.target.value)
              validateAddress()
            }} />
          </div>

          <div className="form">
            <p className="text5">Username</p>
            <input type="text" id="username" className="details" onChange={(e) => {
              setUsername(e.target.value)
              validateUsername()
            }} />
          </div>
          <div className="form">
            <select onChange={
                  (e) => {
                    setOption(e.target.value)
                    console.log(option);
                    
                    validateOption()
                  }
                 } >
              {nigerianStates.map(state => (
                <option key={state} value={state}  >
                  {state}
                </option>
              ))}
            </select>
          </div>

          <div className="form">
            <p className="text5">Password</p>
            <div style={{ position: "relative" }}>
              <input type={showPassword ? "text" : "password"} id="password" className="details" onChange={(e) => {
                setPassword(e.target.value)
                validatePassword()
              }} placeholder="Password" />
              <i
                className={`bx ${showPassword ? "bxs-show" : "bxs-low-vision"
                  } eye`}
                onClick={() => setShowPassword(prev => !prev)}
                style={{ cursor: "pointer" }}
              ></i>

            </div>
          </div>

          <div className="form">
            <p className="text5">Confirm Password</p>
            <div style={{ position: "relative", }}>
              <input type={showConfirmPassword ? "text" : "password"} id="confPassword" className="details" onChange={(e) => {
                setConfirm(e.target.value)
                validateConfirmPassword()
              }} placeholder="Password" />

              <i
                className={`bx ${showConfirmPassword ? "bxs-show" : "bxs-low-vision"
                  } eye`}
                onClick={() => setShowConfirmPassword(prev => !prev)}
                style={{ cursor: "pointer" }}
              ></i>
            </div>
          </div>

          <button type="submit" id="continue" className="sign" onClick={() => {
            let firstName = fullname.split(' ')[0]
            let lastName = fullname.split(' ')[1]
            console.log(validateForm());


            const details = {
              firstname: firstName,
              lastname: lastName,
              email: email,
              password: password,
              phone_no: number,
              username: username,
              address: address,
              state: option,
              
            }
            if (validateForm()) {

              // let details = valueRead(user)
              fetch('http://127.0.0.1:8000/signup/user/', {
                headers: {
                  "Content-Type": "application/json"
                },
                "method": "POST",
                body: JSON.stringify(details)
              })
                .then(res => {
                  console.log(res.username);
                  return res.json()
                  
                  
                })
                .then(data => {
                  console.log(data['username'][0]);
                  if(data.message === "User Created and Logged In Successfully"){
                    navigate("/Login")
                    // console.log(data)
                  }else{
                    alert("failed")
                  }
                  
                 
                })
                .catch(error => console.error('error:', error));


            }
            else {
             
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


