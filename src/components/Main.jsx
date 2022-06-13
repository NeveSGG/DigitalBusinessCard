import React from "react"
import "./Main.css"
import emailIcon from "../images/emailIcon.png"
import linkedin from "../images/linkedinIcon.png"

export default function Main() {
    return (
        <div className="Main">

            <h1 className="name">Laura Smith</h1>

            <p className="profession">Frontend Developer</p>

            <p className="website"><a href="#">laurasmith.website</a></p>

            <div className="buttons">
                <button className="buttons-left">
                    <img src={emailIcon} className="buttons-left--icon"></img> Email
                </button>
                <button className="buttons-right">
                    <img src={linkedin} className="buttons-right--icon"></img> LinkedIn
                </button>
            </div>

            <div className="info">
                <div className="about">
                    <h1 className="about-title">About</h1>
                    <p className="about-text">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                </div>

                <div className="interests">
                    <h1 className="interests-title">Interests</h1>
                    <p className="interests-text">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </div>
            </div>

            
        </div>
    )
}