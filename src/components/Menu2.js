import React, { useState } from "react";
import menuData from "./menuData.json";

const Menu2 = () => {
  const [selectedCategory, setSelectedCategory] = useState("starters");

  return (
    <div className="p-6 max-w-md mx-auto text-center bg-gradient-to-br from-gray-900 to-black text-white rounded-lg shadow-2xl">
      <h1 className="text-3xl font-extrabold mb-5 text-[#ffd700] tracking-wider">Exclusive Gourmet Menu</h1>
      <div className="flex justify-center gap-2 mb-4 flex-wrap">
        {Object.keys(menuData).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 border-2 border-[#ffd700]  ${
              selectedCategory === category ? "bg-[#ffd700] text-black" : "text-[#ffd700] hover:bg-[#ffd700] hover:text-black"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4">
        {menuData[selectedCategory].map((item, index) => (
          <div key={index} className="p-4 bg-[#1e1e1e] hover:bg-[#474646] rounded-lg shadow-md border border-[#ffd700]">
            <h2 className="font-semibold text-base text-[#ffd700]">{item.name}</h2>
            <p className="text-xs text-gray-300">{item.description}</p>
            <p className="text-[#ffd700] font-bold mt-2">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu2;
