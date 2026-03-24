import React from "react";

const DietaryBadge = ({ type, size = "sm" }) => {
  const badges = {
    vegan: { icon: "🌱", label: "Vegan", color: "bg-green-500" },
    vegetarian: { icon: "🥗", label: "Vegetarian", color: "bg-green-400" },
    glutenfree: { icon: "🌾", label: "Gluten-Free", color: "bg-amber-400" },
    spicy: { icon: "🌶️", label: "Spicy", color: "bg-red-500" },
    bestseller: { icon: "⭐", label: "Bestseller", color: "bg-yellow-500" },
    trending: { icon: "🔥", label: "Trending", color: "bg-orange-500" },
    new: { icon: "🆕", label: "New", color: "bg-blue-500" },
    contains_nuts: { icon: "🥜", label: "Contains Nuts", color: "bg-amber-600" },
  };

  const badge = badges[type] || badges.vegetarian;

  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-white font-semibold ${badge.color} ${
        size === "lg" ? "text-sm" : "text-xs"
      }`}
    >
      <span>{badge.icon}</span>
      <span>{badge.label}</span>
    </span>
  );
};

export default DietaryBadge;
