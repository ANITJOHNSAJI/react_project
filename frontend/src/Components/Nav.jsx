import React from "react";
import "./css/Nav.css";

export default function Nav() {
    return (
        <nav className="navbar">
            <a href="#" className="logo">IT Solutions</a>
            <div className="nav-links">
                <a href="/">Home</a>
                <a href="courselist"> Courses</a>
                <a href="about">About</a>
                <a href="contact">Contact</a>
            </div>
        </nav>
    );
}
