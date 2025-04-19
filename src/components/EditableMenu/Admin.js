import React, { useEffect, useState } from "react";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import fallbackImage from "../../assets/food-fallback.png";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("starter");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const navigate = useNavigate();

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

  const updateItem = async (item) => {
    const { _id, createdAt, updatedAt, __v, ...itemData } = item;

    try {
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
    }
  };

  const handleDelete = async (itemId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );

    if (confirmed) {
      try {
        const response = await fetch(
          `https://hotel-menu-backend.vercel.app/api/v1/hotel1/delete-menu-item/${itemId}`,
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

      <h1 className="text-4xl font-extrabold text-center py-8 tracking-wide text-yellow-600">
        Your Menu
      </h1>
      <div
         onClick={() => navigate("/post")}
        className="mx-auto pb-2 w-full max-w-24 bg-gray-500/75 text-center text-5xl text-white shadow-lg rounded-full bottom-1 right-5 cursor-pointer z-20"
      >
        +
      </div>

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
            <button
              onClick={() => {
                setCurrentItem(item);
                setIsEditModalOpen(true);
              }}
              className="p-2 bg-gray-500 text-white shadow-lg rounded-full absolute top-1 right-1"
            >
              <PencilSquareIcon className="h-5 w-5" />
            </button>
            <button
              onClick={() => {
                handleDelete(item._id);
              }}
              className="p-2 bg-red-500 text-white shadow-lg rounded-full absolute bottom-1 right-1"
            >
              <TrashIcon className="h-5 w-5" />
            </button>

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
        <div className="fixed inset-0 bg-black bg-opacity-40 z-30 flex items-center justify-center">
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
                type="text"
                value={currentItem.name}
                onChange={(e) =>
                  setCurrentItem({ ...currentItem, name: e.target.value })
                }
                className="w-full border px-3 py-2 rounded"
                placeholder="Name"
              />
              <input
                type="number"
                value={currentItem.price}
                onChange={(e) =>
                  setCurrentItem({
                    ...currentItem,
                    price: e.target.value,
                  })
                }
                className="w-full border px-3 py-2 rounded"
                placeholder="Price"
              />
              <input
                type="text"
                value={currentItem.category}
                onChange={(e) =>
                  setCurrentItem({ ...currentItem, category: e.target.value })
                }
                className="w-full border px-3 py-2 rounded"
                placeholder="Category"
              />
              <textarea
                value={currentItem.description}
                onChange={(e) =>
                  setCurrentItem({
                    ...currentItem,
                    description: e.target.value,
                  })
                }
                className="w-full border px-3 py-2 rounded"
                placeholder="Description"
              ></textarea>
              <input
                type="text"
                value={currentItem.imageUrl}
                onChange={(e) =>
                  setCurrentItem({ ...currentItem, imageUrl: e.target.value })
                }
                className="w-full border px-3 py-2 rounded"
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
                  Save
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
