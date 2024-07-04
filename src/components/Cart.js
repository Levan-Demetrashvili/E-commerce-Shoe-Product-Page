import React from 'react';
import Button from './Button';

export default function Cart({ product, setSolded }) {
  return (
    <div className="cart">
      <div className="cart-header">
        <strong>Cart</strong>
      </div>
      <div className="cart-body">
        {!product.solded ? (
          <p className="cart-message">Your cart is empty.</p>
        ) : (
          <>
            <ul className="cart-list">
              <CartItem data={product} setSolded={setSolded} />
            </ul>
            <Button>Checkout</Button>
          </>
        )}
      </div>
    </div>
  );
}

function CartItem({ data, setSolded }) {
  return (
    <li className="cart-item">
      <img src={data.src} alt="item img" />
      <div className="item-text-content">
        <p className="item-name">{data.name}</p>
        <p className="item-price">
          ${data.price.toFixed(2)} x {data.solded} <b> ${(data.price * data.solded).toFixed(2)} </b>
        </p>
      </div>
      <button className="delete-product-btn" onClick={() => setSolded(0)}>
        <img src="./assets/icons/delete.svg" alt="delete icon" />
      </button>
    </li>
  );
}
