import Logo from "../../assets/Frame 4.png"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import "./Buyven.css"

function Buyven(){
    const navigate = useNavigate()
    const [user, setUser] = useState("");
    function handleContinue(){
        if(user === "buyer"){
            navigate("/buyer")
            console.log("clicked buyer");
        }else if(user === "vendor"){
            navigate("/vendor")
            console.log("clicked vendor");
        }else{
            alert("Select a user")
        }
            // console.log(user);
    }


    return(
        <div className="mainbg">
            <div className="bg">
                <img src={Logo} className="pic"/>
                <p className="txt1">What kind of User are you?</p>
                <p className="txt2">Pick which one best describes you</p>
                <div className="option">
                    <div className="label">
                        <label><input type="radio" name="radio" id="Buyer" onClick={()=> setUser("buyer")}/> Buyer</label>
                    </div>
                    <div className="label">
                        <label><input type="radio" name="radio" id="Vendor" onClick={()=> setUser("vendor")}/> Vendor</label>
                    </div>
                <button type="button" className="button" onClick={()=> handleContinue()} >Continue</button>
                </div>
            </div>
        </div>
    )
}

export default Buyven