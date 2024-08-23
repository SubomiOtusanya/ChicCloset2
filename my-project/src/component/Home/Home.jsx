import "./Home.css"
import img from "../../assets/Frame 4.png"
import { Navigate, useNavigate } from "react-router-dom"
const Home = () => {

  const navigate = useNavigate()
  return (
    
      <section className="mainsec">
        <section className="section1">
        <nav className="nav-bar" >
          <img src={img} alt="" class="image" />

          <div className="nav-links">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">shop</a>
            <a href="">Contact</a>
          </div>

          <div className="nav-search">
          <i class='bx bx-search'></i>
            <button onClick={()=>navigate('Login')} className="shop btn-shine">Shop now</button>
          </div>
        </nav>

        <div className="text-container">
          <div className="text-div">
            <h1 className="brand-name">ChicCloset</h1>
            <p className="discover">
              Discover the latest trends in fashion
            </p>
          </div>
          
          
        </div>
        <div className="shop-div">
            <button onClick={()=>navigate('Login')}  className="shop-btn">Shop now</button>
          </div>
          </section>
      </section>
      
    

  )
}
export default Home;