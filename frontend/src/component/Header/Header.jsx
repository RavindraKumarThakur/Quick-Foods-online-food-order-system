import React from "react";
import "./Header.css"
import logo from "../../assets/Quick_Foods_Logo.png"
import { Link ,NavLink } from "react-router-dom";


function Header() {
    return (
        <header width="100%" bg-color="black" height="10vh">
            <nav>
                <div>
                <Link to="/" className = "logo">
                        <img
                            src={logo}
                            alt="Logo"
                        />
                    </Link>
                    <div
                        id="mobile-menu-2"
                    >
                        <ul>
                            <li>
                                <NavLink
                                to="/"
                                style={({isActive}) => (isActive? {color: "orangered"}: {color:"#3b3b3b"})}
                                className= "menues"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/About_Us"
                                style={({isActive}) => (isActive? {color: "orangered"}: {color:"#3b3b3b"})}
                                className= "menues"
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/Contact_Us"
                                style={({isActive}) => (isActive? {color: "orangered"}: {color:"#3b3b3b"})}
                                className= "menues"
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div >
                        <NavLink to="/login" className="loginBtn" style={({isActive}) => (isActive? {} : {})}>
                            Log In
                        </NavLink> 
                        <NavLink to="/signup" className="signupBtn" style={({isActive}) => (isActive? {} : {})}>
                            Sign Up
                        </NavLink> 
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header