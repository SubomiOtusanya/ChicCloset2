import React from "react";
import "./categories.css"
import man from "../../assets/man.png"
import wave from  "../../assets/wave.png"

const Categories = () => {
  return (
    <div style={{margin:"1rem", display:"flex", flexDirection:"column", alignItems:"center"}}>
      <h1 className="categories">
          Categories
        </h1>
      <div className="cart" style={{display:"grid", gridTemplateColumns:"repeat(2, 500px)", columnGap:"3rem", margin:"0", justifyContent:"center"}}>
        
        <div className="box">
        {/* <img src={wave} alt="" class="image" /> */}
        {/* <img src={man} alt="" class="image" /> */}
        </div>
        <div className="box">

        </div>
        <div className="box">

        </div>
        <div className="box">

        </div>
      </div>
    </div>
  )
}

export default Categories;