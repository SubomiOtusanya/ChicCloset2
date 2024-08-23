import "./Footer.css"
function Footer(){
    return(
        <div className="Foot">
            <div className="mainin">
                <div className="Before">
                    <h2 className="h">Before you go, check out our links</h2>
                    <div className="CLJb">
                        <div className="Company">
                            <h4>Company</h4>
                            <p>About us</p>
                            <p>Support</p>
                        </div>
                        <div className="Company">
                            <h4>Legal</h4>
                            <p>Privact Policy</p>
                            <p>Return Policy</p>
                            <p>Community Rules</p>
                        </div>
                        <div className="Company">
                            <h4>Job Board</h4>
                            <p>Join the collective</p>
                        </div>
                    </div>
                </div>
                <div className="other">
                    <div className="Newsletter">
                        <h1>Newsletter</h1>
                        <input type="email" id="emailing" placeholder="Enter email"/>
                    </div>
                    <div className="socialing">
                    <a href="#">
                        <div className="social">
                            <div className="mdi--instagram"></div>
                        </div>
                    </a>
                    <a href="#">
                        <div className="social">
                            <div className="prime--twitter"></div>
                        </div>
                    </a>
                    <a href="#">
                        <div className="social">
                            <div className="mdi--linkedin"></div>
                        </div>
                    </a>
                    
                    </div>
                </div>
            </div>
            <p className="chic">ChicCloset</p>
        
        </div>
    )
}
export default Footer