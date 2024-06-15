import React from "react";

export default function Header() {
  return (
    <header>
      <div className='menu-side'>
        <button className='show-menu-btn'>
          <img src='./assets/icons/icon-menu.svg' alt='menu icon' />
        </button>
        <h1>sneakers</h1>
      </div>
      <div className='cart-side'>
        <button className='show-cart-btn'>
          <img src='./assets/icons/icon-cart.svg' alt='cart icon' />
        </button>
        <img src='./assets/icons/avatar.svg' alt='avatar' />
      </div>
    </header>
  );
}
