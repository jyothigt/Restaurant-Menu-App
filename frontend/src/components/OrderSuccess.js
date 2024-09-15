import React from 'react';

function OrderSuccess({ order, onBack }) {
  return (
    <div className="success-page">
      <div className="success-box">
        <div className="success-icon">✅</div>
        <h2>Order Placed!</h2>
        <p className="order-id">Order ID: <strong>{order.orderId}</strong></p>
        <p>Hey <strong>{order.customerName}</strong>, your order for Table {order.tableNumber} has been received!</p>
        <div className="order-summary">
          {order.items.map((item, i) => (
            <div key={i} className="order-item-row">
              <span>{item.name} x{item.quantity}</span>
              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}
          <div className="order-total-row">
            <strong>Total</strong>
            <strong>₹{order.total}</strong>
          </div>
        </div>
        <p className="eta">⏱️ Estimated time: <strong>{order.estimatedTime}</strong></p>
        <button className="back-btn" onClick={onBack}>Back to Menu</button>
      </div>
    </div>
  );
}

export default OrderSuccess;
