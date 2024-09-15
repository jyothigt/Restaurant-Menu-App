const menuItems = [
  // Indian
  { id: 1, name: "Chicken Biryani", description: "Aromatic basmati rice cooked with tender chicken and whole spices", price: 280, category: "Indian", subcategory: "Rice", veg: false, spicy: true, rating: 4.8, image: "🍛", popular: true },
  { id: 2, name: "Paneer Butter Masala", description: "Soft paneer cubes in rich creamy tomato gravy", price: 220, category: "Indian", subcategory: "Curry", veg: true, spicy: false, rating: 4.6, image: "🧆", popular: true },
  { id: 3, name: "Masala Dosa", description: "Crispy rice crepe filled with spiced potato filling, served with sambar and chutney", price: 120, category: "Indian", subcategory: "South Indian", veg: true, spicy: false, rating: 4.7, image: "🥞", popular: true },
  { id: 4, name: "Dal Makhani", description: "Slow cooked black lentils in buttery tomato gravy", price: 180, category: "Indian", subcategory: "Curry", veg: true, spicy: false, rating: 4.5, image: "🫕", popular: false },
  { id: 5, name: "Butter Naan", description: "Soft leavened bread baked in tandoor, brushed with butter", price: 45, category: "Indian", subcategory: "Bread", veg: true, spicy: false, rating: 4.4, image: "🫓", popular: false },
  { id: 6, name: "Chicken Tikka", description: "Tender chicken marinated in spiced yogurt, grilled in tandoor", price: 320, category: "Indian", subcategory: "Starters", veg: false, spicy: true, rating: 4.9, image: "🍗", popular: true },
  { id: 7, name: "Palak Paneer", description: "Cottage cheese in smooth spiced spinach gravy", price: 200, category: "Indian", subcategory: "Curry", veg: true, spicy: false, rating: 4.3, image: "🥬", popular: false },
  { id: 8, name: "Samosa (2 pcs)", description: "Crispy pastry filled with spiced potatoes and peas", price: 60, category: "Indian", subcategory: "Starters", veg: true, spicy: true, rating: 4.5, image: "🥟", popular: false },
  { id: 9, name: "Mutton Rogan Josh", description: "Slow cooked mutton in Kashmiri spices and yogurt", price: 380, category: "Indian", subcategory: "Curry", veg: false, spicy: true, rating: 4.7, image: "🍲", popular: true },
  { id: 10, name: "Gulab Jamun", description: "Soft milk solid dumplings soaked in rose flavoured sugar syrup", price: 80, category: "Indian", subcategory: "Desserts", veg: true, spicy: false, rating: 4.6, image: "🍮", popular: false },

  // Chinese
  { id: 11, name: "Veg Fried Rice", description: "Wok tossed rice with mixed vegetables, soy sauce and eggs", price: 160, category: "Chinese", subcategory: "Rice", veg: true, spicy: false, rating: 4.3, image: "🍚", popular: false },
  { id: 12, name: "Chicken Manchurian", description: "Crispy chicken in tangy manchurian sauce with spring onions", price: 240, category: "Chinese", subcategory: "Starters", veg: false, spicy: true, rating: 4.6, image: "🍜", popular: true },
  { id: 13, name: "Veg Hakka Noodles", description: "Stir fried noodles with colourful vegetables and sauces", price: 150, category: "Chinese", subcategory: "Noodles", veg: true, spicy: false, rating: 4.4, image: "🍝", popular: true },
  { id: 14, name: "Chicken Chowmein", description: "Classic chowmein noodles with chicken and vegetables", price: 200, category: "Chinese", subcategory: "Noodles", veg: false, spicy: false, rating: 4.5, image: "🍜", popular: false },
  { id: 15, name: "Spring Rolls (4 pcs)", description: "Crispy rolls filled with vegetables and glass noodles", price: 130, category: "Chinese", subcategory: "Starters", veg: true, spicy: false, rating: 4.3, image: "🥢", popular: false },
  { id: 16, name: "Chicken Hot and Sour Soup", description: "Thick tangy soup with chicken, mushrooms and tofu", price: 120, category: "Chinese", subcategory: "Soups", veg: false, spicy: true, rating: 4.5, image: "🥣", popular: false },
  { id: 17, name: "Chilli Paneer", description: "Crispy paneer tossed in spicy chilli sauce and peppers", price: 210, category: "Chinese", subcategory: "Starters", veg: true, spicy: true, rating: 4.7, image: "🌶️", popular: true },
  { id: 18, name: "Chicken Schezwan Rice", description: "Spicy schezwan flavoured fried rice with chicken", price: 220, category: "Chinese", subcategory: "Rice", veg: false, spicy: true, rating: 4.6, image: "🍚", popular: true },

  // Italian
  { id: 19, name: "Margherita Pizza", description: "Classic pizza with tomato sauce, fresh mozzarella and basil", price: 320, category: "Italian", subcategory: "Pizza", veg: true, spicy: false, rating: 4.5, image: "🍕", popular: true },
  { id: 20, name: "Chicken Pepperoni Pizza", description: "Loaded pizza with chicken pepperoni and mozzarella", price: 420, category: "Italian", subcategory: "Pizza", veg: false, spicy: false, rating: 4.7, image: "🍕", popular: true },
  { id: 21, name: "Spaghetti Carbonara", description: "Creamy pasta with eggs, parmesan, pancetta and black pepper", price: 350, category: "Italian", subcategory: "Pasta", veg: false, spicy: false, rating: 4.6, image: "🍝", popular: true },
  { id: 22, name: "Penne Arrabbiata", description: "Penne pasta in spicy tomato sauce with garlic and red chillies", price: 280, category: "Italian", subcategory: "Pasta", veg: true, spicy: true, rating: 4.4, image: "🍝", popular: false },
  { id: 23, name: "Garlic Bread", description: "Toasted bread with garlic butter and herbs", price: 120, category: "Italian", subcategory: "Starters", veg: true, spicy: false, rating: 4.3, image: "🥖", popular: false },
  { id: 24, name: "Tiramisu", description: "Classic Italian dessert with coffee soaked ladyfingers and mascarpone", price: 220, category: "Italian", subcategory: "Desserts", veg: true, spicy: false, rating: 4.8, image: "🍰", popular: true },
  { id: 25, name: "Mushroom Risotto", description: "Creamy arborio rice with wild mushrooms and parmesan", price: 320, category: "Italian", subcategory: "Rice", veg: true, spicy: false, rating: 4.5, image: "🍚", popular: false },
  { id: 26, name: "Chicken Alfredo Pasta", description: "Fettuccine in rich cream sauce with grilled chicken", price: 380, category: "Italian", subcategory: "Pasta", veg: false, spicy: false, rating: 4.7, image: "🍝", popular: true },
];

module.exports = menuItems;
