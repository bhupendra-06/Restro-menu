import React, { useState } from "react";
import menuData from "./menuData.json";

const Menu1 = () => {
  const [selectedCategory, setSelectedCategory] = useState("starters");

  return (
    <>
      <section className="p-6 max-w-md mx-auto text-center bg-[#333] text-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-semibold mb-6 text-[#FFD700]">
          
        </h1>
        <div className="flex justify-center gap-4 flex-wrap mb-6">
          {Object.keys(menuData).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg text-lg font-medium transition-colors duration-300 ${
                selectedCategory === category
                  ? "bg-[#FFD700] text-black"
                  : "bg-[#555] text-white hover:bg-[#FFD700] hover:text-black"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <div className="space-y-6">
          {menuData[selectedCategory].map((item, index) => (
            <div
              key={index}
              className="p-5 bg-[#444] rounded-lg shadow-md border-l-4 border-[#FFD700]"
            >
              <h2 className="font-semibold text-xl text-[#FFD700]">
                {item.name}
              </h2>
              <p className="text-md text-[#ddd]">{item.description}</p>
              <p className="text-[#FFD700] font-bold">{item.price}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="p-8 max-w-lg mx-auto text-center bg-[#f9fbe7] text-[#4caf50] rounded-lg shadow-xl">
        {/* <h1 className="text-4xl font-extrabold mb-8 text-[#388e3c]">
          Restaurant Menu
        </h1> */}
        <div className="flex justify-center gap-6 flex-wrap mb-6">
          {Object.keys(menuData).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl text-lg font-semibold transition-colors duration-300 ${
                selectedCategory === category
                  ? "bg-[#388e3c] text-white"
                  : "bg-[#81c784] text-[#388e3c] hover:bg-[#66bb6a] hover:text-white"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <div className="space-y-6">
          {menuData[selectedCategory].map((item, index) => (
            <div
              key={index}
              className="p-5 bg-[#c8e6c9] rounded-lg shadow-md border-l-4 border-[#388e3c]"
            >
              <h2 className="font-semibold text-xl text-[#388e3c]">
                {item.name}
              </h2>
              <p className="text-md text-[#2c6e49]">{item.description}</p>
              <p className="text-[#388e3c] font-bold">{item.price}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Menu1;
