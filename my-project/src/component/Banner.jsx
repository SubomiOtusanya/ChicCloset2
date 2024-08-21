import { Navigate, useNavigate } from "react-router-dom"
import banner from "../assets/Banner.png"
import pink from "../assets/pink.png"
import sale from "../assets/Sale.png"
import "./Banner.css"


const Banner = () => {
  const navigate = useNavigate()
  return (
    <div style={{ paddingBottom:"1rem"}}>
      <div className="banner-container">
        <div className="banner-div1">
        <img src={sale} className="banner-image" alt=""  ></img>
          <div>
            <div className="arrow-container">
              <div className="arrow-line"></div>
              <div className="arrow-left"></div>
            </div>
          </div>
        </div>
        <div className="banner-div2">
          <img src={banner}alt="" style={{ width: "100%", height: "500px" }}></img>
        </div>
        <div className="banner-div3">
          <div className="banner-text">
            <p style={{
              fontSize: "48px",
              fontFamily: "play",
              color:"#FFFF",
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
               color:"#FFFF",
            }}>
              New Arrivals
            </p>

            <p 
            style={{
               fontSize :"48px",
               fontFamily: "play",
            }}>
              New Arrivals
            </p>

            <p 
            style={{
               fontSize :"48px",
               fontFamily: "play",
               color:"#FFFF",
            }}>
              New Arrivals
            </p>

            <p 
            style={{
               fontSize :"48px",
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