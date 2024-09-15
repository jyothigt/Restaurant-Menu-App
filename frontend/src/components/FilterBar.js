import React from 'react';

function FilterBar({ filters, setFilters, categories }) {
  const update = (key, val) => setFilters(f => ({ ...f, [key]: val }));

  return (
    <div className="filterbar">
      <div className="filterbar-top">
        <input
          className="search-input"
          placeholder="Search dishes..."
          value={filters.search}
          onChange={e => update('search', e.target.value)}
        />
        <select className="sort-select" value={filters.sort} onChange={e => update('sort', e.target.value)}>
          <option value="popular">Most Popular</option>
          <option value="rating">Top Rated</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
        </select>
        <label className="veg-toggle">
          <input type="checkbox" checked={filters.veg} onChange={e => update('veg', e.target.checked)} />
          <span className="veg-dot">🟢</span> Veg Only
        </label>
      </div>
      <div className="category-tabs">
        {categories.map(cat => (
          <button
            key={cat}
            className={`cat-btn ${filters.category === cat ? 'active' : ''}`}
            onClick={() => update('category', cat)}
          >
            {cat === 'Indian' ? '🇮🇳' : cat === 'Chinese' ? '🥢' : cat === 'Italian' ? '🍕' : '🍽️'} {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterBar;
