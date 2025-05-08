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
  // State for the list of authors
  const [authors, setAuthors] = useState([]);

  // State for the form inputs
  const [form, setForm] = useState({
    name: "",
    birthDate: "",
    country: "",
  });

  // State to track editing mode
  const [isEditing, setIsEditing] = useState(false);

  // State to store the ID of the author being edited
  const [selectedId, setSelectedId] = useState(null);

  // Fetches all authors from the backend
  const fetchAuthors = async () => {
    try {
      const res = await getAllAuthors();
      setAuthors(res.data);
    } catch (err) {
      console.error(err);
      toast.error("The authors could not be retrieved.");
    }
  };

  // Calls fetchAuthors only once when the component mounts
  useEffect(() => {
    fetchAuthors();
  }, []);

  // Handles form submission for both add and update actions
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: All fields must be filled
    if (!form.name || !form.birthDate || !form.country) {
      toast.warning("Please fill in all fields.");
      return;
    }

    try {
      if (isEditing) {
        // Update existing author
        await updateAuthor(selectedId, form);
        toast.success("Author updated.");
      } else {
        // Create new author
        await createAuthor(form);
        toast.success("Author added.");
      }

      // Reset form after submission
      setForm({ name: "", birthDate: "", country: "" });
      setIsEditing(false);
      fetchAuthors();
    } catch {
      toast.error("An error has occurred.");
    }
  };

  // Populates the form with selected author's data for editing
  const handleEdit = (author) => {
    setForm({
      name: author.name || "",
      birthDate: author.birthDate || "",
      country: author.country || "",
    });
    setSelectedId(author.id);
    setIsEditing(true);
  };

  // Deletes the selected author
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

        {/* Form to add or edit authors */}
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

        {/* Display list of authors with edit/delete buttons */}
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

        {/* Toast notification container */}
        <ToastContainer position="bottom-right" />
      </div>
    </div>
  );
};

export default Authors;
