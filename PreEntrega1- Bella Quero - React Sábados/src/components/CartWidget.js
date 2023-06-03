import React from 'react';
import '../styles/CartWidget.css';

const CartWidget = ({ quantity }) => {
  return (
    <div className="cart-widget">
      <span>{quantity}</span>
    </div>
  );
}

export default CartWidget;
