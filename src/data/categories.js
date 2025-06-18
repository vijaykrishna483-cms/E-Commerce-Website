// src/data/products.js
export const productsByCategory = {
  "10 Minutes Mix": Array(8).fill().map((_, i) => ({
    id: `10M-${i+1}`,
    name: [`Mango Juice`, `Strawberry Shake`, `Berry Smoothie`, `Tropical Blend`][i],
    price: 138 + (i*20),
    img: `/demo.png`,
    stars: 3 + (i%2),
    sold: 15 + i*5
  })),
  
  "Bathing Essentials": Array(8).fill().map((_, i) => ({
    id: `BE-${i+1}`,
    name: [`Herbal Soap`, `Mint Shower Gel`, `Clay Mask`, `Bath Salt`][i],
    price: 299 + (i*50),
    img: `/demo.png`,
    stars: 8 - (i%2),
    sold: 20 + i*3
  })),

  "Best Sellers": Array(8).fill().map((_, i) => ({
    id: `BS-${i+1}`,
    name: [`Organic Honey`, `Cold-Pressed Oil Pack`, `Spice Combo`, `Mango Pickle`][i],
    price: 899 + (i*100),
    img: `/demo.png`,
    stars: 5 - (i%2),
    sold: 50 + i*10
  })),

  "Cold Pressed Oils": Array(8).fill().map((_, i) => ({
    id: `CPO-${i+1}`,
    name: [`Coconut Oil`, `Sesame Oil`, `Groundnut Oil`, `Olive Oil`][i],
    price: 399 + (i*80),
    img: `/demo.png`,
    stars: 8 + (i%1),
    sold: 25 + i*5
  })),

  "Kitchen Utensils": Array(8).fill().map((_, i) => ({
    id: `KU-${i+1}`,
    name: [`Steel Spoon Set`, `Wooden Spatula`, `Mixer Grinder`, `Cookware Set`][i],
    price: 199 + (i*150),
    img: `/demo.png`,
    stars: 8 + (i%1),
    sold: 30 + i*3
  })),

  // Continue for other categories...
  "Malt": Array(8).fill().map((_, i) => ({
    id: `MALT-${i+1}`,
    name: [`Chocolate Malt`, `Energy Drink`, `Protein Mix`, `Classic Malt`][i],
    price: 299 + (i*50),
    img: `/demo.png`,
    stars: 8 + (i%1),
    sold: 80 + i*5
  })),

  "Masala": Array(8).fill().map((_, i) => ({
    id: `MAS-${i+1}`,
    name: [`Garam Masala`, `Biryani Masala`, `Chaat Masala`, `Sambar Powder`][i],
    price: 99 + (i*20),
    img: `/demo.png`,
    stars: 5 - (i%2),
    sold: 60 + i*10
  })),

  "Noodles": Array(8).fill().map((_, i) => ({
    id: `NOOD-${i+1}`,
    name: [`Masala Noodles`, `Veg Hakka`, `Cheese Pasta`, `Instant Meal`][i],
    price: 89 + (i*10),
    img: `/demo.png`,
    stars: 8 + (i%1),
    sold: 100 + i*20
  })),

  "Pickles": Array(8).fill().map((_, i) => ({
    id: `PICK-${i+1}`,
    name: [`Lemon Pickle`, `Mixed Veg`, `Garlic Pickle`, `Chilli Paste`][i],
    price: 189 + (i*30),
    img: `/demo.png`,
    stars: 8 + (i%1),
    sold: 85 + i*5
  })),

  "Pooja & Devotional": Array(8).fill().map((_, i) => ({
    id: `PD-${i+1}`,
    name: [`Incense Sticks`, `Brass Lamp`, `Prayer Kit`, `Idol Set`][i],
    price: 99 + (i*50),
    img: `/demo.png`,
    stars: 5 - (i%2),
    sold: 70 + i*5
  })),

  "Special Combo": Array(8).fill().map((_, i) => ({
    id: `SC-${i+1}`,
    name: [`Breakfast Pack`, `Snack Box`, `Oil Combo`, `Spice Bundle`][i],
    price: 699 + (i*200),
    img: `/demo.png`,
    stars: 8 + (i%1),
    sold: 35 + i*5
  })),

  "Vadagam and Vathal": Array(8).fill().map((_, i) => ({
    id: `VV-${i+1}`,
    name: [`Sundried Vathal`, `Mixed Vadagam`, `Onion Mix`, `Garlic Chips`][i],
    price: 299 + (i*50),
    img: `/demo.png`,
    stars: 8 + (i%1),
    sold: 25 + i*5
  }))
};

// src/data/categories.js




export const categories = [
  "10 Minutes Mix",
  "Bathing Essentials",
  "Best Sellers",
  "Cold Pressed Oils",
  "Kitchen Utensils",
  "Malt",
  "Masala",
  "Noodles",
  "Pickles",
  "Pooja & Devotional",
  "Special Combo",
  "Vadagam and Vathal"
];
