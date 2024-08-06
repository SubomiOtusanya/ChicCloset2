import "../component/login.css"
const Login = () => {
  return (
    <>
      <div className="container">
        <div className="img">
          <div className="text1">Welcome to ChicCloset</div>
          <div className="text2">Discover a world of fashion tailored just for you</div>
          <img src="/images/Login.png" className="image1" />
        </div>
        <div className="content">
          <div className="logo">
            <div className="normal">C</div>
            <div className="updown">C</div>
          </div>
          <div className="text3">Login</div>
          <div className="text4">Welcome back!</div>
          <div className="google"><div className="flat-color-icons--google"></div>Sign in with google</div>

          <div className="or">or</div>

          <div className="form">
            <p className="text5">E-mail</p>
            <input type="email" id="fullname" placeholder="jeffdan@gmail.com" />
          </div>
          <div className="form">
            <p className="text5">Password</p>
            <input type="password" id="fullname" placeholder="Password" />
          </div>
          <button type="submit" id="continue">Login</button>
          <div className="login">Don't have an account? <a href="sign-up.html">Sign up</a></div>
        </div>
      </div>
    </>
  )
}
export default Login;