import React from 'react'
import'./Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
               <img src={assets.logo} alt="" />
               <p>A Quick Foods is a platform that allows users to browse menus, select dishes, and place order for delivery or pickup from various restaurants or food establishments.It typically includes features like user registration, restaurant listings with menus and reviews, order placement and tracking, secure payment options, customer support, and mobile optimization. Admin tool manage menus, order, and analytics.The goal is to provide a seamless, convenient experience for customers to enjoy food from a variety of eateries.</p>
               <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="error" />
                <img src={assets.meta_icon} alt="error" />
                <img src={assets.linkedin_icon} alt="error" />
                <img src={assets.instagram_icon} alt="error" />
               </div>
            </div>
            <div className="footer-content-centre">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
               <h2>GET IN TOUCH</h2>
               <ul>
                <li>+91-2121-2121-2121</li>
                <li>contact@quickfoods.com</li>
               </ul>
            </div>
        </div>
           <hr/>
           <p className="footer-copyright">Copyright 2024 © QuickFoods.com - All Rights are Reserved. </p>
    </div>
  )
}

export default Footer
