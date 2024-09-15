import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import MenuGrid from './components/MenuGrid';
import Cart from './components/Cart';
import OrderSuccess from './components/OrderSuccess';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: 'All', veg: false, search: '', sort: 'popular'
  });

  useEffect(() => {
    axios.get('/api/categories').then(res => setCategories(res.data));
  }, []);

  useEffect(() => {
    setLoading(true);
    const params = {};
    if (filters.category !== 'All') params.category = filters.category;
    if (filters.veg) params.veg = true;
    if (filters.search) params.search = filters.search;
    if (filters.sort) params.sort = filters.sort;
    axios.get('/api/menu', { params })
      .then(res => { setItems(res.data.items); setLoading(false); })
      .catch(() => setLoading(false));
  }, [filters]);

  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(c => c.id === item.id);
      if (existing) return prev.map(c => c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c);
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => {
      const existing = prev.find(c => c.id === id);
      if (existing.quantity === 1) return prev.filter(c => c.id !== id);
      return prev.map(c => c.id === id ? { ...c, quantity: c.quantity - 1 } : c);
    });
  };

  const placeOrder = async (customerName, tableNumber) => {
    try {
      const res = await axios.post('/api/order', {
        items: cart.map(i => ({ id: i.id, name: i.name, price: i.price, quantity: i.quantity })),
        customerName, tableNumber
      });
      setOrder(res.data);
      setCart([]);
      setShowCart(false);
    } catch (err) {
      alert('Order failed. Please try again.');
    }
  };

  const cartCount = cart.reduce((sum, i) => sum + i.quantity, 0);
  const cartTotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  if (order) return <OrderSuccess order={order} onBack={() => setOrder(null)} />;

  return (
    <div className="app">
      <Header cartCount={cartCount} cartTotal={cartTotal} onCartClick={() => setShowCart(true)} />
      <FilterBar filters={filters} setFilters={setFilters} categories={categories} />
      <main className="main">
        {loading
          ? <div className="loading">Loading menu...</div>
          : <MenuGrid items={items} cart={cart} onAdd={addToCart} onRemove={removeFromCart} />}
      </main>
      {showCart && (
        <Cart cart={cart} total={cartTotal} onAdd={addToCart} onRemove={removeFromCart}
          onClose={() => setShowCart(false)} onOrder={placeOrder} />
      )}
    </div>
  );
}

export default App;
