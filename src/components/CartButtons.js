import React, { useState } from 'react';
import Button from './Button';

export default function CartButtons() {
  const [count, setCount] = useState(0);
  return (
    <div className="cart-btns">
      <div className="product-counter">
        <span role="button" id="decrease" onClick={() => setCount(c => c - 1)}></span>
        <span id="counter">{count}</span>
        <span role="button" id="increase" onClick={() => setCount(c => c + 1)}>
          <img src="./assets/icons/plus.svg" alt="plus icon" />
        </span>
      </div>
      <Button>
        <img src="./assets/icons/icon-cart-white.svg" alt="cart icon" className="img" /> Add to cart
      </Button>
    </div>
  );
}
