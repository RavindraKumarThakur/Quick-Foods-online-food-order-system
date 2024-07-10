import React from 'react'
import'./Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
               <img src={assets.logo} alt="" />
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
                <li>contact@foodaur.com</li>
               </ul>
            </div>
        </div>
           <hr/>
           <p className="footer-copyright">Copyright 2024 © Foodaur.com - All Rights are Reserved. </p>
    </div>
  )
}

export default Footer
