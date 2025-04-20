import React, { useEffect, useState } from "react";
import {
  PencilSquareIcon,
  TrashIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import fallbackImage from "../../assets/food-fallback.png";
import { useNavigate } from "react-router-dom";
import { ReactComponent as LogoutIcon } from "../../assets/logout.svg";
// import { ReactComponent as Plus } from "../../assets/plus.svg";

const Admin = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("starter");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // const cloudinary = require('cloudinary').v2;
  // cloudinary.config({
  //   cloud_name: `${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}`,
  //   api_key: `${process.env.CLOUDINARY_API_KEY}`,
  //   api_secret: `${process.env.CLOUDINARY_API_SECRET}`,
  // })

  // Fetch menu items
  const fetchMenuItems = () => {
    fetch(
      `${process.env.REACT_APP_BACKEND_API_URL}/api/v1/hotel1/get-menu-items`,
      {
        credentials: "include", // ✅ send cookies automatically
      }
    )
      .then((response) => response.json())
      .then((data) => setMenuItems(data))
      .catch((error) => {
        console.error("Error fetching menu items:", error);
      });
  };
  useEffect(() => {
    fetchMenuItems();
  }, []);

  const categories = [
    "All",
    ...new Set(menuItems.map((item) => item.category)),
  ];

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const maxSize = 10 * 1024 * 1024; // 10MB in bytes
    if (file.size > maxSize) {
      alert("Image size should be less than 10MB");
      return;
    }

    setImageFile(file);
  };
  const uploadImageToCloudinary = async () => {
    if (imageFile) {
      const data = new FormData();
      data.append("file", imageFile);
      data.append("upload_preset", "restro-menu");
      try {
        setLoading(true);
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
      } finally{
        setLoading(false);
      }
    }
  };

  const updateItem = async (item) => {
    const { _id, createdAt, updatedAt, __v, ...itemData } = item;
    
    const uploadedUrl = await uploadImageToCloudinary();
    if(uploadedUrl){
      itemData.imageUrl = uploadedUrl;
    }

    try {
      setLoading(true);
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_API_URL}/api/v1/hotel1/update-menu-item/${_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // ✅ cookie-based auth
          body: JSON.stringify(itemData),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setMenuItems((prev) =>
          prev.map((itm) => (itm._id === _id ? { ...itm, ...itemData } : itm))
        );
        setIsEditModalOpen(false);
        setCurrentItem(null);
      } else {
        console.error("Update failed:", data?.message || "Unknown error");
      }
    } catch (err) {
      console.error("Update failed:", err);
    } finally {
      setLoading(false);
      fetchMenuItems();
    }
  };

  const handleDelete = async (itemId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );

    if (confirmed) {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_API_URL}/api/v1/hotel1/delete-menu-item/${itemId}`,
          {
            method: "DELETE",
            credentials: "include",
          }
        );

        if (response.ok) {
          alert("Item deleted successfully.");
          // Optionally, refresh list or update state here
          fetchMenuItems();
        } else {
          alert("Failed to delete item.");
        }
      } catch (error) {
        console.error("Error deleting item:", error);
        alert("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="relative z-0 min-h-screen bg-gray-50">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 opacity-20 -z-10 animate-pulse"></div>

      <nav className="p-4 flex justify-between items-center">
        <PlusIcon
          onClick={() => navigate("/post")}
          className="w-8 h-8 bg-gray-500/75 text-center text-5xl text-white shadow-lg rounded-full cursor-pointer z-20"
        />
        <h2 className="text-2xl font-extrabold text-center tracking-wide text-yellow-600 z-20">
          Your Menu
        </h2>

        <LogoutIcon className="w-8 h-8" />
      </nav>

      {/* Category Filter */}
      <div className="sticky top-0 bg-white shadow-md py-3 px-4 flex gap-3 overflow-x-auto whitespace-nowrap z-20">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 text-sm font-semibold rounded-full capitalize transition-all duration-200 border ${
              activeCategory === category
                ? "bg-yellow-400 text-white border-yellow-500 shadow-md"
                : "bg-white text-gray-800 border-gray-300 hover:bg-yellow-300 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="p-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <div
            key={item._id}
            className="relative cursor-pointer rounded-xl overflow-hidden shadow-md bg-white text-gray-800 flex items-center transform hover:scale-105 transition-transform duration-300 border border-gray-200"
          >
            <div className="space-x-1 absolute top-1 right-1">
              <button
                onClick={() => {
                  setCurrentItem(item);
                  setIsEditModalOpen(true);
                }}
                className="p-2 bg-gray-500 hover:bg-gray-600 text-white shadow-lg rounded-full"
              >
                <PencilSquareIcon className="h-5 w-5" />
              </button>
              <button
                onClick={() => {
                  handleDelete(item._id);
                }}
                className="p-2 bg-red-500 hover:bg-red-600 text-white shadow-lg rounded-full"
              >
                <TrashIcon className="h-5 w-5" />
              </button>
            </div>

            <img
              src={item.imageUrl || fallbackImage}
              alt={item.name}
              onError={(e) => {
                if (e.target.src !== fallbackImage)
                  e.target.src = fallbackImage;
              }}
              className="w-28 h-28 object-cover m-3 rounded-lg border border-gray-200"
            />

            <div className="p-3 flex-1">
              <h3 className="text-lg font-semibold text-yellow-600">
                {item.name}
              </h3>
              {item.description && (
                <p className="text-sm text-gray-600 mt-1">
                  {item.description.length > 45
                    ? item.description.slice(0, 47) + "..."
                    : item.description}
                </p>
              )}
              <div className="flex justify-between items-center mt-2">
                <span className="text-green-600 font-bold">₹{item.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {isEditModalOpen && currentItem && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsEditModalOpen(false);
              setCurrentItem(null);
            }
          }}
          className="fixed inset-0 bg-black bg-opacity-40 z-30 flex items-center justify-center"
        >
          <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
            <h2 className="text-xl font-bold mb-4">Edit Item</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                updateItem(currentItem);
              }}
              className="space-y-4"
            >
              <input
                required
                type="text"
                value={currentItem.name}
                onChange={(e) =>
                  setCurrentItem({ ...currentItem, name: e.target.value })
                }
                className="w-full mb-4 p-3 border border-orange-400 rounded-lg focus:ring-2 focus:ring-orange-500 bg-orange-50 text-orange-900"
                placeholder="Name"
              />
              <input
                required
                type="number"
                value={currentItem.price}
                onChange={(e) =>
                  setCurrentItem({
                    ...currentItem,
                    price: e.target.value,
                  })
                }
                className="w-full mb-4 p-3 border border-orange-400 rounded-lg focus:ring-2 focus:ring-orange-500 bg-orange-50 text-orange-900"
                placeholder="Price"
              />

              <select
                name="category"
                value={currentItem.category}
                onChange={(e) =>
                  setCurrentItem({ ...currentItem, category: e.target.value })
                }
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
              <textarea
                value={currentItem.description}
                onChange={(e) =>
                  setCurrentItem({
                    ...currentItem,
                    description: e.target.value,
                  })
                }
                className="w-full mb-4 p-3 border border-orange-400 rounded-lg focus:ring-2 focus:ring-orange-500 bg-orange-50 text-orange-900"
                placeholder="Description"
              ></textarea>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full mb-4 p-3 border border-orange-400 rounded-lg focus:ring-2 focus:ring-orange-500 bg-orange-50 text-orange-900"
                placeholder="Image URL"
              />

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsEditModalOpen(false);
                    setCurrentItem(null);
                  }}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  {loading? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
