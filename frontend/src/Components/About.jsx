import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import about1 from "./images/about1.jpg"
import about2 from "./images/about2.jpg"
import "./css/About.css";

export default function Contact() {
    return (
        <>
        <div className="about-maindiv">
        <div className="about-div">
            <Nav/>
            <h1 className="about-h1">About</h1>
            <h3 className="about-h3">Our approach is very simple. We treat all the students equally. Everyone will get equal treatment and attention. Even if you are a fresher or an experienced candidate</h3>

        <div className="about-div1">
       
            <h2 className="about-h2">Who we are</h2>
            <img src={about1} alt="" />
            <p>Since our establishment in 2015, we have established ourselves as industry leaders by upholding high ethical standards, delivering top-notch training, and achieving impressive placement records. Our team of trainers boasts extensive real-world experience, ensuring that you receive in-depth knowledge and instruction in the latest technologies. We firmly believe that high-quality training coupled with real-world experience is crucial for students to become certified engineers. Our unwavering commitment is to prepare you to excel as a system engineer.

</p>
        </div>
<div className="about-div2">
    <h2 className="about-h2">What we do</h2>
    <img src={about2} alt="" />
    <p>Our aim is to give students a comprehensive understanding of our courses and their practical applications, which is why we offer free workshops. To ensure the highest quality training, we have established affiliations with reputable organizations in systems administration and development. Our training infrastructure is designed in accordance with the latest corporate sector requirements. If you are considering any of our courses, you may have many questions and concerns, but our experienced faculty is dedicated to providing you with in-depth knowledge and addressing any doubts you may have.</p>
 
</div>
        </div>
         <div className="about-div3"><Footer/></div>
         </div>
        </>
        
    );
}
