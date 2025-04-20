import React, { useState } from "react";

const PostForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
    category: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const uploadImageToCloudinary = async () => {
    if (!imageFile) {
      alert("Please select an image.");
      return;
    }
    const data = new FormData();
    data.append("file", imageFile);
    data.append("upload_preset", "restro-menu");
    
    setUploading(true);
    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );
      const result = await res.json();
      return result.secure_url;
    } catch (err) {
      console.error("Image upload failed", err);
      return null;
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setUploading(true);

      // Upload image to Cloudinary
      const uploadedUrl = await uploadImageToCloudinary();

      // Final data
      const payload = {
        name: formData.name,
        description: formData.description,
        price: Number(formData.price),
        category: formData.category.toLowerCase(),
        imageUrl: uploadedUrl,
      };

      // Send to backend
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_API_URL}/api/v1/hotel1/add-menu-item`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // ✅ include cookie automatically
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("✅ Item posted:", result);
        alert("Dish posted successfully!");
        setFormData({
          name: "",
          description: "",
          price: "",
          category: "",
          imageUrl: "",
        });
      } else {
        const errorData = await response.json();
        console.error("❌ Backend error:", errorData);
        alert("Backend error: " + errorData.message);
      }

      setUploading(false);
    } catch (error) {
      console.error("❌ Error:", error);
      alert("Something went wrong.");
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/food.png')] bg-orange-100">
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
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full mb-3 p-3 border border-orange-400 rounded-lg bg-orange-50 text-orange-900"
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
            <option value="starter">Starter</option>
            <option value="main course">Main Course</option>
            <option value="dessert">Dessert</option>
            <option value="beverages">Beverages</option>
            <option value="biryani">Biryani</option>
            <option value="pizza">Pizza</option>
          </select>
          <button
            type="submit"
            disabled={uploading}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition shadow-md"
          >
            {uploading ? "Uploading..." : "🍽️ Add Dish"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
