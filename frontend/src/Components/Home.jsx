import React, { useState,useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import home from "./images/home.webp"

export default function Home() {
    return (
        <>
            <Nav />
            <h1>Welcome</h1>
            <div>
            <h1>The Best
            Learning Platform</h1>
            <h3>Our expert trainers can help you learn bleeding-edge technologies, so you can gain the experience you need to be successful.</h3>
             <img src={home} alt="" />
            </div>
            <div>
                <h2>Popular Courses</h2>
            </div>
            <Footer/>
        </>
    );
}