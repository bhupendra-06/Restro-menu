import React, { useState } from "react";
import menuData from "./menuData.json";


const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("starters");

  return (
    <div className="p-6 max-w-md mx-auto text-center bg-[url('https://www.transparenttextures.com/patterns/dimension.png')] bg-orange-100 text-gray-900 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-[#d32f2f]">Restaurant Menu</h1>
      <div className="flex justify-center gap-2 flex-wrap mb-6">
        {Object.keys(menuData).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
              selectedCategory === category
                ? "bg-[#d32f2f] text-white"
                : "bg-[#ffccbc] text-gray-900 hover:bg-[#ffab91]"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div className="space-y-4">
        {menuData[selectedCategory].map((item, index) => (
          <div key={index} className="p-4 bg-[#ffebee] rounded-lg shadow-md border-l-4 border-[#d32f2f]">
            <h2 className="font-semibold text-lg text-[#b71c1c]">{item.name}</h2>
            <p className="text-sm text-gray-700">{item.description}</p>
            <p className="text-[#d32f2f] font-bold">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
