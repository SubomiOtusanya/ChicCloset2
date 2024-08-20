
import LoginPic from "../assets/Login.png"


const SignInSignOut=({header})=>{
  
    return (
      <>
          <div className="img">
            <p className="text">Welcome to ChicCloset</p>
            <p className="text1">Discover a world of fashion tailored just for you</p>
            <img src={LoginPic} className="image1" />
          </div>
  
          
      </>
    )
  
}
export default SignInSignOut;