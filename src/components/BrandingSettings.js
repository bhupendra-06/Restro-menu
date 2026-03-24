import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useBranding } from "../context/BrandingContext";
import fallbackImage from "../assets/food-fallback.png";

const BrandingSettings = () => {
  const navigate = useNavigate();
  const { branding, updateBranding } = useBranding();
  const [formData, setFormData] = useState(branding);
  const [saved, setSaved] = useState(false);
  const [previewItem, setPreviewItem] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleColorChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    updateBranding(formData);
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      navigate("/");
    }, 1500);
  };

  // Fetch menu items for preview
  useEffect(() => {
    const apiUrl = `${process.env.REACT_APP_BACKEND_API_URL}/api/v1/hotel1/get-menu-items`;
    
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch menu items");
        return response.json();
      })
      .then((data) => {
        if (data && data.length > 0) {
          setPreviewItem(data[0]);
        }
      })
      .catch((error) => {
        console.error("Error fetching preview item:", error);
      });
  }, []);

  const presets = [
    {
      name: "Classic Gold",
      primaryColor: "#FFB400",
      secondaryColor: "#FF6B6B",
      accentColor: "#4ECDC4",
    },
    {
      name: "Royal Purple",
      primaryColor: "#9D4EDD",
      secondaryColor: "#3A86FF",
      accentColor: "#FB5607",
    },
    {
      name: "Modern Green",
      primaryColor: "#06A77D",
      secondaryColor: "#FCA311",
      accentColor: "#0B5563",
    },
    {
      name: "Sunset Orange",
      primaryColor: "#FF6B35",
      secondaryColor: "#F7931E",
      accentColor: "#FDB833",
    },
    {
      name: "Ocean Blue",
      primaryColor: "#004E89",
      secondaryColor: "#1B6CA8",
      accentColor: "#9DBCE2",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-3 md:p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold">🎨 Theme</h1>
            <p className="text-xs md:text-sm text-gray-400">Customize menu colors</p>
          </div>
          <button
            onClick={() => navigate("/")}
            className="text-2xl text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* Quick Info - Compact */}
        <div className="bg-gray-800 rounded-lg p-4 mb-4 border border-gray-700 space-y-3">
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">Restaurant Name</label>
            <input
              type="text"
              name="restaurantName"
              value={formData.restaurantName}
              onChange={handleChange}
              className="w-full px-3 py-1.5 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:border-yellow-500"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">Main Headline</label>
            <input
              type="text"
              name="headline"
              value={formData.headline || ""}
              onChange={handleChange}
              placeholder="e.g., 🍽️ Discover Our Flavours"
              className="w-full px-3 py-1.5 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:border-yellow-500"
            />
          </div>
        </div>

        {/* Menu Layout Theme - New Section */}
        <div className="bg-gray-800 rounded-lg p-4 mb-4 border border-gray-700">
          <h3 className="text-sm font-bold mb-3">Menu Display Theme</h3>
          <div className="grid grid-cols-3 gap-2">
            {/* Grid View */}
            <button
              onClick={() => setFormData((prev) => ({ ...prev, menuLayout: "grid" }))}
              className={`p-3 rounded-lg border-2 transition text-center ${
                formData.menuLayout === "grid"
                  ? "border-yellow-500 bg-yellow-500/10"
                  : "border-gray-600 hover:border-gray-500"
              }`}
            >
              <div className="text-2xl mb-1">📦</div>
              <span className="text-xs font-semibold">Grid View</span>
              <p className="text-xs text-gray-400 mt-1">Card Layout</p>
            </button>

            {/* List View */}
            <button
              onClick={() => setFormData((prev) => ({ ...prev, menuLayout: "list" }))}
              className={`p-3 rounded-lg border-2 transition text-center ${
                formData.menuLayout === "list"
                  ? "border-yellow-500 bg-yellow-500/10"
                  : "border-gray-600 hover:border-gray-500"
              }`}
            >
              <div className="text-2xl mb-1">📋</div>
              <span className="text-xs font-semibold">List View</span>
              <p className="text-xs text-gray-400 mt-1">Traditional</p>
            </button>

            {/* Compact View */}
            <button
              onClick={() => setFormData((prev) => ({ ...prev, menuLayout: "compact" }))}
              className={`p-3 rounded-lg border-2 transition text-center ${
                formData.menuLayout === "compact"
                  ? "border-yellow-500 bg-yellow-500/10"
                  : "border-gray-600 hover:border-gray-500"
              }`}
            >
              <div className="text-2xl mb-1">✨</div>
              <span className="text-xs font-semibold">Compact</span>
              <p className="text-xs text-gray-400 mt-1">Minimal</p>
            </button>
          </div>
        </div>

        {/* Color Presets - Compact Grid */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-2 mb-4">
          {presets.map((preset) => (
            <button
              key={preset.name}
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  primaryColor: preset.primaryColor,
                  secondaryColor: preset.secondaryColor,
                  accentColor: preset.accentColor,
                }))
              }
              className="p-2 rounded-lg border-2 border-gray-600 hover:border-yellow-500 transition text-center"
              title={preset.name}
            >
              <div className="flex gap-0.5 mb-1 justify-center">
                <div
                  className="w-3 h-3 rounded"
                  style={{ backgroundColor: preset.primaryColor }}
                />
                <div
                  className="w-3 h-3 rounded"
                  style={{ backgroundColor: preset.secondaryColor }}
                />
                <div
                  className="w-3 h-3 rounded"
                  style={{ backgroundColor: preset.accentColor }}
                />
              </div>
              <span className="text-xs font-semibold hidden md:block">{preset.name}</span>
            </button>
          ))}
        </div>

        {/* Custom Colors - Compact */}
        <div className="bg-gray-800 rounded-lg p-4 mb-4 border border-gray-700">
          <h3 className="text-sm font-bold mb-3">Custom Colors</h3>
          <div className="grid grid-cols-3 gap-3">
            {/* Primary */}
            <div className="text-center">
              <input
                type="color"
                name="primaryColor"
                value={formData.primaryColor}
                onChange={handleColorChange}
                className="w-12 h-12 rounded-lg cursor-pointer border-2 border-gray-600 mx-auto"
              />
              <p className="text-xs text-gray-400 mt-1">Primary</p>
            </div>

            {/* Secondary */}
            <div className="text-center">
              <input
                type="color"
                name="secondaryColor"
                value={formData.secondaryColor}
                onChange={handleColorChange}
                className="w-12 h-12 rounded-lg cursor-pointer border-2 border-gray-600 mx-auto"
              />
              <p className="text-xs text-gray-400 mt-1">Secondary</p>
            </div>

            {/* Accent */}
            <div className="text-center">
              <input
                type="color"
                name="accentColor"
                value={formData.accentColor}
                onChange={handleColorChange}
                className="w-12 h-12 rounded-lg cursor-pointer border-2 border-gray-600 mx-auto"
              />
              <p className="text-xs text-gray-400 mt-1">Accent</p>
            </div>
          </div>
        </div>

        {/* Buttons - Compact */}
        <div className="flex gap-2">
          <button
            onClick={handleSave}
            disabled={saved}
            className="flex-1 py-2 rounded-lg font-bold text-sm md:text-base transition disabled:opacity-75"
            style={{
              backgroundColor: formData.primaryColor,
              color: "#000",
            }}
          >
            {saved ? "Saving..." : "Save"}
          </button>
          <button
            onClick={() => setFormData(branding)}
            className="flex-1 py-2 bg-gray-700 text-white rounded-lg font-bold hover:bg-gray-600 transition text-sm md:text-base"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandingSettings;
