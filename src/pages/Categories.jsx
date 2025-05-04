import React, { useEffect, useState } from "react";
import {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../services/categoryService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({ name: "" });
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
    if (!form.name) return;

    try {
      if (isEditing) {
        await updateCategory(selectedId, form);
        toast.success("Kategori güncellendi.");
      } else {
        await createCategory(form);
        toast.success("Kategori eklendi.");
      }
      setForm({ name: "" });
      setIsEditing(false);
      fetchCategories();
    } catch {
      toast.error("Bir hata oluştu.");
    }
  };

  const handleEdit = (cat) => {
    setForm({ name: cat.name });
    setSelectedId(cat.id);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteCategory(id);
      toast.success("Kategori silindi.");
      fetchCategories();
    } catch {
      toast.error("Silme işlemi başarısız.");
    }
  };

  return (
    <div className="page-container">
      <h2>Kategoriler</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Kategori adı"
          value={form.name}
          onChange={(e) => setForm({ name: e.target.value })}
        />
        <button type="submit">{isEditing ? "Güncelle" : "Ekle"}</button>
      </form>

      <ul>
        {categories.map((cat) => (
          <li key={cat.id}>
            {cat.name}
            <button onClick={() => handleEdit(cat)}>Düzenle</button>
            <button onClick={() => handleDelete(cat.id)}>Sil</button>
          </li>
        ))}
      </ul>

      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Categories;