import React, { useState } from "react";
import "./slider.css";
import SliderButton from "./SliderButton";

export default function Slider() {
  const [slide, setSlide] = useState(0);

  function handlePreviousSlide() {
    setSlide(slide > 0 ? slide - 1 : 4);
  }
  function handleNextSlide() {
    setSlide(slide < 4 ? slide + 1 : 0);
  }

  return (
    <div className='slider'>
      <div className='slider-images-container' style={{ transform: `translateX(${-100 * slide}%)` }}>
        <img src='./assets/images/main.webp' alt='main photoe' />
        <img src='./assets/images/2.webp' alt='2' />
        <img src='./assets/images/3.webp' alt='3' />
        <img src='./assets/images/4.webp' alt='4' />
        <img src='./assets/images/5.webp' alt='5' />
      </div>

      <div className='slider-buttons'>
        <SliderButton id='previous' onClick={handlePreviousSlide}>
          <img src='./assets/icons/left-arrow.svg' alt='left arrow' />
        </SliderButton>
        <SliderButton id='next' onClick={handleNextSlide}>
          <img src='./assets/icons/right-arrow.svg' alt='right arrow' />
        </SliderButton>
      </div>
    </div>
  );
}
