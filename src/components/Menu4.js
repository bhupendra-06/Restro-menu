import React, { useState } from "react";

const menuData = {
  starters: [
    { name: "Truffle Arancini", description: "Crispy risotto balls infused with truffle.", price: "₹450", image: "https://images.unsplash.com/photo-1565291061-1fef83a3de26" },
    { name: "Foie Gras Toast", description: "French foie gras on buttered brioche.", price: "₹850", image: "https://images.unsplash.com/photo-1547520731-37462e18d07b" },
    { name: "Caviar Blini", description: "Russian blini topped with premium caviar.", price: "₹1200", image: "https://images.unsplash.com/photo-1576106246231-174620df07c4" },
    { name: "Lobster Bisque", description: "Rich and creamy lobster soup.", price: "₹600", image: "https://images.unsplash.com/photo-1604274415019-0cae4bb1fc97" },
    { name: "Oysters Rockefeller", description: "Baked oysters with herb butter.", price: "₹900", image: "https://images.unsplash.com/photo-1587970809275-1a5c6e6e7038" }
  ],
  soupsSalads: [
    { name: "French Onion Soup", description: "Caramelized onions in beef broth, topped with melted cheese.", price: "₹700", image: "https://images.unsplash.com/photo-1565291061-1fef83a3de26" },
    { name: "Caesar Salad", description: "Classic salad with romaine, parmesan, and house dressing.", price: "₹600", image: "https://images.unsplash.com/photo-1503405071469-191b189ac446" },
    { name: "Caprese Salad", description: "Fresh mozzarella, tomatoes, and basil with balsamic glaze.", price: "₹750", image: "https://images.unsplash.com/photo-1565291061-1fef83a3de26" }
  ],
  mainCourse: [
    { name: "Wagyu Steak", description: "A5 grade Wagyu beef cooked to perfection.", price: "₹5000", image: "https://images.unsplash.com/photo-1590593782537-dce5c65d9d0f" },
    { name: "Black Truffle Pasta", description: "Homemade pasta with black truffle shavings.", price: "₹2200", image: "https://images.unsplash.com/photo-1605225825326-c1b01a446c69" },
    { name: "Lobster Thermidor", description: "Grilled lobster with creamy brandy sauce.", price: "₹3500", image: "https://images.unsplash.com/photo-1590600162750-d5679a8838b0" },
    { name: "Duck à l'Orange", description: "French duck with citrus glaze.", price: "₹2800", image: "https://images.unsplash.com/photo-1581535222264-3583196b85ba" },
    { name: "Chilean Sea Bass", description: "Pan-seared sea bass with saffron sauce.", price: "₹3200", image: "https://images.unsplash.com/photo-1600911347463-d20ff4be6a3d" }
  ],
  seafoodSpecialties: [
    { name: "Grilled King Prawns", description: "Jumbo prawns with garlic butter sauce.", price: "₹2800", image: "https://images.unsplash.com/photo-1581567880104-2144c287c413" },
    { name: "Seared Scallops", description: "Perfectly seared scallops with white wine sauce.", price: "₹2500", image: "https://images.unsplash.com/photo-1565291061-1fef83a3de26" },
    { name: "Miso Glazed Salmon", description: "Salmon filet with a miso glaze and sesame crust.", price: "₹3000", image: "https://images.unsplash.com/photo-1600558590575-43b60a5c21b5" }
  ],
  desserts: [
    { name: "Gold Leaf Chocolate Mousse", description: "Rich chocolate mousse topped with edible gold.", price: "₹1200", image: "https://images.unsplash.com/photo-1585331385071-3e4d8e97cfae" },
    { name: "Crème Brûlée", description: "Classic French vanilla custard with caramelized sugar.", price: "₹950", image: "https://images.unsplash.com/photo-1571020105180-5b9f7e3dbf62" },
    { name: "Raspberry Soufflé", description: "Light and airy raspberry-infused dessert.", price: "₹1100", image: "https://images.unsplash.com/photo-1585288705074-87f56f19bce3" },
    { name: "Tiramisu", description: "Authentic Italian coffee-flavored delight.", price: "₹1000", image: "https://images.unsplash.com/photo-1571020105180-5b9f7e3dbf62" },
    { name: "Macaron Selection", description: "Assorted gourmet macarons.", price: "₹800", image: "https://images.unsplash.com/photo-1576078342487-e5c7abda3b8f" }
  ]
};

const Menu4 = () => {
  const [selectedCategory, setSelectedCategory] = useState("starters");

  return (
    <div className="bg-[#f4f7f6] text-gray-900 p-6 max-w-md sm:max-h-[150vh] overflow-scroll">
      <h1 className="text-3xl font-bold text-[#4e8d92] text-center mb-4">Exclusive Gourmet Menu</h1>

      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {Object.keys(menuData).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={` sm:w-auto px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 border-2 border-[#4e8d92] text-[#4e8d92] hover:bg-[#4e8d92] hover:text-white ${
              selectedCategory === category ? "bg-[#4e8d92] text-white" : ""
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        {menuData[selectedCategory].map((item, index) => (
          <div key={index} className="p-5 bg-[#e9f1f2] rounded-lg shadow-md">
            <img src={"https://images.pexels.com/photos/28743097/pexels-photo-28743097/free-photo-of-delicious-seafood-pasta-fusilli-with-basil-garnish.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt={item.name} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h2 className="text-xl font-semibold text-[#4e8d92] mb-2">{item.name}</h2>
            <p className="text-sm text-gray-600 mb-2">{item.description}</p>
            <p className="text-[#4e8d92] font-bold">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu4;
