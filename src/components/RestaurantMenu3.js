
import React, { useState } from "react";

const MenuItem = ({ name, price, imageUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg flex items-center p-4 hover:shadow-xl transition-all duration-300">
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <span className="text-md font-medium text-yellow-500">${price}</span>
      </div>
      <div className="ml-3">
        <img
          src={imageUrl}
          alt={name}
          className="w-20 h-20 object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

const MenuCategory = ({ category, items }) => {
  return (
    <div id={category} className="">
      <h2 className="text-2xl font-bold text-gray-800 pt-4">{category}</h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

const RestaurantMenu = () => {
  const [activeCategory, setActiveCategory] = useState("Starters");

  const menuData = [
    {
      category: "Starters",
      items: [
        {
          name: "Spring Rolls",
          price: 5.99,
          imageUrl:
            "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          name: "Garlic Bread",
          price: 4.99,
          imageUrl:
            "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
      ],
    },
    {
      category: "Main Course",
      items: [
        {
          name: "Grilled Chicken",
          price: 12.99,
          imageUrl:
            "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          name: "Vegetable Pasta",
          price: 10.99,
          imageUrl:
            "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
      ],
    },
    {
      category: "Desserts",
      items: [
        {
          name: "Chocolate Cake",
          price: 6.99,
          imageUrl:
            "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          name: "Ice Cream",
          price: 3.99,
          imageUrl:
            "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
      ],
    },
  ];

  const scrollToCategory = (category) => {
    setActiveCategory(category);
    document
      .getElementById(category)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="container mx-auto p-6 bg-white max-w-md">
      {/* Category Navigation */}
      <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-indigo-500 py-3 z-10 overflow-x-auto flex gap-4 px-4">
        {menuData.map(({ category }) => (
          <button
            key={category}
            className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
              activeCategory === category
                ? "bg-yellow-400 text-gray-800"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => scrollToCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div className="mt-0 space-y-8">
        {menuData.map((categoryData, index) => (
          <MenuCategory key={index} {...categoryData} />
        ))}
      </div>

      {/* Background Animation */}
      <div
        className="absolute h-[500vh] inset-0 bg-gradient-to-r from-purple-600 to-indigo-500 opacity-50 animate-pulse"
        style={{
          zIndex: -1,
        }}
      />
    </div>
  );
};

export default RestaurantMenu;