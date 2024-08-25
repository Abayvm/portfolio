import React from "react";
import "./footer.css"

function Footer(){
    const currentYear = new Date().getFullYear();
    return(
        <>
            <div className="creds">
                <p className="copyright">copyright @{currentYear}</p>
            </div>
        </>
    )
}

export default Footer;