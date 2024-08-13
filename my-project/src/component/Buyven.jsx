import Logo from "../assets/Frame 4.png"
import "./Buyven.css"
function Buyven(){
    return(
        <div className="mainbg">
            <div className="bg">
                <img src={Logo} className="pic"/>
                <p className="txt1">What kind of User are you?</p>
                <p className="txt2">Pick which one best describes you</p>
                <div className="label">
                    <label><input type="radio" name="radio" id="Buyer"/> Buyer</label>
                </div>
                <div className="label">
                    <label><input type="radio" name="radio" id="Vendor"/> Vendor</label>
                </div>
                <button type="button"></button>
            </div>
        </div>
    )
}

export default Buyven