import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";
import { useBranding } from "../context/BrandingContext";

const CartSidebar = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const { branding } = useBranding();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Cart Button - Fixed Position */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full text-white font-bold text-xl shadow-lg flex items-center justify-center transition-all"
        style={{
          backgroundColor: branding.primaryColor || "#FFB400",
        }}
      >
        🛒
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
            {cartItems.length}
          </span>
        )}
      </motion.button>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40"
            />

            {/* Cart Sidebar */}
            <motion.div
              initial={{ x: 400 }}
              animate={{ x: 0 }}
              exit={{ x: 400 }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed right-0 top-0 h-full w-96 bg-gray-800 text-white z-40 flex flex-col shadow-2xl border-l border-gray-700 overflow-y-auto"
            >
              {/* Header */}
              <div className="sticky top-0 p-4 border-b border-gray-700 flex justify-between items-center">
                <h2 className="text-2xl font-bold">🛒 Your Cart</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-2xl text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              {/* Cart Items */}
              {cartItems.length === 0 ? (
                <div className="flex-1 flex items-center justify-center text-gray-400">
                  <p>Your cart is empty</p>
                </div>
              ) : (
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {cartItems.map((item) => (
                    <motion.div
                      key={item._id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="bg-gray-700 p-3 rounded-lg"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-sm line-clamp-2">{item.name}</h3>
                        <button
                          onClick={() => removeFromCart(item._id)}
                          className="text-red-400 hover:text-red-500 text-lg"
                        >
                          ✕
                        </button>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-yellow-400 font-bold">₹{item.price}</span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item._id, item.quantity - 1)}
                            className="bg-gray-600 hover:bg-gray-500 px-2 py-1 rounded text-sm"
                          >
                            −
                          </button>
                          <span className="w-6 text-center font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item._id, item.quantity + 1)}
                            className="bg-gray-600 hover:bg-gray-500 px-2 py-1 rounded text-sm"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="text-right mt-2 text-yellow-400 font-semibold">
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Footer */}
              {cartItems.length > 0 && (
                <div className="sticky bottom-0 border-t border-gray-700 p-4 space-y-3 bg-gray-800">
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-yellow-400">₹{getTotalPrice().toFixed(2)}</span>
                  </div>

                  <button
                    className="w-full py-3 rounded-lg font-bold transition text-lg"
                    style={{
                      backgroundColor: branding.primaryColor || "#FFB400",
                      color: "#000",
                    }}
                  >
                    Proceed to Checkout
                  </button>

                  <button
                    onClick={() => clearCart()}
                    className="w-full py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition"
                  >
                    Clear Cart
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default CartSidebar;
