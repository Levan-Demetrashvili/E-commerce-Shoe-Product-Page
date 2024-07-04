import React, { useState } from 'react';

import Cart from './Cart';

import { v4 as randomID } from 'uuid';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Header({ cartProduct, setSolded }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const isNotMobile = useMediaQuery('(min-width:768px)');

  return (
    <header>
      {!isNotMobile && showMenu && <MobileNavMenu onCloseMenu={() => setShowMenu(false)} />}
      <div className="menu-side">
        <button className="show-menu-btn" onClick={() => setShowMenu(true)}>
          <img src="./assets/icons/icon-menu.svg" alt="menu icon" />
        </button>
        <h1>sneakers</h1>
        {isNotMobile && <NavMenu />}
      </div>
      <div className="cart-side">
        <button className="show-cart-btn" onClick={() => setShowCart(!showCart)}>
          <img src="./assets/icons/icon-cart.svg" alt="cart icon" />
        </button>
        <img src="./assets/icons/avatar.svg" alt="avatar" />
      </div>
      {showCart && <Cart product={cartProduct} setSolded={setSolded} />}
    </header>
  );
}

function NavMenu() {
  return (
    <ul className="nav-list">
      <li>Collections</li>
      <li>Men</li>
      <li>Women</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  );
}

function MobileNavMenu({ onCloseMenu }) {
  return (
    <>
      <div className="overlay" onClick={onCloseMenu}></div>
      <nav className="nav__menu-mob">
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
