import React, { useEffect, useState } from "react";
import {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
} from "../services/bookService";
import { getAllAuthors } from "../services/authorService";
import { getAllPublishers } from "../services/publisherService";
import { getAllCategories } from "../services/categoryService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Books.css";

const Books = () => {
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

  useEffect(() => {
    fetchBooks();
    fetchAuthors();
    fetchPublishers();
    fetchCategories();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await getAllBooks();
      setBooks(res.data);
    } catch {
      toast.error("The books could not be taken.");
    }
  };

  const fetchAuthors = async () => {
    const res = await getAllAuthors();
    setAuthors(res.data);
  };

  const fetchPublishers = async () => {
    const res = await getAllPublishers();
    setPublishers(res.data);
  };

  const fetchCategories = async () => {
    const res = await getAllCategories();
    setCategories(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, publicationYear, stock, authorId, publisherId, categoryIds } = form;

    if (!name || !publicationYear || !stock || !authorId || !publisherId || categoryIds.length === 0) {
      toast.warning("Please fill in all fields.");
      return;
    }

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
      setForm({ name: "", publicationYear: "", stock: "", authorId: "", publisherId: "", categoryIds: [] });
      setIsEditing(false);
      fetchBooks();
    } catch {
      toast.error("An error has occurred.");
    }
  };

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

  const handleDelete = async (id) => {
    try {
      await deleteBook(id);
      toast.success("The book has been deleted.");
      fetchBooks();
    } catch {
      toast.error("Deletion failed.");
    }
  };

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

        <form className="b-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Book Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input type="number" placeholder="Publication Year" value={form.publicationYear} onChange={(e) => setForm({ ...form, publicationYear: e.target.value })} />
          <input type="number" placeholder="Stock" value={form.stock} onChange={(e) => setForm({ ...form, stock: e.target.value })} />

          <select value={form.authorId} onChange={(e) => setForm({ ...form, authorId: e.target.value })}>
            <option value="">Yazar Seçin</option>
            {authors.map((a) => <option key={a.id} value={a.id}>{a.name}</option>)}
          </select>

          <select value={form.publisherId} onChange={(e) => setForm({ ...form, publisherId: e.target.value })}>
            <option value="">Yayımcı Seçin</option>
            {publishers.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
          </select>

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