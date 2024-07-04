import React, { useState } from 'react';

import Header from './components/Header';
import Slider from './components/Slider/Slider';
import Content from './components/Content';
import CartButtons from './components/CartButtons';

const productData = {
  company: 'sneaker company',
  name: 'Fall Limited Edition Sneakers',
  price: 125,
  oldPrice: 250,
  src: './assets/images/main.webp',
  description:
    'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
};

export default function App() {
  const [solded, setSolded] = useState(0);
  const [sliderOverlay, setSliderOverlay] = useState(false);

  return (
    <div className="app">
      <Header setSolded={setSolded} cartProduct={{ ...productData, solded }} />
      <Product>
        <Slider setSliderOverlay={setSliderOverlay} />
        {sliderOverlay && <Slider sliderOverlay={sliderOverlay} setSliderOverlay={setSliderOverlay} />}
        <div className="product-info">
          <Content product={productData} />
          <CartButtons setSolded={setSolded} />
        </div>
      </Product>
    </div>
  );
}

function Product({ children }) {
  return <div className="product-container">{children}</div>;
}
