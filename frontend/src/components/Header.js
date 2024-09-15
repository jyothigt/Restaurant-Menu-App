import React from 'react';

function Header({ cartCount, cartTotal, onCartClick }) {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">🍽️ Spice & Fork</div>
        <div className="tagline">Multi Cuisine Restaurant</div>
      </div>
      <button className="cart-btn" onClick={onCartClick}>
        🛒 Cart
        {cartCount > 0 && (
          <span className="cart-info">
            <span className="cart-count">{cartCount}</span>
            <span className="cart-total">₹{cartTotal}</span>
          </span>
        )}
      </button>
    </header>
  );
}

export default Header;
