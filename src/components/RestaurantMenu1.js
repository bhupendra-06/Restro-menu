import React, { useState } from "react";

const MenuItem = ({ name, price, imageUrl }) => {
  return (
    <div className="bg-gray-800 shadow-lg rounded-lg flex items-center p-4 hover:shadow-xl transition-all duration-300">
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <span className="text-md font-medium text-yellow-400">${price}</span>
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

const RestaurantMenu1 = () => {
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
            "https://images.pexels.com/photos/28743097/pexels-photo-28743097/free-photo-of-delicious-seafood-pasta-fusilli-with-basil-garnish.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          name: "Mozzarella Sticks",
          price: 6.99,
          imageUrl:
            "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          name: "Mozzarella Sticks",
          price: 6.99,
          imageUrl:
            "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          name: "Garlic Bread",
          price: 4.99,
          imageUrl:
            "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          name: "Mozzarella Sticks",
          price: 6.99,
          imageUrl:
            "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          name: "Mozzarella Sticks",
          price: 6.99,
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
        {
          name: "Beef Steak",
          price: 18.99,
          imageUrl:
            "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          name: "Vegetable Pasta",
          price: 10.99,
          imageUrl:
            "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          name: "Beef Steak",
          price: 18.99,
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
        {
          name: "Crème Brûlée",
          description: "Classic French vanilla custard with caramelized sugar.",
          price: "₹950",
          image:
            "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          name: "Pistachio Baklava",
          description: "Layered pastry with chopped pistachios and syrup.",
          price: "₹850",
          image:
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
    {
      category: "Beverages",
      items: [
        {
          name: "Coca Cola",
          price: 2.49,
          imageUrl:
            "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          name: "Lemonade",
          price: 3.49,
          imageUrl:
            "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          name: "Coca Cola",
          price: 2.49,
          imageUrl:
            "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          name: "Lemonade",
          price: 3.49,
          imageUrl:
            "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
      ],
    },
  ];

  const getItemsForCategory = (category) => {
    return menuData.find((data) => data.category === category)?.items || [];
  };

  return (
    <div className="container mx-auto p-6 bg-gray-900 text-white max-w-md">
      {/* Category Navigation */}
      <div className="sticky top-0 bg-gradient-to-r from-indigo-800 to-purple-800 py-3 z-10 overflow-x-auto flex gap-2 px-4">
        {menuData.map(({ category }) => (
          <button
            key={category}
            className={`px-4 py-1 text-base whitespace-nowrap font-semibold rounded-full transition-all ${
              activeCategory === category
                ? "bg-yellow-500 text-gray-800"
                : "bg-gray-700 text-gray-300"
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
        className="absolute h-[500vh] inset-0 bg-gradient-to-r from-indigo-800 to-purple-800 opacity-50 animate-pulse"
        style={{
          zIndex: -1,
        }}
      />
    </div>
  );
};

export default RestaurantMenu1;
