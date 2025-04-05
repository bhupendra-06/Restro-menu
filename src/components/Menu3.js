import React, { useState } from "react";

const menuData = {
  starters: [
    { name: "Truffle Arancini", description: "Crispy risotto balls infused with truffle.", price: "₹450" },
    { name: "Foie Gras Toast", description: "French foie gras on buttered brioche.", price: "₹850" },
    { name: "Caviar Blini", description: "Russian blini topped with premium caviar.", price: "₹1200" },
    { name: "Lobster Bisque", description: "Rich and creamy lobster soup.", price: "₹600" },
    { name: "Oysters Rockefeller", description: "Baked oysters with herb butter.", price: "₹900" }
  ],
  mainCourse: [
    { name: "Wagyu Steak", description: "A5 grade Wagyu beef cooked to perfection.", price: "₹5000" },
    { name: "Black Truffle Pasta", description: "Homemade pasta with black truffle shavings.", price: "₹2200" },
    { name: "Lobster Thermidor", description: "Grilled lobster with creamy brandy sauce.", price: "₹3500" },
    { name: "Duck à l'Orange", description: "French duck with citrus glaze.", price: "₹2800" },
    { name: "Chilean Sea Bass", description: "Pan-seared sea bass with saffron sauce.", price: "₹3200" }
  ],
  desserts: [
    { name: "Gold Leaf Chocolate Mousse", description: "Rich chocolate mousse topped with edible gold.", price: "₹1200" },
    { name: "Crème Brûlée", description: "Classic French vanilla custard with caramelized sugar.", price: "₹950" },
    { name: "Raspberry Soufflé", description: "Light and airy raspberry-infused dessert.", price: "₹1100" },
    { name: "Tiramisu", description: "Authentic Italian coffee-flavored delight.", price: "₹1000" },
    { name: "Macaron Selection", description: "Assorted gourmet macarons.", price: "₹800" }
  ],
  beverages: [
    { name: "Vintage Red Wine", description: "Aged Cabernet Sauvignon.", price: "₹5000" },
    { name: "Classic Martini", description: "Premium gin and dry vermouth.", price: "₹1500" },
    { name: "Champagne Brut", description: "Finest French champagne.", price: "₹7000" },
    { name: "Single Malt Whiskey", description: "18-year aged Scotch.", price: "₹4500" },
    { name: "Royal Espresso", description: "Dark-roasted coffee with gold flakes.", price: "₹800" }
  ],
  category5: [
    { name: "Gold Leaf Chocolate Mousse", description: "Rich chocolate mousse topped with edible gold.", price: "₹1200" },
    { name: "Crème Brûlée", description: "Classic French vanilla custard with caramelized sugar.", price: "₹950" },
    { name: "Raspberry Soufflé", description: "Light and airy raspberry-infused dessert.", price: "₹1100" },
    { name: "Tiramisu", description: "Authentic Italian coffee-flavored delight.", price: "₹1000" },
    { name: "Macaron Selection", description: "Assorted gourmet macarons.", price: "₹800" }
  ],
  category6: [
    { name: "Vintage Red Wine", description: "Aged Cabernet Sauvignon.", price: "₹5000" },
    { name: "Classic Martini", description: "Premium gin and dry vermouth.", price: "₹1500" },
    { name: "Champagne Brut", description: "Finest French champagne.", price: "₹7000" },
    { name: "Single Malt Whiskey", description: "18-year aged Scotch.", price: "₹4500" },
    { name: "Royal Espresso", description: "Dark-roasted coffee with gold flakes.", price: "₹800" }
  ]
};

const Menu3 = () => {
  const [selectedCategory, setSelectedCategory] = useState("starters");

  return (
    <div className="p-6 max-w-md mx-auto text-center bg-black text-[#ffd700] rounded-lg shadow-xl">
      <h1 className="text-2xl font-bold mb-6">Luxury Dining Menu</h1>
      <div className="flex justify-center gap-3 mb-6 flex-wrap">
        {Object.keys(menuData).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 ${
              selectedCategory === category
                ? "bg-[#ffd700] text-black"
                : "bg-[#424242] text-[#ffd700] hover:bg-[#616161]"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div className="space-y-4">
        {menuData[selectedCategory].map((item, index) => (
          <div key={index} className="p-4 bg-[#424242] rounded-lg shadow-md border-l-4 border-[#ffd700]">
            <h2 className="font-semibold text-base">{item.name}</h2>
            <p className="text-sm text-[#f1f1f1]">{item.description}</p>
            <p className="text-[#ffd700] font-bold text-sm">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu3;
