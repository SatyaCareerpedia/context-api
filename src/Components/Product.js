import React, { useState } from 'react';
import '../CSS/Product.css';

const Product = ({ product, addToCart }) => {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-title">{product.name}</h3>
      <p className="product-price">${product.price}</p>
      <button 
        className={`add-to-cart-btn ${added ? 'added' : ''}`}
        onClick={handleAddToCart}
        disabled={added}
      >
        {added ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default Product;
