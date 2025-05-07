import React, { useEffect, useState } from "react";
import {
  getAllAuthors,
  createAuthor,
  updateAuthor,
  deleteAuthor,
} from "../services/authorService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Authors.css";

const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const [form, setForm] = useState({
    name: "",
    birthDate: "",
    country: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const fetchAuthors = async () => {
    try {
      const res = await getAllAuthors();
      setAuthors(res.data);
    } catch (err) {
      console.error(err);
      toast.error("The authors could not be retrieved.");
    }
  };

  useEffect(() => {
    fetchAuthors();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.birthDate || !form.country) {
      toast.warning("Please fill in all fields.");
      return;
    }

    try {
      if (isEditing) {
        await updateAuthor(selectedId, form);
        toast.success("Author updated.");
      } else {
        await createAuthor(form);
        toast.success("Author added.");
      }
      setForm({ name: "", birthDate: "", country: "" });
      setIsEditing(false);
      fetchAuthors();
    } catch {
      toast.error("An error has occurred.");
    }
  };

  const handleEdit = (author) => {
    setForm({
      name: author.name || "",
      birthDate: author.birthDate || "",
      country: author.country || "",
    });
    setSelectedId(author.id);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteAuthor(id);
      toast.success("The author has been deleted.");
      fetchAuthors();
    } catch {
      toast.error("Deletion failed.");
    }
  };

  return (
    <div className="page-container">
      <div className="author-container">
        <h2 className="playfair-display-1">Authors</h2>

        <form className="a-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="a-input"
            placeholder="Author Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="date"
            className="a-input"
            placeholder="Birth Date"
            value={form.birthDate}
            onChange={(e) => setForm({ ...form, birthDate: e.target.value })}
          />
          <input
            type="text"
            className="a-input"
            placeholder="Country"
            value={form.country}
            onChange={(e) => setForm({ ...form, country: e.target.value })}
          />
          <button className="form-btn" type="submit">
            {isEditing ? "Update" : "Add"}
          </button>
        </form>

        <ul className="ul-2">
          {authors.map((a) => (
            <li key={a.id}>
              <strong>{a.name}</strong> — {a.birthDate}, {a.country}
              <button className="edit-btn" onClick={() => handleEdit(a)}>
                Edit
              </button>
              <button className="edit-btn" onClick={() => handleDelete(a.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>

        <ToastContainer position="bottom-right" />
      </div>
    </div>
  );
};

export default Authors;
