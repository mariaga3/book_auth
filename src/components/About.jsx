import HeroSlider from "hero-slider/dist/HeroSlider"; 
import { Slide } from "hero-slider";
import React from "react";
import { useState, useEffect } from "react";
import book from '../assets/book1.jpg';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { slideData } from "./Slider";
import "../components/About.css";
import j from '../assets/job.jpg';
import i from '../assets/in.png'
import inst from '../assets/insta.png'
import twitter from '../assets/twi.png'
import whatsp from '../assets/what.png'
const AboutUs = () => {
  

  

  return (
   
   <div className="row">
    <div className="imgwrapper">
    <img src= {j} alt="" />
    </div>
  <div className="contents">
  <div className="contentwrapper">
  <h2>About The Author</h2>
  <p>Job Zirikana What begins as simple amusement for the nobility takes a perilous turn
     when Luzia garners the notice of Antonio Pérez, the disgraced secretary to Spain’s king. Still reeling from  the 
     defeat of his armada, the king is desperate for any advantage in the war against England’s heretic queen―and Pérez will stop at nothing to regain the king’s favor.

</p>
    </div>
<div className="socio">
<img src= {inst} alt="" className="icons"/>
<img src= {twitter} alt="" className="icons"/>
<img src= {whatsp} alt="" className="icons"/>
<img src= {i} alt="" className="icons"/>
</div>
  </div>
  
    
   </div>
  
  )
};

export default AboutUs;
