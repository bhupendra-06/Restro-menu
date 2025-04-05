import React from "react";

const MenuItem = ({ name, description, price, imageUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex items-center p-4">
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600 mt-1">{description}</p>
        <div className="mt-4">
          <span className="text-lg font-medium text-green-600">${price}</span>
        </div>
      </div>
      <div className="ml-4 rounded-xl">
        <img
          src={imageUrl}
          alt={name}
          className="w-32 h-20 object-contain rounded-xl"
        />
      </div>
    </div>
  );
};

const MenuCategory = ({ category, items }) => {
  return (
    <div id={category} className="mb-5">
      <h2 className="text-3xl font-bold text-gray-800">{category}</h2>
      <div className="space-y-6 mt-6">
        {items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

const RestaurantMenu = () => {
  const menuData = [
    {
      category: "Starters",
      items: [
        {
          name: "Spring Rolls",
          description: "Crispy served with dipping sauce.",
          price: 5.99,
          imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          name: "Garlic Bread",
          description: "Toasted bread with garlic butter.",
          price: 4.99,
          imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
      ]
    },
    {
      category: "Main Course",
      items: [
        {
          name: "Grilled Chicken",
          description: "Juicy grilled chicken served with mashed potatoes and veggies.",
          price: 12.99,
          imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          name: "Vegetable Pasta",
          description: "Pasta with a rich and creamy vegetable sauce.",
          price: 10.99,
          imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
      ]
    },
    {
      category: "Desserts",
      items: [
        {
          name: "Chocolate Cake",
          description: "Delicious and moist chocolate cake with a rich frosting.",
          price: 6.99,
          imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          name: "Ice Cream",
          description: "Creamy vanilla ice cream with a choice of toppings.",
          price: 3.99,
          imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto p-6 max-w-md bg-gray-300">
      {menuData.map((categoryData, index) => (
        <MenuCategory key={index} {...categoryData} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
