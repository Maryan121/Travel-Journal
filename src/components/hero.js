import React from "react";
import heroImage from "../hero-image.jpg"
import "../App.css"

 function Hero(){
    return(
        <div className="hero"> 
            <img src={heroImage} alt="heroImage" className="heroImg"/>
            <h1 className="heroTitle">my travel journal</h1>
        </div>
    )
}

export default Hero;