import React, { useState } from 'react';
import './slider.css';

import { useMediaQuery } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';

const styles = {
  slider: { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: '2' },
};

export default function Slider({ sliderOverlay = false, setSliderOverlay }) {
  const [slide, setSlide] = useState(0);

  const handleNextSlide = () => setSlide(slide < 4 ? slide + 1 : 0);
  const handlePreviousSlide = () => setSlide(slide > 0 ? slide - 1 : 4);

  const isNotMobile = useMediaQuery('(min-width:768px)');

  return (
    <>
      {sliderOverlay && <div className="overlay" onClick={() => setSliderOverlay(false)}></div>}
      <div className="slider" style={sliderOverlay ? styles.slider : {}}>
        <div
          className="slider-images-container"
          style={{ transform: `translateX(${isNotMobile ? 0 : -100 * slide}%)` }}
          onClick={() => isNotMobile && setSliderOverlay(true)}
        >
          <img src="./assets/images/main.webp" alt="main photoe" />
          <div className="others">
            <img src="./assets/images/2.webp" alt="2" />
            <img src="./assets/images/3.webp" alt="3" />
            <img src="./assets/images/4.webp" alt="4" />
            <img src="./assets/images/5.webp" alt="5" />
          </div>
        </div>

        <div style={sliderOverlay ? { display: 'block' } : {}} className="slider-buttons">
          <SliderButton id="previous" onClick={handlePreviousSlide}>
            <img src="./assets/icons/left-arrow.svg" alt="left arrow" />
          </SliderButton>
          <SliderButton id="next" onClick={handleNextSlide}>
            <img src="./assets/icons/right-arrow.svg" alt="right arrow" />
          </SliderButton>
        </div>
      </div>
    </>
  );
}

function SliderButton({ children, onClick, id }) {
  return (
    <button id={id} onClick={onClick}>
      {children}
    </button>
  );
}
