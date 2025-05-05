import React, { useEffect, useState } from "react";
import {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
} from "../services/bookService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Books.css";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({
    title: "",
    isbn: "",
    publicationYear: "",
    pageCount: ""
  });
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const fetchBooks = async () => {
    try {
      const res = await getAllBooks();
      setBooks(res.data);
    } catch (err) {
      console.error(err);
      toast.error("Kitaplar alınamadı.");
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, isbn, publicationYear, pageCount } = form;

    if (!title || !isbn || !publicationYear || !pageCount) {
      toast.warning("Lütfen tüm alanları doldurun.");
      return;
    }

    const dataToSend = {
      title: title.trim(),
      isbn: isbn.trim(),
      publicationYear: parseInt(publicationYear),
      pageCount: parseInt(pageCount)
    };

    try {
      if (isEditing) {
        await updateBook(selectedId, dataToSend);
        toast.success("Kitap güncellendi.");
      } else {
        await createBook(dataToSend);
        toast.success("Kitap eklendi.");
      }

      setForm({ title: "", isbn: "", publicationYear: "", pageCount: "" });
      setIsEditing(false);
      fetchBooks();
    } catch {
      toast.error("Bir hata oluştu.");
    }
  };

  const handleEdit = (book) => {
    setForm({
      title: book.title || "",
      isbn: book.isbn || "",
      publicationYear: book.publicationYear?.toString() || "",
      pageCount: book.pageCount?.toString() || ""
    });
    setSelectedId(book.id);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteBook(id);
      toast.success("Kitap silindi.");
      fetchBooks();
    } catch {
      toast.error("Silme işlemi başarısız.");
    }
  };

  return (
    <div className="page-container">
      <div className="book-container">
        <h2 className="playfair-display-1">Books</h2>

        <form className="b-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="b-input"
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <input
            type="text"
            className="b-input"
            placeholder="ISBN"
            value={form.isbn}
            onChange={(e) => setForm({ ...form, isbn: e.target.value })}
          />
          <input
            type="number"
            className="b-input"
            placeholder="Publication Year"
            value={form.publicationYear}
            onChange={(e) =>
              setForm({ ...form, publicationYear: e.target.value })
            }
          />
          <input
            type="number"
            className="b-input"
            placeholder="Page Count"
            value={form.pageCount}
            onChange={(e) =>
              setForm({ ...form, pageCount: e.target.value })
            }
          />
          <button className="form-btn" type="submit">
            {isEditing ? "Güncelle" : "Ekle"}
          </button>
        </form>

        <ul className="ul-2">
          {books.map((b) => (
            <li key={b.id}>
              <strong>{b.title}</strong> — ISBN: {b.isbn}, Year: {b.publicationYear}, Pages: {b.pageCount}
              <button className="edit-btn" onClick={() => handleEdit(b)}>Düzenle</button>
              <button className="edit-btn" onClick={() => handleDelete(b.id)}>Sil</button>
            </li>
          ))}
        </ul>

        <ToastContainer position="bottom-right" />
      </div>
    </div>
  );
};

export default Books;