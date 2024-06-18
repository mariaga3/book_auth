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
import b from '../assets/book11.png'
const Items = () => {
  

  

  return (
   
   <div className="row">
    
  <div className="contents">
  <div className="contentwrapper">
  <h2>Mu Mpuzu Zumutima</h2>
  <p>Job Zirikana What begins as simple amusement for the nobility takes a perilous turn
     when Luzia garners the notice of Antonio Pérez, the disgraced secretary to Spain’s king. Still reeling from  the 
     defeat of his armada, the king is desperate for any advantage in the war against England’s heretic queen―and Pérez will stop at nothing to regain the king’s favor.

</p>
    </div>
  <div>
    <button className="buy-btn">Buy Now</button>
  </div>
  </div>
  
  <div className="imgwrapper">
    <img src= {b} alt="" />
    </div>
   </div>
  
  )
};

export default Items;
