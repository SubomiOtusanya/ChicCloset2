import React from "react";
import "./categories.css"
import man from "../../assets/man.png"
import wave from  "../../assets/wave.png"
import splash from "../../assets/splash.png"
import girl from "../../assets/girl.png"
import Cap from "../../assets/Cap.png"
import pink from "../../assets/pink.png"
import book from "../../assets/book.png"
import Green from "../../assets/green.png"


const Categories = () => {
  return (
    <div style={{margin:"1rem", display:"flex", flexDirection:"column", alignItems:"center"}}>
      <h1 className="categories">
          Categories
        </h1>
      <div className="cart" style={{display:"grid", gridTemplateColumns:"repeat(2, 650px)", columnGap:"3rem", margin:"0", justifyContent:"center"}}>
        
        <div className="box">
          <img src={wave}  alt="" />
          <div className="overlay"></div>
          <img src={man} style={{width:"450px"}} className="man" alt ="" />
          <div className="info" style={{position:"absolute", left:"20px", bottom:"30px", maxWidth:"320px"}}>
            <h1 className="head-text">Men</h1>
            <p className="head-info">Discover the latest trends in men's fashion. From casual wear to formal attire, find everything you need to elevate your style</p>
            <div style={{width:"130px", height:"50px", backgroundColor:"#FFBE20", textAlign:"center", borderRadius:"50px", display:"flex", justifyContent:"center", alignItems:"center", marginTop:"1.5rem", fontFamily:"Quattrocento" , fontSize:"15px", fontWeight:"200", cursor:"pointer"}}>Shop Now</div>
          </div>
        </div>

        <div className="box1">
          <img src={splash}  alt="" />
          <img src={girl} style={{width:"250px",  height:"550px"}} className="man" alt ="" />
          <div className="info" style={{position:"absolute", left:"20px", bottom:"30px", maxWidth:"320px"}}>
            <h1 className="head-text2">Women</h1>
            <p className="head-info2">Explore our women's collection featuring chic and stylish clothing. From dresses to tops, stay fashionable with our curated picks.</p>
            <div style={{width:"130px", height:"50px", backgroundColor:"#FFBE20", textAlign:"center", borderRadius:"50px", display:"flex", justifyContent:"center", alignItems:"center", marginTop:"1.5rem", fontFamily:"Quattrocento" , fontSize:"15px", fontWeight:"200", cursor:"pointer"}}>Shop Now</div>
          </div>
        </div>

        <div className="box1" style={{backgroundColor:"#8A9281"}}>
          <img src={Green}  alt="" />
          <img src={Cap} style={{width:"370px"}} className="cap" alt ="" />
          <div className="info" style={{position:"absolute", left:"20px", bottom:"30px", maxWidth:"300px"}}>
            <h1 className="head-text">Accessories</h1>
            <p className="head-info">Complete your look with our range of accessories. Find the perfect bags, jewelry, and more to complement your outfit</p>
            <div style={{width:"130px", height:"50px", backgroundColor:"#FFBE20", textAlign:"center", borderRadius:"50px", display:"flex", justifyContent:"center", alignItems:"center", marginTop:"1.5rem", fontFamily:"Quattrocento" , fontSize:"15px", fontWeight:"200", cursor:"pointer"}}>Shop Now</div>
          </div>
        </div>

        <div className="box" style={{backgroundColor:"#F0AFC7"}}>
          <img src={pink}  alt="" />
          <img src={book} style={{width:"380px", height:'400px'}} className="book" alt ="" />
          <div className="info" style={{position:"absolute", left:"20px", bottom:"30px", maxWidth:"320px"}}>
            <h1 className="head-text2">New Arrivals</h1>
            <p className="head-info2">Stay ahead of the fashion curve with our new arrivals. Fresh styles and latest trends, all in one place.</p>
            <div style={{width:"130px", height:"50px", backgroundColor:"#FFBE20", textAlign:"center", borderRadius:"50px", display:"flex", justifyContent:"center", alignItems:"center", marginTop:"1.5rem", fontFamily:"Quattrocento" , fontSize:"15px", fontWeight:"200", cursor:"pointer"}}>Shop Now</div>
          </div>
        </div>

       
      </div>
    </div>
  )
}

export default Categories;