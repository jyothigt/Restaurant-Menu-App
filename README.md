# Spice & Fork

A restaurant menu app I made to practice React and Node.js together.
Wanted to build something more useful than a todo app, so I went with a menu browser where you can filter, search, and place a simple order.

## What it does

- Browse dishes across Indian, Chinese and Italian cuisines
- Filter by cuisine or veg/non-veg
- Search by name
- Sort by price, rating or popularity
- Add to cart, update quantity
- Place order with name and table number
- See a confirmation screen after ordering

## Tech used

- React (frontend)
- Node.js + Express (backend)
- Plain CSS
- Menu data is just a JS file, no database

## How to run

Clone the repo, then:

**Backend**
```bash
cd backend
npm install
node index.js
```

**Frontend**
```bash
cd frontend
npm install
npm start
```

Backend runs on port 5000, frontend on 3000.

## What I learned

Mostly how React and a backend API actually talk to each other. Also got more comfortable with query params, useState for cart logic, and structuring a project with two separate folders.

## Folder structure
