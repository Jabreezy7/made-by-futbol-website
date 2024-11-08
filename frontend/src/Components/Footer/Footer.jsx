import React from 'react'
import './Footer.css'

import instagram_logo from '../Assets/Images/Icons/instagram-brands-solid.svg'
import tiktok_logo from '../Assets/Images/Icons/tiktok-brands-solid.svg'

export const Footer = () => {
    return (
        <div className="footer">

            <div className="newsletter">
                <h1>NEWSLETTER</h1>
                <p>Subscribe to receive updates, access to exclusive
                    deals, and more.
                </p>
                <input type="email" placeholder="Your Email" />
                <button>SUBSCRIBE</button>
                <div className="social-media">
                <a href="https://www.instagram.com/mbfkits/" target="_blank" ><img src={instagram_logo} alt="" /></a>
                <a href="https://www.tiktok.com/@mbfkits" target="_blank" ><img src={tiktok_logo} alt="" /></a>
                </div>
            </div>

            <div className="about-us">
                <h1>ABOUT US</h1>
                <p>Madebyfutbol is built on our passion of futbol, 
                    We know that football isn't only a game but 
                    a lifestyle and with our soccer graphic tees 
                    and apparel you can show that!</p>
            </div>

            <div className="quick-links">
                <h1>QUICK LINKS</h1>
                <ul>
                    <li>
                        <a href="">Search</a>
                    </li>
                    <li>
                        <a href="">Contact Us</a>
                    </li>
                    <li>
                        <a href="">Shipping Information</a>
                    </li>
                    <li>
                        <a href="">Refund Policy</a>
                    </li>
                    <li>
                        <a href="">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="">Terms of Service</a>
                    </li>
                    <li>
                        <a href="">FAQ</a>
                    </li>
                </ul>
            </div>

            
        </div>
    )
}

export default Footer
