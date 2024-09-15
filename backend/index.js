const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const menuItems = require('./data/menu');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// GET /api/menu — get all items with optional filters
app.get('/api/menu', (req, res) => {
  let items = [...menuItems];
  const { category, veg, search, sort } = req.query;

  if (category && category !== 'All') {
    items = items.filter(i => i.category === category);
  }
  if (veg === 'true') {
    items = items.filter(i => i.veg === true);
  }
  if (search) {
    const q = search.toLowerCase();
    items = items.filter(i =>
      i.name.toLowerCase().includes(q) ||
      i.description.toLowerCase().includes(q) ||
      i.category.toLowerCase().includes(q)
    );
  }
  if (sort === 'price_asc') items.sort((a, b) => a.price - b.price);
  else if (sort === 'price_desc') items.sort((a, b) => b.price - a.price);
  else if (sort === 'rating') items.sort((a, b) => b.rating - a.rating);
  else if (sort === 'popular') items = items.filter(i => i.popular).concat(items.filter(i => !i.popular));

  res.json({ count: items.length, items });
});

// GET /api/menu/:id — get single item
app.get('/api/menu/:id', (req, res) => {
  const item = menuItems.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ message: 'Item not found' });
  res.json(item);
});

// GET /api/categories — get all categories
app.get('/api/categories', (req, res) => {
  const categories = ['All', ...new Set(menuItems.map(i => i.category))];
  res.json(categories);
});

// GET /api/popular — get popular items
app.get('/api/popular', (req, res) => {
  res.json(menuItems.filter(i => i.popular));
});

// POST /api/order — place order
app.post('/api/order', (req, res) => {
  const { items, customerName, tableNumber } = req.body;
  if (!items || items.length === 0) {
    return res.status(400).json({ message: 'No items in order' });
  }
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const orderId = 'ORD' + Date.now();
  res.status(201).json({
    message: 'Order placed successfully',
    orderId,
    customerName,
    tableNumber,
    items,
    total,
    estimatedTime: '25-30 minutes',
    placedAt: new Date().toISOString()
  });
});

// health check
app.get('/', (req, res) => res.json({ message: 'Restaurant Menu API running' }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
