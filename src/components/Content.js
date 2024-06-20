import React from "react";
import Price from "./Price";

export default function Content() {
  return (
    <div className='product-text'>
      <strong className='company-type'>Sneaker Company</strong>
      <h2 className='product-title'>Fall Limited Edition Sneakers</h2>
      <p className='product-description'>
        These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can
        offer.
      </p>
      <Price />
    </div>
  );
}
