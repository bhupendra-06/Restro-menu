import React, { useState } from "react";

const PostForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/food.png')] bg-orange-100"
    >
      <div className="max-w-md w-full p-8 shadow-2xl rounded-2xl border border-orange-300 backdrop-blur-lg bg-white/80">
        <h2 className="text-3xl font-extrabold text-orange-700 mb-6 text-center">
          🍕 Post Your Dish
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Dish Name"
            className="w-full mb-3 p-3 border border-orange-400 rounded-lg focus:ring-2 focus:ring-orange-500 bg-orange-50 text-orange-900"
            required
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe the dish..."
            className="w-full mb-3 p-3 border border-orange-400 rounded-lg resize-none h-24 focus:ring-2 focus:ring-orange-500 bg-orange-50 text-orange-900"
            required
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price in ₹"
            className="w-full mb-3 p-3 border border-orange-400 rounded-lg focus:ring-2 focus:ring-orange-500 bg-orange-50 text-orange-900"
            required
          />
          <input
            type="url"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full mb-3 p-3 border border-orange-400 rounded-lg focus:ring-2 focus:ring-orange-500 bg-orange-50 text-orange-900"
            required
          />
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full mb-4 p-3 border border-orange-400 rounded-lg focus:ring-2 focus:ring-orange-500 bg-orange-50 text-orange-900"
            required
          >
            <option value="">Select Category</option>
            <option value="appetizer">Appetizer</option>
            <option value="main-course">Main Course</option>
            <option value="dessert">Dessert</option>
            <option value="beverage">Beverage</option>
          </select>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition shadow-md"
          >
            🍽️ Add Dish
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
