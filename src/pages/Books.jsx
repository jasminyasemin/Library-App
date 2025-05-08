import React, { useEffect, useState } from "react";
// Service imports for CRUD operations
import {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
} from "../services/bookService";
import { getAllAuthors } from "../services/authorService";
import { getAllPublishers } from "../services/publisherService";
import { getAllCategories } from "../services/categoryService";

// Toast for notifications
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Books.css";

const Books = () => {
  // State variables
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [publishers, setPublishers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({
    name: "",
    publicationYear: "",
    stock: "",
    authorId: "",
    publisherId: "",
    categoryIds: [],
  });
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  // Fetch all data when component mounts
  useEffect(() => {
    fetchBooks();
    fetchAuthors();
    fetchPublishers();
    fetchCategories();
  }, []);

  // Fetch list of books
  const fetchBooks = async () => {
    try {
      const res = await getAllBooks();
      setBooks(res.data);
    } catch {
      toast.error("The books could not be taken.");
    }
  };

  // Fetch authors
  const fetchAuthors = async () => {
    const res = await getAllAuthors();
    setAuthors(res.data);
  };

  // Fetch publishers
  const fetchPublishers = async () => {
    const res = await getAllPublishers();
    setPublishers(res.data);
  };

  // Fetch categories
  const fetchCategories = async () => {
    const res = await getAllCategories();
    setCategories(res.data);
  };

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, publicationYear, stock, authorId, publisherId, categoryIds } = form;

    // Validate required fields
    if (!name || !publicationYear || !stock || !authorId || !publisherId || categoryIds.length === 0) {
      toast.warning("Please fill in all fields.");
      return;
    }

    // Build request payload
    const dataToSend = {
      name: name.trim(),
      publicationYear: parseInt(publicationYear),
      stock: parseInt(stock),
      author: { id: parseInt(authorId) },
      publisher: { id: parseInt(publisherId) },
      categories: categoryIds.map((id) => ({ id: parseInt(id) })),
    };

    try {
      if (isEditing) {
        await updateBook(selectedId, dataToSend);
        toast.success("The book has been updated.");
      } else {
        await createBook(dataToSend);
        toast.success("Book added.");
      }

      // Reset form and refresh book list
      setForm({ name: "", publicationYear: "", stock: "", authorId: "", publisherId: "", categoryIds: [] });
      setIsEditing(false);
      fetchBooks();
    } catch {
      toast.error("An error has occurred.");
    }
  };

  // Load selected book into form for editing
  const handleEdit = (book) => {
    setForm({
      name: book.name || "",
      publicationYear: book.publicationYear.toString(),
      stock: book.stock.toString(),
      authorId: book.author.id.toString(),
      publisherId: book.publisher.id.toString(),
      categoryIds: book.categories.map((cat) => cat.id.toString()),
    });
    setSelectedId(book.id);
    setIsEditing(true);
  };

  // Delete book by ID
  const handleDelete = async (id) => {
    try {
      await deleteBook(id);
      toast.success("The book has been deleted.");
      fetchBooks();
    } catch {
      toast.error("Deletion failed.");
    }
  };

  // Toggle checkbox selection for categories
  const handleCheckboxChange = (id) => {
    setForm((prevForm) => {
      const updated = prevForm.categoryIds.includes(id)
        ? prevForm.categoryIds.filter((cid) => cid !== id)
        : [...prevForm.categoryIds, id];
      return { ...prevForm, categoryIds: updated };
    });
  };

  return (
    <div className="page-container">
      <div className="book-container">
        <h2 className="playfair-display-1">Books</h2>

        {/* Form for creating or updating a book */}
        <form className="b-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Book Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input type="number" placeholder="Publication Year" value={form.publicationYear} onChange={(e) => setForm({ ...form, publicationYear: e.target.value })} />
          <input type="number" placeholder="Stock" value={form.stock} onChange={(e) => setForm({ ...form, stock: e.target.value })} />

          {/* Author dropdown */}
          <select value={form.authorId} onChange={(e) => setForm({ ...form, authorId: e.target.value })}>
            <option value="">Yazar Seçin</option>
            {authors.map((a) => <option key={a.id} value={a.id}>{a.name}</option>)}
          </select>

          {/* Publisher dropdown */}
          <select value={form.publisherId} onChange={(e) => setForm({ ...form, publisherId: e.target.value })}>
            <option value="">Yayımcı Seçin</option>
            {publishers.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
          </select>

          {/* Category checkboxes */}
          <div className="checkbox-group">
            {categories.map((cat) => (
              <label key={cat.id}>
                <input
                  type="checkbox"
                  value={cat.id}
                  checked={form.categoryIds.includes(cat.id.toString())}
                  onChange={() => handleCheckboxChange(cat.id.toString())}
                />
                {cat.name}
              </label>
            ))}
          </div>

          <button className="book-btn1" type="submit">{isEditing ? "Update" : "Add"}</button>
        </form>

        {/* List of books with edit/delete options */}
        <ul className="ul-3">
          {books.map((b) => (
            <li key={b.id}>
              <strong>{b.name}</strong> - {b.publicationYear} ({b.stock}) - {b.author.name}, {b.publisher.name}
              <br />Kategoriler: {b.categories.map((c) => c.name).join(", ")}
              <button className="book-btn" onClick={() => handleEdit(b)}>Edit</button>
              <button className="book-btn" onClick={() => handleDelete(b.id)}>Delete</button>
            </li>
          ))}
        </ul>

        <ToastContainer position="bottom-right" />
      </div>
    </div>
  );
};

export default Books;