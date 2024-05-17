import React from "react";
import "./Header.css"
import logo from "../../assets/Quick_Foods_Logo.png"


function Header() {
    return (
        <>
            <div className="main">
                <div className="content">
                    <div className="logo-sec">
                        <img src={logo} alt="" />
                    </div>
                    <div className="menu-sec">
                        <ul className="menues">
                            <li className="menu1">Home</li>
                            <li className="menu2">About Us</li>
                            <li className="menu3">Contact Us</li>
                            <li className="menu4">Services</li>
                            <li className="menu5">Search</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header