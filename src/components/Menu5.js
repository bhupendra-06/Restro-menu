import React, { useState } from "react";
import menuData from "./menuData.json";

const Menu5 = () => {
  const [selectedCategory, setSelectedCategory] = useState("starters");

  return (
    <div className="p-5 sm:p-10 max-w-full mx-auto text-center bg-gradient-to-br from-gray-800 to-black text-white rounded-xl shadow-2xl">
      <h1 className="text-3xl font-extrabold mb-6 text-[#FFD700] tracking-wider">Exclusive Gourmet Menu</h1>
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {Object.keys(menuData).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 border-2 border-[#FFD700]  ${
              selectedCategory === category ? "bg-[#FFD700] text-black" : "text-[#FFD700] hover:bg-[#FFD700] hover:text-black"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {menuData[selectedCategory].map((item, index) => (
          <div key={index} className="bg-[#2d2d2d] rounded-lg shadow-md overflow-hidden">
            <img
              src={item.image || "https://images.pexels.com/photos/28743097/pexels-photo-28743097/free-photo-of-delicious-seafood-pasta-fusilli-with-basil-garnish.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
              alt={item.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg text-[#FFD700]">{item.name}</h2>
              <p className="text-sm text-gray-300">{item.description}</p>
              <p className="text-[#FFD700] font-bold mt-2">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu5;






