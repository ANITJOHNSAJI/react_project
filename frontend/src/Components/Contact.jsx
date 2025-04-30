import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "./css/Contact.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Contact() {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [messege, setMessege] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://127.0.0.1:8000/api/contacts/", { name, email, message:messege }).then(() => {
            setName("");
            setEmail("");
            setMessege("");
            navigate("/");
        }).catch(error => console.log(error));
    }

    return (<>
            <div>
            <Nav />
           
            <form action="" onSubmit={handleSubmit} className="contact-form">
            <h1 className="contact-h1">Contact</h1>
            name
            <input type="text" name= "" value={name} onChange={(e) => setName(e.target.value)} id="" className="name-Contact"/>
            email
            <input type="email"  name= "" value={email} onChange={(e) => setEmail(e.target.value)} id="" className="email-Contact"/>
            messege
            <input type="text" name= "" value={messege} onChange={(e) => setMessege(e.target.value)} id="" className="message-Contact"/>
            <button className="submit-contact">submit</button>
            </form>
        </div>
        <Footer/>
        </>
    );
}