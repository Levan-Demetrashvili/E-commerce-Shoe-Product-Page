import React from 'react';

export default function Content({ product }) {
  return (
    <div className="product-text">
      <strong className="company-type">{product.company}</strong>
      <h2 className="product-title">{product.name}</h2>
      <p className="product-description">{product.description}</p>
      <Price newPrice={product.price} oldPrice={product.oldPrice} />
    </div>
  );
}

function Price({ newPrice, oldPrice }) {
  return (
    <div className="price-container">
      <div className="discount-container">
        <p className="price-new">${newPrice.toFixed(2)}</p>
        <span className="discount">{(newPrice / oldPrice) * 100}%</span>
      </div>
      <p className="price-old">${oldPrice.toFixed(2)}</p>
    </div>
  );
}
