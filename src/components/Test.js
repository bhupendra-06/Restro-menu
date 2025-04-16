import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuData = [
  { name: "Truffle Arancini", price: "₹450", image: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  { name: "Foie Gras Toast", price: "₹850", image: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  { name: "Wagyu Steak", price: "₹5000", image: "https://images.pexels.com/photos/30506291/pexels-photo-30506291/free-photo-of-delicious-asian-noodle-dish-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
];

const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowMenu(true);
    }, 2500); // Faster transition time
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1a1a1a] text-white relative">
      <AnimatePresence>
        {!showMenu ? (
          <motion.div
            key="intro"
            className="absolute w-full h-full flex flex-col items-center justify-center text-center px-6 bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
          >
            <motion.h1
              className="text-5xl font-extrabold mb-4 text-[#FFB400]"
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            >
              Welcome to Fine Dine
            </motion.h1>
            <motion.p
              className="text-lg text-gray-300 mb-6 max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.8, duration: 1 } }}
            >
              Indulge in our exquisite selection of gourmet dishes.
            </motion.p>
            <motion.div
              className="h-2 w-24 bg-[#FFB400] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "96px", transition: { delay: 1.2, duration: 1 } }}
            />
          </motion.div>
        ) : (
          <motion.div
            key="menu"
            className="p-6 text-center max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
          >
            <h1 className="text-4xl font-bold mb-6 text-[#FFB400]">Our Menu</h1>
            <div className="grid gap-6">
              {menuData.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex items-center"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.2 } }}
                >
                  <img src={item.image} alt={item.name} className="m-2 w-28 h-28 object-cover rounded-lg" />
                  <div className="m-5 text-start">
                    <h2 className="text-xl font-semibold text-[#FFB400]">{item.name}</h2>
                    <p className="text-gray-300 text-lg">{item.price}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
