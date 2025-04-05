

import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const RestaurantMenu = () => {
  const [activeCategory, setActiveCategory] = useState("Starters");

  const menuData = [
    {
      category: "Starters",
      items: [
        {
          name: "Spring Rolls",
          price: 5.99,
          imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          name: "Garlic Bread",
          price: 4.99,
          imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          name: "Spring Rolls",
          price: 5.99,
          imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          name: "Garlic Bread",
          price: 4.99,
          imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
      ],
    },
    {
      category: "Main Course",
      items: [
        {
          name: "Grilled Chicken",
          price: 12.99,
          imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          name: "Vegetable Pasta",
          price: 10.99,
          imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          name: "Grilled Chicken",
          price: 12.99,
          imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          name: "Vegetable Pasta",
          price: 10.99,
          imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
      ],
    },
    {
      category: "Desserts",
      items: [
        {
          name: "Chocolate Cake",
          price: 6.99,
          imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          name: "Ice Cream",
          price: 3.99,
          imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 opacity-20 animate-pulse"></div>

      {/* Category Navigation */}
      <div className="sticky top-0 bg-white shadow-md py-3 px-4 flex gap-4 overflow-x-auto whitespace-nowrap z-10">
        {menuData.map(({ category }) => (
          <button
            key={category}
            className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
              activeCategory === category ? "bg-green-600 text-white" : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div className="p-4 grid gap-4 relative z-10">
        {menuData
          .filter(({ category }) => category === activeCategory)
          .map(({ items }) =>
            items.map((item, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-lg bg-white text-gray-900 flex items-center transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-24 h-24 object-cover"
                />
                <div className="p-3 flex-1">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <span className="text-md font-medium text-green-600">${item.price.toFixed(2)}</span>
                </div>
              </div>
            ))
          )}
      </div>
    </div>
  );
};

export default RestaurantMenu;



