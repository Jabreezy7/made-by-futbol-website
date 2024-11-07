import React from 'react'
import './Footer.css'

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
