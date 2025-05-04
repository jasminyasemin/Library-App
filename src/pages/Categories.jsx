import React, { useEffect, useState } from "react";
import {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../services/categoryService";
import Form from "../components/Form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../styles/Categories.css';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({ name: "", description: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const fetchCategories = async () => {
    try {
      const res = await getAllCategories();
      setCategories(res.data);
    } catch (err) {
      console.error(err);
      toast.error("Kategoriler alınamadı.");
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

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
      setForm({ name: "", description: "" });
      setIsEditing(false);
      fetchCategories();
    } catch {
      toast.error("An error has occurred.");
    }
  };

  const handleEdit = (cat) => {
    setForm({ name: cat.name, description: cat.description });
    setSelectedId(cat.id);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteCategory(id);
      toast.success("Category deleted.");
      fetchCategories();
    } catch {
      toast.error("Deletion failed.");
    }
  };

  return (
    <div className="page-container">
      <div className="category-container">
      <h2 className="playfair-display-1">Categories</h2>

      <Form
        form={form}
        setForm={setForm}
        handleSubmit={handleSubmit}
        isEditing={isEditing}
      />

      <ul>
        {categories.map((cat) => (
          <li key={cat.id}>
            <strong>{cat.name}</strong> — {cat.description}
            <button className="edit-btn" onClick={() => handleEdit(cat)}>Edit</button>
            <button className="edit-btn" onClick={() => handleDelete(cat.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <ToastContainer position="bottom-right" />
      </div>
    </div>
  );
};

export default Categories;