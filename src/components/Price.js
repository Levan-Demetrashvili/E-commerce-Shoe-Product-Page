import React from "react";

export default function Price() {
  return (
    <div className='price-container'>
      <div className='discount-container'>
        <p className='price-new'>$125.00</p>
        <span className='discount'>50%</span>
      </div>
      <p className='price-old'>$250.00</p>
    </div>
  );
}
