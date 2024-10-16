import React from 'react';
import '../CSS/Cart.css';

const Cart = ({ cartItems, incrementQuantity, decrementQuantity, removeFromCart }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-dropdown">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <p>{item.name}</p>
                  <p>Price: ${item.price}</p>
                  <p>Total: ${(item.price * item.quantity).toFixed(2)}</p> 
                  <div className="quantity-controls">
                    <button onClick={() => decrementQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => incrementQuantity(item.id)}>+</button>
                  </div>
                  <button className="delete-button" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-total">
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
