import React from "react";
import "./css/Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="foot-column">
                    <h3>IT Solutions</h3>
                </div>
                <div className="foot-column">
                    <h4>SOLUTIONS</h4>
                    <ul>
                        <li>My Account</li>
                        <li>Track Your Order</li>
                        <li>Order History</li>
                        <li>Payment Methods</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="foot-column">
                    <h4>ABOUT US</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Return Policy</li>
                        <li>Site Map</li>
                    </ul>
                </div>
                <div className="foot-column">
                    <h4>CONTACT US</h4>
                    <ul>
                        <li>Ettumanoor, Kottayam, Kerala</li>
                        <li>+91-86065 70657</li>
                        <li>Mon - Sat / 9:00AM - 6:00PM</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 IT Solutions. All rights reserved.</p>
            </div>
        </footer>
    );
}