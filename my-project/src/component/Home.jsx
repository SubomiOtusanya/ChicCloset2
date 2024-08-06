import "./Home.css"
import img from "../assets/Frame 4.png"
const Home = () => {
  return (
    <>
      <section className="section1">
        <nav className="nav-bar">
          <img src={img} alt="" class="image" />

          <div className="nav-links">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">shop</a>
            <a href="">Contact</a>
          </div>

          <div className="nav-search">
          <i class='bx bx-search'></i>
            <button class="shop">Shop now</button>
          </div>
        </nav>
        <div className="content">
          <div className="text">
            <h1 className="text1">ChicCloset</h1>
            <p className="text2">
              Discover the latest trends in fashion
            </p>
          </div>
          {/* <div className="shop-div">
            <button className="shop-btn">Shop now</button>
          </div> */}
        </div>
        <div className="shop-div">
            <button className="shop-btn">Shop now</button>
          </div>
      </section>
    </>

  )
}
export default Home;