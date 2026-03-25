import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import { useBranding } from "../../context/BrandingContext";
import DietaryBadge from "./DietaryBadge";
import Toast from "../Toast";
import fallbackImage from "../../assets/food-fallback.png";


const StarRating = ({ rating, reviews }) => {
  return (
    <div className="flex items-center gap-1">
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < Math.floor(rating) ? "text-yellow-400" : "text-gray-500"}>
            ★
          </span>
        ))}
      </div>
      <span className="text-xs text-gray-400">({reviews || 0})</span>
    </div>
  );
};

// List View Card - Horizontal Layout (like Admin panel)
const ListViewCard = ({ item, onClick, onAddToCart, branding }) => {
  const { branding: contextBranding } = useBranding();
  const brandingData = branding || contextBranding;
  
  const getImageUrl = () => {
    let url = item.imageUrl || item.image;
    
    if (!url) {
      return fallbackImage;
    }

    if (url.startsWith("http://") || url.startsWith("https://")) {
      return url;
    }

    if (!url.includes("/")) {
      return `https://res.cloudinary.com/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload/v1745000365/${url}`;
    }

    return url;
  };

  const imageUrl = getImageUrl();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ 
        boxShadow: `0 8px 16px rgba(0,0,0,0.3)`
      }}
      className="cursor-pointer flex items-center rounded-xl overflow-hidden shadow-md bg-gradient-to-r from-gray-800 to-gray-700 text-white transform transition-all duration-300 border border-gray-700 hover:border-yellow-500 mb-3 group"
      onClick={onClick}
    >
      {/* Image */}
      <motion.img
        whileHover={{ scale: 1.05 }}
        src={imageUrl}
        alt={item.name}
        onError={(e) => {
          if (e.target.src !== fallbackImage) e.target.src = fallbackImage;
        }}
        className="w-28 h-28 object-cover m-2 rounded-lg border border-gray-600 flex-shrink-0 transition-transform"
      />

      {/* Content */}
      <div className="p-3 flex-1">
        <h3 className="text-base font-bold mb-1 line-clamp-1" style={{ color: brandingData.primaryColor }}>
          {item.name}
        </h3>
        {item.description && (
          <p className="text-xs text-gray-400 mb-2 line-clamp-1">
            {item.description}
          </p>
        )}
        <div className="flex justify-between items-center gap-2">
          <span className="text-xs px-2 py-1 rounded-full font-semibold" style={{ backgroundColor: brandingData.accentColor, color: "#000" }}>
            {item.category}
          </span>
          <span className="font-bold text-lg" style={{ color: brandingData.secondaryColor }}>₹{item.price}</span>
        </div>
      </div>

    </motion.div>
  );
};

const MenuItemCard = ({ item, onClick, onAddToCart }) => {
  const tags = item.tags || [];
  const isBestseller = tags.includes("bestseller");
  const isTrending = tags.includes("trending");
  const isNew = tags.includes("new");
  const { branding } = useBranding();

  // Handle image URL - support multiple formats
  const getImageUrl = () => {
    let url = item.imageUrl || item.image;
    
    if (!url) {
      console.warn(`No image URL for item: ${item.name}`);
      return fallbackImage;
    }

    // If it's a full URL, use it as-is
    if (url.startsWith("http://") || url.startsWith("https://")) {
      return url;
    }

    // If it's a Cloudinary path, construct full URL
    if (!url.includes("/")) {
      return `https://res.cloudinary.com/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload/v1745000365/${url}`;
    }

    return url;
  };

  const imageUrl = getImageUrl();

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="cursor-pointer group relative rounded-2xl overflow-hidden shadow-lg bg-gray-800 text-white transform transition-all duration-300 border border-gray-700 hover:border-yellow-500 hover:shadow-2xl"
    >
      {/* Image Container */}
      <div className="relative w-full h-48 overflow-hidden bg-gray-700">
        <img
          src={imageUrl}
          alt={item.name}
          onError={(e) => {
            console.warn(`Image failed to load: ${imageUrl}`);
            if (e.target.src !== fallbackImage) e.target.src = fallbackImage;
          }}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
          {isBestseller && <DietaryBadge type="bestseller" />}
          {isTrending && <DietaryBadge type="trending" />}
          {isNew && <DietaryBadge type="new" />}
          {item.dietary && item.dietary[0] && <DietaryBadge type={item.dietary[0]} />}
        </div>

        {/* Price Badge */}
        <div
          className="absolute top-3 right-3 text-white font-bold px-3 py-1 rounded-full text-lg shadow-lg"
          style={{
            backgroundColor: branding.secondaryColor,
          }}
        >
          ₹{item.price}
        </div>

        {/* Sold Out Overlay */}
        {item.isSoldOut && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white text-xl font-bold">SOLD OUT</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title & Rating */}
        <div className="mb-2">
          <h3 className="text-lg font-bold text-yellow-400 line-clamp-2">{item.name}</h3>
          {item.rating && <StarRating rating={item.rating} reviews={item.reviews} />}
        </div>

        {/* Description */}
        {item.description && (
          <p className="text-sm text-gray-300 line-clamp-2 mb-3">{item.description}</p>
        )}

        {/* Info Badges */}
        <div className="flex flex-wrap gap-2 mb-3">
          {item.prepTime && (
            <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
              ⏱️ {item.prepTime}
            </span>
          )}
          {item.portion && (
            <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
              📦 {item.portion}
            </span>
          )}
        </div>

        {/* Additional Info */}
        <div className="flex justify-between items-center text-xs text-gray-400">
          <span className="bg-gray-700 px-2 py-1 rounded capitalize">
            {item.category}
          </span>
          <span className="flex gap-1">
            {item.calories && <span>🔥 {item.calories}cal</span>}
          </span>
        </div>

        {/* View Details & Add to Cart Buttons */}
        <div className="flex gap-2 mt-3">
          <button
            onClick={onClick}
            className="flex-1 py-2 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-500 transition text-sm"
          >
            Details
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(item);
            }}
            className="flex-1 py-2 font-bold rounded-lg transition text-sm text-black"
            style={{
              backgroundColor: branding.primaryColor || "#FFB400",
            }}
          >
            🛒 Add
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const RichMenuModal = ({ item, onClose, onAddToCart }) => {
  const { branding } = useBranding();

  if (!item) return null;

  const dietary = item.dietary || [];
  const chefNote = item.chefNote || "";
  const suggestedPairing = item.suggestedPairing || "";
  const ingredients = item.ingredients || [];

  // Handle image URL - support multiple formats (same as MenuItemCard)
  const getImageUrl = () => {
    let url = item.imageUrl || item.image;
    
    if (!url) {
      console.warn(`No image URL for item: ${item.name}`);
      return fallbackImage;
    }

    // If it's a full URL, use it as-is
    if (url.startsWith("http://") || url.startsWith("https://")) {
      return url;
    }

    // If it's a Cloudinary path, construct full URL
    if (!url.includes("/")) {
      return `https://res.cloudinary.com/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload/v1745000365/${url}`;
    }

    return url;
  };

  const imageUrl = getImageUrl();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4 overflow-y-auto"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-800 text-white rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden border border-gray-700 my-8"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white text-3xl font-bold bg-gray-700 hover:bg-gray-600 rounded-full w-10 h-10 flex justify-center items-center"
        >
          ×
        </button>

        {/* Full Size Image */}
        <div className="relative w-full h-80 overflow-hidden bg-gray-700">
          <img
            src={imageUrl}
            alt={item.name}
            onError={(e) => {
              console.warn(`Image failed to load: ${imageUrl}`);
              if (e.target.src !== fallbackImage) e.target.src = fallbackImage;
            }}
            className="w-full h-full object-cover"
          />
          
          {/* Tags on Image */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {item.tags?.includes("bestseller") && (
              <DietaryBadge type="bestseller" size="lg" />
            )}
            {item.tags?.includes("trending") && (
              <DietaryBadge type="trending" size="lg" />
            )}
            {item.dietary?.map((tag, i) => (
              <DietaryBadge key={i} type={tag} size="lg" />
            ))}
          </div>

          {/* Price in Corner */}
          <div className="absolute bottom-4 right-4 bg-green-500 text-white font-bold px-4 py-2 rounded-full text-2xl shadow-lg">
            ₹{item.price}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Title & Rating */}
          <h2 className="text-3xl font-bold text-yellow-400 mb-2">{item.name}</h2>
          {item.rating && (
            <div className="mb-4">
              <StarRating rating={item.rating} reviews={item.reviews} />
            </div>
          )}

          {/* Description */}
          {item.description && (
            <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>
          )}

          {/* Chef's Note */}
          {chefNote && (
            <div className="bg-gradient-to-r from-yellow-900 to-orange-900 p-4 rounded-lg mb-4 border-l-4 border-yellow-500">
              <p className="text-yellow-200 text-sm font-semibold">👨‍🍳 Chef's Note</p>
              <p className="text-yellow-100 text-sm mt-1">{chefNote}</p>
            </div>
          )}

          {/* Suggested Pairing */}
          {suggestedPairing && (
            <div className="bg-gradient-to-r from-purple-900 to-pink-900 p-4 rounded-lg mb-4 border-l-4 border-purple-500">
              <p className="text-purple-200 text-sm font-semibold">🍷 Suggested Pairing</p>
              <p className="text-purple-100 text-sm mt-1">{suggestedPairing}</p>
            </div>
          )}

          {/* Key Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {item.prepTime && (
              <div className="bg-gray-700 p-3 rounded-lg text-center">
                <p className="text-gray-400 text-sm">Prep Time</p>
                <p className="text-yellow-400 font-bold text-lg">⏱️ {item.prepTime}</p>
              </div>
            )}
            {item.portion && (
              <div className="bg-gray-700 p-3 rounded-lg text-center">
                <p className="text-gray-400 text-sm">Portion</p>
                <p className="text-yellow-400 font-bold">📦 {item.portion}</p>
              </div>
            )}
            {item.calories && (
              <div className="bg-gray-700 p-3 rounded-lg text-center">
                <p className="text-gray-400 text-sm">Calories</p>
                <p className="text-yellow-400 font-bold text-lg">🔥 {item.calories}</p>
              </div>
            )}
            {item.spiciness !== undefined && (
              <div className="bg-gray-700 p-3 rounded-lg text-center">
                <p className="text-gray-400 text-sm">Spice Level</p>
                <p className="text-yellow-400 font-bold">
                  {"🌶️".repeat(item.spiciness || 0)} {item.spiciness || "Mild"}
                </p>
              </div>
            )}
          </div>

          {/* Ingredients */}
          {ingredients.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-bold text-yellow-400 mb-2">🥘 Key Ingredients</h3>
              <div className="flex flex-wrap gap-2">
                {ingredients.map((ing, i) => (
                  <span key={i} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Allergen Warnings */}
          {dietary.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-bold text-yellow-400 mb-2">⚠️ Allergen Information</h3>
              <div className="flex flex-wrap gap-2">
                {dietary.map((tag, i) => (
                  <DietaryBadge key={i} type={tag} size="lg" />
                ))}
              </div>
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex gap-3 mt-6">
            <button
              onClick={() => {
                onAddToCart(item);
                onClose();
              }}
              className="flex-1 py-3 text-black font-bold rounded-lg hover:opacity-90 transition text-lg"
              style={{
                backgroundColor: branding.primaryColor || "#FFB400",
              }}
            >
              🛒 Add to Cart
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-3 bg-gray-700 text-white font-bold rounded-lg hover:bg-gray-600 transition text-lg"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const EditableMenu = () => {
  const navigate = useNavigate();
  const { admin } = useAuth();
  const { addToCart } = useCart();
  const { branding } = useBranding();
  const [menuItems, setMenuItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDietaryFilters, setSelectedDietaryFilters] = useState([]);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Handle add to cart with toast
  const handleAddToCart = (item) => {
    addToCart(item);
    setToastMessage(`${item.name} added to cart`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  useEffect(() => {
    const apiUrl = `${process.env.REACT_APP_BACKEND_API_URL}/api/v1/hotel1/get-menu-items`;
    console.log("🔍 Fetching from API:", apiUrl);
    console.log("🖼️  Cloudinary cloud:", process.env.REACT_APP_CLOUDINARY_CLOUD_NAME);
    
    fetch(apiUrl)
      .then((response) => {
        console.log("✅ Response status:", response.status);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("📊 Data received from API:", data);
        console.log("📦 Number of items:", data.length);
        
        // Log first item details for debugging images
        if (data.length > 0) {
          console.log("🖼️  First item details:", {
            name: data[0].name,
            imageUrl: data[0].imageUrl,
            image: data[0].image,
            allKeys: Object.keys(data[0])
          });
          
          // Log all image URLs for quick reference
          console.log("📷 All image URLs:", data.map(item => ({
            name: item.name,
            imageUrl: item.imageUrl || item.image,
            isHttpUrl: (item.imageUrl || item.image || "").startsWith("http")
          })));
        }
        
        setMenuItems(data);
      })
      .catch((error) => {
        console.error("❌ Error fetching menu items:", error);
        console.error("API URL was:", apiUrl);
      });

    setTimeout(() => {
      setShowMenu(true);
    }, 2500);
  }, []);

  // Smart Category Organization
  const categories = [
    "All",
    ...new Set(menuItems.map((item) => item.category)),
  ];

  // Get grid layout based on selected theme
  const getGridClassName = () => {
    const baseClass = "grid gap-4";
    switch (branding.menuLayout) {
      case "list":
        return `${baseClass} grid-cols-1`; // Single column for list view
      case "compact":
        return `${baseClass} grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5`; // More items per row for compact
      default: // grid
        return `${baseClass} md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`; // Default grid layout
    }
  };

  // Render item based on layout type
  const renderMenuItem = (item) => {
    if (branding.menuLayout === "list") {
      return (
        <ListViewCard
          key={item._id}
          item={item}
          onClick={() => setSelectedItem(item)}
          onAddToCart={handleAddToCart}
          branding={branding}
        />
      );
    }
    return (
      <MenuItemCard
        key={item._id}
        item={item}
        onClick={() => setSelectedItem(item)}
        onAddToCart={handleAddToCart}
      />
    );
  };

  const smartSections = [
    { id: "trending", label: "🔥 Trending", filter: (item) => item.tags?.includes("trending") },
    { id: "bestseller", label: "⭐ Bestsellers", filter: (item) => item.tags?.includes("bestseller") },
    { id: "vegetarian", label: "🌱 Vegetarian", filter: (item) => item.dietary?.includes("vegetarian") },
  ];

  // All available dietary filters
  const allDietaryFilters = ["vegetarian", "vegan", "glutenfree", "spicy"];

  // Toggle dietary filter
  const toggleDietaryFilter = (filter) => {
    setSelectedDietaryFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  // Filter items based on search, category, and dietary preferences
  const filteredItems = menuItems.filter((item) => {
    // Filter by category
    if (activeCategory !== "All" && item.category !== activeCategory) return false;

    // Filter by search term
    if (searchTerm.trim() !== "") {
      const searchLower = searchTerm.toLowerCase();
      const matchesName = item.name.toLowerCase().includes(searchLower);
      const matchesDescription = item.description && item.description.toLowerCase().includes(searchLower);
      const matchesCategory = item.category && item.category.toLowerCase().includes(searchLower);
      if (!matchesName && !matchesDescription && !matchesCategory) return false;
    }

    // Filter by dietary preferences
    if (selectedDietaryFilters.length > 0) {
      const itemDietary = item.dietary || [];
      const hasSelectedDietary = selectedDietaryFilters.some((filter) =>
        itemDietary.includes(filter)
      );
      if (!hasSelectedDietary) return false;
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black opacity-10"></div>

      <AnimatePresence>
        {!showMenu ? (
          <motion.div
            key="intro"
            className=" w-screen h-screen flex flex-col items-center justify-center text-center px-6 bg-black z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
          >
            <motion.h1
              className="text-5xl font-extrabold mb-4 text-[#FFB400]"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              style={{ color: branding.primaryColor }}
            >
              Welcome to {branding.restaurantName}
            </motion.h1>
            <motion.p
              className="text-lg text-gray-300 mb-6"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.6, duration: 1.5 },
              }}
            >
              {branding.tagline}
            </motion.p>
            <motion.div
              className="h-2 w- rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "96px", transition: { delay: 1, duration: 1 } }}
              style={{
                backgroundColor: branding.primaryColor,
              }}
            />
          </motion.div>
        ) : (
          <div className="relative z-0 pb-10">
            {/* Header */}
            <div className="sticky top-0 bg-gray-900/95 backdrop-blur border-b border-gray-700 z-40">
              <div className="flex justify-between items-center px-4 py-4">
                <div className="flex-1 text-center">
                  <h1 
                    className="text-2xl md:text-4xl font-extrabold tracking-wide"
                    style={{ color: branding.primaryColor }}
                  >
                    {branding.headline || "🍽️ Discover Our Flavours"}
                  </h1>
                </div>
                
                {/* 3-Dot Menu Button */}
                <div className="relative ml-4">
                  <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="p-2 rounded-full hover:bg-gray-700 transition"
                    title="Menu"
                  >
                    <span className="text-2xl">⋮</span>
                  </button>

                  {/* Dropdown Menu */}
                  {showDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50 overflow-hidden">
                      {admin && (
                        <>
                          <button
                            onClick={() => {
                              navigate("/branding");
                              setShowDropdown(false);
                            }}
                            className="w-full px-4 py-3 text-left text-white hover:bg-purple-600 transition flex items-center gap-3 text-sm font-semibold"
                          >
                            <span className="text-lg">🌈</span>
                            <span>Customize Colors</span>
                          </button>
                          <div className="border-t border-gray-700"></div>
                        </>
                      )}
                      <button
                        onClick={() => {
                          navigate(admin ? "/admin" : "/admin-login");
                          setShowDropdown(false);
                        }}
                        className="w-full px-4 py-3 text-left text-white hover:bg-red-600 transition flex items-center gap-3 text-sm font-semibold"
                      >
                        <span className="text-lg">⚙️</span>
                        <span>{admin ? "Admin Panel" : "Admin Login"}</span>
                      </button>
                    </div>
                  )}

                  {/* Close dropdown when clicking outside */}
                  {showDropdown && (
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setShowDropdown(false)}
                    />
                  )}
                </div>
              </div>

              {/* Search Bar */}
              <div className="px-4 py-3 border-b border-gray-700">
                <input
                  type="text"
                  placeholder="🔍 Search dishes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-yellow-500 focus:outline-none transition"
                />
              </div>

              {/* Category Tabs */}
              <div className="overflow-x-auto px-4 py-3 flex gap-2 whitespace-nowrap border-b border-gray-700">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-5 py-2 text-sm font-semibold rounded-full capitalize transition-all duration-200 border whitespace-nowrap ${
                      activeCategory === category
                        ? "bg-yellow-500 text-black border-yellow-500 shadow-lg"
                        : "bg-gray-700 text-white border-gray-600 hover:hover:text-black"
                    }`}
                    style={activeCategory === category ? { backgroundColor: branding.primaryColor } : {}}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Dietary Filters */}
              {/* <div className="overflow-x-auto px-4 py-3 flex gap-2 whitespace-nowrap">
                {allDietaryFilters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => toggleDietaryFilter(filter)}
                    className={`px-4 py-1 text-sm font-semibold rounded-full capitalize transition-all duration-200 border ${
                      selectedDietaryFilters.includes(filter)
                        ? "text-black border-yellow-500 shadow-lg"
                        : "bg-gray-700 text-gray-300 border-gray-600 hover:border-gray-500"
                    }`}
                    style={
                      selectedDietaryFilters.includes(filter)
                        ? { backgroundColor: branding.primaryColor }
                        : {}
                    }
                  >
                    {filter === "vegetarian" && "🌱 Vegetarian"}
                    {filter === "vegan" && "🥕 Vegan"}
                    {filter === "glutenfree" && "🌾 Gluten-Free"}
                    {filter === "spicy" && "🌶️ Spicy"}
                  </button>
                ))}
              </div> */}
            </div>

            {/* Smart Sections */}
            {activeCategory === "All" &&
              smartSections.map((section) => {
                const sectionItems = menuItems.filter(section.filter);
                if (sectionItems.length === 0) return null;

                return (
                  <div key={section.id} className="px-4 py-8">
                    <h2 className="text-2xl font-bold text-yellow-400 mb-4">
                      {section.label}
                    </h2>
                    <div className={branding.menuLayout === "list" ? "space-y-3" : getGridClassName()}>
                      {sectionItems.slice(0, 4).map((item) =>
                        renderMenuItem(item)
                      )}
                    </div>
                  </div>
                );
              })}

            {/* All Items Grid */}
            <div className="px-4 py-8">
              {activeCategory !== "All" && (
                <h2 className="text-2xl font-bold text-yellow-400 mb-4 capitalize">
                  {activeCategory}
                </h2>
              )}
              <div className={branding.menuLayout === "list" ? "space-y-3" : getGridClassName()}>
                {filteredItems.map((item) =>
                  renderMenuItem(item)
                )}
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Rich Modal */}
      <AnimatePresence>
        {selectedItem && (
          <RichMenuModal item={selectedItem} onClose={() => setSelectedItem(null)} onAddToCart={handleAddToCart} />
        )}
      </AnimatePresence>

      {/* Toast Notification */}
      <Toast message={toastMessage} isVisible={showToast} type="success" />
    </div>
  );
};

export default EditableMenu;
