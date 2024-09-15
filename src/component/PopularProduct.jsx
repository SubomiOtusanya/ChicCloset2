import { Navigate, useNavigate } from "react-router-dom"
import product from "../assets/products"

const PopularProduct = () => {

  const navigate = useNavigate()
  return (

    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", fontFamily: "Quattrocento", marginTop: "7rem", }}>
      <h1 style={{ marginBottom: "3rem", fontSize: "40px" }}>Popular Products</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
        {product.map((prod) => {
          return (
            <div key={prod.id} style={{
              // backgroundColor: "#1B2632",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              width: "15%",
              height: "16rem",
              position: "relative",
              padding: "1rem 1rem 3.5rem 1rem",
              marginTop: "0.5rem"
            }}>
              <div>
                <img src={prod.image} alt="" style={{ width: "100%", borderRadius: "10px" }} />
                <h2 style={{ fontFamily: "Quattrocento", fontSize: "16px", fontWeight: "700", marginTop: "0.7rem" }}>{prod.name}</h2>

                <p style={{ fontFamily: "Quattrocento", color: "grey", fontSize: "13px", marginTop: "0.5rem" }}>{prod.category}</p>

                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.7rem" }}>
                  <p style={{ fontSize: "13px" }}>{prod.size}</p>
                  <p style={{ color: "#90EE90" }}>${prod.price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>




  )
}
export default PopularProduct;