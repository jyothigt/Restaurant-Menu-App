import React, { useState } from 'react';

function Cart({ cart, total, onAdd, onRemove, onClose, onOrder }) {
  const [name, setName] = useState('');
  const [table, setTable] = useState('');
  const [loading, setLoading] = useState(false);

  const handleOrder = async () => {
    if (!name.trim()) { alert('Please enter your name'); return; }
    if (!table.trim()) { alert('Please enter table number'); return; }
    setLoading(true);
    await onOrder(name, table);
    setLoading(false);
  };

  return (
    <div className="cart-overlay" onClick={e => e.target.classList.contains('cart-overlay') && onClose()}>
      <div className="cart-drawer">
        <div className="cart-header">
          <h2>Your Order</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        {cart.length === 0 ? (
          <div className="cart-empty">Your cart is empty. Add some dishes!</div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-info">
                    <span className={`veg-indicator ${item.veg ? 'veg' : 'nonveg'}`}>{item.veg ? '🟢' : '🔴'}</span>
                    <span className="cart-item-name">{item.name}</span>
                  </div>
                  <div className="cart-item-right">
                    <div className="qty-row">
                      <button className="qty-btn" onClick={() => onRemove(item.id)}>−</button>
                      <span className="qty-num">{item.quantity}</span>
                      <button className="qty-btn" onClick={() => onAdd(item)}>+</button>
                    </div>
                    <span className="cart-item-price">₹{item.price * item.quantity}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-total-row">
              <span>Total</span>
              <span className="total-amount">₹{total}</span>
            </div>

            <div className="order-form">
              <input placeholder="Your name" value={name} onChange={e => setName(e.target.value)} />
              <input placeholder="Table number" value={table} onChange={e => setTable(e.target.value)} />
              <button className="order-btn" onClick={handleOrder} disabled={loading}>
                {loading ? 'Placing order...' : `Place Order — ₹${total}`}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
