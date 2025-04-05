
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

const RestaurantMenu2 = () => {
  const [activeCategory, setActiveCategory] = useState("Starters");

  const menuData = [
    {
      category: "Starters",
      items: [
        { name: "Spring Rolls", price: 5.99, imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Garlic Bread", price: 4.99, imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Mozzarella Sticks", price: 6.99, imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Onion Rings", price: 4.49, imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Bruschetta", price: 7.49, imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Cheese Nachos", price: 5.99, imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
      ],
    },
    {
      category: "Main Course",
      items: [
        { name: "Grilled Chicken", price: 12.99, imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Vegetable Pasta", price: 10.99, imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Veg Steak", price: 18.99, imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Fish Tacos", price: 14.99, imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Chicken Parmesan", price: 16.99, imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Veggie Burger", price: 11.49, imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Lamb Chops", price: 20.49, imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
      ],
    },
    {
      category: "Desserts",
      items: [
        { name: "Chocolate Cake", price: 6.99, imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Ice Cream", price: 3.99, imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Apple Pie", price: 4.99, imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Cheesecake", price: 5.49, imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Lemon Meringue Pie", price: 5.99, imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Brownies", price: 3.49, imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Banoffee Pie", price: 4.79, imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
      ],
    },
    {
      category: "Beverages",
      items: [
        { name: "Coca Cola", price: 2.49, imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Lemonade", price: 3.49, imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Orange Juice", price: 2.99, imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Iced Tea", price: 2.99, imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Coffee", price: 1.99, imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
      ],
    },
    {
      category: "Side Dishes",
      items: [
        { name: "French Fries", price: 3.99, imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Garlic Mashed Potatoes", price: 4.49, imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Steamed Vegetables", price: 3.99, imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Rice Pilaf", price: 3.49, imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Coleslaw", price: 2.99, imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
      ],
    },
  ];

  const getItemsForCategory = (category) => {
    return menuData.find((data) => data.category === category)?.items || [];
  };

  return (
    <div className="container mx-auto p-6 max-w-md bg-white">
      {/* Category Navigation */}
      <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-indigo-500 py-3 z-10 overflow-x-auto flex gap-2 px-4">
        {menuData.map(({ category }) => (
          <button
            key={category}
            className={`px-4 py-1 text-base whitespace-nowr font-semibold rounded-full transition-all ${
              activeCategory === category
                ? "bg-yellow-400 text-gray-800"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div className="mt-6 space-y-8">
        {getItemsForCategory(activeCategory).map((item, index) => (
          <MenuItem key={index} {...item} />
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

export default RestaurantMenu2;
