import React, { useEffect, useState } from "react";
import "./Header.css"
import logo from "../../assets/Quick_Foods_Logo.png";
import {ReactComponent as Menu} from "../../assets/hamburger.svg";
import { Link ,NavLink } from "react-router-dom";
import { checkAccessToken, handleLogOut } from "../../utils/utils";


function Header() {
    const [navbar,setNavbar] = useState(false);
    const [token,setToken] = useState(false);
    
    useEffect(()=>{
        const tokenData = checkAccessToken()
        if (tokenData) {
            setToken(true)
        }
        
    },[])

    // const location = useLocation()
    // if (location.state !== null) {
    //     setToken(location.state.login);
    // }
    const logOut = (e) => {
        const check = handleLogOut()
        setToken(false)
        if(check){
            alert("Logged Out successfully")
        }else{
            alert("Something went wrong")
        }
        
    }
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
                        className={navbar === true? "open mobile-menu-2" : "mobile-menu-2"}
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
                                to="/aboutus"
                                style={({isActive}) => (isActive? {color: "orangered"}: {color:"#3b3b3b"})}
                                className= "menues"
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/contactus"
                                style={({isActive}) => (isActive? {color: "orangered"}: {color:"#3b3b3b"})}
                                className= "menues"
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className={navbar === true? "open authenticationBtn" : "authenticationBtn"}>
                        {token === false?<div><NavLink to="/Login" className="loginBtn">
                            Log In
                        </NavLink> 
                        <NavLink to="/Signup" className="signupBtn">
                            Sign Up
                        </NavLink></div>: <><NavLink to="/" className="signupBtn" onClick={logOut}>
                            Logout
                        </NavLink></> }
                    </div>
                </div>
            </nav>
        </header>

            
        

    )
}

export default Header