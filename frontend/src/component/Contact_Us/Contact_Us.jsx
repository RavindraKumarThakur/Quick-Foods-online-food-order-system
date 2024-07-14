import React from "react";
import "./Contact_Us.css";

function Contact_Us(){
    return(
        <div className="contact-main">
        <div className="main-section">
            <div className="main-section-header">
                <div className="main-container">
                    <h2>Contact Us</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore magni a iste officia saepe quod, dolorem ab. Dignissimos labore molestiae fuga magni tempora temporibus autem sapiente inventore ab numquam asperiores, ex earum aliquam similique expedita ipsum. Vero dolor, culpa magni, at voluptate ratione incidunt eius odio dolores autem sapiente nesciunt sit aperiam aut mollitia rem soluta distinctio enim voluptates officiis corrupti praesentium vitae expedita cupiditate! Officia quos debitis voluptates nisi ex ratione rem sequi ipsam labore hic amet, natus tempore porro unde autem ab impedit quidem commodi modi, aspernatur molestiae doloribus repellat odio dolore.
                    </p>
                </div>
            </div>

            <div className="main-container">
                <div className="main-row">

                    <div className="contact-info-section">
                        <div className="contact-info-item">
                            <div className="conatct-info-icon">
                                <i className="fas fa-home"></i>
                            </div>

                            <div className="conatct-info-content">
                                <h4>Address</h4>
                                <p>234-house New Delhi,<br/> india </p>
                            </div>
                        </div>
                        <div className="contact-info-item">
                            <div className="contact-info-icon">
                                <i className="fas fa-phone"></i>
                            </div>
                            <div className="contact-info-content">
                                <h4>Phone</h4>
                                <p>9578****09</p>
                            </div>
                        </div>
                        <div className="contact-info-item">
                            <div className="contact-info-icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="contact-info-content">
                                <h4>Email</h4>
                                <p>kumarravindra54787@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form-section">
                        <form id="contact-form">

                            <h2>Send messages</h2>
                            <div className="input-container">
                                <input type="text" required="true" name=""/>
                                <span>Full Name</span>
                            </div>

                            <div className="input-container">
                                <input type="email" required="true" name=""/>
                                <span>Email</span>
                            </div>

                            <div className="input-container">
                                <textarea required="true"></textarea>
                                <span>Type your message...</span>
                            </div>

                            <div className="input-container">
                                <input type="submit" value="send" name=""/>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Contact_Us