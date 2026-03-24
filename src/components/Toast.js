import { motion, AnimatePresence } from "framer-motion";

const Toast = ({ message, isVisible, type = "success" }) => {
  const styles = {
    success: {
      bg: "bg-green-500",
      border: "border-green-600",
      // icon: "✅",
    },
    error: {
      bg: "bg-red-500",
      border: "border-red-600",
      // icon: "❌",
    },
    info: {
      bg: "bg-blue-500",
      border: "border-blue-600",
      // icon: "ℹ️",
    },
  }[type];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 20 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
          className={`${styles.bg} text-white px-6 py-3 rounded fixed top-6 right-6 z-50 font-semibold flex items-center justify-center gap-3 border ${styles.border} w-11/12 max-w-sm shadow-md`}
        >
          {/* <span className="text-2xl flex-shrink-0">{styles.icon}</span> */}
          <span className="text-sm md:text-base flex-1">{message}</span>
          <div className="ml-3 h-2 w-2 rounded-full bg-white/70 flex-shrink-0" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
