import React from "react"
import "./Footer.css"
import pic1 from "../images/Facebook-Icon.png"
import pic2 from "../images/GitHub-Icon.png"
import pic3 from "../images/Instagram-Icon.png"
import pic4 from "../images/Twitter-Icon.png"

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-icons">
                <a href="#">
                    <img src={pic1} className="item"></img>
                </a>
                <a href="#">
                    <img src={pic2} className="item"></img>
                </a>
                <a href="#">
                    <img src={pic3} className="item"></img>
                </a>
                <a href="#">
                    <img src={pic4} className="item"></img>
                </a>
            </div>
        </div>
    )
}