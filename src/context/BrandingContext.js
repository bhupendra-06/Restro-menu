import { createContext, useContext, useState, useEffect } from "react";

const BrandingContext = createContext();

// Default branding
const DEFAULT_BRANDING = {
  restaurantName: "Fine Dine",
  logo: null,
  primaryColor: "#FFB400", // Yellow
  secondaryColor: "#FF6B6B", // Red
  accentColor: "#4ECDC4", // Teal
  tagline: "Indulge in our exquisite selection of gourmet dishes.",
  headline: "🍽️ Discover Our Flavours",
  theme: "dark", // dark or light
  menuLayout: "grid", // grid, list, or compact
};

export const BrandingProvider = ({ children }) => {
  const [branding, setBranding] = useState(DEFAULT_BRANDING);

  // Load branding from localStorage on mount
  useEffect(() => {
    const savedBranding = localStorage.getItem("restaurantBranding");
    if (savedBranding) {
      try {
        setBranding(JSON.parse(savedBranding));
      } catch (error) {
        console.error("Error loading branding:", error);
      }
    }
  }, []);

  // Save branding to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("restaurantBranding", JSON.stringify(branding));
  }, [branding]);

  const updateBranding = (updates) => {
    setBranding((prev) => ({ ...prev, ...updates }));
  };

  const resetBranding = () => {
    setBranding(DEFAULT_BRANDING);
    localStorage.removeItem("restaurantBranding");
  };

  return (
    <BrandingContext.Provider value={{ branding, updateBranding, resetBranding }}>
      {children}
    </BrandingContext.Provider>
  );
};

export const useBranding = () => {
  const context = useContext(BrandingContext);
  if (!context) {
    throw new Error("useBranding must be used within BrandingProvider");
  }
  return context;
};
