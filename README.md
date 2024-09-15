# Spice & Fork — Restaurant Menu Browser

I built this project because I wanted to try building something more real-world than just a todo app. The idea was a restaurant menu where you can browse dishes, filter by cuisine or veg/non-veg, search, and add items to a cart and place an order.

## Screenshots

> will add after running locally

## What it does

- Browse 26 dishes across Indian, Chinese and Italian cuisines
- Filter by cuisine (Indian / Chinese / Italian)
- Toggle veg only filter
- Search dishes by name or description
- Sort by popularity, rating, or price
- Add items to cart, change quantity
- Place order with name and table number
- Order confirmation screen with estimated time

## Tech stack

| Part | Tech |
|------|------|
| Frontend | React.js, Axios, CSS |
| Backend | Node.js, Express.js |
| Data | JSON (no database needed) |

## What I learned

- How to build and connect a React frontend to a Node/Express backend
- How query parameters work in REST APIs (used for filtering and searching)
- Managing cart state in React with useState
- How to structure a project with separate frontend and backend folders
- Making responsive layouts with CSS grid

## Folder structure

```
restaurant-menu/
├── backend/
│   ├── index.js        # express server, all API routes
│   └── data/
│       └── menu.js     # all 26 menu items with prices
└── frontend/
    └── src/
        ├── App.js
        └── components/
            ├── Header.js
            ├── FilterBar.js
            ├── MenuGrid.js
            ├── Cart.js
            └── OrderSuccess.js
```

## API endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/menu | get all items (supports ?category, ?veg, ?search, ?sort) |
| GET | /api/menu/:id | get single item |
| GET | /api/categories | get list of categories |
| GET | /api/popular | get popular items only |
| POST | /api/order | place an order |

## How to run

**Backend**
```bash
cd backend
npm install
node index.js
```
Runs on http://localhost:5000

**Frontend**
```bash
cd frontend
npm install
npm start
```
Runs on http://localhost:3000

No database setup needed — menu data is in a JS file.

---

Made by Jyothi GT — [GitHub](https://github.com/jyothigt) • [LinkedIn](https://www.linkedin.com/in/jyothi-gt-990958357)
