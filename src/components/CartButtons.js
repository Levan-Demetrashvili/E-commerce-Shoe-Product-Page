import React, { useState } from 'react';
import Button from './Button';

export default function CartButtons({ setSolded }) {
  const [count, setCount] = useState(0);

  function handleClick() {
    if (!count) return;
    setSolded(s => s + count);
    setCount(0);
  }

  return (
    <div className="cart-btns">
      <div className="product-counter">
        <span role="button" id="decrease" onClick={() => count > 0 && setCount(c => c - 1)}></span>
        <span id="counter">{count}</span>
        <span role="button" id="increase" onClick={() => setCount(c => c + 1)}>
          <img src="./assets/icons/plus.svg" alt="plus icon" />
        </span>
      </div>
      <Button onClick={handleClick}>
        <img src="./assets/icons/icon-cart-white.svg" alt="cart icon" className="img" /> Add to cart
      </Button>
    </div>
  );
}
