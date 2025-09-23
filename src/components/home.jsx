

import React from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function handleConnectme() {
    navigate("/contact");
  }

  const onButtonClick = () => {
    const pdfUrl = "Shashwat_Sharma_Tn.pdf"; // path to your PDF file
    const link = document.createElement("a"); // create a hidden <a> tag
    link.href = pdfUrl; // set the href to the PDF file
    link.download = "Shashwat_resume.pdf"; // set the filename when downloaded
    document.body.appendChild(link); // append <a> to the body
    link.click(); // programmatically click it to start download
    document.body.removeChild(link); // remove <a> from DOM after download
};

  return (
    <div className="hero">
       <img src={"Photo_shashwat.jpeg"} alt=" "/>
       <h5> <span>I'm Shashwat Sharma,</span>frontend and backend developer based in India</h5>
        <p>I am frontend and backend developer from Noida </p>
        <div className="hero-action">
            <div onClick={handleConnectme} className="hero-connect">Connect to me</div>
            <div onClick={onButtonClick} className="hero-resume">My Resume</div>
        </div>
        
    </div>
  );

}