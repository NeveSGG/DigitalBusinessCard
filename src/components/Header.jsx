import React from "react"
import "./Header.css"
import photoPATH from "../images/photo.png"

export default function Header() {
    return (
        <div className="header">
            <img className="header--photo" src={photoPATH} alt="Laura Smith"></img>
        </div>
    )
}