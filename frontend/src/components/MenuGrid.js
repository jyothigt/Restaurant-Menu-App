import React from 'react';

function MenuCard({ item, cartItem, onAdd, onRemove }) {
  const qty = cartItem ? cartItem.quantity : 0;
  return (
    <div className={`menu-card ${item.popular ? 'popular' : ''}`}>
      {item.popular && <div className="popular-badge">⭐ Popular</div>}
      <div className="card-emoji">{item.image}</div>
      <div className="card-body">
        <div className="card-top">
          <span className={`veg-indicator ${item.veg ? 'veg' : 'nonveg'}`}>
            {item.veg ? '🟢' : '🔴'}
          </span>
          {item.spicy && <span className="spicy">🌶️ Spicy</span>}
          <span className="category-tag">{item.category}</span>
        </div>
        <h3 className="card-name">{item.name}</h3>
        <p className="card-desc">{item.description}</p>
        <div className="card-footer">
          <div className="card-price">₹{item.price}</div>
          <div className="card-rating">⭐ {item.rating}</div>
          <div className="qty-controls">
            {qty === 0 ? (
              <button className="add-btn" onClick={() => onAdd(item)}>Add +</button>
            ) : (
              <div className="qty-row">
                <button className="qty-btn" onClick={() => onRemove(item.id)}>−</button>
                <span className="qty-num">{qty}</span>
                <button className="qty-btn" onClick={() => onAdd(item)}>+</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuGrid({ items, cart, onAdd, onRemove }) {
  if (items.length === 0) {
    return <div className="empty">No dishes found. Try a different filter!</div>;
  }
  return (
    <div className="menu-grid">
      {items.map(item => (
        <MenuCard
          key={item.id}
          item={item}
          cartItem={cart.find(c => c.id === item.id)}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

export default MenuGrid;
