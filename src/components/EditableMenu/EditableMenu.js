// import { useEffect, useState } from "react";

// const fallbackImage =
//   "https://i0.wp.com/blog.themalamarket.com/wp-content/uploads/2024/06/Vegetarian-pulled-noodles-lead-more-sat.jpg?resize=1200%2C900&ssl=1";

// const EditableMenu = () => {
//   const [menuItems, setMenuItems] = useState([]);
//   const [activeCategory, setActiveCategory] = useState("All");

//   useEffect(() => {
//     fetch(
//       "https://hotel-menu-backend.vercel.app/api/v1/hotel1/get-menu-items"
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setMenuItems(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching menu items:", error);
//       });
//   }, []);

//   // Extract unique categories from fetched menu
//   const categories = ["All", ...new Set(menuItems.map(item => item.category))];

//   // Filtered items based on selected category
//   const filteredItems =
//     activeCategory === "All"
//       ? menuItems
//       : menuItems.filter(item => item.category === activeCategory);

//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-900 relative overflow-hidden">
//       {/* Animated Background */}
//       <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 opacity-20 animate-pulse"></div>

//       {/* Title */}
//       <h1 className="text-3xl font-bold text-center py-6 relative z-10">🍽️ Our Menu</h1>

//       {/* Category Tabs */}
//       <div className="sticky top-0 bg-white shadow-md py-3 px-4 flex gap-4 overflow-x-auto whitespace-nowrap z-20">
//         {categories.map((category) => (
//           <button
//             key={category}
//             onClick={() => setActiveCategory(category)}
//             className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
//               activeCategory === category
//                 ? "bg-green-600 text-white"
//                 : "bg-gray-300 text-gray-700"
//             }`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Menu Grid */}
//       <div className="p-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3 relative z-10">
//         {filteredItems.map((item) => (
//           <div
//             key={item._id}
//             className="rounded-lg overflow-hidden shadow-lg bg-white text-gray-900 flex items-center transform hover:scale-105 transition-transform duration-300"
//           >
//             <img
//               src={item.imageUrl || fallbackImage}
//               alt={item.name}
//               onError={(e) => (e.target.src = fallbackImage)}
//               className="w-24 h-24 object-cover"
//             />
//             <div className="p-3 flex-1">
//               <h3 className="text-lg font-bold">{item.name}</h3>
//               {item.description && (
//                 <p className="text-sm text-gray-600 mt-1">{item.description}</p>
//               )}
//               <div className="flex justify-between items-center mt-2">
//                 <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full capitalize">
//                   {item.category}
//                 </span>
//                 <span className="text-green-600 font-bold">₹{item.price}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EditableMenu;





import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fallbackImage =
  "https://i0.wp.com/blog.themalamarket.com/wp-content/uploads/2024/06/Vegetarian-pulled-noodles-lead-more-sat.jpg?resize=1200%2C900&ssl=1";

const EditableMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("starter");
  const [modalData, setModalData] = useState({ item: null, isSpecial: false });
  const [showTodaySpecial, setShowTodaySpecial] = useState(true);
  const [showMenu, setShowMenu] = useState(false); // For handling intro and menu transition
    

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_API_URL}/api/v1/hotel1/get-menu-items`)
      .then((response) => response.json())
      .then((data) => {
        setMenuItems(data);
        if (data.length > 0) {
          setModalData({ item: data[0], isSpecial: true });
        }
      })
      .catch((error) => {
        console.error("Error fetching menu items:", error);
      });

    setTimeout(() => {
      setShowMenu(true); // Transition to menu content after the intro
    }, 2500); // 2.5 seconds for the intro animation
  }, []);

  const categories = [
    "All",
    ...new Set(menuItems.map((item) => item.category)),
  ];

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setModalData({ item: null, isSpecial: false });
      setShowTodaySpecial(false);
    }
  };

  const closeTodaySpecial = () => {
    setShowTodaySpecial(false);
    setModalData({ item: null, isSpecial: false });
  };

  return (
    <div className="h-screen overflow-auto pb-10 bg-gray-900 text-white relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black opacity-70"></div>

      <AnimatePresence>
        {!showMenu ? (
          <motion.div
            key="intro"
            className="absolute w-full h-full flex flex-col items-center justify-center text-center px-6 bg-black z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
          >
            <motion.h1
              className="text-5xl font-extrabold mb-4 text-[#FFB400]"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            >
              Welcome to Fine Dine
            </motion.h1>
            <motion.p
              className="text-lg text-gray-300 mb-6 max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.6, duration: 1.5 } }}
            >
              Indulge in our exquisite selection of gourmet dishes.
            </motion.p>
            <motion.div
              className="h-2 w-24 bg-[#FFB400] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "96px", transition: { delay: 1, duration: 1 } }}
            />
          </motion.div>
        ) : (
          <div className="relative z-0">
            <h1 className="text-4xl font-extrabold text-center py-8 tracking-wide">
              🍽️ Discover Our Flavours
            </h1>

            <div className="sticky top-0 bg-gray-800 shadow-md py-3 px-4 flex gap-3 overflow-x-auto whitespace-nowrap z-20">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 text-sm font-semibold rounded-full capitalize transition-all duration-200 border ${
                    activeCategory === category
                      ? "bg-yellow-500 text-black border-yellow-500"
                      : "bg-gray-700 text-white border-gray-600 hover:bg-yellow-600 hover:text-black"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item) => (
                <div
                  key={item._id}
                  onClick={() => setModalData({ item, isSpecial: false })}
                  className="cursor-pointer rounded-xl overflow-hidden shadow-xl bg-gray-800 text-white flex items-center transform hover:scale-105 transition-transform duration-300 border border-gray-700"
                >
                  <img
                    src={item.imageUrl || fallbackImage}
                    alt={item.name}
                    onError={(e) => {
                      if (e.target.src !== fallbackImage)
                        e.target.src = fallbackImage;
                    }}
                    className="w-28 h-28 object-cover m-3 rounded-lg"
                  />
                  <div className="p-3 flex-1">
                    <h3 className="text-xl font-bold text-yellow-400">{item.name}</h3>
                    {item.description && (
                      <p className="text-sm text-gray-300 mt-1">{item.description.length > 45 ? item.description.slice(0, 47)+ "...": item.description}</p>
                    )}
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded-full capitalize">
                        {item.category}
                      </span>
                      <span className="text-green-400 font-bold">₹{item.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Today’s Special Modal */}
      {modalData.item && modalData.isSpecial && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-10 p-4"
          onClick={closeModal}
        >
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-200 text-black rounded-2xl p-6 max-w-sm w-full relative shadow-2xl border border-yellow-400">
            <button
              className="absolute top-2 right-2 text-black text-3xl font-bold bg-yellow-400 hover:bg-yellow-300 rounded-full w-8 h-8 flex justify-center items-center"
              onClick={closeTodaySpecial}
            >
              &times;
            </button>

            <p className="text-xl uppercase font-bold text-center text-yellow-700 mb-1">
              ⭐ Today’s Special
            </p>
            <img
              src={modalData.item.imageUrl || fallbackImage}
              alt={modalData.item.name}
              onError={(e) => {
                if (e.target.src !== fallbackImage)
                  e.target.src = fallbackImage;
              }}
              className="w-full h-48 object-cover rounded-xl mb-4 border border-yellow-300"
            />
            <h2 className="text-2xl font-bold text-center text-yellow-900 mb-2">
              {modalData.item.name}
            </h2>
            {modalData.item.description && (
              <p className="text-sm text-gray-800 mb-3 text-center">
                {modalData.item.description}
              </p>
            )}
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs bg-yellow-500 text-black px-2 py-1 rounded-full capitalize">
                {modalData.item.category}
              </span>
              <span className="text-green-700 font-bold text-lg">
                ₹{modalData.item.price}
              </span>
            </div>
            <button
              className="w-full py-2 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition"
              onClick={() => alert("Added to cart!")}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}

      {/* Other Modal for Selected menuItems */}
      {modalData.item && !modalData.isSpecial && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-20 p-4"
          onClick={closeModal}
        >
          <div className="bg-gray-800 text-white rounded-2xl p-6 max-w-sm w-full relative shadow-2xl border border-gray-600">
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold bg-gray-700 hover:bg-gray-600 rounded-full w-8 h-8 flex justify-center items-center"
              onClick={() => setModalData({ item: null, isSpecial: false })}
            >
              &times;
            </button>
            <img
              src={modalData.item.imageUrl || fallbackImage}
              alt={modalData.item.name}
              onError={(e) => {
                if (e.target.src !== fallbackImage)
                  e.target.src = fallbackImage;
              }}
              className="w-full h-48 object-cover bg-gray-300 rounded-xl mb-4 border border-gray-600"
            />
            <h2 className="text-xl font-bold text-center text-yellow-400 mb-2">
              {modalData.item.name}
            </h2>
            <p className="text-sm text-gray-300 text-center mb-3">
              {modalData.item.description}
            </p>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs bg-yellow-500 text-black px-2 py-1 rounded-full capitalize">
                {modalData.item.category}
              </span>
              <span className="text-green-700 font-bold text-lg">
                ₹{modalData.item.price}
              </span>
            </div>
            <button
              className="w-full py-2 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition"
              onClick={() => alert("Added to cart!")}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditableMenu;
