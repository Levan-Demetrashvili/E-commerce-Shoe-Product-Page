import React, { useState } from 'react';
import Button from './Button';

import { v4 as randomID } from 'uuid';

export default function Header({ cartProduct, setSolded }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <header>
      {showMenu && <NavMenu onCloseMenu={() => setShowMenu(false)} />}
      <div className="menu-side">
        <button className="show-menu-btn" onClick={() => setShowMenu(true)}>
          <img src="./assets/icons/icon-menu.svg" alt="menu icon" />
        </button>
        <h1>sneakers</h1>
      </div>
      <div className="cart-side">
        <button className="show-cart-btn" onClick={() => setShowCart(!showCart)}>
          <img src="./assets/icons/icon-cart.svg" alt="cart icon" />
        </button>
        <img src="./assets/icons/avatar.svg" alt="avatar" />
      </div>
      {showCart && <CartBox product={cartProduct} setSolded={setSolded} />}
    </header>
  );
}

function CartBox({ product, setSolded }) {
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

function NavMenu({ onCloseMenu }) {
  return (
    <>
      <div className="overlay" onClick={onCloseMenu}></div>
      <nav className="nav-menu">
        <button className="close-menu-btn" onClick={onCloseMenu}>
          <img src="./assets/icons/close.svg" alt="close menu icon" />
        </button>
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
}
