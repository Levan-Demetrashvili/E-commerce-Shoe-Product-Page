import React, { useState } from 'react';
import './slider.css';

import { useMediaQuery } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';

const styles = {
  closeBtn: {
    width: '21px',
    position: 'absolute',
    top: '-24px',
    right: 0,
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    filter: 'invert(100%) sepia(16%) saturate(0%) hue-rotate(45deg) brightness(254%) contrast(101%)',
  },
  slider: { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: '2' },
  activeSlide: { border: '2px solid #FF7D1A' },
  prevBtn: { top: 'calc((100% - 92px - 30px) / 2)', left: '-28px' },
  nextBtn: { top: 'calc((100% - 92px - 30px) / 2)', right: '-28px' },
};

export default function Slider({ sliderOverlay = false, setSliderOverlay }) {
  const [slide, setSlide] = useState(0);

  const handleNextSlide = () => setSlide(slide < 3 ? slide + 1 : 0);
  const handlePreviousSlide = () => setSlide(slide > 0 ? slide - 1 : 3);

  const isNotMobile = useMediaQuery('(min-width:768px)');

  return (
    <>
      {sliderOverlay && <div className="overlay" onClick={() => setSliderOverlay(false)}></div>}
      <div className="slider" style={sliderOverlay ? styles.slider : {}}>
        {sliderOverlay && <img src="./assets/icons/close.svg" alt="close icon" style={styles.closeBtn} onClick={() => setSliderOverlay(false)} />}

        <div className="slider-images-container" onClick={() => isNotMobile && setSliderOverlay(true)}>
          <img src="./assets/images/main.webp" alt="main photoe" hidden={slide !== 0} />
          <img src="./assets/images/2.webp" alt="2" hidden={slide !== 1} />
          <img src="./assets/images/3.webp" alt="3" hidden={slide !== 2} />
          <img src="./assets/images/5.webp" alt="4" hidden={slide !== 3} />
          <div className="others">
            <img style={slide === 0 ? styles.activeSlide : {}} src="./assets/images/main.webp" alt="main photoe" onClick={() => setSlide(0)} />
            <img style={slide === 1 ? styles.activeSlide : {}} src="./assets/images/2.webp" onClick={() => setSlide(1)} alt="2" />
            <img style={slide === 2 ? styles.activeSlide : {}} src="./assets/images/3.webp" onClick={() => setSlide(2)} alt="3" />
            <img style={slide === 3 ? styles.activeSlide : {}} src="./assets/images/5.webp" onClick={() => setSlide(3)} alt="4" />
          </div>
        </div>
        <div style={sliderOverlay ? { display: 'block' } : {}} className="slider-buttons">
          <SliderButton style={sliderOverlay ? styles.prevBtn : {}} id="previous" onClick={handlePreviousSlide}>
            <img src="./assets/icons/left-arrow.svg" alt="left arrow" />
          </SliderButton>
          <SliderButton style={sliderOverlay ? styles.nextBtn : {}} id="next" onClick={handleNextSlide}>
            <img src="./assets/icons/right-arrow.svg" alt="right arrow" />
          </SliderButton>
        </div>
      </div>
    </>
  );
}

function SliderButton({ style, children, onClick, id }) {
  return (
    <button style={style} id={id} onClick={onClick}>
      {children}
    </button>
  );
}
