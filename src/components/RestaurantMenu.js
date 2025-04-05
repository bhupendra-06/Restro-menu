// import React, { useState } from "react";

// const MenuItem = ({ name, price, imageUrl }) => {
//   return (
//     <div className="bg-white shadow-md rounded-lg flex items-center p-3">
//       <div className="flex-1">
//         <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
//         <span className="text-md font-medium text-green-600">${price}</span>
//       </div>
//       <div className="ml-3">
//         <img src={imageUrl} alt={name} className="w-20 h-20 object-cover rounded-lg" />
//       </div>
//     </div>
//   );
// };

// const MenuCategory = ({ category, items }) => {
//   return (
//     <div id={category} className="mb-6">
//       <h2 className="text-xl font-bold text-gray-800 mb-3">{category}</h2>
//       <div className="space-y-3">
//         {items.map((item, index) => (
//           <MenuItem key={index} {...item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// const RestaurantMenu = () => {
//   const [activeCategory, setActiveCategory] = useState("Starters");

//   const menuData = [
//     {
//       category: "Starters",
//       items: [
//         { name: "Spring Rolls", price: 5.99, imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
//         { name: "Garlic Bread", price: 4.99, imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }
//       ]
//     },
//     {
//       category: "Main Course",
//       items: [
//         { name: "Grilled Chicken", price: 12.99, imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
//         { name: "Vegetable Pasta", price: 10.99, imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }
//       ]
//     },
//     {
//       category: "Desserts",
//       items: [
//         { name: "Chocolate Cake", price: 6.99, imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
//         { name: "Ice Cream", price: 3.99, imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }
//       ]
//     }
//   ];

//   const scrollToCategory = (category) => {
//     setActiveCategory(category);
//     document.getElementById(category).scrollIntoView({ behavior: "smooth", block: "start" });
//   };

//   return (
//     <div className="container mx-auto p-4">
//       {/* Category Navigation */}
//       <div className="sticky top-0 bg-white shadow-md py-2 z-10 overflow-x-auto flex gap-4 px-4">
//         {menuData.map(({ category }) => (
//           <button
//             key={category}
//             className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
//               activeCategory === category ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700"
//             }`}
//             onClick={() => scrollToCategory(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Menu Items */}
//       <div className="mt-4 space-y-6">
//         {menuData.map((categoryData, index) => (
//           <MenuCategory key={index} {...categoryData} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RestaurantMenu;

















// import React, { useState } from "react";

// const MenuItem = ({ name, price, onClick }) => {
//   return (
//     <div
//       className="p-3 border-b border-gray-300 cursor-pointer hover:bg-gray-100 transition-all"
//       onClick={onClick}
//     >
//       <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
//       <span className="text-md font-medium text-green-600">${price}</span>
//     </div>
//   );
// };

// const RestaurantMenu = () => {
//   const [selectedItem, setSelectedItem] = useState(null);

//   const menuItems = [
//     { name: "Spring Rolls", price: 5.99, imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
//     { name: "Garlic Bread", price: 4.99, imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
//     { name: "Grilled Chicken", price: 12.99, imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
//     { name: "Vegetable Pasta", price: 10.99, imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }
//   ];

//   return (
//     <div className="container mx-auto p-4">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {/* Menu List */}
//         <div className="bg-white shadow-md rounded-lg p-4">
//           <h2 className="text-xl font-bold text-gray-800 mb-3">Menu</h2>
//           {menuItems.map((item, index) => (
//             <MenuItem key={index} {...item} onClick={() => setSelectedItem(item)} />
//           ))}
//         </div>

//         {/* Image Display */}
//         <div className="flex justify-center items-center">
//           {selectedItem ? (
//             <div className="transition-opacity duration-300 ease-in-out">
//               <h3 className="text-lg font-bold text-gray-800 text-center mb-2">{selectedItem.name}</h3>
//               <img
//                 src={selectedItem.imageUrl}
//                 alt={selectedItem.name}
//                 className="w-64 h-64 object-cover rounded-lg shadow-lg"
//               />
//             </div>
//           ) : (
//             <p className="text-gray-500 text-center">Click an item to view the image</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RestaurantMenu;

// import React, { useState } from "react";

// const MenuItem = ({ name, price, imageUrl, onClick, isSelected }) => {
//   return (
//     <div
//       className={`p-3 border-b border-gray-300 cursor-pointer hover:bg-gray-100 transition-all ${isSelected ? "bg-gray-100" : ""}`}
//       onClick={onClick}
//     >
//       <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
//       {isSelected && (
//         <div className="mt-2">
//           <img
//             src={imageUrl}
//             alt={name}
//             className="w-32 h-32 object-cover rounded-lg shadow-md"
//           />
//         </div>
//       )}
//       <span className="text-md font-medium text-green-600">${price}</span>
//     </div>
//   );
// };

// const RestaurantMenu = () => {
//   const [selectedItem, setSelectedItem] = useState(null);

//   const menuItems = [
//     { name: "Spring Rolls", price: 5.99, imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
//     { name: "Garlic Bread", price: 4.99, imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
//     { name: "Grilled Chicken", price: 12.99, imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
//     { name: "Vegetable Pasta", price: 10.99, imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }
//   ];

//   return (
//     <div className="container mx-auto p-4">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {/* Menu List */}
//         <div className="bg-white shadow-md rounded-lg p-4">
//           <h2 className="text-xl font-bold text-gray-800 mb-3">Menu</h2>
//           {menuItems.map((item, index) => (
//             <MenuItem
//               key={index}
//               {...item}
//               onClick={() => setSelectedItem(item)}
//               isSelected={selectedItem && selectedItem.name === item.name}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RestaurantMenu;














// import React, { useState } from "react";
// import "tailwindcss/tailwind.css";

// const RestaurantMenu = () => {
//   const [activeCategory, setActiveCategory] = useState("Starters");

//   const menuData = [
//     {
//       category: "Starters",
//       items: [
//         {
//           name: "Spring Rolls",
//           price: 5.99,
//           imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//         },
//         {
//           name: "Garlic Bread",
//           price: 4.99,
//           imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//         },
//       ],
//     },
//     {
//       category: "Main Course",
//       items: [
//         {
//           name: "Grilled Chicken",
//           price: 12.99,
//           imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//         },
//         {
//           name: "Vegetable Pasta",
//           price: 10.99,
//           imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//         },
//       ],
//     },
//     {
//       category: "Desserts",
//       items: [
//         {
//           name: "Chocolate Cake",
//           price: 6.99,
//           imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//         },
//         {
//           name: "Ice Cream",
//           price: 3.99,
//           imageUrl: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//         },
//       ],
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-900 relative overflow-hidden">
//       {/* Background Animation */}
//       <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 opacity-20 animate-pulse"></div>

//       {/* Category Navigation */}
//       <div className="sticky top-0 bg-white shadow-md py-3 px-4 flex gap-4 overflow-x-auto whitespace-nowrap z-10">
//         {menuData.map(({ category }) => (
//           <button
//             key={category}
//             className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
//               activeCategory === category ? "bg-green-600 text-white" : "bg-gray-300 text-gray-700"
//             }`}
//             onClick={() => setActiveCategory(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Menu Items */}
//       <div className="p-4 grid gap-4 relative z-10">
//         {menuData
//           .filter(({ category }) => category === activeCategory)
//           .map(({ items }) =>
//             items.map((item, index) => (
//               <div
//                 key={index}
//                 className="rounded-lg overflow-hidden shadow-lg bg-white text-gray-900 flex items-center transform hover:scale-105 transition-transform duration-300"
//               >
//                 <img
//                   src={item.imageUrl}
//                   alt={item.name}
//                   className="w-24 h-24 object-cover"
//                 />
//                 <div className="p-3 flex-1">
//                   <h3 className="text-lg font-bold">{item.name}</h3>
//                   <span className="text-md font-medium text-green-600">${item.price.toFixed(2)}</span>
//                 </div>
//               </div>
//             ))
//           )}
//       </div>
//     </div>
//   );
// };

// export default RestaurantMenu;

















// import React, { useState } from "react";

// const MenuItem = ({ name, price, imageUrl }) => {
//   return (
//     <div className="bg-white shadow-lg rounded-lg flex items-center p-4 hover:shadow-xl transition-all duration-300">
//       <div className="flex-1">
//         <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
//         <span className="text-md font-medium text-yellow-500">${price}</span>
//       </div>
//       <div className="ml-3">
//         <img
//           src={imageUrl}
//           alt={name}
//           className="w-20 h-20 object-cover rounded-lg"
//         />
//       </div>
//     </div>
//   );
// };

// const MenuCategory = ({ category, items }) => {
//   return (
//     <div id={category} className="mb-6">
//       <h2 className="text-2xl font-bold text-gray-800 mb-4">{category}</h2>
//       <div className="space-y-4">
//         {items.map((item, index) => (
//           <MenuItem key={index} {...item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// const RestaurantMenu = () => {
//   const [activeCategory, setActiveCategory] = useState("Starters");

//   const menuData = [
//     {
//       category: "Starters",
//       items: [
//         {
//           name: "Spring Rolls",
//           price: 5.99,
//           imageUrl:
//             "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//         },
//         {
//           name: "Garlic Bread",
//           price: 4.99,
//           imageUrl:
//             "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//         },
//       ],
//     },
//     {
//       category: "Main Course",
//       items: [
//         {
//           name: "Grilled Chicken",
//           price: 12.99,
//           imageUrl:
//             "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//         },
//         {
//           name: "Vegetable Pasta",
//           price: 10.99,
//           imageUrl:
//             "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//         },
//       ],
//     },
//     {
//       category: "Desserts",
//       items: [
//         {
//           name: "Chocolate Cake",
//           price: 6.99,
//           imageUrl:
//             "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//         },
//         {
//           name: "Ice Cream",
//           price: 3.99,
//           imageUrl:
//             "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//         },
//       ],
//     },
//   ];

//   const scrollToCategory = (category) => {
//     setActiveCategory(category);
//     document
//       .getElementById(category)
//       .scrollIntoView({ behavior: "smooth", block: "start" });
//   };

//   return (
//     <div className="container mx-auto p-6">
//       {/* Category Navigation */}
//       <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-indigo-500 py-3 z-10 overflow-x-auto flex gap-4 px-4">
//         {menuData.map(({ category }) => (
//           <button
//             key={category}
//             className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
//               activeCategory === category
//                 ? "bg-yellow-400 text-gray-800"
//                 : "bg-gray-300 text-gray-700"
//             }`}
//             onClick={() => scrollToCategory(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Menu Items */}
//       <div className="mt-6 space-y-8">
//         {menuData.map((categoryData, index) => (
//           <MenuCategory key={index} {...categoryData} />
//         ))}
//       </div>

//       {/* Background Animation */}
//       <div
//         className="absolute h-[500vh] inset-0 bg-gradient-to-r from-purple-600 to-indigo-500 opacity-50 animate-pulse"
//         style={{
//           zIndex: -1,
//         }}
//       />
//     </div>
//   );
// };

// export default RestaurantMenu;


import React, { useState } from "react";

const MenuItem = ({ name, price, imageUrl }) => {
  return (
    <div className="bg-gradient-to-r from-pink-400 via-red-300 to-red-500 border border-gray-50 shadow-lg rounded-lg flex items-center p-4 hover:shadow-xl transition-all duration-300">
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <span className="text-md font-medium text-yellow-200">${price}</span>
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
    <div className="container mx-auto py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white max-w-md">
      {/* Category Navigation */}
      <div className="sticky top-0 bg-gradient-to-r from-pink-400 to-pink-600 py-3 z-10 flex flex-wrap justify-center gap-2 px-4">
        {menuData.map(({ category }) => (
          <button
            key={category}
            className={`px-4 py-1 text-base whitespace-nowrap font-semibold rounded-full transition-all ${
              activeCategory === category
                ? "bg-yellow-300 text-gray-900"
                : "bg-pink-600 text-gray-300"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div className="mt-6 px-5 space-y-8">
        {getItemsForCategory(activeCategory).map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>

      {/* Background Animation */}
      <div
        className="absolute h-[500vh] inset-0 bg-gradient-to-r from-pink-300 to-red-500 opacity-40 animate-pulse"
        style={{
          zIndex: -1,
        }}
      />
    </div>
  );
};

export default RestaurantMenu;
