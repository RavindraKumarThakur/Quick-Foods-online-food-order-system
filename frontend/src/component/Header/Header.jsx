import React, { useState } from "react";
import "./Header.css"
import logo from "../../assets/Quick_Foods_Logo.png";
import {ReactComponent as Menu} from "../../assets/hamburger.svg";
import { Link ,NavLink } from "react-router-dom";


function Header() {
    const [navbar,setNavbar] = useState(false);
    return (
        <header>
            <nav>
                <div>
                    <Link to="/" className = "logo">
                        <img
                            src={logo}
                            alt="Logo"
                        />
                    </Link>
                    <div className='hamburger' onClick={() => {
                        setNavbar(!navbar)
                        console.log("clicked",navbar)}}>
                        <Menu />
                    </div>
                    <div
                        className={navbar? "open mobile-menu-2" : "mobile-menu-2"}
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
                    <div className={navbar? "open authenticationBtn" : "authenticationBtn"}>
                        <NavLink to="/Login" className="loginBtn" style={({isActive}) => (isActive? {} : {})}>
                            Log in
                        </NavLink> 
                        <NavLink to="/Signup" className="signupBtn" style={({isActive}) => (isActive? {} : {})}>
                            Sign up
                        </NavLink> 
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header