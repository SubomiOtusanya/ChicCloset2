import './login.css';
import LoginPic from '../assets/Login.png';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Logo from '../assets/LOGO.png';
import SignInSignOut from '../pages/signInsignOut';

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    const isValidateUsername = validateUsername();
    const isValidPassword = validatePassword();

    return isValidPassword && isValidateUsername;
  }

  function LoginApi() {
    const details = {
      username: username,
      password: password,
    };
    if (validateForm()) {
      // let details = valueRead(user)
      fetch('http://127.0.0.1:8000/auth/', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(details),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          // navigate("/producthomepage")
          console.log(data);

          if (data.message === 'Logged In Successfully') {
            navigate('/producthomepage');
          } else {
            alert('wrong email or password');
          }
        })
        .catch((error) => console.error('error:', error));
    } else {
      // toast.error("wrong")
      alert('Email or Password is incorrect');
    }
  }
  const validateUsername = () => {
    if (username === '') {
      console.log('write a username');
      return false;
    } else {
      // console.log("valid")
      return true;
    }
  };

  const validatePassword = () => {
    if (password.length < 8) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      <div className="containers">
        <SignInSignOut />
        <div className="contents">
          <img src={Logo} alt="chiccloset logo" className="imaging" />
          <div className="tmsg3">Login</div>
          <div className="tmsg4">Welcome back!</div>
          <div className="googles">
            <div className="flat-color-icons--google"></div>Sign in with google
          </div>

          <div className="orline">
            <hr />
            or
            <hr />
          </div>

          <div className="forming">
            <p className="tmsg5">Username</p>
            <input
              type="text"
              id="fullnames"
              placeholder="jeffdan@gmail.com"
              onChange={(e) => {
                setUsername(e.target.value);
                validateUsername();
              }}
            />
          </div>

          <div className="forming">
            <p className="tmsg5">Password</p>
            <input
              type="password"
              id="fullnames"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
                validatePassword();
              }}
            />
          </div>
          <button type="submit" id="continues" onClick={() => LoginApi()}>
            Login
          </button>
          <div className="logins">
            Don't have an account?{' '}
            <a onClick={() => navigate('/buyer')}>Sign up</a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
