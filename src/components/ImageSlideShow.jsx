import HeroSlider from "hero-slider/dist/HeroSlider"; 
import { Slide } from "hero-slider";
import React from "react";
import { useState, useEffect } from "react";
import book from '../assets/book1.jpg';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { slideData } from "./Slider";
import "../components/ImageSlider.css";

const ImageShow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = slideData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="slider">
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />

      {slideData.map((slide, index) => (
        <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
          {index === currentSlide && (
            <>
              <img src={slide.image} alt="slide" />
              <div className="content">
                <h2>{slide.headline}</h2>
                <p>{slide.Desc}</p>
                <hr />
                <button className="btn">Get Started</button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageShow;
