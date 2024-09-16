import { Navigate, useNavigate } from "react-router-dom"
import banner from "../assets/Banner.png"
import pink from "../assets/pink.png"
import sale from "../assets/Sale.png"
import line from "../assets/Line.png"
import "./Banner.css"


const Banner = () => {
  const navigate = useNavigate()
  return (
    <div style={{ paddingBottom: "1rem" }}>
      <div className="banner-container">
        <div className="banner-div1">
          <img src={sale} className="banner-image" alt=""  ></img>

          <div className="banner-content">
            <h2>50%</h2>
            <img src={line} alt="" style={{width: "300px" }}></img>
            <h3>OFF</h3>
            <p className="first-text">your first 2 Purchases</p>
            <p className="second-text">Available for the first 10 days of account creation</p>
            <button className="banner-shop"  onClick={()=>navigate('Login')}>Shop Now!!</button>
          </div>
        </div>


        <div className="banner-div2">
          <img src={banner} alt="" style={{ width: "100%", height: "500px" }}></img>
        </div>

        <div className="banner-div3">
          <div className="banner-text">
            <p style={{
              fontSize: "48px",
              fontFamily: "play",
              color: "#FFFF",
            }}>
              New Arrivals
            </p>

            <p style={{
              fontSize: "48px",
              fontFamily: "play",

            }}>
              New Arrivals
            </p>

            <p style={{
              fontSize: "48px",
              fontFamily: "play",
              color: "#FFFF",
            }}>
              New Arrivals
            </p>

            <p
              style={{
                fontSize: "48px",
                fontFamily: "play",
              }}>
              New Arrivals
            </p>

            <p
              style={{
                fontSize: "48px",
                fontFamily: "play",
                color: "#FFFF",
              }}>
              New Arrivals
            </p>

            <p
              style={{
                fontSize: "48px",
                fontFamily: "play",
              }}>
              New Arrivals
            </p>


          </div>
        </div>
      </div>
    </div>
  )
}
export default Banner;