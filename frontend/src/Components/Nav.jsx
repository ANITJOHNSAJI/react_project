import React from "react";
import "./css/Nav.css"; // Importing the CSS file

export default function Nav() {
    return (
        <nav className="navbar">
            <a href="#" className="logo">AJS Solutions</a>
            <div className="nav-links">
                <a href="/">Home</a>
                <a href="course">Our Courses</a>
                <a href="about">About</a>
                <a href="contact">Contact</a>
            </div>
        </nav>
    );
}
