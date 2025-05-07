import React, { useEffect, useState } from "react";
import {
  getAllRentals,
  createRental,
  updateRental,
  deleteRental,
} from "../services/rentalService";
import { getAllBooks } from "../services/bookService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/BookRentals.css";

const BookRental = () => {
  const [rentals, setRentals] = useState([]);
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({
    borrowerName: "",
    borrowerMail: "",
    borrowingDate: "",
    returnDate: "",
    bookId: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const fetchRentals = async () => {
    try {
      const res = await getAllRentals();
      setRentals(res.data);
    } catch (err) {
      toast.error("Data of the loaned books could not be retrieved.");
    }
  };

  const fetchBooks = async () => {
    try {
      const res = await getAllBooks();
      setBooks(res.data);
    } catch (err) {
      toast.error("Books could not be loaded.");
    }
  };

  useEffect(() => {
    fetchRentals();
    fetchBooks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      borrowerName,
      borrowerMail,
      borrowingDate,
      returnDate,
      bookId,
    } = form;

    if (!borrowerName || !borrowerMail || !borrowingDate || !bookId) {
      toast.warning("Please fill in all fields.");
      return;
    }

    try {
      if (isEditing) {
        await updateRental(selectedId, {
          borrowerName,
          borrowingDate,
          returnDate: returnDate || null,
        });
        toast.success("The record has been updated.");
      } else {
        await createRental({
          borrowerName,
          borrowerMail,
          borrowingDate,
          bookForBorrowingRequest: {
            id: bookId,
          },
        });
        toast.success("New record added.");
      }

      setForm({
        borrowerName: "",
        borrowerMail: "",
        borrowingDate: "",
        returnDate: "",
        bookId: "",
      });
      setIsEditing(false);
      setSelectedId(null);
      fetchRentals();
    } catch {
      toast.error("An error has occurred.");
    }
  };

  const handleEdit = (r) => {
    setForm({
      borrowerName: r.borrowerName,
      borrowingDate: r.borrowingDate,
      returnDate: r.returnDate || "",
      borrowerMail: r.borrowerMail || "", // sadece görsel için
      bookId: r.book?.id || "",
    });
    setSelectedId(r.id);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteRental(id);
      toast.success("The record has been deleted.");
      fetchRentals();
    } catch {
      toast.error("Deletion failed.");
    }
  };

  return (
    <div className="page-container">
      <div className="rental-container">
        <h2 className="playfair-display-1">Book Rentals</h2>

        <form className="rental-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Borrower Name"
            value={form.borrowerName}
            onChange={(e) => setForm({ ...form, borrowerName: e.target.value })}
          />
          <input
            type="email"
            placeholder="Borrower Email"
            value={form.borrowerMail}
            onChange={(e) => setForm({ ...form, borrowerMail: e.target.value })}
            disabled={isEditing} // update'te email değişmez
          />
          <input
            type="date"
            value={form.borrowingDate}
            onChange={(e) => setForm({ ...form, borrowingDate: e.target.value })}
          />
          {isEditing && (
            <input
              type="date"
              value={form.returnDate}
              onChange={(e) => setForm({ ...form, returnDate: e.target.value })}
              placeholder="Return Date"
            />
          )}
          <select
            value={form.bookId}
            onChange={(e) => setForm({ ...form, bookId: e.target.value })}
            disabled={isEditing}
          >
            <option value="">Select a Book</option>
            {books.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            ))}
          </select>
          <button className="r-btn" type="submit">{isEditing ? "Update" : "Add"}</button>
        </form>

        <ul className="ul-4">
          {Array.isArray(rentals) &&
            rentals.map((r) => (
              <li key={r.id}>
                <strong>{r.borrowerName}</strong> — {r.borrowingDate} →{" "}
                {r.returnDate || "not returned"} ({r.book?.name})
                <button className="r-btn1" onClick={() => handleEdit(r)}>
                  Edit
                </button>
                <button className="r-btn1" onClick={() => handleDelete(r.id)}>
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

export default BookRental;

                         