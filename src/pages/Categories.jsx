import React, { useEffect, useState } from "react";
// Import service functions for API operations
import {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../services/categoryService";
// Reusable form component
import Form from "../components/Form";
// Toastify library for user-friendly notifications
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Categories.css";

const Categories = () => {
  // Local state to store categories list
  const [categories, setCategories] = useState([]);
  // State for form inputs (name & description)
  const [form, setForm] = useState({ name: "", description: "" });
  // Boolean to check if editing mode is active
  const [isEditing, setIsEditing] = useState(false);
  // Stores the id of the category being edited
  const [selectedId, setSelectedId] = useState(null);

  // Fetches all categories from the API
  const fetchCategories = async () => {
    try {
      const res = await getAllCategories();
      setCategories(res.data);
    } catch (err) {
      console.error(err);
      toast.error("Categories could not be retrieved.");
    }
  };

  // Fetch categories on component mount
  useEffect(() => {
    fetchCategories();
  }, []);

  // Handles form submission for both create and update
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.description) {
      toast.warning("Please fill in all fields.");
      return;
    }

    try {
      if (isEditing) {
        await updateCategory(selectedId, form);
        toast.success("Category updated.");
      } else {
        await createCategory(form);
        toast.success("Category added.");
      }
      // Reset form state after submission
      setForm({ name: "", description: "" });
      setIsEditing(false);
      fetchCategories(); // Refresh the list
    } catch (err) {
      const errorMessage = err.response?.data?.message || "An error has occurred.";
      toast.error(errorMessage);
    }
  };

  // Populates the form with selected category data for editing
  const handleEdit = (cat) => {
    setForm({ name: cat.name, description: cat.description });
    setSelectedId(cat.id);
    setIsEditing(true);
  };

  // Deletes a category by its id
  const handleDelete = async (id) => {
    try {
      await deleteCategory(id);
      toast.success("The category has been deleted.");
      fetchCategories(); // Refresh the list after deletion
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Deletion failed.";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="page-container">
      <div className="category-container">
        <h2 className="playfair-display-1">Categories</h2>

        {/* Reusable Form component */}
        <Form
          form={form}
          setForm={setForm}
          handleSubmit={handleSubmit}
          isEditing={isEditing}
        />

        {/* List of categories with edit & delete options */}
        <ul className="ul-1">
          {categories.map((cat) => (
            <li key={cat.id}>
              <strong>{cat.name}</strong> — {cat.description}
              <button className="edit-btn" onClick={() => handleEdit(cat)}>
                Edit
              </button>
              <button className="edit-btn" onClick={() => handleDelete(cat.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>

        {/* Notification container for Toastify */}
        <ToastContainer position="bottom-right" />
      </div>
    </div>
  );
};

export default Categories;